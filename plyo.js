'use strict';

// ── SVG Exercise Illustrations (9 types) ─────────────────────────────────────

const SVG_TYPES = {
  bounce: `<svg viewBox="0 0 200 192" xmlns="http://www.w3.org/2000/svg" style="width:100%">
  <line x1="25" y1="168" x2="175" y2="168" stroke="rgba(255,255,255,.18)" stroke-width="2"/>
  <circle cx="82" cy="168" r="4" fill="#22c55e"/><circle cx="118" cy="168" r="4" fill="#22c55e"/>
  <line x1="82" y1="153" x2="82" y2="167" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="118" y1="153" x2="118" y2="167" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="3,3"/>
  <circle cx="100" cy="42" r="13" fill="none" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="55" x2="100" y2="100" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="72" x2="78" y2="85" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="72" x2="122" y2="85" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="100" x2="88" y2="132" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="100" x2="112" y2="132" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="88" y1="132" x2="76" y2="144" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="112" y1="132" x2="124" y2="144" stroke="#22c55e" stroke-width="2.5"/>
  <circle cx="88" cy="132" r="6" fill="none" stroke="#f97316" stroke-width="2"/>
  <circle cx="112" cy="132" r="6" fill="none" stroke="#f97316" stroke-width="2"/>
  <line x1="40" y1="150" x2="40" y2="120" stroke="#f97316" stroke-width="2"/>
  <polygon points="40,110 35,124 45,124" fill="#f97316"/>
  <line x1="160" y1="150" x2="160" y2="120" stroke="#f97316" stroke-width="2"/>
  <polygon points="160,110 155,124 165,124" fill="#f97316"/>
  <text x="100" y="186" text-anchor="middle" font-size="9" fill="#6b7280" font-family="sans-serif">Tobillo reactivo ⚡ — contacto solo antepié</text>
</svg>`,

  explosive_jump: `<svg viewBox="0 0 200 192" xmlns="http://www.w3.org/2000/svg" style="width:100%">
  <line x1="25" y1="168" x2="175" y2="168" stroke="rgba(255,255,255,.18)" stroke-width="2"/>
  <line x1="35" y1="168" x2="35" y2="45" stroke="rgba(249,115,22,.35)" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="20" y="108" font-size="8" fill="#f97316" font-family="sans-serif" transform="rotate(-90,20,108)">ALTURA</text>
  <circle cx="100" cy="28" r="13" fill="none" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="41" x2="100" y2="88" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="60" x2="74" y2="42" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="60" x2="126" y2="42" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="88" x2="88" y2="128" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="88" x2="112" y2="128" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="88" y1="128" x2="80" y2="138" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="112" y1="128" x2="120" y2="138" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="158" y1="158" x2="158" y2="68" stroke="#f97316" stroke-width="2"/>
  <polygon points="158,58 153,72 163,72" fill="#f97316"/>
  <text x="100" y="186" text-anchor="middle" font-size="9" fill="#6b7280" font-family="sans-serif">Triple extensión — tobillo · rodilla · cadera</text>
</svg>`,

  tuck: `<svg viewBox="0 0 200 192" xmlns="http://www.w3.org/2000/svg" style="width:100%">
  <line x1="25" y1="168" x2="175" y2="168" stroke="rgba(255,255,255,.18)" stroke-width="2"/>
  <circle cx="100" cy="32" r="13" fill="none" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="45" x2="98" y2="82" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="98" y1="60" x2="78" y2="76" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="98" y1="60" x2="116" y2="74" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="98" y1="82" x2="80" y2="76" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="98" y1="82" x2="118" y2="76" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="80" y1="76" x2="72" y2="108" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="118" y1="76" x2="126" y2="108" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="72" y1="108" x2="64" y2="114" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="126" y1="108" x2="134" y2="114" stroke="#22c55e" stroke-width="2.5"/>
  <circle cx="80" cy="76" r="7" fill="none" stroke="#f97316" stroke-width="2"/>
  <circle cx="118" cy="76" r="7" fill="none" stroke="#f97316" stroke-width="2"/>
  <line x1="158" y1="155" x2="158" y2="65" stroke="#f97316" stroke-width="2"/>
  <polygon points="158,55 153,68 163,68" fill="#f97316"/>
  <text x="100" y="186" text-anchor="middle" font-size="9" fill="#6b7280" font-family="sans-serif">Rodillas al pecho — extender antes de aterrizar</text>
</svg>`,

  landing: `<svg viewBox="0 0 200 192" xmlns="http://www.w3.org/2000/svg" style="width:100%">
  <line x1="25" y1="168" x2="175" y2="168" stroke="rgba(255,255,255,.18)" stroke-width="2"/>
  <circle cx="100" cy="62" r="13" fill="none" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="75" x2="96" y2="112" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="96" y1="90" x2="72" y2="80" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="96" y1="90" x2="120" y2="98" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="96" y1="112" x2="74" y2="118" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="96" y1="112" x2="118" y2="118" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="74" y1="118" x2="72" y2="168" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="118" y1="118" x2="120" y2="168" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="72" y1="168" x2="55" y2="168" stroke="#22c55e" stroke-width="3"/>
  <line x1="120" y1="168" x2="137" y2="168" stroke="#22c55e" stroke-width="3"/>
  <line x1="74" y1="116" x2="72" y2="168" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="118" y1="116" x2="120" y2="168" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3,2"/>
  <circle cx="74" cy="118" r="5" fill="none" stroke="#f97316" stroke-width="2"/>
  <circle cx="118" cy="118" r="5" fill="none" stroke="#f97316" stroke-width="2"/>
  <text x="100" y="186" text-anchor="middle" font-size="9" fill="#6b7280" font-family="sans-serif">Absorción trifásica — rodilla sobre pie (línea azul)</text>
</svg>`,

  lateral_bound: `<svg viewBox="0 0 200 192" xmlns="http://www.w3.org/2000/svg" style="width:100%">
  <line x1="25" y1="168" x2="175" y2="168" stroke="rgba(255,255,255,.18)" stroke-width="2"/>
  <circle cx="115" cy="52" r="13" fill="none" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="115" y1="65" x2="110" y2="108" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="110" y1="82" x2="88" y2="70" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="110" y1="82" x2="130" y2="90" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="110" y1="108" x2="112" y2="140" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="112" y1="140" x2="115" y2="168" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="115" y1="168" x2="132" y2="168" stroke="#22c55e" stroke-width="3"/>
  <line x1="110" y1="108" x2="90" y2="118" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="90" y1="118" x2="80" y2="145" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="112" y1="140" x2="100" y2="140" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3,2"/>
  <line x1="100" y1="140" x2="100" y2="168" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3,2"/>
  <circle cx="112" cy="140" r="5" fill="none" stroke="#f97316" stroke-width="2"/>
  <line x1="55" y1="112" x2="82" y2="112" stroke="#f97316" stroke-width="2"/>
  <polygon points="92,112 78,107 78,117" fill="#f97316"/>
  <text x="100" y="186" text-anchor="middle" font-size="9" fill="#6b7280" font-family="sans-serif">Estabilidad monopodal — rodilla sobre pie</text>
</svg>`,

  single_leg: `<svg viewBox="0 0 200 192" xmlns="http://www.w3.org/2000/svg" style="width:100%">
  <line x1="25" y1="168" x2="175" y2="168" stroke="rgba(255,255,255,.18)" stroke-width="2"/>
  <circle cx="100" cy="40" r="13" fill="none" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="53" x2="100" y2="98" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="70" x2="76" y2="56" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="70" x2="122" y2="80" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="98" x2="108" y2="132" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="108" y1="132" x2="112" y2="158" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="112" y1="158" x2="126" y2="162" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="98" x2="82" y2="114" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="82" y1="114" x2="78" y2="140" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="132" y1="110" x2="162" y2="110" stroke="#f97316" stroke-width="2"/>
  <polygon points="170,110 158,105 158,115" fill="#f97316"/>
  <text x="40" y="130" font-size="9" fill="#f97316" font-family="sans-serif">veloz</text>
  <text x="100" y="186" text-anchor="middle" font-size="9" fill="#6b7280" font-family="sans-serif">Mínimo tiempo de contacto — tobillo elástico</text>
</svg>`,

  broad: `<svg viewBox="0 0 200 192" xmlns="http://www.w3.org/2000/svg" style="width:100%">
  <line x1="25" y1="168" x2="175" y2="168" stroke="rgba(255,255,255,.18)" stroke-width="2"/>
  <path d="M 32 168 Q 100 88 170 128" fill="none" stroke="rgba(249,115,22,.4)" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="42" y="160" font-size="9" fill="#f97316" font-family="sans-serif">45°</text>
  <circle cx="100" cy="50" r="13" fill="none" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="63" x2="112" y2="102" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="105" y1="80" x2="80" y2="68" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="105" y1="80" x2="128" y2="72" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="112" y1="102" x2="94" y2="136" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="112" y1="102" x2="130" y2="128" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="94" y1="136" x2="82" y2="142" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="130" y1="128" x2="142" y2="134" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="145" y1="138" x2="172" y2="138" stroke="#f97316" stroke-width="2"/>
  <polygon points="180,138 168,133 168,143" fill="#f97316"/>
  <text x="100" y="186" text-anchor="middle" font-size="9" fill="#6b7280" font-family="sans-serif">Proyección 45° — brazos como impulso</text>
</svg>`,

  depth_jump: `<svg viewBox="0 0 200 192" xmlns="http://www.w3.org/2000/svg" style="width:100%">
  <rect x="18" y="128" width="52" height="38" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.2)" stroke-width="1.5" rx="2"/>
  <circle cx="60" cy="100" r="11" fill="none" stroke="#22c55e" stroke-width="2"/>
  <line x1="60" y1="111" x2="60" y2="144" stroke="#22c55e" stroke-width="2"/>
  <line x1="60" y1="125" x2="47" y2="118" stroke="#22c55e" stroke-width="2"/>
  <line x1="60" y1="125" x2="73" y2="118" stroke="#22c55e" stroke-width="2"/>
  <line x1="60" y1="144" x2="53" y2="160" stroke="#22c55e" stroke-width="2"/>
  <line x1="60" y1="144" x2="67" y2="160" stroke="#22c55e" stroke-width="2"/>
  <line x1="90" y1="132" x2="114" y2="132" stroke="#f97316" stroke-width="2"/>
  <polygon points="122,132 111,127 111,137" fill="#f97316"/>
  <text x="102" y="120" text-anchor="middle" font-size="8" fill="#f97316" font-family="sans-serif">&lt;0.25s</text>
  <line x1="120" y1="166" x2="185" y2="166" stroke="rgba(255,255,255,.18)" stroke-width="2"/>
  <circle cx="150" cy="112" r="11" fill="none" stroke="#22c55e" stroke-width="2"/>
  <line x1="150" y1="123" x2="150" y2="148" stroke="#22c55e" stroke-width="2"/>
  <line x1="150" y1="134" x2="136" y2="126" stroke="#22c55e" stroke-width="2"/>
  <line x1="150" y1="134" x2="164" y2="124" stroke="#22c55e" stroke-width="2"/>
  <line x1="150" y1="148" x2="140" y2="166" stroke="#22c55e" stroke-width="2"/>
  <line x1="150" y1="148" x2="160" y2="166" stroke="#22c55e" stroke-width="2"/>
  <line x1="175" y1="155" x2="175" y2="128" stroke="#f97316" stroke-width="2"/>
  <polygon points="175,118 170,131 180,131" fill="#f97316"/>
  <line x1="18" y1="166" x2="120" y2="166" stroke="rgba(255,255,255,.08)" stroke-width="1"/>
  <text x="100" y="186" text-anchor="middle" font-size="9" fill="#6b7280" font-family="sans-serif">Caída → despegue inmediato — ciclo elástico</text>
</svg>`,

  split: `<svg viewBox="0 0 200 192" xmlns="http://www.w3.org/2000/svg" style="width:100%">
  <line x1="25" y1="168" x2="175" y2="168" stroke="rgba(255,255,255,.18)" stroke-width="2"/>
  <circle cx="100" cy="36" r="13" fill="none" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="49" x2="100" y2="93" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="66" x2="122" y2="50" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="66" x2="78" y2="82" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="93" x2="128" y2="116" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="128" y1="116" x2="138" y2="148" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="138" y1="148" x2="150" y2="152" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="100" y1="93" x2="72" y2="113" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="72" y1="113" x2="62" y2="143" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="62" y1="143" x2="50" y2="148" stroke="#22c55e" stroke-width="2.5"/>
  <line x1="165" y1="158" x2="165" y2="72" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="165,62 160,75 170,75" fill="#f97316"/>
  <text x="100" y="186" text-anchor="middle" font-size="9" fill="#6b7280" font-family="sans-serif">Zancada invertida — coordinación cruzada</text>
</svg>`
};

// ── Exercise catalogue (20 exercises) ────────────────────────────────────────

