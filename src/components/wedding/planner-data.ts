// The Bella Wild Flower — Planificación de Evento (Event Planner) Custom Edition
// Datos, tipos y diccionario bilingüe EN/ES

export type Lang = 'en' | 'es'

export interface BudgetRow {
  category: string // key
  estimated: number
  actual: number
  paid: number
}

export interface Questionnaire {
  settingType: string
  legalStatus: string
  dietary: string
  roomBlock: string
  shuttle: string
  pinterest: string
  officiant: string
  mc: string
  dj: string
  liveMusic: string
  catering: string
  tableware: string
  guestsAdults: string
  guestsTeens: string
  guestsChildren: string
  guestsBabies: string
  tributes: string
  registry: string
  cardBox: string
  favors: string
  horaLocaProps: string[]
  checklist: string[]
  photoShots: string[]
  emergencyKit: string[]
  nameChange: string[]
}

export interface PlannerState {
  name: string
  phone: string
  email: string
  phoneVerified: boolean
  transactionId: string
  targetBudget: number
  emergencyBuffer: number
  budget: BudgetRow[]
  hiddenCosts: { key: string; cost: number; done: boolean }[]
  q: Questionnaire
}

export const BUDGET_CATEGORIES = [
  'venue', 'catering', 'photoVideo', 'music', 'florals',
  'attire', 'stationery', 'transport', 'favors', 'planning',
] as const

export const HIDDEN_COSTS = [
  'vendorTips', 'vendorMeals', 'taxesService', 'dressAlterations',
  'tastingFees', 'liquorLicenses', 'lateFees', 'thankYouNotes', 'nameChangeFees',
] as const

export const HORA_LOCA_PROPS = [
  'hats', 'glasses', 'boas', 'glowSticks', 'masks', 'maracas', 'confetti', 'signs',
] as const

export const CHECKLIST_ITEMS = [
  'dateSet', 'venueBooked', 'officiantBooked', 'dressBought', 'suitBought',
  'ringsBought', 'photographerBooked', 'videographerBooked', 'djBooked',
  'catererBooked', 'cakeBooked', 'floristBooked', 'invitationsSent',
  'rsvpTracked', 'menuTasted', 'hairMakeup', 'transportBooked', 'hotelBlock',
  'marriageLicense', 'vowsWritten', 'seatingChart', 'favorsOrdered',
  'rehearsalDone', 'dayOfKit',
] as const

export const PHOTO_SHOTS = [
  'firstLook', 'ringsDetail', 'dressHanging', 'gettingReady', 'bouquet',
  'ceremonySpace', 'processional', 'firstKiss', 'recessional', 'familyFormals',
  'coupleSunset', 'receptionSpace', 'firstDance', 'cakeCutting', 'horaLoca',
  'candidGuests', 'sparklerExit',
] as const

export const EMERGENCY_KIT = [
  'sewingKit', 'safetyPins', 'stainRemover', 'bandAids', 'painReliever',
  'antacids', 'tissues', 'blottingPapers', 'lipstick', 'hairspray',
  'doubleTape', 'straws', 'mints', 'phoneCharger', 'cashTips',
] as const

export const NAME_CHANGE = [
  'socialSecurity', 'driversLicense', 'passport', 'bankAccounts', 'creditCards',
  'insurancePolicies', 'employers', 'voterRegistration', 'subscriptions',
  'utilityBills', 'socialMedia', 'emailSignature',
] as const

export function makeDefaultState(): PlannerState {
  return {
    name: '',
    phone: '',
    email: '',
    phoneVerified: false,
    transactionId: '',
    targetBudget: 0,
    emergencyBuffer: 0,
    budget: BUDGET_CATEGORIES.map((c) => ({ category: c, estimated: 0, actual: 0, paid: 0 })),
    hiddenCosts: HIDDEN_COSTS.map((k) => ({ key: k, cost: 0, done: false })),
    q: {
      settingType: '', legalStatus: '', dietary: '', roomBlock: '', shuttle: '',
      pinterest: '', officiant: '', mc: '', dj: '', liveMusic: '',
      catering: '', tableware: '', guestsAdults: '', guestsTeens: '',
      guestsChildren: '', guestsBabies: '', tributes: '', registry: '',
      cardBox: '', favors: '', horaLocaProps: [], checklist: [],
      photoShots: [], emergencyKit: [], nameChange: [],
    },
  }
}

