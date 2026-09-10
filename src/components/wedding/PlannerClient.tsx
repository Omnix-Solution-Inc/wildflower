'use client'

import { useState, useEffect, useCallback, type ReactNode } from 'react'
import {
  type PlannerState, type Lang, makeDefaultState, t,
  BUDGET_CATEGORIES, HIDDEN_COSTS, HORA_LOCA_PROPS, CHECKLIST_ITEMS,
  PHOTO_SHOTS, EMERGENCY_KIT, NAME_CHANGE,
  SETTING_OPTIONS, LEGAL_OPTIONS, DIETARY_OPTIONS, ROOM_OPTIONS, SHUTTLE_OPTIONS,
} from './planner-data'
import { generatePlannerPdf } from './planner-pdf'

const API = 'https://witmakers-1a5946c3.base44.app/functions'

const PINK = {
  bg: '#FDF6F8', soft: '#F9E4EC', mid: '#E8A5B8', deep: '#C9899E',
  gold: '#C9A227', ink: '#4A3B40', line: '#EFD3DE', white: '#FFFDFE',
}

function money(n: number): string {
  return '$' + (Number.isFinite(n) ? n : 0).toLocaleString('en-US', { maximumFractionDigits: 0 })
}

/* ────────────────────────── small UI atoms ────────────────────────── */

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[12px] font-semibold tracking-[0.12em] uppercase mb-2" style={{ color: PINK.deep }}>{label}</span>
      {children}
    </label>
  )
}

const inputCls = 'w-full rounded-xl border px-4 py-3 text-[15px] outline-none transition focus:border-[#C9899E] focus:ring-2 focus:ring-[#E8A5B8]/40'
const inputStyle = { borderColor: PINK.line, background: PINK.white, color: PINK.ink }

function PrimaryBtn({ children, onClick, disabled, style }: { children: ReactNode; onClick?: () => void; disabled?: boolean; style?: React.CSSProperties }) {
  return (
    <button onClick={onClick} disabled={disabled}
      className="rounded-full px-8 py-3.5 font-semibold tracking-wide text-white transition hover:brightness-105 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
      style={{ background: `linear-gradient(135deg, ${PINK.mid}, ${PINK.deep})`, ...style }}>
      {children}
    </button>
  )
}

function Card({ title, desc, children }: { title: string; desc?: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl p-6 md:p-8 mb-6 shadow-[0_8px_30px_rgba(201,137,158,0.12)]"
      style={{ background: PINK.white, border: `1px solid ${PINK.line}` }}>
      {title && <h3 className="text-[22px] mb-1" style={{ fontFamily: 'Cinzel, serif', color: PINK.ink }}>{title}</h3>}
      {desc && <p className="text-[13px] mb-5" style={{ color: PINK.deep }}>{desc}</p>}
      {children}
    </section>
  )
}

function Toggle({ on, label, onChange }: { on: boolean; label: string; onChange: () => void }) {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none py-1.5"
      style={{ color: on ? PINK.ink : '#8A7B81' }}>
      <input type="checkbox" checked={on} onChange={onChange} className="accent-[#C9899E] w-4 h-4" />
      <span className="text-[14px]">{label}</span>
    </label>
  )
}

/* ────────────────────────── main component ────────────────────────── */