const EXERCISES = [
  {
    id: 'pogos', svgType: 'bounce',
    name: 'Pogos',
    contacts: 1, intensity: 'low', category: 'general',
    sports: ['futsal', 'basketball'],
    levels: ['beginner', 'intermediate', 'advanced'],
    reps: { beginner: 20, intermediate: 25, advanced: 30 },
    sets: { beginner: 2, intermediate: 3, advanced: 3 },
    description: 'Saltos continuos de baja altura. El tendón de Aquiles actúa como resorte elástico.',
    technique: `<p class="text-gray-300 mb-4">Permanece en puntas de pie y ejecuta saltos continuos de 5-8 cm minimizando el tiempo de contacto. El ciclo elástico del tendón es el motor de este ejercicio.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Contacto inicial con antepié, absorción pasiva de tobillo</li>
        <li>Rodillas levemente flexionadas (10-15°), core activo</li>
        <li>Ritmo constante: evitar desaceleración entre reps</li>
      </ul>`,
    warnings: ['Contacto con talón lesiona la fascia plantar', 'No bloquear rodillas en extensión completa']
  },
  {
    id: 'ankle-hops', svgType: 'bounce',
    name: 'Ankle Hops',
    contacts: 1, intensity: 'low', category: 'general',
    sports: ['futsal', 'basketball'],
    levels: ['beginner', 'intermediate', 'advanced'],
    reps: { beginner: 15, intermediate: 20, advanced: 25 },
    sets: { beginner: 2, intermediate: 3, advanced: 3 },
    description: 'Saltos reactivos de tobillo con máxima rigidez articular. Prerrequisito fundamental de toda pliometría.',
    technique: `<p class="text-gray-300 mb-4">Mantén piernas casi completamente extendidas durante el salto. Trabaja exclusivamente con el tobillo: dorsiflexión rápida al contacto, plantarflexión en el despegue.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Antepié-metatarso primero, jamás el talón</li>
        <li>Rodillas prácticamente extendidas (5-10° de flexión máxima)</li>
        <li>Tiempo de contacto objetivo: &lt;100 ms</li>
      </ul>`,
    warnings: ['Solo apto cuando no hay dolor de tobillo o tendón de Aquiles', 'Reducir altura si el tiempo de contacto es excesivo']
  },
  {
    id: 'squat-jumps', svgType: 'explosive_jump',
    name: 'Squat Jumps',
    contacts: 1, intensity: 'low', category: 'general',
    sports: ['futsal', 'basketball'],
    levels: ['beginner', 'intermediate', 'advanced'],
    reps: { beginner: 8, intermediate: 12, advanced: 15 },
    sets: { beginner: 2, intermediate: 3, advanced: 4 },
    description: 'Salto vertical máximo desde sentadilla. Triple extensión explosiva: tobillo-rodilla-cadera.',
    technique: `<p class="text-gray-300 mb-4">Desciende a sentadilla (90°), pausa breve y explota verticalmente extendiendo cadera, rodillas y tobillos en secuencia. El aterrizaje invierte esa cadena.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Antepié → talón en secuencia controlada</li>
        <li>Rodillas sobre la línea del 2.° dedo, nunca en valgo</li>
        <li>Absorción trifásica: tobillo → rodilla → cadera</li>
      </ul>`,
    warnings: ['No aterrizar con rodillas en valgo (hacia adentro)', 'Mantener torso erguido — evitar inclinación excesiva']
  },
  {
    id: 'lateral-bounds', svgType: 'lateral_bound',
    name: 'Lateral Bounds',
    contacts: 1, intensity: 'medium', category: 'futsal-agility',
    sports: ['futsal'],
    levels: ['beginner', 'intermediate', 'advanced'],
    reps: { beginner: 8, intermediate: 12, advanced: 16 },
    sets: { beginner: 2, intermediate: 3, advanced: 4 },
    description: 'Saltos laterales unilaterales que replican el gesto de corte y cambio de dirección del futsal.',
    technique: `<p class="text-gray-300 mb-4">Impulso con una pierna hacia el lateral, aterrizaje monopodal en el pie opuesto, equilibrio de 1 segundo antes de rebotar. Replica el corte defensivo/ofensivo.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Aterrizaje monopodal suave: rodilla y cadera ~30° de flexión</li>
        <li>Rodilla alineada sobre el pie, NO en valgo ni varo</li>
        <li>Centro de gravedad bajo, levemente adelantado</li>
      </ul>`,
    warnings: ['Rotación interna de rodilla al aterrizar indica fatiga — parar', 'No sobrepasar la distancia que impide control de aterrizaje']
  },
  {
    id: 'box-jumps-30', svgType: 'explosive_jump',
    name: 'Box Jumps (30 cm)',
    contacts: 1, intensity: 'medium', category: 'basketball-vertical',
    sports: ['basketball'],
    levels: ['beginner', 'intermediate', 'advanced'],
    reps: { beginner: 6, intermediate: 8, advanced: 10 },
    sets: { beginner: 2, intermediate: 3, advanced: 4 },
    description: 'Salto vertical sobre cajón de 30 cm. Desarrolla potencia de despegue y control en aterrizaje elevado.',
    technique: `<p class="text-gray-300 mb-4">Desde posición atlética, contra-movimiento rápido y salto máximo. El aterrizaje "silencioso" es la métrica de calidad. Bajar del cajón caminando siempre.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje en cajón</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Pies al ancho de hombros, antepié primero</li>
        <li>Rodillas 60-90° al aterrizar, nunca bloqueadas</li>
        <li>Absorber el impacto, no "caer" con rigidez</li>
      </ul>`,
    warnings: ['Bajar del cajón caminando — nunca saltar hacia atrás', 'Cajón firme y antideslizante obligatorio']
  },
  {
    id: 'ice-skaters', svgType: 'lateral_bound',
    name: 'Ice Skaters',
    contacts: 1, intensity: 'medium', category: 'futsal-agility',
    sports: ['futsal'],
    levels: ['intermediate', 'advanced'],
    reps: { beginner: 0, intermediate: 10, advanced: 14 },
    sets: { beginner: 0, intermediate: 3, advanced: 4 },
    description: 'Zancadas laterales amplias imitando al patinaje en hielo. Máxima transferencia al cambio de dirección.',
    technique: `<p class="text-gray-300 mb-4">Zancada lateral amplia aterrizando en pie opuesto con equilibrio. Brazo opuesto al frente (coordinación cruzada). La amplitud de zancada debe permitir control total del aterrizaje.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Monopodal: flexión de rodilla 30-40°, cadera empujada atrás</li>
        <li>Tronco inclinado hacia adelante (posición aerodinámica)</li>
        <li>Pie de aterrizaje apuntando al frente, no hacia afuera</li>
      </ul>`,
    warnings: ['Distancia de zancada debe permitir control — no sobreextenderse', 'Detener si hay dolor lateral de rodilla (banda iliotibial)']
  },
  {
    id: 'broad-jumps', svgType: 'broad',
    name: 'Broad Jumps',
    contacts: 1, intensity: 'medium', category: 'general',
    sports: ['futsal', 'basketball'],
    levels: ['intermediate', 'advanced'],
    reps: { beginner: 0, intermediate: 6, advanced: 8 },
    sets: { beginner: 0, intermediate: 3, advanced: 3 },
    description: 'Salto horizontal máximo bipodal a 45°. Combina potencia de piernas y coordinación de brazos.',
    technique: `<p class="text-gray-300 mb-4">Contra-movimiento con balanceo de brazos, proyección a 45°. Al aterrizar, mantener posición estática sin pasos extras. La capacidad de control define la distancia segura.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Ambos pies simultáneos, antepié primero</li>
        <li>Flexión de rodillas ~90° para absorber impacto horizontal</li>
        <li>Brazos al frente como contrapeso y amortiguadores</li>
      </ul>`,
    warnings: ['No aterrizar con piernas extendidas — riesgo articular alto', 'Si pierdes equilibrio al aterrizar, reduce la distancia']
  },
  {
    id: 'hurdle-hops', svgType: 'depth_jump',
    name: 'Hurdle Hops',
    contacts: 1, intensity: 'medium', category: 'general',
    sports: ['futsal', 'basketball'],
    levels: ['intermediate', 'advanced'],
    reps: { beginner: 0, intermediate: 6, advanced: 10 },
    sets: { beginner: 0, intermediate: 3, advanced: 4 },
    description: 'Saltos bipodales continuos sobre 4-6 vallas bajas (20-40 cm). Clásico de la pliometría de SSC rápido.',
    technique: `<p class="text-gray-300 mb-4">Saltos consecutivos sobre vallas bajas minimizando el tiempo de contacto. Rodillas al pecho en el vuelo, aterrizaje reactivo sin pausa entre vallas.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Antepié primero, rebote inmediato — no colapsar</li>
        <li>Rodillas flexionadas 20-30° al contacto</li>
        <li>Tiempo de contacto objetivo: &lt;200 ms (SSC rápido)</li>
      </ul>`,
    warnings: ['Comenzar con 3 vallas y aumentar progresivamente', 'Altura máxima: la mitad de la altura de la rodilla']
  },
  {
    id: 'single-leg-hops-linear', svgType: 'single_leg',
    name: 'Single-Leg Hops (Lineal)',
    contacts: 1, intensity: 'medium', category: 'general',
    sports: ['futsal', 'basketball'],
    levels: ['intermediate', 'advanced'],
    reps: { beginner: 0, intermediate: 8, advanced: 12 },
    sets: { beginner: 0, intermediate: 2, advanced: 3 },
    description: 'Serie de saltos hacia adelante sobre una pierna. Desarrolla potencia monopodal y estabilidad de tobillo.',
    technique: `<p class="text-gray-300 mb-4">Saltos continuos hacia adelante sobre un pie. Minimizar el tiempo de contacto. Trabajar ambas piernas con idéntico volumen.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Antepié primero, tobillo como resorte</li>
        <li>Rodilla alineada sobre el 2.° dedo del pie</li>
        <li>Cadera estable — no inclinar tronco lateralmente</li>
      </ul>`,
    warnings: ['Comenzar con 4-6 reps y aumentar progresivamente', 'Inestabilidad de tobillo: usar vendaje funcional']
  },
  {
    id: 'alternating-bounds', svgType: 'broad',
    name: 'Alternating Bounds',
    contacts: 1, intensity: 'medium', category: 'general',
    sports: ['futsal', 'basketball'],
    levels: ['intermediate', 'advanced'],
    reps: { beginner: 0, intermediate: 8, advanced: 12 },
    sets: { beginner: 0, intermediate: 3, advanced: 4 },
    description: 'Zancadas de salto alternadas de máxima longitud. Desarrolla potencia horizontal y coordinación de carrera.',
    technique: `<p class="text-gray-300 mb-4">Exagera el paso de carrera hasta convertirlo en un salto. Triple extensión completa en cada despegue. Brazos en oposición a las piernas. Objetivo: máxima longitud de zancada.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Monopodal en antepié, rodilla ~30° al contacto</li>
        <li>Absorción elástica rápida → despegue inmediato</li>
        <li>Cabeza neutra, mirada al horizonte</li>
      </ul>`,
    warnings: ['Reducir longitud de zancada si no hay extensión de cadera completa', 'Calentamiento de isquiotibiales obligatorio previo']
  },
  {
    id: 'lateral-box-shuffle', svgType: 'lateral_bound',
    name: 'Lateral Box Shuffle',
    contacts: 1, intensity: 'medium', category: 'futsal-agility',
    sports: ['futsal'],
    levels: ['intermediate', 'advanced'],
    reps: { beginner: 0, intermediate: 10, advanced: 14 },
    sets: { beginner: 0, intermediate: 3, advanced: 4 },
    description: 'Desplazamientos laterales rápidos sobre cajón bajo (15-20 cm). Simula la defensa lateral en futsal.',
    technique: `<p class="text-gray-300 mb-4">Pie derecho sube al cajón, pie izquierdo le sigue, luego pie derecho baja. Mantener caderas bajas y core activado durante todo el movimiento.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Pies activos: antepié primero en cada contacto</li>
        <li>Rodillas flexionadas 30-40° durante todo el ejercicio</li>
        <li>Core activado para mantener estabilidad lateral</li>
      </ul>`,
    warnings: ['Cajón estable y plano obligatorio', 'Reducir velocidad si los pies no coordinan correctamente']
  },
  {
    id: 'tuck-jumps', svgType: 'tuck',
    name: 'Tuck Jumps',
    contacts: 1, intensity: 'high', category: 'general',
    sports: ['futsal', 'basketball'],
    levels: ['intermediate', 'advanced'],
    reps: { beginner: 0, intermediate: 8, advanced: 12 },
    sets: { beginner: 0, intermediate: 3, advanced: 4 },
    description: 'Salto vertical máximo llevando rodillas al pecho. Combina potencia explosiva y coordinación aérea.',
    technique: `<p class="text-gray-300 mb-4">Salto máximo llevando ambas rodillas al pecho simultáneamente. Extender piernas antes del aterrizaje. El aterrizaje es tan crítico como el despegue.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Piernas extendidas antes del contacto inicial</li>
        <li>Antepié primero, rodillas en línea con pies</li>
        <li>Absorción suave: frenar el cuerpo en 3 fases</li>
      </ul>`,
    warnings: ['No colapsar en el aterrizaje — mantener posición atlética', 'Alta demanda del SNC: máximo 3 series para principiantes intermedios']
  },
  {
    id: 'single-leg-hops-transversal', svgType: 'lateral_bound',
    name: 'Single-Leg Hops (Transversal)',
    contacts: 1, intensity: 'high', category: 'futsal-agility',
    sports: ['futsal'],
    levels: ['advanced'],
    reps: { beginner: 0, intermediate: 0, advanced: 10 },
    sets: { beginner: 0, intermediate: 0, advanced: 3 },
    description: 'Saltos laterales sobre una línea en monopodal. Máxima especificidad para los cambios de dirección del futsal.',
    technique: `<p class="text-gray-300 mb-4">Sobre una pierna, salta lateralmente sobre una línea y regresa. Mantener tiempo de contacto mínimo. La estabilidad del tobillo y alineación de rodilla son críticas.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Monopodal reactivo: antepié, tobillo rígido</li>
        <li>Rodilla sobre el pie, cadera estable sin colapso medial</li>
        <li>Tronco neutro, no inclinar para mantener equilibrio</li>
      </ul>`,
    warnings: ['Solo atletas con tobillo estable y dominio de hops lineales', 'Detener ante cualquier dolor lateral de rodilla o tobillo']
  },
  {
    id: 'box-jumps-50', svgType: 'explosive_jump',
    name: 'Box Jumps (50 cm)',
    contacts: 1, intensity: 'high', category: 'basketball-vertical',
    sports: ['basketball'],
    levels: ['advanced'],
    reps: { beginner: 0, intermediate: 0, advanced: 8 },
    sets: { beginner: 0, intermediate: 0, advanced: 4 },
    description: 'Salto vertical sobre cajón de 50 cm. Máxima exigencia de potencia y control articular en aterrizaje.',
    technique: `<p class="text-gray-300 mb-4">Contra-movimiento agresivo y triple extensión máxima. A mayor altura del cajón, más crítico el aterrizaje. "Silencioso = correcto" se aplica más que nunca aquí.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje (altura)</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Antepié, rodillas 60-90°, caderas hacia atrás</li>
        <li>Mayor absorción requerida por la altura adicional</li>
        <li>Nunca aterrizar con piernas extendidas a esta altura</li>
      </ul>`,
    warnings: ['Solo con cajón estructuralmente sólido y certificado', 'Bajar del cajón caminando siempre — sin excepción']
  },
  {
    id: 'drop-jumps', svgType: 'landing',
    name: 'Drop Jumps',
    contacts: 2, intensity: 'high', category: 'basketball-vertical',
    sports: ['basketball'],
    levels: ['advanced'],
    reps: { beginner: 0, intermediate: 0, advanced: 6 },
    sets: { beginner: 0, intermediate: 0, advanced: 3 },
    description: 'Caída desde cajón con aterrizaje controlado y posición mantenida. Énfasis en la fase excéntrica. 2 contactos/rep.',
    technique: `<p class="text-gray-300 mb-4">Paso al vacío desde cajón (30 cm), caída y absorción excéntrica máxima. DIFERENCIA con Depth Jump: aquí NO hay salto posterior. El objetivo es controlar el impacto de la caída.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Caída suave: antepié primero, absorción excéntrica lenta</li>
        <li>Rodillas 60-90°, caderas hacia atrás, tronco levemente inclinado</li>
        <li>Mantener posición 2 segundos para evaluar alineación</li>
      </ul>`,
    warnings: ['Prerequisito: control total de Squat Jumps y Box Jumps', 'Dolor en rodilla = detener y evaluar técnica']
  },
  {
    id: 'diagonal-bounds', svgType: 'broad',
    name: 'Diagonal Bounds',
    contacts: 1, intensity: 'high', category: 'futsal-agility',
    sports: ['futsal'],
    levels: ['advanced'],
    reps: { beginner: 0, intermediate: 0, advanced: 10 },
    sets: { beginner: 0, intermediate: 0, advanced: 3 },
    description: 'Zancadas de salto a 45° alternando diagonales. Replica los cambios de dirección oblicuos del futsal.',
    technique: `<p class="text-gray-300 mb-4">Desde posición central, saltos alternados hacia adelante-derecha, adelante-izquierda, etc. La dirección diagonal es la clave de especificidad para el futsal de alta intensidad.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Monopodal reactivo en la diagonal, pie orientado a la dirección de llegada</li>
        <li>Rodilla sobre el pie en el eje oblicuo (desafío aumentado)</li>
        <li>Rebote inmediato: tiempo de contacto &lt;150 ms objetivo</li>
      </ul>`,
    warnings: ['Alta demanda del SNC: no ejecutar con fatiga acumulada', 'Superficie antideslizante obligatoria para la componente diagonal']
  },
  {
    id: 'split-jumps', svgType: 'split',
    name: 'Split Jumps',
    contacts: 2, intensity: 'high', category: 'basketball-vertical',
    sports: ['basketball'],
    levels: ['advanced'],
    reps: { beginner: 0, intermediate: 0, advanced: 8 },
    sets: { beginner: 0, intermediate: 0, advanced: 3 },
    description: 'Salto con zancada alternada en el aire. 2 contactos/rep. Máxima demanda neuromuscular.',
    technique: `<p class="text-gray-300 mb-4">Desde zancada, salto vertical máximo intercambiando piernas en el aire. Cada rep = 2 contactos. Brazos opuestos a las piernas para coordinar la rotación aérea.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Zancada suave: rodilla delantera ~90°, trasera no toca el suelo</li>
        <li>Torso erguido, core tensionado para absorber torsión</li>
        <li>Coordinación cruzada: brazo derecho adelante con pierna izquierda</li>
      </ul>`,
    warnings: ['Solo atletas con sentadilla >1.5× peso corporal', 'Detener ante cualquier dolor en rodilla, cadera o espalda baja']
  },
  {
    id: 'depth-jumps', svgType: 'depth_jump',
    name: 'Depth Jumps',
    contacts: 2, intensity: 'high', category: 'general',
    sports: ['futsal', 'basketball'],
    levels: ['advanced'],
    reps: { beginner: 0, intermediate: 0, advanced: 6 },
    sets: { beginner: 0, intermediate: 0, advanced: 3 },
    description: 'Caída desde cajón + salto inmediato. El ejercicio de mayor demanda neurológica. 2 contactos/rep.',
    technique: `<p class="text-gray-300 mb-4">Paso al vacío desde cajón (30-50 cm), contacto con suelo &lt;0.25s y salto máximo. Ciclo elástico puro: la energía se almacena en la caída y se libera en el despegue.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Antepié, absorción rápida y elástica — no colapsar</li>
        <li>Alineación perfecta: tobillo-rodilla-cadera-hombro</li>
        <li>"Tierra y despega": no hay pausa, el reflejo miotático es el motor</li>
      </ul>`,
    warnings: [
      'Solo atletas avanzados con base de fuerza consolidada',
      'Máximo 4 series por sesión — calidad sobre cantidad',
      'Nunca ejecutar con fatiga muscular acumulada',
      'Superficie firme, plana y antideslizante obligatoria'
    ]
  },
  {
    id: 'reactive-lateral-hops', svgType: 'lateral_bound',
    name: 'Reactive Lateral Hops',
    contacts: 2, intensity: 'high', category: 'futsal-agility',
    sports: ['futsal'],
    levels: ['advanced'],
    reps: { beginner: 0, intermediate: 0, advanced: 8 },
    sets: { beginner: 0, intermediate: 0, advanced: 3 },
    description: 'Saltos laterales reactivos en monopodal con tiempo de contacto mínimo. 2 contactos/rep (ambas piernas).',
    technique: `<p class="text-gray-300 mb-4">Salto lateral en monopodal izquierdo → aterrizaje monopodal derecho → salto lateral derecho → aterrizaje monopodal izquierdo. Patrón continuo de 2 contactos por ciclo.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Contacto puntual en antepié, rebote inmediato</li>
        <li>Cadera baja, rodilla alineada — no permitir valgo reactivo</li>
        <li>Objetivo: &lt;0.2s de tiempo de contacto en tierra</li>
      </ul>`,
    warnings: ['Solo con tobillo y rodilla estables', 'Reducir amplitud lateral si la rodilla colapsa en valgo']
  },
  {
    id: 'speed-bounds', svgType: 'broad',
    name: 'Speed Bounds',
    contacts: 1, intensity: 'high', category: 'general',
    sports: ['futsal', 'basketball'],
    levels: ['advanced'],
    reps: { beginner: 0, intermediate: 0, advanced: 8 },
    sets: { beginner: 0, intermediate: 0, advanced: 3 },
    description: 'Bounds horizontales a velocidad máxima. El ejercicio más específico para sprints explosivos.',
    technique: `<p class="text-gray-300 mb-4">Bounds con máxima velocidad de desplazamiento horizontal. El énfasis es la cadencia + potencia, no solo la longitud de zancada.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Monopodal reactivo: antepié, absorción mínima (elástica)</li>
        <li>Rodilla flexionada 20-30° al contacto</li>
        <li>Tronco inclinado 15-20° hacia adelante, mirada al frente</li>
      </ul>`,
    warnings: ['Requiere base de fuerza y coordinación sólidas', 'Progresar 70% → 85% → 100% en las primeras sesiones']
  },
  {
    id: 'box-jump-stick', svgType: 'landing',
    name: 'Box Jump to Stick',
    contacts: 1, intensity: 'medium', category: 'basketball-vertical',
    sports: ['basketball'],
    levels: ['intermediate', 'advanced'],
    reps: { beginner: 0, intermediate: 6, advanced: 8 },
    sets: { beginner: 0, intermediate: 3, advanced: 4 },
    description: 'Salto al cajón con aterrizaje controlado mantenido 2 segundos. Énfasis en estabilidad de aterrizaje vertical.',
    technique: `<p class="text-gray-300 mb-4">Igual que Box Jump pero con foco total en el aterrizaje. Mantener la posición estática ("stick") durante 2 segundos completos antes de bajar. Desarrolla control articular y propiocepción.</p>
      <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mecánica de aterrizaje</h4>
      <ul class="text-gray-300 space-y-1.5 list-disc list-inside mb-4">
        <li>Antepié, rodillas sobre pies, caderas ligeramente atrás</li>
        <li>Mantener posición 2 segundos — evaluar alineación</li>
        <li>Si el "stick" es inestable, reducir altura del cajón</li>
      </ul>`,
    warnings: ['La inestabilidad en el stick indica que no es el momento para mayor altura', 'Bajar caminando siempre']
  }
];