type Dict = Record<string, { en: string; es: string }>

export const T: Dict = {
  brand: { en: 'The Bella Wild Flower', es: 'The Bella Wild Flower' },
  subtitle: { en: 'Event Planner — Custom Edition', es: 'Planificación de Evento — Edición Personalizada' },
  footer: { en: 'TheBellaWildFlower.com · WhatsApp +1 321 732 9993', es: 'TheBellaWildFlower.com · WhatsApp +1 321 732 9993' },
  tagline: { en: 'Elegant, intentional, yours.', es: 'Elegante, intencional, tuya.' },

  step: { en: 'Step', es: 'Paso' },
  stepInfo: { en: 'Your Information', es: 'Tus Datos' },
  stepPayment: { en: 'Payment & Activation', es: 'Pago y Activación' },
  stepBudget: { en: 'Budget Manager', es: 'Gestor de Presupuesto' },
  stepQuestionnaire: { en: 'Master Questionnaire', es: 'Cuestionario Maestro' },
  stepPdf: { en: 'Your Custom PDF', es: 'Tu PDF Personalizado' },

  fullName: { en: 'Full Name', es: 'Nombre Completo' },
  fullNamePh: { en: 'Jane Smith', es: 'María Pérez' },
  phoneLabel: { en: 'Phone Number (with country code)', es: 'Número de Teléfono (con código de país)' },
  phonePh: { en: '+1 555 123 4567', es: '+1 555 123 4567' },
  email: { en: 'Email', es: 'Correo Electrónico' },
  emailPh: { en: 'you@email.com', es: 'tu@correo.com' },
  verifyPhone: { en: 'Verify Phone', es: 'Verificar Teléfono' },
  codeSent: { en: 'We sent you a verification code by SMS.', es: 'Te enviamos un código de verificación por SMS.' },
  codeDemo: { en: 'SMS gateway in setup — your code for now:', es: 'Pasarela SMS en configuración — tu código por ahora:' },
  enterCode: { en: 'Enter the 4-digit code', es: 'Ingresa el código de 4 dígitos' },
  confirmCode: { en: 'Confirm Code', es: 'Confirmar Código' },
  phoneOk: { en: 'Phone verified ✓', es: 'Teléfono verificado ✓' },
  phoneFail: { en: 'Incorrect code, try again', es: 'Código incorrecto, intenta de nuevo' },
  sendAgain: { en: 'Send code again', es: 'Enviar código de nuevo' },
  smsServerFail: { en: 'Could not send the SMS right now. Please try again.', es: 'No pudimos enviar el SMS en este momento. Por favor intenta de nuevo.' },
  continueBtn: { en: 'Continue', es: 'Continuar' },
  completeAll: { en: 'Please complete name, phone and email first.', es: 'Por favor completa nombre, teléfono y correo primero.' },

  payTitle: { en: 'One-time activation — $5.00 USD', es: 'Activación única — $5.00 USD' },
  payDesc: { en: 'Your one-time payment unlocks your personalized planner and PDF guide forever.', es: 'Tu pago único desbloquea tu planificador personalizado y tu guía en PDF para siempre.' },
  payBtn: { en: 'Pay $5.00 with PayPal', es: 'Pagar $5.00 con PayPal' },
  paypalAccount: { en: 'PayPal account: marielabarbettio@gmail.com', es: 'Cuenta PayPal: marielabarbettio@gmail.com' },
  txnLabel: { en: 'PayPal Transaction ID / Receipt Reference', es: 'ID de Transacción PayPal / Referencia de Recibo' },
  txnPh: { en: 'e.g. 9XY12345AB678901C', es: 'ej. 9XY12345AB678901C' },
  activateBtn: { en: 'Activate My Planner', es: 'Activar Mi Planificador' },
  txnRequired: { en: 'Enter your PayPal transaction ID to activate.', es: 'Ingresa tu ID de transacción PayPal para activar.' },
  verifyFirst: { en: 'Please verify your phone number to continue.', es: 'Verifica tu número de teléfono para continuar.' },
  smsConfirmSent: { en: 'Confirmation SMS sent to your phone ✓', es: 'SMS de confirmación enviado a tu teléfono ✓' },
  smsConfirmDemo: { en: 'SMS gateway in setup — confirmation will be sent once connected.', es: 'Pasarela SMS en configuración — la confirmación se enviará al conectarla.' },
  activated: { en: 'Planner activated ✓', es: 'Planificador activado ✓' },

  budgetTitle: { en: 'Financial & Budget Management', es: 'Gestión Financiera y Presupuesto' },
  targetBudget: { en: 'Total Target Budget', es: 'Presupuesto Objetivo Total' },
  actualSpent: { en: 'Total Actual Spent', es: 'Total Gastado Real' },
  remaining: { en: 'Remaining Balance', es: 'Saldo Restante' },
  buffer: { en: 'Emergency Buffer Fund', es: 'Fondo de Emergencia' },
  overBudget: { en: 'Over budget — review your expenses', es: 'Sobre presupuesto — revisa tus gastos' },
  tableCat: { en: 'Category', es: 'Categoría' },
  tableEst: { en: 'Estimated', es: 'Estimado' },
  tableAct: { en: 'Actual', es: 'Real' },
  tablePaid: { en: 'Paid', es: 'Pagado' },
  tableBal: { en: 'Balance', es: 'Saldo' },
  totals: { en: 'TOTALS', es: 'TOTALES' },
  hiddenTitle: { en: 'Hidden & Unforeseen Costs', es: 'Costos Ocultos e Imprevistos' },
  hiddenDesc: { en: 'The costs nobody warns you about. Mark and budget them before they surprise you.', es: 'Los costos de los que nadie te avisa. Márcalos y presupuéstalos antes de que te sorprendan.' },
  hiddenTotal: { en: 'Hidden costs total', es: 'Total de costos ocultos' },

  venue: { en: 'Venue', es: 'Recinto' },
  catering: { en: 'Catering', es: 'Catering / Banquete' },
  photoVideo: { en: 'Photo / Video', es: 'Foto / Video' },
  music: { en: 'Music & Hora Loca', es: 'Música y Hora Loca' },
  florals: { en: 'Florals', es: 'Flores' },
  attire: { en: 'Attire', es: 'Vestuario' },
  stationery: { en: 'Stationery', es: 'Papelería' },
  transport: { en: 'Transport', es: 'Transporte' },
  favors: { en: 'Favors', es: 'Recuerdos / Souvenirs' },
  planning: { en: 'Planning', es: 'Coordinación' },

  vendorTips: { en: 'Vendor tips', es: 'Propinas a proveedores' },
  vendorMeals: { en: 'Vendor meals', es: 'Comidas para proveedores' },
  taxesService: { en: 'Taxes & service charges', es: 'Impuestos y cargos de servicio' },
  dressAlterations: { en: 'Dress alterations', es: 'Arreglos del vestido' },
  tastingFees: { en: 'Tasting fees', es: 'Tarifas de degustación' },
  liquorLicenses: { en: 'Liquor licenses', es: 'Licencias de alcohol' },
  lateFees: { en: 'Late-night breakdown fees', es: 'Cargos por desmontaje nocturno' },
  thankYouNotes: { en: 'Thank-you notes', es: 'Notas de agradecimiento' },
  nameChangeFees: { en: 'Legal name change fees', es: 'Gastos legales de cambio de nombre' },

  qTitle: { en: 'Interactive Master Wedding Questionnaire', es: 'Cuestionario Maestro Interactivo de Boda' },
  qOwner: { en: 'Official owner of this planner', es: 'Propietaria/o oficial de este planificador' },
  settingType: { en: 'Setting Type', es: 'Tipo de Escenario' },
  legalStatus: { en: 'Legal Marriage Status', es: 'Estado Legal del Matrimonio' },
  dietary: { en: 'Dietary Restrictions', es: 'Restricciones Alimentarias' },
  roomBlock: { en: 'Room Block', es: 'Bloque de Habitaciones' },
  shuttle: { en: 'Shuttle Service', es: 'Servicio de Transporte' },
  select: { en: 'Select an option…', es: 'Selecciona una opción…' },

  settingIndoor: { en: 'Indoor', es: 'Interior' },
  settingOutdoor: { en: 'Outdoor', es: 'Exterior' },
  settingGarden: { en: 'Garden', es: 'Jardín' },
  settingBeach: { en: 'Beach', es: 'Playa' },
  settingBallroom: { en: 'Ballroom', es: 'Salón de Baile' },
  settingBarn: { en: 'Barn / Ranch', es: 'Granja / Rancho' },
  settingDestination: { en: 'Destination', es: 'Destino' },

  legalReligious: { en: 'Religious ceremony', es: 'Ceremonia religiosa' },
  legalCivil: { en: 'Civil ceremony', es: 'Ceremonia civil' },
  legalSymbolic: { en: 'Symbolic ceremony only', es: 'Solo ceremonia simbólica' },
  legalCourthouse: { en: 'Courthouse + celebration later', es: 'Juzgado + celebración después' },
  legalPending: { en: 'Still deciding', es: 'Aún decidiendo' },

  dietNone: { en: 'None', es: 'Ninguna' },
  dietVegetarian: { en: 'Vegetarian', es: 'Vegetariana' },
  dietVegan: { en: 'Vegan', es: 'Vegana' },
  dietGluten: { en: 'Gluten-free', es: 'Sin gluten' },
  dietHalal: { en: 'Halal', es: 'Halal' },
  dietKosher: { en: 'Kosher', es: 'Kosher' },
  dietAllergies: { en: 'Allergies (specify)', es: 'Alergias (especificar)' },

  roomBlockYes: { en: 'Yes — rooms reserved', es: 'Sí — habitaciones reservadas' },
  roomBlockNo: { en: 'No', es: 'No' },
  roomBlockTbd: { en: 'To be determined', es: 'Por determinar' },

  shuttleYes: { en: 'Yes — for guests', es: 'Sí — para invitados' },
  shuttleLimited: { en: 'Limited / VIP only', es: 'Limitado / solo VIP' },
  shuttleNo: { en: 'No', es: 'No' },

  pinterestTitle: { en: 'Pinterest Mood Board', es: 'Tablero de Inspiración (Pinterest)' },
  pinterestPh: { en: 'Paste the link to your mood board and describe your dream aesthetic…', es: 'Pega el enlace de tu tablero y describe la estética de tus sueños…' },
  officiantTitle: { en: 'Officiant & MC', es: 'Oficiante y Maestro de Ceremonias' },
  officiantPh: { en: 'Who will officiate? Who will be your MC?', es: '¿Quién oficiará? ¿Quién será tu maestro de ceremonias?' },
  djTitle: { en: 'DJ & Live Music', es: 'DJ y Música en Vivo' },
  djPh: { en: 'DJ or band? First dance song? Special moments for live music?', es: '¿DJ o banda? ¿Canción del primer baile? ¿Momentos para música en vivo?' },
  cateringTitle: { en: 'Catering & Tableware Rentals', es: 'Catering y Alquiler de Vajilla' },
  cateringPh: { en: 'Menu style, courses, rentals needed (plates, glasses, silverware, linens)…', es: 'Estilo de menú, tiempos, alquileres necesarios (platos, copas, cubiertos, manteles)…' },
  guestsTitle: { en: 'Guest Demographics', es: 'Demografía de Invitados' },
  guestsAdults: { en: 'Adults (18+)', es: 'Adultos (18+)' },
  guestsTeens: { en: 'Teens (13–17)', es: 'Adolescentes (13–17)' },
  guestsChildren: { en: 'Children (4–12)', es: 'Niños (4–12)' },
  guestsBabies: { en: 'Babies (0–3)', es: 'Bebés (0–3)' },
  guestsTotal: { en: 'Total guests', es: 'Total de invitados' },
  tributesTitle: { en: 'Family & Memorial Tributes', es: 'Homenajes Familiares y Memoriales' },
  tributesPh: { en: 'How will you honor loved ones — reserved seats, flowers, candles, a memory table?', es: '¿Cómo honrarás a tus seres queridos — asientos reservados, flores, velas, una mesa de recuerdos?' },
  registryTitle: { en: 'Registry & Card Box', es: 'Mesa de Regalos y Buzón de Tarjetas' },
  registryPh: { en: 'Where are you registered? Style of your card box?', es: '¿Dónde está tu mesa de regalos? ¿Estilo del buzón de tarjetas?' },
  favorsTitle: { en: 'Favors / Souvenirs', es: 'Recuerdos / Souvenirs' },
  favorsPh: { en: 'What will you gift your guests?', es: '¿Qué regalarás a tus invitados?' },
  horaLocaTitle: { en: 'Hora Loca', es: 'Hora Loca' },
  horaLocaDesc: { en: 'Select the props for your party hour:', es: 'Selecciona los accesorios para tu hora de fiesta:' },
  hats: { en: 'Hats', es: 'Sombreros' },
  glasses: { en: 'Glasses', es: 'Anteojos' },
  boas: { en: 'Feather boas', es: 'Boas de plumas' },
  glowSticks: { en: 'Glow sticks', es: 'Bengalas luminosas' },
  masks: { en: 'Masks', es: 'Máscaras' },
  maracas: { en: 'Maracas', es: 'Maracas' },
  confetti: { en: 'Confetti', es: 'Confeti' },
  signs: { en: 'Signs', es: 'Carteles' },

  checklistTitle: { en: 'Ultimate Wedding Checklist', es: 'Checklist Definitiva de la Boda' },
  checklistDesc: { en: 'Tap each item as you complete it — your progress is saved automatically.', es: 'Toca cada elemento al completarlo — tu progreso se guarda automáticamente.' },
  photoShotsTitle: { en: 'Essential Photography "Must-Haves"', es: 'Fotografía Esencial Imprescindible' },
  emergencyTitle: { en: 'Wedding Day Emergency Kit', es: 'Kit de Emergencia del Día de la Boda' },
  nameChangeTitle: { en: 'Post-Wedding Name Change Checklist', es: 'Checklist de Cambio de Nombre Post-Boda' },

  dateSet: { en: 'Wedding date set', es: 'Fecha de la boda definida' },
  venueBooked: { en: 'Venue booked', es: 'Recinto reservado' },
  officiantBooked: { en: 'Officiant booked', es: 'Oficiante reservado' },
  dressBought: { en: 'Wedding dress purchased', es: 'Vestido de novia comprado' },
  suitBought: { en: 'Suit / tuxedo purchased', es: 'Traje / esmoquin comprado' },
  ringsBought: { en: 'Rings purchased', es: 'Anillos comprados' },
  photographerBooked: { en: 'Photographer booked', es: 'Fotógrafo reservado' },
  videographerBooked: { en: 'Videographer booked', es: 'Videógrafo reservado' },
  djBooked: { en: 'DJ booked', es: 'DJ reservado' },
  catererBooked: { en: 'Caterer booked', es: 'Catering reservado' },
  cakeBooked: { en: 'Cake booked', es: 'Torta reservada' },
  floristBooked: { en: 'Florist booked', es: 'Florista reservado' },
  invitationsSent: { en: 'Invitations sent', es: 'Invitaciones enviadas' },
  rsvpTracked: { en: 'RSVPs tracked', es: 'RSVPs rastreados' },
  menuTasted: { en: 'Menu tasting done', es: 'Degustación de menú realizada' },
  hairMakeup: { en: 'Hair & makeup trial done', es: 'Prueba de peinado y maquillaje realizada' },
  transportBooked: { en: 'Transport booked', es: 'Transporte reservado' },
  hotelBlock: { en: 'Hotel block arranged', es: 'Bloque de hotel organizado' },
  marriageLicense: { en: 'Marriage license obtained', es: 'Licencia de matrimonio obtenida' },
  vowsWritten: { en: 'Vows written', es: 'Votos escritos' },
  seatingChart: { en: 'Seating chart done', es: 'Distribución de mesas realizada' },
  favorsOrdered: { en: 'Favors ordered', es: 'Recuerdos encargados' },
  rehearsalDone: { en: 'Rehearsal done', es: 'Ensayo realizado' },
  dayOfKit: { en: 'Day-of emergency kit packed', es: 'Kit de emergencia del día empacado' },

  firstLook: { en: 'First look', es: 'Primer vistazo' },
  ringsDetail: { en: 'Rings close-up', es: 'Anillos en detalle' },
  dressHanging: { en: 'Dress hanging', es: 'Vestido colgado' },
  gettingReady: { en: 'Getting ready', es: 'Preparación' },
  bouquet: { en: 'Bouquet', es: 'Ramo' },
  ceremonySpace: { en: 'Ceremony space', es: 'Espacio de la ceremonia' },
  processional: { en: 'Processional', es: 'Entrada' },
  firstKiss: { en: 'First kiss', es: 'Primer beso' },
  recessional: { en: 'Recessional', es: 'Salida' },
  familyFormals: { en: 'Family formals', es: 'Fotos familiares' },
  coupleSunset: { en: 'Couple at sunset', es: 'Pareja al atardecer' },
  receptionSpace: { en: 'Reception space', es: 'Espacio de la recepción' },
  firstDance: { en: 'First dance', es: 'Primer baile' },
  cakeCutting: { en: 'Cake cutting', es: 'Corte de la torta' },
  horaLoca: { en: 'Hora Loca energy', es: 'Energía de la Hora Loca' },
  candidGuests: { en: 'Candid guest shots', es: 'Invitados espontáneos' },
  sparklerExit: { en: 'Sparkler exit', es: 'Salida con bengalas' },

  sewingKit: { en: 'Sewing kit', es: 'Costurero' },
  safetyPins: { en: 'Safety pins', es: 'Alfileres de seguridad' },
  stainRemover: { en: 'Stain remover pen', es: 'Quitamanchas' },
  bandAids: { en: 'Band-aids', es: 'Curitas' },
  painReliever: { en: 'Pain reliever', es: 'Analgésico' },
  antacids: { en: 'Antacids', es: 'Antiácidos' },
  tissues: { en: 'Tissues', es: 'Pañuelos' },
  blottingPapers: { en: 'Blotting papers', es: 'Papel secante' },
  lipstick: { en: 'Lipstick for touch-ups', es: 'Labial para retoques' },
  hairspray: { en: 'Hairspray', es: 'Laca para el cabello' },
  doubleTape: { en: 'Double-sided tape', es: 'Cinta de doble cara' },
  straws: { en: 'Straws', es: 'Pajitas' },
  mints: { en: 'Mints', es: 'Mentas' },
  phoneCharger: { en: 'Phone charger', es: 'Cargador de teléfono' },
  cashTips: { en: 'Cash for tips', es: 'Efectivo para propinas' },

  socialSecurity: { en: 'Social Security card', es: 'Tarjeta del Seguro Social' },
  driversLicense: { en: "Driver's license", es: 'Licencia de conducir' },
  passport: { en: 'Passport', es: 'Pasaporte' },
  bankAccounts: { en: 'Bank accounts', es: 'Cuentas bancarias' },
  creditCards: { en: 'Credit cards', es: 'Tarjetas de crédito' },
  insurancePolicies: { en: 'Insurance policies', es: 'Pólizas de seguro' },
  employers: { en: 'Employer / payroll', es: 'Empleador / nómina' },
  voterRegistration: { en: 'Voter registration', es: 'Registro electoral' },
  subscriptions: { en: 'Subscriptions & memberships', es: 'Suscripciones y membresías' },
  utilityBills: { en: 'Utility bills & lease', es: 'Servicios y contrato de alquiler' },
  socialMedia: { en: 'Social media handles', es: 'Redes sociales' },
  emailSignature: { en: 'Email signature', es: 'Firma de correo' },

  pdfTitle: { en: 'Your Custom PDF Guide', es: 'Tu Guía en PDF Personalizada' },
  pdfDesc: { en: 'We compile your budget, auto-summed totals, questionnaire and your name into an elegant document in your Bella theme.', es: 'Compilamos tu presupuesto, totales automáticos, cuestionario y tu nombre en un documento elegante con tu tema Bella.' },
  generatePdf: { en: 'Generate Custom PDF', es: 'Generar PDF Personalizado' },
  generating: { en: 'Generating…', es: 'Generando…' },
  regen: { en: 'You can update your answers and regenerate your PDF anytime.', es: 'Puedes actualizar tus respuestas y regenerar tu PDF cuando quieras.' },
  savedLocal: { en: 'Everything you type is saved automatically on this device.', es: 'Todo lo que escribes se guarda automáticamente en este dispositivo.' },
  progress: { en: 'completed', es: 'completado' },

  pdfCover: { en: 'Event Planner — Custom Edition', es: 'Planificación de Evento — Edición Personalizada' },
  pdfPreparedFor: { en: 'Prepared especially for', es: 'Preparado especialmente para' },
  pdfBudgetSection: { en: 'Financial & Budget Management', es: 'Gestión Financiera y Presupuesto' },
  pdfHiddenSection: { en: 'Hidden & Unforeseen Costs', es: 'Costos Ocultos e Imprevistos' },
  pdfQSection: { en: 'Master Wedding Questionnaire', es: 'Cuestionario Maestro de Boda' },
  pdfChecklistSection: { en: 'Ultimate Checklist', es: 'Checklist Definitiva' },
  pdfPhotosSection: { en: 'Photography Must-Haves', es: 'Fotografía Imprescindible' },
  pdfEmergencySection: { en: 'Emergency Kit', es: 'Kit de Emergencia' },
  pdfNameChangeSection: { en: 'Name Change Checklist', es: 'Checklist de Cambio de Nombre' },
  pdfHoraLoca: { en: 'Hora Loca props selected', es: 'Accesorios de Hora Loca seleccionados' },
  pdfDone: { en: 'Done', es: 'Hecho' },
  pdfPending: { en: 'Pending', es: 'Pendiente' },
  pdfNone: { en: 'Not specified', es: 'No especificado' },
}

export function t(key: string, lang: Lang): string {
  const item = T[key]
  return item ? item[lang] : key
}

export function smsTemplate(clientName: string): string {
  return `Estimado/a ${clientName},
Muchas gracias por su compra. Agradecemos su confianza en nosotros.
Una vez que haya completado el pago correspondiente, podrá acceder de manera inmediata a su guía personalizada.
Quedamos a su completa disposición y le enviamos un cordial saludo.`
}

export const SETTING_OPTIONS = ['settingIndoor', 'settingOutdoor', 'settingGarden', 'settingBeach', 'settingBallroom', 'settingBarn', 'settingDestination']
export const LEGAL_OPTIONS = ['legalReligious', 'legalCivil', 'legalSymbolic', 'legalCourthouse', 'legalPending']
export const DIETARY_OPTIONS = ['dietNone', 'dietVegetarian', 'dietVegan', 'dietGluten', 'dietHalal', 'dietKosher', 'dietAllergies']
export const ROOM_OPTIONS = ['roomBlockYes', 'roomBlockNo', 'roomBlockTbd']
export const SHUTTLE_OPTIONS = ['shuttleYes', 'shuttleLimited', 'shuttleNo']