export default function PlannerClient({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [s, setS] = useState<PlannerState>(makeDefaultState)
  const [step, setStep] = useState(0)
  const [code, setCode] = useState('')
  const [codeInput, setCodeInput] = useState('')
  const [codeSent, setCodeSent] = useState(false)
  const [codeDemo, setCodeDemo] = useState('')
  const [codeWrong, setCodeWrong] = useState(false)
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')
  const [generating, setGenerating] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('bw_wedding_planner')
      if (raw) setS({ ...makeDefaultState(), ...JSON.parse(raw) })
    } catch {}
  }, [])

  useEffect(() => {
    try { localStorage.setItem('bw_wedding_planner', JSON.stringify(s)) } catch {}
  }, [s])

  const set = <K extends keyof PlannerState>(k: K, v: PlannerState[K]) =>
    setS((prev) => ({ ...prev, [k]: v }))

  const tr = (k: string) => t(k, lang)


  /* ── phone verification ── */
  const sendCode = async () => {
    if (!s.name.trim() || !s.phone.trim() || !s.email.includes('@')) { setMsg(tr('completeAll')); return }
    setMsg(''); setBusy(true)
    try {
      const res = await fetch(`${API}/sendWeddingSms`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'sendCode', phone: s.phone, email: s.email, name: s.name, lang }),
      })
      const data = await res.json()
      if (data.ok) {
        setCodeSent(true); setCodeWrong(false); setCodeInput(''); setCodeDemo(data.demoCode || '')
        if (data.recordId) void fetch(`${API}/saveWeddingPlanner`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'createLead', name: s.name, email: s.email, phone: s.phone, lang }),
        }).catch(() => {})
      } else setMsg(tr('smsServerFail'))
    } catch { setMsg(tr('smsServerFail')) }
    setBusy(false)
  }

  const confirmCode = async () => {
    setBusy(true)
    try {
      const res = await fetch(`${API}/sendWeddingSms`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'verifyCode', phone: s.phone, code: codeInput }),
      })
      const data = await res.json()
      if (data.ok) { set('phoneVerified', true); setCodeWrong(false) }
      else setCodeWrong(true)
    } catch { setCodeWrong(true) }
    setBusy(false)
  }

  const saveAll = useCallback(async () => {
    try {
      await fetch(`${API}/saveWeddingPlanner`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'saveData', phone: s.phone, email: s.email, name: s.name,
          transactionId: s.transactionId, phoneVerified: s.phoneVerified,
          lang, budgetJson: JSON.stringify({ targetBudget: s.targetBudget, emergencyBuffer: s.emergencyBuffer, budget: s.budget, hiddenCosts: s.hiddenCosts }),
          questionnaireJson: JSON.stringify(s.q),
        }),
      })
    } catch {}
  }, [s, lang])

  /* ── pdf ── */
  const makePdf = async () => {
    setGenerating(true)
    try { await generatePlannerPdf(s, lang) } catch (e) { console.error(e) }
    setGenerating(false)
    void saveAll()
  }

  /* ── budget math ── */
  const sum = (key: 'estimated' | 'actual' | 'paid') => s.budget.reduce((a, r) => a + (Number(r[key]) || 0), 0)
  const totalBalance = sum('actual') - sum('paid')
  const remaining = (Number(s.targetBudget) || 0) - sum('actual')
  const hiddenTotal = s.hiddenCosts.reduce((a, h) => a + ((h.done ? 1 : 0) * (Number(h.cost) || 0)), 0)
  const guestsTotal = ['guestsAdults', 'guestsTeens', 'guestsChildren', 'guestsBabies']
    .reduce((a, k) => a + (parseInt(s.q[k as keyof typeof s.q] as string, 10) || 0), 0)

  const setBudget = (i: number, key: 'estimated' | 'actual' | 'paid', v: string) =>
    setS((prev) => ({
      ...prev,
      budget: prev.budget.map((r, idx) => idx === i ? { ...r, [key]: parseFloat(v) || 0 } : r),
    }))

  const toggleIn = (k: 'horaLocaProps' | 'checklist' | 'photoShots' | 'emergencyKit' | 'nameChange', item: string) =>
    setS((prev) => {
      const arr = prev.q[k]
      return { ...prev, q: { ...prev.q, [k]: arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item] } }
    })

  const steps = [tr('stepInfo'), tr('stepBudget'), tr('stepQuestionnaire'), tr('stepPdf')]

  const canGo = (i: number) => {
    if (i <= 0) return true
    return s.phoneVerified
  }

  /* ══════════════════════════ render ══════════════════════════ */

  return (
    <div className="min-h-screen relative" style={{ background: PINK.bg, color: PINK.ink }}>
      {/* watermark */}
      <div aria-hidden className="pointer-events-none fixed inset-0 flex items-center justify-center overflow-hidden">
        <span className="whitespace-nowrap -rotate-[24deg] select-none"
          style={{ fontFamily: 'Pinyon Script, cursive', fontSize: 'clamp(80px, 14vw, 190px)', color: PINK.mid, opacity: 0.06 }}>
          The Bella Wild Flower
        </span>
      </div>

      {/* top bar */}
      <header className="relative z-10 px-5 md:px-10 pt-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-[26px] md:text-[32px] leading-tight" style={{ fontFamily: 'Cinzel, serif', color: PINK.ink }}>
              {tr('brand')}
            </h1>
            <p className="text-[12px] tracking-[0.22em] uppercase" style={{ color: PINK.deep }}>{tr('subtitle')}</p>
          </div>
          <div className="flex items-center gap-2 rounded-full p-1"
            style={{ background: PINK.soft, border: `1px solid ${PINK.line}` }}>
            {(['en', 'es'] as Lang[]).map((l) => (
              <button key={l} onClick={() => setLang(l)}
                className="rounded-full px-4 py-1.5 text-[13px] font-semibold transition"
                style={{ background: lang === l ? PINK.deep : 'transparent', color: lang === l ? '#fff' : PINK.deep }}>
                {l === 'en' ? 'EN' : 'ES'}
              </button>
            ))}
          </div>
        </div>

        {/* steps */}
        <nav className="max-w-5xl mx-auto mt-5 flex flex-wrap gap-2 md:gap-3">
          {steps.map((label, i) => {
            const ok = canGo(i)
            return (
              <button key={i} disabled={!ok} onClick={() => ok && setStep(i)}
                className="flex-1 min-w-[100px] rounded-xl px-3 py-2.5 text-left transition disabled:opacity-35"
                style={{
                  background: step === i ? PINK.deep : PINK.white,
                  border: `1px solid ${step === i ? PINK.deep : PINK.line}`,
                }}>
                <div className="text-[10px] font-bold tracking-[0.15em] uppercase"
                  style={{ color: step === i ? '#fff' : PINK.deep }}>{tr('step')} {i + 1}</div>
                <div className="text-[12.5px] font-medium truncate"
                  style={{ color: step === i ? '#fff' : PINK.ink }}>{label}</div>
              </button>
            )
          })}
        </nav>
      </header>

      {/* content */}
      <main className="relative z-10 max-w-5xl mx-auto px-5 md:px-10 py-8 pb-24">
        {msg && (
          <p className="mb-4 rounded-xl px-4 py-3 text-[14px]"
            style={{ background: '#FBE3E3', color: '#8C3B3B', border: '1px solid #EFC5C5' }}>{msg}</p>
        )}

        {/* ════ STEP 1 — user info ════ */}
        {step === 0 && (
          <>
            <Card title={tr('stepInfo')} desc={tr('savedLocal')}>
              <div className="grid md:grid-cols-2 gap-5">
                <Field label={tr('fullName')}>
                  <input className={inputCls} style={inputStyle} value={s.name}
                    placeholder={tr('fullNamePh')} onChange={(e) => set('name', e.target.value)} />
                </Field>
                <Field label={tr('email')}>
                  <input className={inputCls} style={inputStyle} type="email" value={s.email}
                    placeholder={tr('emailPh')} onChange={(e) => set('email', e.target.value)} />
                </Field>
                <Field label={tr('phoneLabel')}>
                  <input className={inputCls} style={inputStyle} value={s.phone}
                    placeholder={tr('phonePh')} onChange={(e) => set('phone', e.target.value)} />
                </Field>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                {!s.phoneVerified ? (
                  <>
                    <PrimaryBtn onClick={sendCode} disabled={busy}>{busy ? '…' : tr('verifyPhone')}</PrimaryBtn>
                    {codeSent && (
                      <div className="rounded-xl px-4 py-3 text-[13px]" style={{ background: PINK.soft, color: PINK.ink }}>
                        {codeDemo ? <>{tr('codeDemo')} <b className="tracking-[0.3em] text-[16px]">{codeDemo}</b></> : tr('codeSent')}
                        <div className="flex gap-2 mt-2 items-center flex-wrap">
                          <input className="rounded-lg px-3 py-2 w-28 text-center tracking-[0.3em]" style={{ border: `1px solid ${PINK.line}`, background: '#fff' }}
                            placeholder="••••" maxLength={4} value={codeInput} onChange={(e) => setCodeInput(e.target.value.replace(/\D/g, ''))} />
                          <button onClick={confirmCode} disabled={busy || codeInput.length < 4}
                            className="rounded-full px-5 py-2 text-[13px] font-semibold text-white disabled:opacity-40"
                            style={{ background: PINK.deep }}>{tr('confirmCode')}</button>
                          <button onClick={sendCode} className="text-[12px] underline" style={{ color: PINK.deep }}>{tr('sendAgain')}</button>
                        </div>
                        {codeWrong && <p className="mt-2 text-[12px]" style={{ color: '#B2504A' }}>{tr('phoneFail')}</p>}
                      </div>
                    )}
                  </>
                ) : (
                  <p className="rounded-xl px-4 py-3 text-[14px] font-semibold"
                    style={{ background: '#EAF6EC', color: '#3E7A50', border: '1px solid #CBE8D2' }}>{tr('phoneOk')}</p>
                )}
              </div>
            </Card>
            <div className="flex justify-end">
              <PrimaryBtn onClick={() => { if (!s.name.trim() || !s.phone.trim() || !s.email.includes('@')) { setMsg(tr('completeAll')); return } if (!s.phoneVerified) { setMsg(tr('verifyFirst')); return } setMsg(''); setStep(1) }}>
                {tr('continueBtn')} →
              </PrimaryBtn>
            </div>
          </>
        )}

        {/* ════ STEP 2 — budget ════ */}
        {step === 1 && (
          <>
            {/* overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                [tr('targetBudget'), money(s.targetBudget)],
                [tr('actualSpent'), money(sum('actual'))],
                [tr('remaining'), money(remaining)],
                [tr('buffer'), money(s.emergencyBuffer)],
              ].map(([label, value], i) => (
                <div key={i} className="rounded-2xl p-4 shadow-sm" style={{ background: PINK.white, border: `1px solid ${PINK.line}` }}>
                  <div className="text-[10.5px] font-bold tracking-[0.14em] uppercase mb-1" style={{ color: PINK.deep }}>{label}</div>
                  <div className="text-[20px] font-bold" style={{ color: remaining < 0 && i === 2 ? '#B2504A' : PINK.ink }}>{value}</div>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-3 mb-6">
              <Field label={tr('targetBudget')}>
                <input type="number" min={0} className={inputCls} style={inputStyle} value={s.targetBudget || ''}
                  onChange={(e) => set('targetBudget', parseFloat(e.target.value) || 0)} />
              </Field>
              <Field label={tr('buffer')}>
                <input type="number" min={0} className={inputCls} style={inputStyle} value={s.emergencyBuffer || ''}
                  onChange={(e) => set('emergencyBuffer', parseFloat(e.target.value) || 0)} />
              </Field>
            </div>
            {remaining < 0 && (
              <p className="mb-6 rounded-xl px-4 py-3 text-[13px]" style={{ background: '#FBE3E3', color: '#8C3B3B', border: '1px solid #EFC5C5' }}>
                {tr('overBudget')}
              </p>
            )}

            {/* breakdown table */}
            <Card title={tr('budgetTitle')}>
              <div className="overflow-x-auto">
                <table className="w-full text-[13.5px] border-collapse min-w-[560px]">
                  <thead>
                    <tr>
                      {[tr('tableCat'), tr('tableEst'), tr('tableAct'), tr('tablePaid'), tr('tableBal')].map((h) => (
                        <th key={h} className="text-left px-3 py-2.5 rounded-t-xl text-[11px] font-bold tracking-[0.12em] uppercase"
                          style={{ background: PINK.soft, color: PINK.deep }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {BUDGET_CATEGORIES.map((cat, i) => {
                      const row = s.budget[i]
                      const bal = (row?.actual || 0) - (row?.paid || 0)
                      return (
                        <tr key={cat} style={{ borderBottom: `1px solid ${PINK.line}` }}>
                          <td className="px-3 py-2 font-medium">{tr(cat)}</td>
                          {(['estimated', 'actual', 'paid'] as const).map((k) => (
                            <td key={k} className="px-2 py-1.5">
                              <input type="number" min={0} className="w-24 rounded-lg px-2.5 py-1.5 text-right text-[13px]"
                                style={{ border: `1px solid ${PINK.line}`, background: '#fff', color: PINK.ink }}
                                value={row?.[k] || ''} onChange={(e) => setBudget(i, k, e.target.value)} />
                            </td>
                          ))}
                          <td className="px-3 py-2 text-right font-semibold" style={{ color: bal > 0 ? '#B2504A' : PINK.ink }}>{money(bal)}</td>
                        </tr>
                      )
                    })}
                    <tr style={{ background: PINK.deep }}>
                      <td className="px-3 py-3 rounded-bl-xl font-bold text-white text-[12px] tracking-[0.12em]">{tr('totals')}</td>
                      {[sum('estimated'), sum('actual'), sum('paid'), totalBalance].map((v, i) => (
                        <td key={i} className="px-3 py-3 text-right font-bold text-white" style={{ background: PINK.deep }}>{money(v)}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* hidden costs */}
            <Card title={tr('hiddenTitle')} desc={tr('hiddenDesc')}>
              <div className="grid md:grid-cols-2 gap-x-8">
                {HIDDEN_COSTS.map((k, i) => {
                  const hc = s.hiddenCosts[i]
                  return (
                    <div key={k} className="flex items-center justify-between gap-3 py-2" style={{ borderBottom: `1px dashed ${PINK.line}` }}>
                      <Toggle on={hc?.done || false} label={tr(k)}
                        onChange={() => setS((prev) => ({ ...prev, hiddenCosts: prev.hiddenCosts.map((h, idx) => idx === i ? { ...h, done: !h.done } : h) }))} />
                      <input type="number" min={0} placeholder="$" className="w-24 rounded-lg px-2.5 py-1.5 text-right text-[13px]"
                        style={{ border: `1px solid ${PINK.line}`, background: '#fff' }}
                        value={hc?.cost || ''} onChange={(e) => setS((prev) => ({ ...prev, hiddenCosts: prev.hiddenCosts.map((h, idx) => idx === i ? { ...h, cost: parseFloat(e.target.value) || 0 } : h) }))} />
                    </div>
                  )
                })}
              </div>
              <p className="mt-4 text-[14px] font-semibold" style={{ color: PINK.deep }}>{tr('hiddenTotal')}: {money(hiddenTotal)}</p>
            </Card>

            <div className="flex justify-between">
              <button onClick={() => setStep(0)} className="rounded-full px-6 py-3 text-[14px]" style={{ color: PINK.deep }}>←</button>
              <PrimaryBtn onClick={() => { void saveAll(); setStep(2) }}>{tr('continueBtn')} →</PrimaryBtn>
            </div>
          </>
        )}

        {/* ════ STEP 3 — questionnaire ════ */}
        {step === 2 && (
          <>
            <Card title={tr('qTitle')} desc={`${tr('qOwner')}: ${s.name}`}>
              <div className="grid md:grid-cols-2 gap-5">
                {([
                  ['settingType', SETTING_OPTIONS],
                  ['legalStatus', LEGAL_OPTIONS],
                  ['dietary', DIETARY_OPTIONS],
                  ['roomBlock', ROOM_OPTIONS],
                ] as const).map(([key, options]) => (
                  <Field key={key} label={tr(key)}>
                    <select className={inputCls} style={inputStyle} value={(s.q as never as Record<string, string>)[key]}
                      onChange={(e) => setS((p) => ({ ...p, q: { ...p.q, [key]: e.target.value } }))}>
                      <option value="">{tr('select')}</option>
                      {options.map((o) => <option key={o} value={o}>{tr(o)}</option>)}
                    </select>
                  </Field>
                ))}
                <Field label={tr('shuttle')}>
                  <select className={inputCls} style={inputStyle} value={s.q.shuttle}
                    onChange={(e) => setS((p) => ({ ...p, q: { ...p.q, shuttle: e.target.value } }))}>
                    <option value="">{tr('select')}</option>
                    {SHUTTLE_OPTIONS.map((o) => <option key={o} value={o}>{tr(o)}</option>)}
                  </select>
                </Field>
              </div>
            </Card>

            <Card title={tr('pinterestTitle')}>
              <textarea rows={3} className={inputCls} style={inputStyle} value={s.q.pinterest}
                placeholder={tr('pinterestPh')} onChange={(e) => setS((p) => ({ ...p, q: { ...p.q, pinterest: e.target.value } }))} />
            </Card>

            <Card title={tr('officiantTitle')}>
              <textarea rows={2} className={inputCls} style={inputStyle} value={s.q.officiant}
                placeholder={tr('officiantPh')} onChange={(e) => setS((p) => ({ ...p, q: { ...p.q, officiant: e.target.value } }))} />
            </Card>

            <Card title={tr('djTitle')}>
              <textarea rows={2} className={inputCls} style={inputStyle} value={s.q.dj}
                placeholder={tr('djPh')} onChange={(e) => setS((p) => ({ ...p, q: { ...p.q, dj: e.target.value } }))} />
            </Card>

            <Card title={tr('cateringTitle')}>
              <textarea rows={3} className={inputCls} style={inputStyle} value={s.q.catering}
                placeholder={tr('cateringPh')} onChange={(e) => setS((p) => ({ ...p, q: { ...p.q, catering: e.target.value } }))} />
            </Card>

            <Card title={tr('guestsTitle')}>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {(['guestsAdults', 'guestsTeens', 'guestsChildren', 'guestsBabies'] as const).map((k) => (
                  <Field key={k} label={tr(k)}>
                    <input type="number" min={0} className={inputCls} style={inputStyle} value={(s.q[k] as string) || ''}
                      onChange={(e) => setS((p) => ({ ...p, q: { ...p.q, [k]: e.target.value } }))} />
                  </Field>
                ))}
                <div className="self-end">
                  <div className="text-[10.5px] font-bold tracking-[0.14em] uppercase" style={{ color: PINK.deep }}>{tr('guestsTotal')}</div>
                  <div className="text-[22px] font-bold">{guestsTotal}</div>
                </div>
              </div>
            </Card>

            <Card title={tr('tributesTitle')}>
              <textarea rows={3} className={inputCls} style={inputStyle} value={s.q.tributes}
                placeholder={tr('tributesPh')} onChange={(e) => setS((p) => ({ ...p, q: { ...p.q, tributes: e.target.value } }))} />
            </Card>

            <Card title={tr('registryTitle')}>
              <textarea rows={2} className={inputCls} style={inputStyle} value={s.q.registry}
                placeholder={tr('registryPh')} onChange={(e) => setS((p) => ({ ...p, q: { ...p.q, registry: e.target.value } }))} />
            </Card>

            <Card title={tr('favorsTitle')}>
              <textarea rows={2} className={inputCls} style={inputStyle} value={s.q.favors}
                placeholder={tr('favorsPh')} onChange={(e) => setS((p) => ({ ...p, q: { ...p.q, favors: e.target.value } }))} />
            </Card>

            <Card title={tr('horaLocaTitle')} desc={tr('horaLocaDesc')}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {HORA_LOCA_PROPS.map((p) => (
                  <Toggle key={p} on={s.q.horaLocaProps.includes(p)} label={tr(p)} onChange={() => toggleIn('horaLocaProps', p)} />
                ))}
              </div>
            </Card>

            <Card title={tr('checklistTitle')} desc={`${s.q.checklist.length}/${CHECKLIST_ITEMS.length} ${tr('progress')}`}>
              <div className="grid md:grid-cols-2 gap-x-8">
                {CHECKLIST_ITEMS.map((c) => (
                  <Toggle key={c} on={s.q.checklist.includes(c)} label={tr(c)} onChange={() => toggleIn('checklist', c)} />
                ))}
              </div>
            </Card>

            <Card title={tr('photoShotsTitle')} desc={`${s.q.photoShots.length}/${PHOTO_SHOTS.length} ${tr('progress')}`}>
              <div className="grid md:grid-cols-2 gap-x-8">
                {PHOTO_SHOTS.map((c) => (
                  <Toggle key={c} on={s.q.photoShots.includes(c)} label={tr(c)} onChange={() => toggleIn('photoShots', c)} />
                ))}
              </div>
            </Card>

            <Card title={tr('emergencyTitle')} desc={`${s.q.emergencyKit.length}/${EMERGENCY_KIT.length} ${tr('progress')}`}>
              <div className="grid md:grid-cols-2 gap-x-8">
                {EMERGENCY_KIT.map((c) => (
                  <Toggle key={c} on={s.q.emergencyKit.includes(c)} label={tr(c)} onChange={() => toggleIn('emergencyKit', c)} />
                ))}
              </div>
            </Card>

            <Card title={tr('nameChangeTitle')} desc={`${s.q.nameChange.length}/${NAME_CHANGE.length} ${tr('progress')}`}>
              <div className="grid md:grid-cols-2 gap-x-8">
                {NAME_CHANGE.map((c) => (
                  <Toggle key={c} on={s.q.nameChange.includes(c)} label={tr(c)} onChange={() => toggleIn('nameChange', c)} />
                ))}
              </div>
            </Card>

            <div className="flex justify-between">
              <button onClick={() => setStep(1)} className="rounded-full px-6 py-3 text-[14px]" style={{ color: PINK.deep }}>←</button>
              <PrimaryBtn onClick={() => { void saveAll(); setStep(3) }}>{tr('continueBtn')} →</PrimaryBtn>
            </div>
          </>
        )}

        {/* ════ STEP 4 — PDF ════ */}
        {step === 3 && (
          <>
            <Card title={tr('pdfTitle')} desc={tr('pdfDesc')}>
              <div className="flex flex-wrap items-center gap-5">
                <PrimaryBtn onClick={makePdf} disabled={generating} style={{ background: `linear-gradient(135deg, ${PINK.gold}, #A8871F)` }}>
                  {generating ? tr('generating') : tr('generatePdf')}
                </PrimaryBtn>
                <p className="text-[13px] max-w-sm" style={{ color: PINK.deep }}>{tr('regen')}</p>
              </div>
            </Card>
            <div className="flex justify-start">
              <button onClick={() => setStep(2)} className="rounded-full px-6 py-3 text-[14px]" style={{ color: PINK.deep }}>←</button>
            </div>
          </>
        )}
      </main>

      {/* footer — on every page */}
      <footer className="fixed bottom-0 inset-x-0 z-20 py-2.5 text-center text-[12px] tracking-[0.08em]"
        style={{ background: 'rgba(253, 246, 248, 0.92)', borderTop: `1px solid ${PINK.line}`, color: PINK.deep, backdropFilter: 'blur(6px)' }}>
        {tr('footer')}
      </footer>
    </div>
  )
}