// ── Recovery stretches ────────────────────────────────────────────────────────

const STRETCHES = [
  {
    emoji: '🦵', name: 'Gemelos',
    side: 'Cada pierna — 30 segundos',
    desc: 'Apoya las manos en la pared. Pie trasero extendido con el talón firmemente en el suelo. Inclínate levemente hacia adelante. Rodilla trasera extendida.'
  },
  {
    emoji: '🦴', name: 'Sóleo (Pantorrilla Profunda)',
    side: 'Cada pierna — 30 segundos',
    desc: 'Misma posición que gemelo, pero flexiona levemente la rodilla trasera (15°). El sóleo absorbe el impacto pliométrico y necesita atención especial.'
  },
  {
    emoji: '🏃', name: 'Flexores de Cadera (Psoas)',
    side: 'Cada cadera — 30 segundos',
    desc: 'Posición de caballero: rodilla trasera en el suelo, pie delantero al frente. Empuja suavemente las caderas hacia adelante manteniendo la espalda erguida.'
  }
];

const CIRCUMFERENCE = 2 * Math.PI * 54; // 339.29

// ── State ─────────────────────────────────────────────────────────────────────

const state = {
  view: 'setup',
  sport: null, level: null, exercises: [],
  sessionContacts: 0, contactsLimit: 100, fatigueLevel: null,
  setsDone: {},
  timerInterval: null, timerSeconds: 0,
  recovery: { step: -1, interval: null, seconds: 0 }
};

const metronome = { audioCtx: null, intervalId: null, bpm: 120, isPlaying: false };

let wakeLock       = null;
let pendingSession = null;
let quickExercises = [];

// ── LocalStorage ──────────────────────────────────────────────────────────────

function loadConfig() {
  try {
    const c = JSON.parse(localStorage.getItem('plyo_config') || 'null');
    if (!c) return;
    if (c.sport) selectSport(c.sport, false);
    if (c.level) selectLevel(c.level, false);
  } catch (_) {}
}
function saveConfig() {
  localStorage.setItem('plyo_config', JSON.stringify({ sport: state.sport, level: state.level }));
}
function loadSessions() {
  try { return JSON.parse(localStorage.getItem('plyo_sessions') || '[]'); }
  catch (_) { return []; }
}
function saveSessions(s) { localStorage.setItem('plyo_sessions', JSON.stringify(s.slice(-30))); }

// ── Wake Lock ─────────────────────────────────────────────────────────────────

async function requestWakeLock() {
  if (!('wakeLock' in navigator)) return;
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    wakeLock.addEventListener('release', () => { wakeLock = null; });
  } catch (_) {}
}
function releaseWakeLock() {
  if (wakeLock) { wakeLock.release().catch(() => {}); wakeLock = null; }
}

// ── Navigation ────────────────────────────────────────────────────────────────

function navigate(view) {
  if (state.view === 'training' && view !== 'training') {
    stopMetronome();
    stopMusic();
    if (typeof spStopPolling === 'function') spStopPolling();
    releaseWakeLock();
  }
  if (view === 'training' && typeof spStartPolling === 'function') spStartPolling();
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById('view-' + view).classList.remove('hidden');
  state.view = view;
  if (view === 'dashboard') loadDashboard();
  if (view === 'setup') renderHomeStats();
}

// ── Setup ─────────────────────────────────────────────────────────────────────

function selectSport(sport, save = true) {
  state.sport = sport;
  document.querySelectorAll('.sport-card').forEach(c =>
    c.classList.remove('selected-futsal', 'selected-basketball')
  );
  document.querySelector(`.sport-card[data-sport="${sport}"]`)?.classList.add(`selected-${sport}`);
  updateStartButton();
  if (save) saveConfig();
}
function selectLevel(level, save = true) {
  state.level = level;
  document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('selected'));
  document.querySelector(`.level-btn[data-level="${level}"]`)?.classList.add('selected');
  updateStartButton();
  if (save) saveConfig();
}
function updateStartButton() {
  const btn = document.getElementById('btn-start');
  btn.classList.remove('btn-start-disabled', 'btn-start-futsal', 'btn-start-basketball');
  if (state.sport && state.level) {
    btn.disabled = false;
    btn.classList.add(`btn-start-${state.sport}`);
  } else {
    btn.disabled = true;
    btn.classList.add('btn-start-disabled');
  }
}

// ── Quick Session ─────────────────────────────────────────────────────────────

