// Genera el PDF personalizado de la Planificación de Evento — tema rosa palo, watermark y footer en cada página
import type { PlannerState, Lang } from './planner-data'
import { t, BUDGET_CATEGORIES, HIDDEN_COSTS, CHECKLIST_ITEMS, PHOTO_SHOTS, EMERGENCY_KIT, NAME_CHANGE, HORA_LOCA_PROPS } from './planner-data'

const PINK = { soft: 'rgba(245, 213, 220, 0.45)', mid: [232, 165, 184] as [number, number, number], deep: [201, 137, 158] as [number, number, number], gold: [201, 162, 39] as [number, number, number], ink: [74, 59, 64] as [number, number, number] }

const PW = 210, PH = 297, M = 16

function money(n: number): string {
  return '$' + (Number.isFinite(n) ? n : 0).toLocaleString('en-US', { maximumFractionDigits: 0 })
}

export async function generatePlannerPdf(s: PlannerState, lang: Lang) {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const tr = (k: string) => t(k, lang)

  let y = 0

  const decorate = () => {
    // watermark
    doc.setFont('times', 'italic')
    doc.setFontSize(40)
    doc.setTextColor(...PINK.mid)
    doc.setGState(new (doc as never as { GState: new (o: object) => unknown }).GState({ opacity: 0.08 }))
    doc.text('The Bella Wild Flower', PW / 2, PH / 2 + 20, { align: 'center', angle: 24 })
    doc.setGState(new (doc as never as { GState: new (o: object) => unknown }).GState({ opacity: 1 }))
    // footer — every page
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.setTextColor(...PINK.deep)
    doc.text('TheBellaWildFlower.com · WhatsApp +1 321 732 9993', PW / 2, PH - 8, { align: 'center' })
    doc.setTextColor(...PINK.ink)
  }

  const newPage = (sectionTitle?: string) => {
    if (y > 0) { doc.addPage(); decorate() }
    y = M + 6
    if (sectionTitle) {
      doc.setFont('times', 'bold')
      doc.setFontSize(19)
      doc.setTextColor(...PINK.ink)
      doc.text(sectionTitle, M, y)
      doc.setDrawColor(...PINK.mid)
      doc.setLineWidth(0.8)
      doc.line(M, y + 2.5, M + 24, y + 2.5)
      y += 10
    }
  }

  const ensure = (need: number) => {
    if (y + need > PH - 16) { doc.addPage(); decorate(); y = M + 6 }
  }

  const kv = (label: string, value: string) => {
    if (!value) return
    ensure(9)
    doc.setFont('helvetica', 'bold'); doc.setFontSize(9.5); doc.setTextColor(...PINK.deep)
    doc.text(label, M, y)
    doc.setFont('helvetica', 'normal'); doc.setTextColor(...PINK.ink)
    const lines = doc.splitTextToSize(value, PW - M * 2 - 52) as string[]
    doc.text(lines, M + 52, y)
    y += lines.length * 5 + 3.5
  }

  /* ════════ PORTADA ════════ */
  doc.setFillColor(253, 246, 248)
  doc.rect(0, 0, PW, PH, 'F')
  decorate()
  doc.setFont('times', 'italic')
  doc.setFontSize(15)
  doc.setTextColor(...PINK.deep)
  doc.text('The Bella Wild Flower', PW / 2, 52, { align: 'center' })
  doc.setFont('times', 'bold')
  doc.setFontSize(30)
  doc.setTextColor(...PINK.ink)
  doc.text(tr('pdfCover'), PW / 2, 70, { align: 'center' })
  doc.setDrawColor(...PINK.mid)
  doc.setLineWidth(1)
  doc.line(PW / 2 - 20, 76, PW / 2 + 20, 76)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  doc.setTextColor(...PINK.deep)
  doc.text(tr('pdfPreparedFor'), PW / 2, 100, { align: 'center' })
  doc.setFont('times', 'bold')
  doc.setFontSize(24)
  doc.setTextColor(...PINK.ink)
  doc.text(s.name || '—', PW / 2, 114, { align: 'center' })
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(...PINK.deep)
  doc.text(new Date().toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' }), PW / 2, 126, { align: 'center' })
  y = PH // cover is standalone; next newPage starts fresh

  /* ════════ PRESUPUESTO ════════ */
  newPage(tr('pdfBudgetSection'))

  const sum = (k: 'estimated' | 'actual' | 'paid') => s.budget.reduce((a, r) => a + (Number(r[k]) || 0), 0)

  // overview boxes
  const boxes: [string, string][] = [
    [tr('targetBudget'), money(s.targetBudget)],
    [tr('actualSpent'), money(sum('actual'))],
    [tr('remaining'), money((s.targetBudget || 0) - sum('actual'))],
    [tr('buffer'), money(s.emergencyBuffer)],
  ]
  const bw = (PW - M * 2 - 9) / 4
  boxes.forEach(([label, value], i) => {
    const x = M + i * (bw + 3)
    doc.setFillColor(...PINK.mid)
    doc.setFillColor(249, 228, 236)
    doc.roundedRect(x, y, bw, 17, 2, 2, 'F')
    doc.setFont('helvetica', 'bold'); doc.setFontSize(6.8); doc.setTextColor(...PINK.deep)
    doc.text(label.toUpperCase(), x + 2.5, y + 5)
    doc.setFontSize(11); doc.setTextColor(...PINK.ink)
    doc.text(value, x + 2.5, y + 12)
  })
  y += 24

  // budget table
  const colX = [M, M + 66, M + 100, M + 134, M + 168]
  const colW = [66, 34, 34, 34, 26]
  const drawHead = () => {
    ensure(10)
    doc.setFillColor(...PINK.mid)
    doc.setFillColor(232, 165, 184)
    doc.rect(M, y, PW - M * 2, 7, 'F')
    doc.setFont('helvetica', 'bold'); doc.setFontSize(7.5); doc.setTextColor(255, 255, 255)
    ;[tr('tableCat'), tr('tableEst'), tr('tableAct'), tr('tablePaid'), tr('tableBal')].forEach((h, i) =>
      doc.text(h, i === 0 ? colX[i] + 2 : colX[i] + colW[i] - 2, y + 4.8, { align: i === 0 ? 'left' : 'right' }))
    y += 7
  }
  drawHead()
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8.2); doc.setTextColor(...PINK.ink)
  BUDGET_CATEGORIES.forEach((cat, i) => {
    ensure(7)
    const r = s.budget[i] || { estimated: 0, actual: 0, paid: 0 }
    const bal = (r.actual || 0) - (r.paid || 0)
    doc.text(tr(cat), colX[0] + 2, y + 4.8)
    doc.text(money(r.estimated), colX[1] + colW[1] - 2, y + 4.8, { align: 'right' })
    doc.text(money(r.actual), colX[2] + colW[2] - 2, y + 4.8, { align: 'right' })
    doc.text(money(r.paid), colX[3] + colW[3] - 2, y + 4.8, { align: 'right' })
    doc.setTextColor(bal > 0 ? 178 : 74, bal > 0 ? 80 : 59, bal > 0 ? 74 : 64)
    doc.text(money(bal), colX[4] + colW[4] - 2, y + 4.8, { align: 'right' })
    doc.setTextColor(...PINK.ink)
    doc.setDrawColor(239, 211, 222)
    doc.line(M, y + 6.2, PW - M, y + 6.2)
    y += 6.2
  })
  // TOTALS row
  ensure(9)
  doc.setFillColor(...PINK.deep)
  doc.rect(M, y, PW - M * 2, 8, 'F')
  doc.setFont('helvetica', 'bold'); doc.setFontSize(8.5); doc.setTextColor(255, 255, 255)
  doc.text(tr('totals'), colX[0] + 2, y + 5.4)
  ;[money(sum('estimated')), money(sum('actual')), money(sum('paid')), money(sum('actual') - sum('paid'))].forEach((v, i) =>
    doc.text(v, colX[i + 1] + colW[i + 1] - 2, y + 5.4, { align: 'right' }))
  y += 14

  /* ════════ COSTOS OCULTOS ════════ */
  ensure(12)
  doc.setFont('times', 'bold'); doc.setFontSize(13); doc.setTextColor(...PINK.ink)
  doc.text(tr('pdfHiddenSection'), M, y)
  y += 8
  doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5)
  let hiddenTotal = 0
  HIDDEN_COSTS.forEach((k, i) => {
    const hc = s.hiddenCosts[i]
    if (!hc) return
    ensure(6)
    const mark = hc.done ? '●' : '○'
    const markColor: [number, number, number] = hc.done ? PINK.deep : PINK.ink
    doc.setTextColor(...markColor)
    doc.text(`${mark} ${tr(k)}`, M + 2, y)
    doc.text(money(hc.cost), PW - M - 2, y, { align: 'right' })
    hiddenTotal += hc.done ? (hc.cost || 0) : 0
    y += 5.5
  })
  ensure(7)
  doc.setFont('helvetica', 'bold'); doc.setTextColor(...PINK.deep)
  doc.text(`${tr('hiddenTotal')}: ${money(hiddenTotal)}`, PW - M - 2, y, { align: 'right' })
  doc.setTextColor(...PINK.ink)
  y += 10

  /* ════════ CUESTIONARIO ════════ */
  newPage(tr('pdfQSection'))
  kv(tr('settingType'), s.q.settingType ? tr(s.q.settingType) : '')
  kv(tr('legalStatus'), s.q.legalStatus ? tr(s.q.legalStatus) : '')
  kv(tr('dietary'), s.q.dietary ? tr(s.q.dietary) : '')
  kv(tr('roomBlock'), s.q.roomBlock ? tr(s.q.roomBlock) : '')
  kv(tr('shuttle'), s.q.shuttle ? tr(s.q.shuttle) : '')
  kv(tr('pinterestTitle'), s.q.pinterest)
  kv(tr('officiantTitle'), s.q.officiant)
  kv(tr('djTitle'), s.q.dj)
  kv(tr('cateringTitle'), s.q.catering)
  kv(tr('guestsTitle'),
    s.q.guestsAdults || s.q.guestsTeens || s.q.guestsChildren || s.q.guestsBabies
      ? `${tr('guestsAdults')}: ${s.q.guestsAdults || 0} · ${tr('guestsTeens')}: ${s.q.guestsTeens || 0} · ${tr('guestsChildren')}: ${s.q.guestsChildren || 0} · ${tr('guestsBabies')}: ${s.q.guestsBabies || 0}`
      : '')
  kv(tr('tributesTitle'), s.q.tributes)
  kv(tr('registryTitle'), s.q.registry)
  kv(tr('favorsTitle'), s.q.favors)
  if (s.q.horaLocaProps.length) {
    kv(tr('pdfHoraLoca'), s.q.horaLocaProps.map((p) => tr(p)).join(' · '))
  }

  /* ════════ CHECKLISTS ════════ */
  const drawChecklist = (title: string, items: readonly string[], done: string[]) => {
    newPage(title)
    doc.setFont('helvetica', 'normal'); doc.setFontSize(8.5)
    const half = Math.ceil(items.length / 2)
    let yLeft = y, yRight = y
    const colY = (col: 0 | 1) => (col === 0 ? yLeft : yRight)
    const setY = (col: 0 | 1, v: number) => { if (col === 0) yLeft = v; else yRight = v }
    items.forEach((item, i) => {
      const col: 0 | 1 = i < half ? 0 : 1
      const x = col === 0 ? M + 2 : M + (PW - M * 2) / 2 + 4
      const yy = colY(col)
      doc.setFillColor(255, 255, 255)
      doc.setDrawColor(...PINK.mid)
      doc.roundedRect(x, yy - 3.4, 3.4, 3.4, 0.6, 0.6, done.includes(item) ? 'FD' : 'S')
      if (done.includes(item)) {
        doc.setLineWidth(0.4)
        doc.line(x + 0.6, yy - 1.6, x + 1.5, yy - 0.6)
        doc.line(x + 1.5, yy - 0.6, x + 2.9, yy - 2.8)
      }
      doc.setTextColor(...PINK.ink)
      doc.text(tr(item), x + 6, yy)
      setY(col, yy + 6)
    })
    y = Math.max(yLeft, yRight) + 2
  }

  drawChecklist(tr('pdfChecklistSection'), CHECKLIST_ITEMS, s.q.checklist)
  drawChecklist(tr('pdfPhotosSection'), PHOTO_SHOTS, s.q.photoShots)
  drawChecklist(tr('pdfEmergencySection'), EMERGENCY_KIT, s.q.emergencyKit)
  drawChecklist(tr('pdfNameChangeSection'), NAME_CHANGE, s.q.nameChange)

  doc.save(lang === 'es' ? 'mi-planificacion-de-evento.pdf' : 'my-event-planner.pdf')
}