function prepareQuickSession() {
  if (!state.sport || !state.level) { showToast('Selecciona deporte y nivel primero'); return; }

  const pool = EXERCISES.filter(ex =>
    ex.sports.includes(state.sport) &&
    ex.levels.includes(state.level) &&
    ex.reps[state.level] > 0 &&
    ex.intensity !== 'high'
  );

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  quickExercises = [];
  let projected = 0;

  for (const ex of shuffled) {
    const c = ex.sets[state.level] * ex.reps[state.level] * ex.contacts;
    if (quickExercises.length < 5 && projected + c <= 75) {
      quickExercises.push(ex);
      projected += c;
      if (quickExercises.length >= 3 && projected >= 40) break;
    }
  }

  if (!quickExercises.length) { showToast('No hay ejercicios disponibles'); return; }

  const BADGE = { low: 'badge-low', medium: 'badge-medium' };
  const INT   = { low: 'Baja', medium: 'Media' };

  document.getElementById('quick-session-list').innerHTML = quickExercises.map(ex => `
    <div class="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
      <span class="text-sm font-medium">${ex.name}</span>
      <div class="flex items-center gap-2">
        <span class="badge ${BADGE[ex.intensity]}">${INT[ex.intensity]}</span>
        <span class="text-xs text-gray-500">${ex.sets[state.level]}×${ex.reps[state.level]}</span>
      </div>
    </div>`).join('');

  document.getElementById('quick-session-count').textContent    = `${quickExercises.length} ejercicios`;
  document.getElementById('quick-session-contacts').textContent = `~${projected} contactos`;
  document.getElementById('modal-quick-session').classList.remove('hidden');
}

function startQuickSession() {
  document.getElementById('modal-quick-session').classList.add('hidden');
  state.exercises = quickExercises;
  state.sessionContacts = 0;
  state.contactsLimit = 100;
  state.fatigueLevel = 1;
  state.setsDone = {};
  state.exercises.forEach(ex => { state.setsDone[ex.id] = 0; });
  renderTraining();
  navigate('training');
  requestWakeLock();
}

// ── Fatigue modal ─────────────────────────────────────────────────────────────

function startSession() {
  if (!state.sport || !state.level) return;
  openFatigueModal();
}

function openFatigueModal() {
  state.fatigueLevel = null;
  state.contactsLimit = 100;
  document.querySelectorAll('.fatigue-btn').forEach(b => b.classList.remove('fatigue-selected'));
  document.getElementById('fatigue-warning').classList.add('hidden');
  const btn = document.getElementById('fatigue-confirm-btn');
  btn.disabled = true;
  btn.classList.add('opacity-40', 'cursor-not-allowed');
  document.getElementById('modal-fatigue').classList.remove('hidden');
}

function selectFatigue(level) {
  state.fatigueLevel = level;
  document.querySelectorAll('.fatigue-btn').forEach(b => b.classList.remove('fatigue-selected'));
  document.querySelector(`.fatigue-btn[data-fatigue="${level}"]`)?.classList.add('fatigue-selected');
  const btn = document.getElementById('fatigue-confirm-btn');
  btn.disabled = false;
  btn.classList.remove('opacity-40', 'cursor-not-allowed');
  if (level >= 4) {
    state.contactsLimit = 70;
    document.getElementById('fatigue-limit-val').textContent = '70';
    document.getElementById('fatigue-warning').classList.remove('hidden');
  } else {
    state.contactsLimit = 100;
    document.getElementById('fatigue-warning').classList.add('hidden');
  }
}

function confirmFatigue() {
  document.getElementById('modal-fatigue').classList.add('hidden');
  state.exercises = EXERCISES.filter(ex =>
    ex.sports.includes(state.sport) && ex.levels.includes(state.level) && ex.reps[state.level] > 0
  );
  state.sessionContacts = 0;
  state.setsDone = {};
  state.exercises.forEach(ex => { state.setsDone[ex.id] = 0; });
  renderTraining();
  navigate('training');
  requestWakeLock();
}

// ── Training render ───────────────────────────────────────────────────────────

function renderTraining() {
  const sportLabel = state.sport === 'futsal' ? '⚽ Futsal' : '🏀 Básquetbol';
  const levelLabel = { beginner: 'Principiante', intermediate: 'Intermedio', advanced: 'Avanzado' }[state.level];
  const reduced    = state.fatigueLevel >= 4 ? ' · ⚠️ Límite: 70' : '';

  document.getElementById('training-title').textContent    = sportLabel;
  document.getElementById('training-subtitle').textContent = `${levelLabel} · ${state.exercises.length} ejercicios${reduced}`;
  updateContactsBar(0);

  const CAT   = { 'futsal-agility': '⚽ Agilidad', 'basketball-vertical': '🏀 Vertical', 'general': '⚡ General' };
  const INT   = { low: 'Baja', medium: 'Media', high: 'Alta' };
  const BADGE = { low: 'badge-low', medium: 'badge-medium', high: 'badge-high' };

  const list = document.getElementById('exercise-list');
  list.innerHTML = '';

  state.exercises.forEach(ex => {
    const sets = ex.sets[state.level], reps = ex.reps[state.level];
    let dots = '';
    for (let i = 0; i < sets; i++) dots += `<span class="set-dot" id="dot-${ex.id}-${i}"></span>`;

    const card = document.createElement('div');
    card.className = 'glass-card p-5 exercise-card';
    card.id = `card-${ex.id}`;
    card.innerHTML = `
      <div class="flex justify-between items-start mb-3">
        <div class="flex-1 pr-3">
          <h3 class="font-bold text-base leading-tight">${ex.name}</h3>
          <p class="text-xs text-gray-400 mt-0.5 leading-snug">${ex.description}</p>
        </div>
        <div class="flex flex-col items-end gap-1">
          <span class="badge ${BADGE[ex.intensity]}">${INT[ex.intensity]}</span>
          <span class="badge badge-category">${CAT[ex.category]}</span>
        </div>
      </div>
      <div class="flex items-center gap-5 mb-4">
        <div class="text-center"><div class="text-2xl font-extrabold">${sets}</div><div class="text-xs text-gray-500">series</div></div>
        <div class="text-center"><div class="text-2xl font-extrabold">${reps}</div><div class="text-xs text-gray-500">reps</div></div>
        <div class="text-center"><div class="text-2xl font-extrabold">${ex.contacts}</div><div class="text-xs text-gray-500">ctc/rep</div></div>
        <div class="ml-auto flex gap-1.5 items-center">${dots}</div>
      </div>
      <div class="flex gap-2">
        <button class="complete-btn flex-1 py-2.5 text-sm font-semibold" id="complete-btn-${ex.id}"
          onclick="completeSet('${ex.id}', ${reps}, ${sets})">✓ Serie completada</button>
        <button class="glass-card px-4 py-2.5 text-xs text-gray-400 hover:text-white transition-colors rounded-xl"
          onclick="openTechModal('${ex.id}')">Guía técnica</button>
      </div>`;
    list.appendChild(card);
  });
}

// ── Complete set ──────────────────────────────────────────────────────────────

function completeSet(exId, reps, totalSets) {
  const done = state.setsDone[exId];
  if (done >= totalSets) return;

  document.getElementById(`dot-${exId}-${done}`)?.classList.add('done');
  state.setsDone[exId] = done + 1;

  const ex = EXERCISES.find(e => e.id === exId);
  state.sessionContacts += reps * ex.contacts;
  updateContactsBar(state.sessionContacts);

  if (navigator.vibrate) navigator.vibrate([40, 20, 40]);

  if (state.setsDone[exId] >= totalSets) {
    const btn = document.getElementById(`complete-btn-${exId}`);
    if (btn) { btn.disabled = true; btn.textContent = '✓ Completado'; }
    document.getElementById(`card-${exId}`)?.classList.add('all-done');
  }

  startTimer(120);
}

// ── Contacts bar ──────────────────────────────────────────────────────────────

function updateContactsBar(total) {
  const limit   = state.contactsLimit;
  const bar     = document.getElementById('contacts-bar');
  const display = document.getElementById('contacts-display');
  const warning = document.getElementById('contacts-warning');
  const pct     = Math.min((total / limit) * 100, 100);

  bar.style.width = pct + '%';
  display.textContent = `${total} / ${limit}`;
  bar.classList.remove('bar-safe', 'bar-warning', 'bar-danger');
  display.classList.remove('text-red-400', 'text-yellow-400');

  if (total > limit) {
    bar.classList.add('bar-danger'); display.classList.add('text-red-400');
    warning.classList.remove('hidden');
  } else if (total > limit * 0.7) {
    bar.classList.add('bar-warning'); display.classList.add('text-yellow-400');
    warning.classList.add('hidden');
  } else {
    bar.classList.add('bar-safe'); warning.classList.add('hidden');
  }
}

// ── Rest timer ────────────────────────────────────────────────────────────────

function startTimer(seconds) {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerSeconds = seconds;

  const overlay = document.getElementById('timer-overlay');
  const display = document.getElementById('timer-display');
  const ring    = document.getElementById('timer-ring');

  overlay.classList.remove('hidden');
  ring.style.stroke = '#22c55e';
  ring.style.strokeDashoffset = '0';

  function tick() {
    const m = Math.floor(state.timerSeconds / 60);
    const s = state.timerSeconds % 60;
    display.textContent = `${m}:${s.toString().padStart(2, '0')}`;
    ring.style.strokeDashoffset = CIRCUMFERENCE * (1 - state.timerSeconds / seconds);
    if (state.timerSeconds <= 30) ring.style.stroke = '#ef4444';
    else if (state.timerSeconds <= 60) ring.style.stroke = '#eab308';

    if (state.timerSeconds <= 0) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
      overlay.classList.add('hidden');
      if (navigator.vibrate) navigator.vibrate([80, 40, 80, 40, 200]);
      return;
    }
    state.timerSeconds--;
  }
  tick();
  state.timerInterval = setInterval(tick, 1000);
}

function cancelTimer() {
  if (state.timerInterval) { clearInterval(state.timerInterval); state.timerInterval = null; }
  document.getElementById('timer-overlay').classList.add('hidden');
}

// ── Technical guide modal ─────────────────────────────────────────────────────

function openTechModal(exId) {
  const ex = EXERCISES.find(e => e.id === exId);
  if (!ex) return;

  const CAT   = { 'futsal-agility': '⚽ Agilidad', 'basketball-vertical': '🏀 Vertical', 'general': '⚡ General' };
  const BADGE = { low: 'badge-low', medium: 'badge-medium', high: 'badge-high' };
  const INT   = { low: 'Baja', medium: 'Media', high: 'Alta' };

  document.getElementById('modal-title').textContent = ex.name;

  const svgHtml = ex.svgType && SVG_TYPES[ex.svgType]
    ? `<div class="exercise-illustration">${SVG_TYPES[ex.svgType]}</div>`
    : '';

  const badgesHtml = `<div class="flex flex-wrap gap-2 mb-4">
    <span class="badge ${BADGE[ex.intensity]}">Intensidad ${INT[ex.intensity]}</span>
    <span class="badge badge-category">${CAT[ex.category]}</span>
    <span class="badge" style="background:rgba(255,255,255,.07);color:#94a3b8;border:1px solid rgba(255,255,255,.12)">${ex.contacts} contacto${ex.contacts > 1 ? 's' : ''}/rep</span>
  </div>`;

  const warningsHtml = ex.warnings.length ? `
    <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 mt-5">⚠️ Advertencias</h4>
    <ul class="space-y-2">${ex.warnings.map(w =>
      `<li class="flex gap-2 text-sm"><span class="text-red-400 shrink-0 mt-0.5">•</span><span class="text-red-300">${w}</span></li>`
    ).join('')}</ul>` : '';

  document.getElementById('modal-body').innerHTML = svgHtml + badgesHtml + ex.technique + warningsHtml;
  document.getElementById('modal-tech').classList.remove('hidden');
}
function closeModal() { document.getElementById('modal-tech').classList.add('hidden'); }

// ── End session → Notes modal ─────────────────────────────────────────────────

function endSession() {
  cancelTimer();
  stopMetronome();
  releaseWakeLock();

  const completedCount = Object.values(state.setsDone).filter(v => v > 0).length;
  const HIGH_IDS = ['depth-jumps', 'split-jumps', 'drop-jumps', 'tuck-jumps',
    'reactive-lateral-hops', 'speed-bounds', 'diagonal-bounds', 'single-leg-hops-transversal'];
  const usedHigh = state.exercises.some(ex => HIGH_IDS.includes(ex.id) && (state.setsDone[ex.id] || 0) > 0);

  pendingSession = {
    date: new Date().toISOString().split('T')[0],
    sport: state.sport, level: state.level,
    totalContacts: state.sessionContacts,
    exercisesCompleted: completedCount,
    fatigueLevel: state.fatigueLevel,
    highIntensity: state.sessionContacts > 80 || usedHigh,
    notes: ''
  };

  document.getElementById('session-notes-input').value = '';
  document.getElementById('modal-notes').classList.remove('hidden');
}

function confirmNotes() {
  const notes = document.getElementById('session-notes-input').value.trim();
  if (pendingSession) pendingSession.notes = notes;
  document.getElementById('modal-notes').classList.add('hidden');

  const sessions = loadSessions();
  sessions.push(pendingSession);
  saveSessions(sessions);

  const contacts = pendingSession.totalContacts || 0;
  const approxMin = Math.max(5, Math.min(20, Math.round(contacts / 6)));
  const sessionXP = Math.min(200, 50 + approxMin * 10);
  bumpStreak();
  addXP(sessionXP, `sesión · ${approxMin} min`);
  markGoalProgress('train', approxMin);

  pushSessionToServer(pendingSession);

  const isHigh = pendingSession?.highIntensity;
  pendingSession = null;

  if (isHigh) { openRecoveryModal(); }
  else { showToast('¡Sesión guardada! 💪'); navigate('dashboard'); }
}

// ── Recovery modal ────────────────────────────────────────────────────────────

function openRecoveryModal() {
  state.recovery.step = -1;
  if (state.recovery.interval) { clearInterval(state.recovery.interval); state.recovery.interval = null; }
  document.getElementById('modal-recovery').classList.remove('hidden');
  renderRecoveryStep(-1);
}

function renderRecoveryStep(step) {
  const countdown = document.getElementById('recovery-countdown');
  const actionBtn = document.getElementById('recovery-action-btn');
  const dotsEl    = document.getElementById('recovery-dots');

  if (step === -1) {
    document.getElementById('recovery-emoji').textContent = '🧘';
    document.getElementById('recovery-name').textContent  = 'Protocolo de Descarga';
    document.getElementById('recovery-desc').textContent  = '3 estiramientos clave para proteger articulaciones y acelerar la recuperación del SNC.';
    countdown.textContent = '3 × 30s';
    countdown.style.color = '#fff';
    document.getElementById('recovery-side').textContent  = '';
    dotsEl.innerHTML = STRETCHES.map(() => '<span class="rec-dot"></span>').join('');
    actionBtn.textContent = 'Comenzar →';
    actionBtn.className   = 'w-full py-3 rounded-xl font-semibold bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30 transition-all';
    return;
  }

  if (step >= STRETCHES.length) {
    if (state.recovery.interval) { clearInterval(state.recovery.interval); state.recovery.interval = null; }
    document.getElementById('recovery-emoji').textContent = '✅';
    document.getElementById('recovery-name').textContent  = '¡Descarga completada!';
    document.getElementById('recovery-desc').textContent  = 'Tu sistema nervioso y articular queda protegido para la siguiente sesión.';
    countdown.textContent = '';
    document.getElementById('recovery-side').textContent  = '';
    dotsEl.innerHTML = STRETCHES.map(() => '<span class="rec-dot rec-dot-done"></span>').join('');
    actionBtn.textContent = 'Ver Dashboard →';
    actionBtn.className   = 'w-full py-3 rounded-xl font-semibold bg-emerald-500 text-white hover:brightness-110 transition-all';
    return;
  }

  const stretch = STRETCHES[step];
  document.getElementById('recovery-emoji').textContent = stretch.emoji;
  document.getElementById('recovery-name').textContent  = stretch.name;
  document.getElementById('recovery-desc').textContent  = stretch.desc;
  countdown.textContent = '30';
  countdown.style.color = '#22c55e';
  document.getElementById('recovery-side').textContent  = stretch.side;
  dotsEl.innerHTML = STRETCHES.map((_, i) =>
    `<span class="rec-dot ${i < step ? 'rec-dot-done' : i === step ? 'rec-dot-active' : ''}"></span>`
  ).join('');
  actionBtn.textContent = 'Saltear →';
  actionBtn.className   = 'w-full py-3 rounded-xl font-semibold bg-white/10 border border-white/15 text-gray-300 hover:bg-white/15 transition-all';

  state.recovery.seconds = 30;
  if (state.recovery.interval) clearInterval(state.recovery.interval);
  state.recovery.interval = setInterval(() => {
    state.recovery.seconds--;
    countdown.textContent = state.recovery.seconds;
    if (state.recovery.seconds <= 0) {
      clearInterval(state.recovery.interval);
      state.recovery.interval = null;
      if (navigator.vibrate) navigator.vibrate([60, 30, 60]);
      state.recovery.step++;
      setTimeout(() => renderRecoveryStep(state.recovery.step), 400);
    }
  }, 1000);
}

function advanceRecovery() {
  if (state.recovery.interval) { clearInterval(state.recovery.interval); state.recovery.interval = null; }
  if (state.recovery.step === -1) {
    state.recovery.step = 0;
    renderRecoveryStep(0);
  } else if (state.recovery.step >= STRETCHES.length) {
    document.getElementById('modal-recovery').classList.add('hidden');
    showToast('¡Sesión completada! 💪'); navigate('dashboard');
  } else {
    state.recovery.step++;
    renderRecoveryStep(state.recovery.step);
  }
}

function skipRecovery() {
  if (state.recovery.interval) { clearInterval(state.recovery.interval); state.recovery.interval = null; }
  document.getElementById('modal-recovery').classList.add('hidden');
  showToast('Sesión guardada 💪'); navigate('dashboard');
}

// ── Dashboard ─────────────────────────────────────────────────────────────────

function loadDashboard() {
  const sessions  = loadSessions();
  const now       = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay());
  weekStart.setHours(0, 0, 0, 0);

  const week = sessions.filter(s => new Date(s.date + 'T12:00:00') >= weekStart);
  document.getElementById('dash-days').textContent     = new Set(week.map(s => s.date)).size;
  document.getElementById('dash-contacts').textContent = week.reduce((n, s) => n + (s.totalContacts || 0), 0);

  renderChart(sessions.slice(-7));
  renderHistory([...sessions.slice(-7)].reverse());
}

function renderChart(sessions) {
  const container = document.getElementById('dash-chart');
  if (!sessions.length) {
    container.innerHTML = '<p class="text-sm text-gray-500 text-center py-6">Sin sesiones registradas aún.</p>';
    return;
  }
  const max = Math.max(...sessions.map(s => s.totalContacts || 0), 1);
  const COLORS = { futsal: '#22c55e', basketball: '#f97316' };
  const bars   = sessions.map(s => {
    const h = Math.max(Math.round(((s.totalContacts || 0) / max) * 80), 4);
    return `<div class="flex-1 rounded-t-md" style="height:${h}px;background:${COLORS[s.sport]||'#6b7280'};opacity:${s.highIntensity?'1':'.7'}"></div>`;
  }).join('');
  const counts = sessions.map(s => `<div class="flex-1 text-center text-xs text-gray-400 tabular-nums">${s.totalContacts||0}</div>`).join('');
  const labels = sessions.map(s => {
    const d = new Date(s.date + 'T12:00:00');
    return `<div class="flex-1 text-center text-xs text-gray-500 capitalize">${d.toLocaleDateString('es',{weekday:'short'})}</div>`;
  }).join('');
  container.innerHTML = `
    <div class="flex items-end gap-1.5 mb-1" style="height:80px">${bars}</div>
    <div class="flex gap-1.5 mt-2 mb-0.5">${counts}</div>
    <div class="flex gap-1.5">${labels}</div>
    <div class="flex gap-4 mt-3 pt-3 border-t border-white/10">
      <span class="flex items-center gap-1.5 text-xs text-gray-500"><span class="w-2.5 h-2.5 rounded-sm inline-block" style="background:#22c55e"></span>Futsal</span>
      <span class="flex items-center gap-1.5 text-xs text-gray-500"><span class="w-2.5 h-2.5 rounded-sm inline-block" style="background:#f97316"></span>Básquetbol</span>
    </div>`;
}

function renderHistory(sessions) {
  const container = document.getElementById('dash-history');
  if (!sessions.length) {
    container.innerHTML = '<p class="text-sm text-gray-500 text-center py-6">¡Comienza tu primera sesión!</p>';
    return;
  }
  const LEVEL = { beginner: 'Principiante', intermediate: 'Intermedio', advanced: 'Avanzado' };
  const EMOJI = { futsal: '⚽', basketball: '🏀' };
  container.innerHTML = sessions.map(s => {
    const d = new Date(s.date + 'T12:00:00');
    const dateStr = d.toLocaleDateString('es', { weekday:'short', day:'numeric', month:'short' });
    const cColor  = (s.totalContacts||0) > 100 ? 'text-red-400' : (s.totalContacts||0) > 70 ? 'text-yellow-400' : 'text-emerald-400';
    const badges  = `${s.highIntensity ? '<span class="text-xs text-red-400 ml-1" title="Alta intensidad">🔴</span>' : ''}${(s.fatigueLevel||0) >= 4 ? '<span class="text-xs text-yellow-400 ml-1" title="Fatiga alta">⚠️</span>' : ''}${s.notes ? '<span class="text-xs text-blue-400 ml-1" title="Con notas">📝</span>' : ''}`;
    return `
      <div class="glass-card px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="text-xl">${EMOJI[s.sport]||'🏃'}</span>
          <div>
            <div class="text-sm font-semibold capitalize">${dateStr}${badges}</div>
            <div class="text-xs text-gray-500">${LEVEL[s.level]||s.level} · ${s.exercisesCompleted||0} ejercicios</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-base font-extrabold tabular-nums ${cColor}">${s.totalContacts||0}</div>
          <div class="text-xs text-gray-500">contactos</div>
        </div>
      </div>`;
  }).join('');
}

// ── Metronome (Web Audio API) ─────────────────────────────────────────────────

function initAudio() {
  if (!metronome.audioCtx) metronome.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (metronome.audioCtx.state === 'suspended') metronome.audioCtx.resume();
}
function playClick() {
  const ctx = metronome.audioCtx;
  const osc = ctx.createOscillator(), gain = ctx.createGain();
  osc.connect(gain); gain.connect(ctx.destination);
  osc.type = 'sine'; osc.frequency.setValueAtTime(1200, ctx.currentTime);
  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 0.002);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
  osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.08);
  pulseBeat();
}

function pulseBeat() {
  const el = document.getElementById('beat-pulse');
  if (!el) return;
  el.classList.add('active');
  setTimeout(() => el.classList.remove('active'), 90);
}
function toggleMetronome() { metronome.isPlaying ? stopMetronome() : startMetronome(); }
function startMetronome() {
  initAudio(); metronome.isPlaying = true; playClick();
  metronome.intervalId = setInterval(playClick, (60 / metronome.bpm) * 1000);
  updateMetronomeUI();
}
function stopMetronome() {
  if (metronome.intervalId) { clearInterval(metronome.intervalId); metronome.intervalId = null; }
  metronome.isPlaying = false; updateMetronomeUI();
}
function changeBPM(delta) {
  metronome.bpm = Math.max(40, Math.min(240, metronome.bpm + delta));
  document.getElementById('bpm-display').textContent = `${metronome.bpm} BPM`;
  if (metronome.isPlaying) {
    clearInterval(metronome.intervalId);
    metronome.intervalId = setInterval(playClick, (60 / metronome.bpm) * 1000);
  }
}
function updateMetronomeUI() {
  const btn = document.getElementById('metro-play-btn');
  const panel = document.getElementById('metronome-panel');
  if (!btn) return;
  if (metronome.isPlaying) {
    btn.textContent = '⏹ Stop'; btn.classList.add('metro-active'); panel?.classList.add('metro-playing');
  } else {
    btn.textContent = '▶ Play'; btn.classList.remove('metro-active'); panel?.classList.remove('metro-playing');
  }
}

// ── Tap-to-sync BPM (promedia los intervalos entre taps) ──────────────────────

const tapState = { buffer: [], flashTimeout: null };

function tapBPM() {
  const now = performance.now();
  // Reset si han pasado >2s desde el último tap
  if (tapState.buffer.length && now - tapState.buffer[tapState.buffer.length - 1] > 2000) {
    tapState.buffer.length = 0;
  }
  tapState.buffer.push(now);
  // Mantener ventana deslizante de 8 taps
  if (tapState.buffer.length > 8) tapState.buffer.shift();

  // Feedback visual inmediato en el botón
  const btn = document.getElementById('tap-btn');
  btn?.classList.add('tap-flash');
  if (tapState.flashTimeout) clearTimeout(tapState.flashTimeout);
  tapState.flashTimeout = setTimeout(() => btn?.classList.remove('tap-flash'), 100);

  if (tapState.buffer.length < 2) {
    showToast('🥁 Sigue tocando al ritmo…');
    return;
  }

  // Promedio de intervalos → BPM
  let sum = 0;
  for (let i = 1; i < tapState.buffer.length; i++) sum += tapState.buffer[i] - tapState.buffer[i - 1];
  const avgMs = sum / (tapState.buffer.length - 1);
  const bpm   = Math.round(60000 / avgMs);

  metronome.bpm = Math.max(40, Math.min(240, bpm));
  document.getElementById('bpm-display').textContent = `${metronome.bpm} BPM`;

  if (metronome.isPlaying) {
    clearInterval(metronome.intervalId);
    metronome.intervalId = setInterval(playClick, (60 / metronome.bpm) * 1000);
  }
  if (tapState.buffer.length >= 4) showToast(`✓ ${metronome.bpm} BPM detectados`);
}

// ── Music player (local file, convive con el metrónomo) ───────────────────────

const musicState = { objectUrl: null, volume: 0.7 };

function loadMusicFile(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const audio = document.getElementById('music-player');
  if (musicState.objectUrl) URL.revokeObjectURL(musicState.objectUrl);
  musicState.objectUrl = URL.createObjectURL(file);
  audio.src = musicState.objectUrl;
  audio.volume = musicState.volume;
  audio.load();

  const name = file.name.replace(/\.[^/.]+$/, '');
  document.getElementById('music-name').textContent = name.length > 22 ? name.slice(0, 22) + '…' : name;
  document.getElementById('music-controls').classList.remove('hidden');
  updateMusicUI();
}

function toggleMusic() {
  const audio = document.getElementById('music-player');
  if (!audio.src) return;
  if (audio.paused) {
    audio.play().catch(() => showToast('No se pudo reproducir'));
  } else {
    audio.pause();
  }
  setTimeout(updateMusicUI, 30);
}

function changeMusicVolume(delta) {
  musicState.volume = Math.max(0, Math.min(1, musicState.volume + delta));
  const audio = document.getElementById('music-player');
  audio.volume = musicState.volume;
  showToast(`🔊 Volumen ${Math.round(musicState.volume * 100)}%`);
}

function stopMusic() {
  const audio = document.getElementById('music-player');
  if (audio && !audio.paused) audio.pause();
  updateMusicUI();
}

function updateMusicUI() {
  const audio = document.getElementById('music-player');
  const btn   = document.getElementById('music-play-btn');
  if (!audio || !btn) return;
  btn.textContent = audio.paused ? '▶' : '⏸';
  btn.classList.toggle('metro-active', !audio.paused);
}

// ── Toast ─────────────────────────────────────────────────────────────────────

function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ── Event listeners ───────────────────────────────────────────────────────────

document.getElementById('modal-tech').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Re-acquire wake lock if tab becomes visible again
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && state.view === 'training') requestWakeLock();
});

// ── Jump Test ─────────────────────────────────────────────────────────────────

const JUMP_LEVELS = [
  { min: 0,  max: 20,  label: 'Arrancando' },
  { min: 20, max: 30,  label: 'Básico' },
  { min: 30, max: 40,  label: 'Amateur' },
  { min: 40, max: 50,  label: 'Atleta' },
  { min: 50, max: 60,  label: 'Competitivo' },
  { min: 60, max: 999, label: 'Elite' }
];

let jumpT0 = 0;
let jumpCountdownTimer = null;

function openJumpTest() {
  navigate('test');
  setJumpStage('ready');
  const pr = loadJumpPR();
  const prCard = document.getElementById('jump-pr-card');
  if (pr) {
    prCard.classList.remove('hidden');
    document.getElementById('jump-pr-val').textContent = pr.cm + ' cm';
  } else {
    prCard.classList.add('hidden');
  }
}

function cancelJumpTest() {
  if (jumpCountdownTimer) { clearInterval(jumpCountdownTimer); jumpCountdownTimer = null; }
  navigate('setup');
}

function finishJumpTest() { navigate('setup'); }

function setJumpStage(stage) {
  ['ready', 'countdown', 'takeoff', 'land', 'result', 'invalid'].forEach(s => {
    const el = document.getElementById('jump-stage-' + s);
    if (el) el.classList.toggle('hidden', s !== stage);
  });
}

function startJumpTest() {
  setJumpStage('countdown');
  const numEl = document.getElementById('jump-countdown-num');
  let n = 3;
  numEl.textContent = n;
  numEl.style.animation = 'none'; void numEl.offsetHeight; numEl.style.animation = '';
  if (jumpCountdownTimer) clearInterval(jumpCountdownTimer);
  jumpCountdownTimer = setInterval(() => {
    n--;
    if (n > 0) {
      numEl.textContent = n;
      numEl.style.animation = 'none'; void numEl.offsetHeight; numEl.style.animation = '';
      if (navigator.vibrate) navigator.vibrate(30);
    } else {
      clearInterval(jumpCountdownTimer);
      jumpCountdownTimer = null;
      if (navigator.vibrate) navigator.vibrate([60, 40, 60]);
      setJumpStage('takeoff');
    }
  }, 1000);
}

function jumpTakeoff() {
  jumpT0 = performance.now();
  if (navigator.vibrate) navigator.vibrate(40);
  setJumpStage('land');
}

function jumpLanding() {
  const t1 = performance.now();
  const flightSec = (t1 - jumpT0) / 1000;
  if (navigator.vibrate) navigator.vibrate(60);
  if (flightSec < 0.25 || flightSec > 1.2) { setJumpStage('invalid'); return; }
  const cm = Math.round((9.81 * flightSec * flightSec / 8) * 100);
  showJumpResult(cm);
}

function showJumpResult(cm) {
  const prev = loadJumpPR();
  saveJump(cm);
  window._lastJumpCm = cm;
  window._lastJumpIsPR = !prev || cm > prev.cm;
  bumpStreak();
  addXP(20, 'jump test');
  markGoalProgress('jump');
  if (prev && cm > prev.cm) {
    addXP(100, '¡nuevo PR!');
    markGoalProgress('beat_pr', cm);
  }
  pushJumpToServer(cm);
  document.getElementById('jump-result-val').textContent = cm;
  document.getElementById('jump-level-badge').textContent = getJumpLevel(cm);
  const cmp = document.getElementById('jump-pr-compare');
  cmp.classList.remove('up', 'down');
  if (!prev) {
    cmp.textContent = 'Tu primer salto registrado.';
  } else if (cm > prev.cm) {
    cmp.textContent = `¡Nuevo récord! +${cm - prev.cm} cm sobre tu mejor.`;
    cmp.classList.add('up');
  } else if (cm === prev.cm) {
    cmp.textContent = `Igualaste tu mejor salto.`;
  } else {
    cmp.textContent = `Tu mejor: ${prev.cm} cm. Te faltaron ${prev.cm - cm} cm.`;
    cmp.classList.add('down');
  }
  setJumpStage('result');
}

function getJumpLevel(cm) {
  return (JUMP_LEVELS.find(l => cm >= l.min && cm < l.max) || JUMP_LEVELS[0]).label;
}

function loadJumpHistory() {
  try { return JSON.parse(localStorage.getItem('plyo_jumps') || '[]'); }
  catch (_) { return []; }
}
function loadJumpPR() {
  const hist = loadJumpHistory();
  if (!hist.length) return null;
  return hist.reduce((a, b) => a.cm >= b.cm ? a : b);
}
function saveJump(cm) {
  const hist = loadJumpHistory();
  hist.push({ ts: Date.now(), cm });
  if (hist.length > 100) hist.splice(0, hist.length - 100);
  localStorage.setItem('plyo_jumps', JSON.stringify(hist));
}

// ── Streak / XP / Goal (Fase 1 retención) ────────────────────────────────────

const XP_LEVELS = [
  { min: 0,    name: 'Novato' },
  { min: 100,  name: 'Aprendiz' },
  { min: 250,  name: 'Aprendiz' },
  { min: 500,  name: 'Constante' },
  { min: 900,  name: 'Constante' },
  { min: 1400, name: 'Atleta' },
  { min: 2000, name: 'Atleta' },
  { min: 2700, name: 'Competitivo' },
  { min: 3500, name: 'Competitivo' },
  { min: 4400, name: 'Dedicado' },
  { min: 5400, name: 'Dedicado' },
  { min: 6500, name: 'Élite' },
  { min: 7800, name: 'Élite' },
  { min: 9500, name: 'Leyenda' },
  { min: 12000, name: 'Leyenda' }
];

function getToday() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function getYesterday() {
  const d = new Date(); d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function loadStreak() {
  try {
    const s = JSON.parse(localStorage.getItem('plyo_streak') || 'null');
    if (!s || typeof s.count !== 'number') return { count: 0, lastDate: null };
    const today = getToday(), yest = getYesterday();
    if (s.lastDate !== today && s.lastDate !== yest) {
      return { count: 0, lastDate: s.lastDate, broken: true };
    }
    return s;
  } catch (_) { return { count: 0, lastDate: null }; }
}
function bumpStreak() {
  const today = getToday(), yest = getYesterday();
  const raw = JSON.parse(localStorage.getItem('plyo_streak') || 'null') || { count: 0, lastDate: null };
  let next;
  if (raw.lastDate === today) next = raw;
  else if (raw.lastDate === yest) next = { count: raw.count + 1, lastDate: today };
  else next = { count: 1, lastDate: today };
  localStorage.setItem('plyo_streak', JSON.stringify(next));
  return next.count;
}

function loadXP() {
  const v = parseInt(localStorage.getItem('plyo_xp') || '0', 10);
  return isNaN(v) ? 0 : v;
}
function getLevel(xp) {
  let idx = 0;
  for (let i = 0; i < XP_LEVELS.length; i++) {
    if (xp >= XP_LEVELS[i].min) idx = i; else break;
  }
  const cur = XP_LEVELS[idx];
  const next = XP_LEVELS[idx + 1] || { min: cur.min + 3000, name: cur.name };
  const span = next.min - cur.min;
  const into = xp - cur.min;
  return {
    level: idx + 1,
    name: cur.name,
    currentXP: into,
    nextLevelXP: span,
    totalXP: xp,
    progress: Math.min(1, into / span)
  };
}
function addXP(amount, reason) {
  const before = loadXP();
  const after = before + amount;
  localStorage.setItem('plyo_xp', String(after));
  const lvlBefore = getLevel(before).level;
  const lvlAfter = getLevel(after).level;
  if (lvlAfter > lvlBefore) showXPToast(amount, `¡Nivel ${lvlAfter}! ${getLevel(after).name}`);
  else showXPToast(amount, reason);
  renderHomeStats();
}

function showXPToast(amount, reason) {
  const t = document.getElementById('xp-toast');
  if (!t) return;
  t.innerHTML = `<span class="xp-toast-amount">+${amount} XP</span><span class="xp-toast-reason">${reason || ''}</span>`;
  t.classList.remove('hidden');
  t.classList.add('show');
  clearTimeout(window._xpToastTimer);
  window._xpToastTimer = setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.classList.add('hidden'), 300);
  }, 2200);
}

function pickGoal() {
  const d = new Date();
  const dayOfYear = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
  const pr = loadJumpPR();
  const options = ['train', 'jump'];
  if (pr) options.push('beat_pr');
  const type = options[dayOfYear % options.length];
  const base = { date: getToday(), type, progress: 0, done: false };
  if (type === 'train') return { ...base, target: 8, label: 'Completá una sesión de 8 min' };
  if (type === 'jump') return { ...base, target: 1, label: 'Hacé un jump test' };
  return { ...base, target: pr.cm + 1, label: `Superá tu PR de ${pr.cm} cm` };
}
function loadGoal() {
  try {
    const g = JSON.parse(localStorage.getItem('plyo_goal') || 'null');
    if (!g || g.date !== getToday()) {
      const fresh = pickGoal();
      localStorage.setItem('plyo_goal', JSON.stringify(fresh));
      return fresh;
    }
    return g;
  } catch (_) {
    const fresh = pickGoal();
    localStorage.setItem('plyo_goal', JSON.stringify(fresh));
    return fresh;
  }
}
function saveGoal(g) { localStorage.setItem('plyo_goal', JSON.stringify(g)); }
function markGoalProgress(type, value) {
  const g = loadGoal();
  if (g.done) return;
  if (g.type !== type && !(type === 'beat_pr' && g.type === 'jump')) return;
  if (g.type === 'train') g.progress = Math.max(g.progress, value || 0);
  else if (g.type === 'jump') g.progress = 1;
  else if (g.type === 'beat_pr') g.progress = value || 0;
  const reached =
    (g.type === 'train' && g.progress >= g.target) ||
    (g.type === 'jump' && g.progress >= 1) ||
    (g.type === 'beat_pr' && g.progress >= g.target);
  if (reached) {
    g.done = true;
    saveGoal(g);
    addXP(30, 'objetivo del día');
  } else {
    saveGoal(g);
  }
  renderHomeStats();
}

function handleGoalTap() {
  const g = loadGoal();
  if (g.done) return;
  if (g.type === 'jump' || g.type === 'beat_pr') openJumpTest();
  else navigate('setup');
}

function renderHomeStats() {
  const streak = loadStreak();
  const xp = loadXP();
  const lvl = getLevel(xp);
  const g = loadGoal();

  const elStreak = document.getElementById('streak-count');
  if (elStreak) elStreak.textContent = streak.count;
  const elStreakChip = document.getElementById('streak-chip');
  if (elStreakChip) elStreakChip.classList.toggle('cold', streak.count === 0);

  const elLevelName = document.getElementById('xp-level-name');
  if (elLevelName) elLevelName.textContent = `${lvl.name} · Nv ${lvl.level}`;
  const elXPValues = document.getElementById('xp-values');
  if (elXPValues) elXPValues.textContent = `${lvl.currentXP} / ${lvl.nextLevelXP} XP`;
  const elXPFill = document.getElementById('xp-bar-fill');
  if (elXPFill) elXPFill.style.width = (lvl.progress * 100).toFixed(1) + '%';

  const card = document.getElementById('goal-card');
  const title = document.getElementById('goal-title');
  const fill = document.getElementById('goal-progress-fill');
  const cta = document.getElementById('goal-cta');
  if (title) title.textContent = g.label;
  if (card) card.classList.toggle('done', !!g.done);
  if (fill) {
    let pct = 0;
    if (g.type === 'train') pct = Math.min(1, g.progress / g.target);
    else if (g.type === 'jump') pct = g.progress >= 1 ? 1 : 0;
    else if (g.type === 'beat_pr') pct = Math.min(1, (g.progress || 0) / g.target);
    fill.style.width = (pct * 100).toFixed(1) + '%';
  }
  if (cta) cta.textContent = g.done ? '✓ Hecho' : 'Empezar';
}

// ── Share card (Jump Test) ────────────────────────────────────────────────────

function generateJumpShareCard(cm, opts = {}) {
  const W = 1080, H = 1920;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');

  // BG: dark gradient with brand accent glow
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, '#0b0c0e');
  bg.addColorStop(1, '#15181c');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

  // Accent radial glow bottom-left
  const glow = ctx.createRadialGradient(W * 0.15, H * 0.95, 80, W * 0.15, H * 0.95, W * 0.9);
  glow.addColorStop(0, 'rgba(200, 255, 80, 0.35)');
  glow.addColorStop(1, 'rgba(200, 255, 80, 0)');
  ctx.fillStyle = glow; ctx.fillRect(0, 0, W, H);

  // Top bar: brand
  ctx.fillStyle = '#c8ff50';
  ctx.beginPath();
  ctx.moveTo(W/2 - 14, 140); ctx.lineTo(W/2 - 38, 190);
  ctx.lineTo(W/2 - 4, 190); ctx.lineTo(W/2 - 10, 232);
  ctx.lineTo(W/2 + 36, 180); ctx.lineTo(W/2 + 2, 180);
  ctx.lineTo(W/2 + 14, 140); ctx.closePath();
  ctx.fill();
  ctx.font = '700 42px "JetBrains Mono", ui-monospace, monospace';
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.fillText('PLYO.FIT', W/2, 310);
  ctx.font = '500 26px system-ui, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  ctx.fillText('SALTO VERTICAL', W/2, 360);

  // PR badge if applicable
  if (opts.isPR) {
    ctx.fillStyle = '#c8ff50';
    ctx.font = '800 34px "JetBrains Mono", ui-monospace, monospace';
    ctx.textAlign = 'center';
    const txt = '★ NUEVO RÉCORD PERSONAL';
    const m = ctx.measureText(txt);
    const pad = 38, bh = 72, bw = m.width + pad * 2;
    const bx = (W - bw) / 2, by = 440;
    ctx.fillStyle = 'rgba(200, 255, 80, 0.12)';
    roundRect(ctx, bx, by, bw, bh, 36); ctx.fill();
    ctx.strokeStyle = 'rgba(200, 255, 80, 0.5)'; ctx.lineWidth = 2;
    roundRect(ctx, bx, by, bw, bh, 36); ctx.stroke();
    ctx.fillStyle = '#c8ff50';
    ctx.fillText(txt, W/2, by + 49);
  }

  // Huge cm value
  ctx.textAlign = 'center';
  ctx.fillStyle = '#fff';
  ctx.font = '900 420px "JetBrains Mono", ui-monospace, monospace';
  ctx.fillText(String(cm), W/2, 970);

  // Unit
  ctx.font = '800 120px "JetBrains Mono", ui-monospace, monospace';
  ctx.fillStyle = '#c8ff50';
  ctx.fillText('cm', W/2, 1100);

  // Level badge
  const level = getJumpLevel(cm);
  ctx.font = '700 38px system-ui, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.fillText('NIVEL', W/2, 1200);
  ctx.font = '800 64px system-ui, sans-serif';
  ctx.fillStyle = '#fff';
  ctx.fillText(level.toUpperCase(), W/2, 1280);

  // Stats row: streak + XP level (+ rank if available)
  const streak = loadStreak();
  const lvl = getLevel(loadXP());
  const rowY = 1480;
  if (opts.rank) {
    const pad = W * 0.06;
    const bw = (W - pad * 4) / 3;
    drawStatBox(ctx, pad, rowY, bw, 200, `${streak.count}`, 'RACHA');
    drawStatBox(ctx, pad * 2 + bw, rowY, bw, 200, `Nv ${lvl.level}`, lvl.name.toUpperCase());
    drawStatBox(ctx, pad * 3 + bw * 2, rowY, bw, 200, `#${opts.rank}`, 'GLOBAL');
  } else {
    drawStatBox(ctx, W * 0.15, rowY, W * 0.30, 200, `${streak.count}`, 'RACHA (días)');
    drawStatBox(ctx, W * 0.55, rowY, W * 0.30, 200, `Nv ${lvl.level}`, lvl.name.toUpperCase());
  }

  // Footer
  ctx.textAlign = 'center';
  ctx.font = '500 28px system-ui, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.fillText('Medí tu salto vertical en plyo.fit', W/2, H - 120);
  ctx.font = '700 32px "JetBrains Mono", ui-monospace, monospace';
  ctx.fillStyle = '#c8ff50';
  ctx.fillText('plyo.fit', W/2, H - 70);

  return canvas;
}

function drawStatBox(ctx, x, y, w, h, big, small) {
  ctx.fillStyle = 'rgba(255,255,255,0.04)';
  roundRect(ctx, x, y, w, h, 28); ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = 2;
  roundRect(ctx, x, y, w, h, 28); ctx.stroke();
  ctx.textAlign = 'center';
  ctx.fillStyle = '#fff';
  ctx.font = '800 88px "JetBrains Mono", ui-monospace, monospace';
  ctx.fillText(big, x + w/2, y + 105);
  ctx.font = '600 26px system-ui, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  ctx.fillText(small, x + w/2, y + 155);
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

async function shareJumpCard() {
  const cm = window._lastJumpCm;
  if (!cm) { showToast('No hay salto para compartir'); return; }
  await ensureDisplayNameForShare();
  let rank = null;
  try { rank = await getMyRank(); } catch (_) {}
  const canvas = generateJumpShareCard(cm, { isPR: !!window._lastJumpIsPR, rank });
  const blob = await new Promise(r => canvas.toBlob(r, 'image/png', 0.95));
  if (!blob) { showToast('No se pudo generar la imagen'); return; }

  const filename = `plyo-salto-${cm}cm.png`;
  const file = new File([blob], filename, { type: 'image/png' });

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        files: [file],
        title: 'Mi salto vertical',
        text: `${cm} cm · medido con Plyo.fit`
      });
      return;
    } catch (err) {
      if (err.name === 'AbortError') return;
    }
  }
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 500);
  showToast('Imagen descargada');
}

// ── Onboarding (first-run) ────────────────────────────────────────────────────

let _onboardSlide = 0;

function shouldShowOnboarding() {
  if (localStorage.getItem('plyo_onboarded') === '1') return false;
  const sessions = (function(){ try { return JSON.parse(localStorage.getItem('plyo_sessions') || '[]'); } catch(_) { return []; } })();
  const jumps = loadJumpHistory();
  if (sessions.length > 0 || jumps.length > 0) {
    localStorage.setItem('plyo_onboarded', '1');
    return false;
  }
  return true;
}

function startOnboarding() {
  const overlay = document.getElementById('onboarding');
  if (!overlay) return;
  _onboardSlide = 0;
  overlay.classList.remove('hidden');
  document.documentElement.classList.add('onboarding-open');
  document.body.classList.add('onboarding-open');
  _renderOnboardSlide();
}

function _closeOnboardingOverlay() {
  const overlay = document.getElementById('onboarding');
  if (overlay) overlay.classList.add('hidden');
  document.documentElement.classList.remove('onboarding-open');
  document.body.classList.remove('onboarding-open');
}

function _renderOnboardSlide() {
  const strip = document.getElementById('onboarding-strip');
  if (strip) strip.style.transform = `translateX(-${_onboardSlide * 33.3333}%)`;
  document.querySelectorAll('.onboarding-dot').forEach((el, i) => {
    el.classList.toggle('active', i === _onboardSlide);
  });
  const label = document.getElementById('onboarding-cta-label');
  if (label) label.textContent = _onboardSlide === 2 ? 'Medir mi salto' : 'Siguiente';
}

function onboardingNext() {
  if (_onboardSlide < 2) {
    _onboardSlide++;
    _renderOnboardSlide();
    if (navigator.vibrate) navigator.vibrate(15);
  } else {
    onboardingFinish();
  }
}

function onboardingSkip() {
  localStorage.setItem('plyo_onboarded', '1');
  _closeOnboardingOverlay();
}

function onboardingFinish() {
  localStorage.setItem('plyo_onboarded', '1');
  const input = document.getElementById('onb-name-input');
  const name = input ? input.value.trim() : '';
  if (name) {
    localStorage.setItem('plyo_display_name', name.substring(0, 30));
    if (_sb && _sbUserId) { setDisplayName(name); }
  }
  _closeOnboardingOverlay();
  setTimeout(() => { if (typeof openJumpTest === 'function') openJumpTest(); }, 300);
}

// ── Supabase (Fase 2: anon auth + sync + leaderboard) ────────────────────────

const SUPA_URL = 'https://hpqgfhldieqmuisbbbur.supabase.co';
const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwcWdmaGxkaWVxbXVpc2JiYnVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5MDA4MjYsImV4cCI6MjA5MjQ3NjgyNn0.-SoqSqbqqRkevTFIm7B4mtnA6tjXch9y9ZX8AcduxiU';

let _sb = null;
let _sbUserId = null;
let _lbCache = { scope: null, rows: null, ts: 0 };

// ── "Mientras no estabas" banner ──────────────────────────────────

function markLastSeen() {
  localStorage.setItem('plyo_last_seen', new Date().toISOString());
}

async function checkWhileYouWereAway() {
  if (!_sb || !_sbUserId) return;
  const last = localStorage.getItem('plyo_last_seen');
  const dismissedUntil = parseInt(localStorage.getItem('plyo_away_dismissed') || '0', 10);
  markLastSeen();
  if (!last) return;
  const ageMs = Date.now() - new Date(last).getTime();
  if (ageMs < 2 * 60 * 60 * 1000) return;
  if (Date.now() < dismissedUntil) return;
  try {
    const { data, error } = await _sb
      .from('user_stats')
      .select('user_id, best_jump_cm, updated_at')
      .gt('updated_at', last)
      .gt('best_jump_cm', 0)
      .neq('user_id', _sbUserId)
      .order('best_jump_cm', { ascending: false })
      .limit(20);
    if (error || !data || !data.length) return;
    const myPR = loadJumpPR();
    let rival = null;
    if (myPR) {
      rival = data
        .map(d => ({ ...d, diff: d.best_jump_cm - myPR.cm }))
        .sort((a, b) => Math.abs(a.diff) - Math.abs(b.diff))[0];
      if (Math.abs(rival.diff) > 5) rival = null;
    }
    let name = null;
    if (rival) {
      const { data: profs } = await _sb
        .from('profiles').select('id, display_name').eq('id', rival.user_id).maybeSingle();
      name = (profs && profs.display_name) || anonName(rival.user_id);
    }
    showAwayBanner(data.length, rival, name, myPR);
  } catch (e) { /* silent */ }
}

function showAwayBanner(count, rival, rivalName, myPR) {
  const banner = document.getElementById('away-banner');
  const iconEl = document.getElementById('away-banner-icon');
  const titleEl = document.getElementById('away-banner-title');
  const subEl = document.getElementById('away-banner-sub');
  if (!banner) return;
  if (rival && myPR) {
    const diff = rival.diff;
    if (diff > 0) {
      iconEl.textContent = '👀';
      titleEl.textContent = `${rivalName} te pasó con ${rival.best_jump_cm}cm`;
      subEl.textContent = `Estás ${diff}cm atrás — tocá para ver el ranking`;
    } else if (diff === 0) {
      iconEl.textContent = '🤝';
      titleEl.textContent = `${rivalName} te igualó en ${rival.best_jump_cm}cm`;
      subEl.textContent = 'Subí de nuevo y despegate';
    } else {
      iconEl.textContent = '🔥';
      titleEl.textContent = `${rivalName} pisa los talones con ${rival.best_jump_cm}cm`;
      subEl.textContent = `Está ${Math.abs(diff)}cm atrás — defendé tu puesto`;
    }
  } else {
    iconEl.textContent = '🔥';
    titleEl.textContent = `${count} jugador${count > 1 ? 'es' : ''} mejoró su salto`;
    subEl.textContent = 'mientras no estabas';
  }
  banner.classList.remove('hidden');
  requestAnimationFrame(() => banner.classList.add('show'));
}

function dismissAway() {
  const banner = document.getElementById('away-banner');
  if (banner) {
    banner.classList.remove('show');
    setTimeout(() => banner.classList.add('hidden'), 350);
  }
  localStorage.setItem('plyo_away_dismissed', String(Date.now() + 2 * 60 * 60 * 1000));
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') markLastSeen();
});
window.addEventListener('beforeunload', markLastSeen);

// ── Claim account (magic link) ────────────────────────────────────

let _sbUser = null;

async function refreshSupaUser() {
  if (!_sb) return null;
  try {
    const { data: { user } } = await _sb.auth.getUser();
    _sbUser = user || null;
    return _sbUser;
  } catch (e) { return null; }
}

function renderClaimCard() {
  const card = document.getElementById('claim-card');
  const title = document.getElementById('claim-title');
  const sub = document.getElementById('claim-sub');
  const chev = document.getElementById('claim-chev');
  const icon = document.getElementById('claim-icon');
  if (!card) return;
  if (!_sbUser) { card.classList.add('hidden'); return; }
  const isAnon = _sbUser.is_anonymous === true;
  const email = _sbUser.email || null;
  card.classList.remove('hidden');
  if (isAnon && !email) {
    card.classList.remove('claimed');
    card.style.pointerEvents = 'auto';
    title.textContent = 'Guardá tu progreso';
    sub.textContent = 'Vinculá tu email para no perder tu PR';
    if (chev) chev.style.display = '';
    if (icon) icon.innerHTML = '<svg class="icon"><use href="#i-trophy"/></svg>';
  } else if (email) {
    card.classList.add('claimed');
    card.style.pointerEvents = 'none';
    title.textContent = '✓ Cuenta guardada';
    sub.textContent = email;
    if (chev) chev.style.display = 'none';
    if (icon) icon.innerHTML = '<svg class="icon"><use href="#i-check"/></svg>';
  } else {
    card.classList.add('hidden');
  }
}

let _claimMode = 'create';

function _applyClaimMode() {
  const label = document.getElementById('claim-submit-label');
  const switchLabel = document.getElementById('claim-switch-label');
  if (_claimMode === 'signin') {
    if (label) label.textContent = 'Entrar';
    if (switchLabel) switchLabel.textContent = 'Volver a guardar como cuenta nueva';
  } else {
    if (label) label.textContent = 'Enviar link';
    if (switchLabel) switchLabel.textContent = 'Ya tengo cuenta en otro dispositivo';
  }
}

function switchClaimToSignIn() {
  _claimMode = _claimMode === 'signin' ? 'create' : 'signin';
  _applyClaimMode();
  const err = document.getElementById('claim-error');
  if (err) err.classList.add('hidden');
}

function openClaimModal() {
  const modal = document.getElementById('modal-claim');
  if (!modal) return;
  _claimMode = 'create';
  _applyClaimMode();
  document.getElementById('claim-form-state').classList.remove('hidden');
  document.getElementById('claim-sent-state').classList.add('hidden');
  const err = document.getElementById('claim-error');
  if (err) err.classList.add('hidden');
  const input = document.getElementById('claim-email-input');
  if (input) input.value = '';
  modal.classList.remove('hidden');
  setTimeout(() => { if (input) input.focus(); }, 80);
}

function closeClaimModal() {
  const modal = document.getElementById('modal-claim');
  if (modal) modal.classList.add('hidden');
}

async function submitClaim() {
  const input = document.getElementById('claim-email-input');
  const err = document.getElementById('claim-error');
  const btn = document.getElementById('claim-submit-btn');
  const label = document.getElementById('claim-submit-label');
  if (!input || !_sb) return;
  const email = input.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    if (err) { err.textContent = 'Email inválido'; err.classList.remove('hidden'); }
    return;
  }
  if (err) err.classList.add('hidden');
  if (btn) btn.disabled = true;
  if (label) label.textContent = 'Enviando…';

  const redirectTo = location.origin + location.pathname;
  const isEmailExistsError = (e) => {
    const msg = String(e?.message || '').toLowerCase();
    return msg.includes('already') || msg.includes('registered') || msg.includes('exists') || e?.code === 'email_exists';
  };

  try {
    if (_claimMode === 'create') {
      const { error } = await _sb.auth.updateUser(
        { email },
        { emailRedirectTo: redirectTo }
      );
      if (error) {
        if (isEmailExistsError(error)) {
          const { error: e2 } = await _sb.auth.signInWithOtp({
            email, options: { emailRedirectTo: redirectTo }
          });
          if (e2) throw e2;
          _showClaimSent(email, true);
          return;
        }
        throw error;
      }
      _showClaimSent(email, false);
    } else {
      const { error } = await _sb.auth.signInWithOtp({
        email, options: { emailRedirectTo: redirectTo }
      });
      if (error) throw error;
      _showClaimSent(email, true);
    }
  } catch (e) {
    if (err) {
      err.textContent = e?.message || 'No se pudo enviar el link';
      err.classList.remove('hidden');
    }
  } finally {
    if (btn) btn.disabled = false;
    _applyClaimMode();
  }
}

function _showClaimSent(email, isSignIn) {
  const sentEmail = document.getElementById('claim-sent-email');
  if (sentEmail) sentEmail.textContent = email;
  const sentState = document.getElementById('claim-sent-state');
  const subEl = sentState ? sentState.querySelector('p') : null;
  if (subEl) {
    subEl.innerHTML = isSignIn
      ? `Esa cuenta ya existe. Te mandamos un link a <span id="claim-sent-email" style="color:var(--fg)">${escapeHTML(email)}</span>. Tocalo para entrar y recuperar tu progreso.`
      : `Te mandamos un link a <span id="claim-sent-email" style="color:var(--fg)">${escapeHTML(email)}</span>. Tocalo para confirmar y tu cuenta queda guardada.`;
  }
  document.getElementById('claim-form-state').classList.add('hidden');
  sentState.classList.remove('hidden');
}

async function pullUserDataFromServer() {
  if (!_sb || !_sbUserId) return;
  try {
    const { data: stats } = await _sb.from('user_stats').select('*').eq('user_id', _sbUserId).maybeSingle();
    if (stats) {
      const curStreak = loadStreak();
      localStorage.setItem('plyo_streak', JSON.stringify({
        count: stats.streak_count || 0,
        lastDate: curStreak.lastDate || null
      }));
      localStorage.setItem('plyo_xp', String(stats.xp || 0));
    }
    const { data: jumps } = await _sb.from('jumps')
      .select('cm, created_at')
      .eq('user_id', _sbUserId)
      .order('created_at', { ascending: false })
      .limit(100);
    if (jumps && jumps.length) {
      const arr = jumps
        .map(j => ({ cm: j.cm, ts: new Date(j.created_at).getTime() }))
        .reverse();
      localStorage.setItem('plyo_jumps', JSON.stringify(arr));
    }
    const { data: prof } = await _sb.from('profiles').select('display_name').eq('id', _sbUserId).maybeSingle();
    if (prof && prof.display_name) {
      localStorage.setItem('plyo_display_name', prof.display_name);
    }
    _lbCache = { scope: null, rows: null, ts: 0 };
    renderHomeStats();
    if (typeof showToast === 'function') showToast('¡Bienvenido de vuelta!');
  } catch (e) { console.warn('Pull:', e); }
}

let _shareNameResolver = null;

function ensureDisplayNameForShare() {
  const cached = (localStorage.getItem('plyo_display_name') || '').trim();
  if (cached) return Promise.resolve(true);
  return new Promise(resolve => {
    _shareNameResolver = resolve;
    const modal = document.getElementById('modal-share-name');
    const input = document.getElementById('share-name-input');
    if (input) input.value = '';
    if (modal) modal.classList.remove('hidden');
    setTimeout(() => { if (input) input.focus(); }, 100);
  });
}

async function shareNameConfirm() {
  const input = document.getElementById('share-name-input');
  const name = input ? input.value.trim() : '';
  if (name) {
    localStorage.setItem('plyo_display_name', name.substring(0, 30));
    await setDisplayName(name);
  }
  document.getElementById('modal-share-name').classList.add('hidden');
  if (_shareNameResolver) { _shareNameResolver(true); _shareNameResolver = null; }
}

function shareNameSkip() {
  document.getElementById('modal-share-name').classList.add('hidden');
  if (_shareNameResolver) { _shareNameResolver(false); _shareNameResolver = null; }
}

async function initSupa() {
  if (!window.supabase || !window.supabase.createClient) {
    console.warn('Supabase SDK no cargado');
    return;
  }
  _sb = window.supabase.createClient(SUPA_URL, SUPA_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, storageKey: 'plyo_sb_session', detectSessionInUrl: true }
  });
  _sb.auth.onAuthStateChange((event, session) => {
    if (!session) { renderClaimCard(); return; }
    const prevUserId = _sbUserId;
    const newUser = session.user;
    const crossDevice = prevUserId && prevUserId !== newUser.id && !newUser.is_anonymous;
    _sbUser = newUser;
    _sbUserId = newUser.id;
    renderClaimCard();
    if (crossDevice) {
      pullUserDataFromServer();
    }
  });
  try {
    const { data: { session } } = await _sb.auth.getSession();
    if (session) {
      _sbUserId = session.user.id;
      _sbUser = session.user;
    } else {
      const { data, error } = await _sb.auth.signInAnonymously();
      if (error) { console.warn('Supa anon sign-in:', error.message); return; }
      _sbUserId = data.user.id;
      _sbUser = data.user;
    }
    syncStatsToServer();
    const cachedName = (localStorage.getItem('plyo_display_name') || '').trim();
    if (cachedName) setDisplayName(cachedName);
    renderClaimCard();
    checkWhileYouWereAway();
  } catch (e) {
    console.warn('Supa init:', e);
  }
}

async function syncStatsToServer() {
  if (!_sb || !_sbUserId) return;
  const pr = loadJumpPR();
  const jumps = loadJumpHistory();
  let sessions = [];
  try { sessions = JSON.parse(localStorage.getItem('plyo_sessions') || '[]'); } catch (_) {}
  const streak = loadStreak();
  const xp = loadXP();
  try {
    await _sb.from('user_stats').upsert({
      user_id: _sbUserId,
      best_jump_cm: pr ? pr.cm : 0,
      total_jumps: jumps.length,
      total_sessions: sessions.length,
      streak_count: streak.count || 0,
      xp: xp,
      updated_at: new Date().toISOString()
    });
  } catch (e) { /* silent */ }
}

async function pushJumpToServer(cm) {
  if (!_sb || !_sbUserId) return;
  try {
    await _sb.from('jumps').insert({ user_id: _sbUserId, cm });
    await syncStatsToServer();
    _lbCache = { scope: null, rows: null, ts: 0 };
  } catch (e) { /* silent */ }
}

async function pushSessionToServer(s) {
  if (!_sb || !_sbUserId || !s) return;
  try {
    await _sb.from('sessions').insert({
      user_id: _sbUserId,
      sport: s.sport || null,
      level: s.level || null,
      total_contacts: s.totalContacts || 0,
      exercises_completed: s.exercisesCompleted || 0,
      fatigue_level: s.fatigueLevel || null,
      high_intensity: !!s.highIntensity,
      notes: s.notes || null
    });
    await syncStatsToServer();
  } catch (e) { /* silent */ }
}

function anonName(uid) {
  return 'Anon #' + String(uid || '').substring(0, 4).toUpperCase();
}

async function loadLeaderboard() {
  if (!_sb) return [];
  if (_lbCache.rows && Date.now() - _lbCache.ts < 15000) return _lbCache.rows;
  try {
    const { data: stats, error: e1 } = await _sb
      .from('user_stats')
      .select('user_id, best_jump_cm, total_jumps, streak_count, xp')
      .gt('best_jump_cm', 0)
      .order('best_jump_cm', { ascending: false })
      .limit(100);
    if (e1) { console.warn('LB stats:', e1.message); return []; }
    if (!stats || !stats.length) {
      _lbCache = { scope: 'global', rows: [], ts: Date.now() };
      return [];
    }
    const ids = stats.map(s => s.user_id);
    const { data: profs, error: e2 } = await _sb
      .from('profiles')
      .select('id, display_name')
      .in('id', ids);
    if (e2) console.warn('LB profiles:', e2.message);
    const nameMap = {};
    (profs || []).forEach(p => { nameMap[p.id] = p.display_name; });
    const rows = stats.map(s => ({
      ...s,
      profiles: { display_name: nameMap[s.user_id] || null }
    }));
    _lbCache = { scope: 'global', rows, ts: Date.now() };
    return rows;
  } catch (e) { console.warn('LB:', e); return []; }
}

async function setDisplayName(name) {
  if (!_sb || !_sbUserId) return false;
  const clean = (name || '').trim().substring(0, 30);
  try {
    await _sb.from('profiles').upsert({
      id: _sbUserId,
      display_name: clean,
      is_anonymous: !clean
    });
    localStorage.setItem('plyo_display_name', clean);
    _lbCache = { scope: null, rows: null, ts: 0 };
    return true;
  } catch (e) { return false; }
}

function handleNameBlur() {
  const el = document.getElementById('lb-name-input');
  if (!el) return;
  const name = el.value;
  setDisplayName(name).then(() => {
    renderLeaderboardView(_currentLbScope || 'global');
  });
}

let _currentLbScope = 'global';

async function openLeaderboard() {
  navigate('leaderboard');
  const nameInput = document.getElementById('lb-name-input');
  if (nameInput) {
    const cached = localStorage.getItem('plyo_display_name') || '';
    nameInput.value = cached;
  }
  renderLeaderboardView('global');
}

async function renderLeaderboardView(scope) {
  _currentLbScope = scope;
  document.querySelectorAll('.lb-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.scope === scope);
  });
  const container = document.getElementById('lb-list');
  if (!container) return;
  container.innerHTML = '<div class="lb-loading">Cargando ranking…</div>';

  const all = await loadLeaderboard();
  let rows = all;
  if (scope === 'level') {
    const myPR = loadJumpPR();
    if (myPR) {
      const myLevel = getJumpLevel(myPR.cm);
      rows = all.filter(r => getJumpLevel(r.best_jump_cm) === myLevel);
    } else {
      rows = [];
    }
  }

  if (!rows.length) {
    container.innerHTML = scope === 'level'
      ? '<div class="lb-empty">Hacé tu primer salto para ver tu nivel.</div>'
      : '<div class="lb-empty">Sé el primero. Medí tu salto.</div>';
    updateMyRankDisplay(all);
    return;
  }

  container.innerHTML = rows.map((r, i) => {
    const isMe = r.user_id === _sbUserId;
    const rawName = r.profiles && r.profiles.display_name;
    const name = rawName ? escapeHTML(rawName) : anonName(r.user_id);
    const rankCell = i === 0 ? '<span class="lb-medal">🥇</span>'
      : i === 1 ? '<span class="lb-medal">🥈</span>'
      : i === 2 ? '<span class="lb-medal">🥉</span>'
      : `#${i + 1}`;
    return `<div class="lb-row${isMe ? ' me' : ''}">
      <div class="lb-rank">${rankCell}</div>
      <div class="lb-name">${name}${isMe ? ' <span class="lb-me-tag">· vos</span>' : ''}</div>
      <div class="lb-cm">${r.best_jump_cm}<span class="lb-cm-unit">cm</span></div>
    </div>`;
  }).join('');

  updateMyRankDisplay(all);
}

function updateMyRankDisplay(globalRows) {
  const rankEl = document.getElementById('lb-my-rank');
  if (!rankEl) return;
  const idx = globalRows.findIndex(r => r.user_id === _sbUserId);
  const myPR = loadJumpPR();
  if (!myPR) { rankEl.textContent = 'Medí tu primer salto'; return; }
  if (idx >= 0) rankEl.textContent = `Sos #${idx + 1}`;
  else rankEl.textContent = `Fuera del top 100`;
}

async function getMyRank() {
  if (!_sb || !_sbUserId) return null;
  try {
    const rows = await loadLeaderboard();
    const idx = rows.findIndex(r => r.user_id === _sbUserId);
    return idx >= 0 ? idx + 1 : null;
  } catch (e) { return null; }
}

function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

// ── Init ──────────────────────────────────────────────────────────────────────

loadConfig();
renderHomeStats();
if (shouldShowOnboarding()) startOnboarding();
initSupa();
