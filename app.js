// OdontoClinic Pro · App Logic & Clinical State Engine
const STORAGE_KEY = 'odontoclinic_data_v1';

// Base de datos inicial de demostración (12 pacientes, turnos, profesionales)
const INITIAL_DATA = {
  pacientes: [
    { id: 'pac-01', nombre: 'Gonzalo Morales', dni: '38.412.908', tel: '+54 9 11 5421-9988', edad: 32, cobertura: 'OSDE 310', saldo: 45000, antecedentes: 'Bruxismo nocturno, sin alergias.', odontograma: { '16': 'caries', '24': 'restauracion', '36': 'corona' } },
    { id: 'pac-02', nombre: 'Florencia Benítez', dni: '40.119.544', tel: '+54 9 11 6321-7711', edad: 28, cobertura: 'Swiss Medical', saldo: 0, antecedentes: 'Alergia a la penicilina.', odontograma: { '11': 'restauracion', '21': 'restauracion' } },
    { id: 'pac-03', nombre: 'Agustín Pereyra', dni: '35.882.112', tel: '+54 9 11 4112-0099', edad: 36, cobertura: 'Particular', saldo: 180000, antecedentes: 'Hipertensión leve controlada.', odontograma: { '46': 'ausente', '37': 'conducto' } },
    { id: 'pac-04', nombre: 'Camila Rossi', dni: '42.990.123', tel: '+54 9 11 7890-4455', edad: 24, cobertura: 'Medifé', saldo: 25000, antecedentes: 'Tratamiento de ortodoncia previo.', odontograma: { '18': 'ausente', '28': 'ausente', '38': 'ausente', '48': 'ausente' } },
    { id: 'pac-05', nombre: 'Esteban Domínguez', dni: '33.109.845', tel: '+54 9 11 3322-1100', edad: 41, cobertura: 'Galeno Oro', saldo: 0, antecedentes: 'Fumador leve, encías sensibles.', odontograma: { '14': 'caries', '15': 'caries' } },
    { id: 'pac-06', nombre: 'Lucía Varela', dni: '39.771.320', tel: '+54 9 11 8899-2233', edad: 30, cobertura: 'OSDE 210', saldo: 85000, antecedentes: 'Sensibilidad dentinaria.', odontograma: { '26': 'conducto', '27': 'corona' } },
    { id: 'pac-07', nombre: 'Martín Iriarte', dni: '31.450.912', tel: '+54 9 11 9900-1122', edad: 45, cobertura: 'Particular', saldo: 215000, antecedentes: 'Sin antecedentes relevantes.', odontograma: { '36': 'ausente', '46': 'caries' } },
    { id: 'pac-08', nombre: 'Valeria Castro', dni: '37.892.401', tel: '+54 9 11 4455-6677', edad: 34, cobertura: 'Swiss Medical', saldo: 0, antecedentes: 'Embarazo 2do trimestre.', odontograma: { '12': 'restauracion' } },
    { id: 'pac-09', nombre: 'Julián Méndez', dni: '43.210.987', tel: '+54 9 11 2233-4455', edad: 22, cobertura: 'Sancor Salud', saldo: 0, antecedentes: 'Paciente pediátrico derivado.', odontograma: {} },
    { id: 'pac-10', nombre: 'Mariana Duarte', dni: '36.541.209', tel: '+54 9 11 5566-7788', edad: 38, cobertura: 'Particular', saldo: 0, antecedentes: 'Sin alergias.', odontograma: { '35': 'restauracion' } },
    { id: 'pac-11', nombre: 'Sebastián Quiroga', dni: '34.890.112', tel: '+54 9 11 7788-9900', edad: 40, cobertura: 'Medicus', saldo: 0, antecedentes: 'Diabetes tipo 2 compensada.', odontograma: { '47': 'corona' } },
    { id: 'pac-12', nombre: 'Solange Herrera', dni: '41.332.901', tel: '+54 9 11 6677-8899', edad: 26, cobertura: 'OSDE 310', saldo: 0, antecedentes: 'Ninguno.', odontograma: {} }
  ],
  turnos: [
    { id: 'tur-01', hora: '09:00', fecha: '2026-10-12', paciente: 'Gonzalo Morales', doctor: 'Dra. Trinidad Robledo', servicio: 'Evaluación Implante #36', estado: 'Confirmado', tel: '+54 9 11 5421-9988' },
    { id: 'tur-02', hora: '10:00', fecha: '2026-10-12', paciente: 'Florencia Benítez', doctor: 'Dr. Jhon Barrios', servicio: 'Alineador Control 4', estado: 'En Espera', tel: '+54 9 11 6321-7711' },
    { id: 'tur-03', hora: '11:30', fecha: '2026-10-12', paciente: 'Agustín Pereyra', doctor: 'Dra. Norma Ramírez', servicio: 'Tratamiento de Conducto #37', estado: 'Confirmado', tel: '+54 9 11 4112-0099' },
    { id: 'tur-04', hora: '14:00', fecha: '2026-10-12', paciente: 'Camila Rossi', doctor: 'Dr. Jhon Barrios', servicio: 'Limpieza y Profilaxis', estado: 'Confirmado', tel: '+54 9 11 7890-4455' },
    { id: 'tur-05', hora: '15:30', fecha: '2026-10-12', paciente: 'Esteban Domínguez', doctor: 'Dra. Trinidad Robledo', servicio: 'Restauraciones Estéticas #14,#15', estado: 'Confirmado', tel: '+54 9 11 3322-1100' },
    { id: 'tur-06', hora: '17:00', fecha: '2026-10-12', paciente: 'Lucía Varela', doctor: 'Dra. Norma Ramírez', servicio: 'Corona Zirconio Prueba', estado: 'Finalizado', tel: '+54 9 11 8899-2233' }
  ],
  presupuestos: [
    { num: 'P-1092', paciente: 'Agustín Pereyra', tratamiento: 'Endodoncia + Corona Porcelana', total: 245000, abonado: 65000, estado: 'En Curso' },
    { num: 'P-1093', paciente: 'Gonzalo Morales', tratamiento: 'Implante Titanio Bio + Corona', total: 320000, abonado: 275000, estado: 'Aceptado' },
    { num: 'P-1094', paciente: 'Martín Iriarte', tratamiento: 'Rehabilitación Puente 3 Piezas', total: 450000, abonado: 235000, estado: 'En Curso' },
    { num: 'P-1095', paciente: 'Lucía Varela', tratamiento: 'Tratamiento Conducto y Perno', total: 110000, abonado: 25000, estado: 'Aceptado' }
  ]
};

// Cargar o inicializar estado
function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try { return JSON.parse(saved); } catch (e) { }
  }
  saveData(INITIAL_DATA);
  return INITIAL_DATA;
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

let appState = loadData();
let activeCondition = 'sano';
let activePatientId = appState.pacientes[0]?.id || 'pac-01';

// Navegación por Pestañas
function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  document.querySelectorAll('.tab-view').forEach(view => {
    view.classList.toggle('active', view.id === 'view-' + tabId);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 1. RENDER AGENDA
function renderTurnos() {
  const tbody = document.getElementById('turnosTableBody');
  const doctorFilter = document.getElementById('filterDoctor').value;
  const estadoFilter = document.getElementById('filterEstado').value;

  const filtered = appState.turnos.filter(t => {
    const matchDoc = doctorFilter === 'todos' || t.doctor === doctorFilter;
    const matchEst = estadoFilter === 'todos' || t.estado === estadoFilter;
    return matchDoc && matchEst;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding: 2rem; color:#64748B;">No hay turnos registrados con los filtros seleccionados.</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map(t => {
    const wpMsg = encodeURIComponent(`Hola ${t.paciente}, te recordamos tu turno en OdontoClinic el ${t.fecha} a las ${t.hora} hs con ${t.doctor}.`);
    const wpUrl = `https://wa.me/${t.tel.replace(/[^0-9]/g, '')}?text=${wpMsg}`;

    return `
      <tr>
        <td><strong>${t.hora} hs</strong></td>
        <td><strong>${t.paciente}</strong></td>
        <td>${t.doctor}</td>
        <td>${t.servicio}</td>
        <td><span class="badge-status badge-${t.estado.replace(' ', '')}">${t.estado}</span></td>
        <td>
          <a href="${wpUrl}" target="_blank" class="btn-ghost" style="padding:3px 8px;" title="Enviar recordatorio WhatsApp">💬 WhatsApp</a>
          <button class="btn-ghost" style="padding:3px 8px; margin-left:4px;" onclick="cambiarEstadoTurno('${t.id}')">Cambiar Estado</button>
        </td>
      </tr>
    `;
  }).join('');
}

function cambiarEstadoTurno(id) {
  const turno = appState.turnos.find(t => t.id === id);
  if (!turno) return;
  const estados = ['Confirmado', 'En Espera', 'Finalizado', 'Cancelado'];
  const nextIdx = (estados.indexOf(turno.estado) + 1) % estados.length;
  turno.estado = estados[nextIdx];
  saveData(appState);
  renderTurnos();
}

// 2. RENDER ODONTOGRAMA FDI (32 PIEZAS)
const FDI_UPPER = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28];
const FDI_LOWER = [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38];

function renderOdontograma() {
  const pac = appState.pacientes.find(p => p.id === activePatientId) || appState.pacientes[0];
  if (!pac.odontograma) pac.odontograma = {};

  function renderRow(teethArr) {
    return teethArr.map(num => {
      const cond = pac.odontograma[num] || 'sano';
      const condClass = cond !== 'sano' ? 'cond-' + cond : '';
      return `
        <div class="tooth-item" onclick="toggleDiente('${num}')" title="Pieza FDI ${num} - ${cond.toUpperCase()}">
          <span class="tooth-num">${num}</span>
          <div class="tooth-box ${condClass}">
            <div class="tooth-surface surf-vestibular"></div>
            <div class="tooth-surface surf-mesial"></div>
            <div class="tooth-surface surf-oclusal"></div>
            <div class="tooth-surface surf-distal"></div>
            <div class="tooth-surface surf-lingual"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  document.getElementById('upperTeeth').innerHTML = renderRow(FDI_UPPER);
  document.getElementById('lowerTeeth').innerHTML = renderRow(FDI_LOWER);

  // Resumen de hallazgos
  const findingsList = document.getElementById('odontogramFindingsList');
  const items = Object.entries(pac.odontograma).filter(([_, c]) => c !== 'sano');
  if (items.length === 0) {
    findingsList.innerHTML = '<span style="color:#64748B; font-size:0.9rem;">Sin patologías ni restauraciones activas registradas para este paciente. Dentición completa y sana.</span>';
  } else {
    findingsList.innerHTML = items.map(([num, cond]) => `
      <div class="finding-tag">
        <strong>Pieza ${num}:</strong> ${cond.toUpperCase()}
        <button onclick="borrarDiente('${num}')" style="background:none;border:none;cursor:pointer;color:#F43F5E;font-weight:700;">×</button>
      </div>
    `).join('');
  }
}

function toggleDiente(num) {
  const pac = appState.pacientes.find(p => p.id === activePatientId);
  if (!pac) return;
  if (!pac.odontograma) pac.odontograma = {};
  if (activeCondition === 'sano') {
    delete pac.odontograma[num];
  } else {
    pac.odontograma[num] = activeCondition;
  }
  saveData(appState);
  renderOdontograma();
}

function borrarDiente(num) {
  const pac = appState.pacientes.find(p => p.id === activePatientId);
  if (!pac) return;
  delete pac.odontograma[num];
  saveData(appState);
  renderOdontograma();
}

// 3. RENDER PACIENTES
function renderPacientes(search = '') {
  const grid = document.getElementById('patientsGrid');
  const term = search.toLowerCase().trim();

  const filtered = appState.pacientes.filter(p => {
    return p.nombre.toLowerCase().includes(term) || p.dni.includes(term) || p.tel.includes(term);
  });

  grid.innerHTML = filtered.map(p => {
    const totalPatologias = Object.keys(p.odontograma || {}).length;
    return `
      <div class="patient-card">
        <div>
          <h3>${p.nombre}</h3>
          <div class="patient-meta">DNI: ${p.dni} · ${p.edad} años</div>
          <div class="patient-tags">
            <span class="patient-tag">🛡️ ${p.cobertura}</span>
            <span class="patient-tag">🦷 ${totalPatologias} Piezas Tratadas</span>
          </div>
          <div class="patient-balance">
            <strong>Saldo:</strong> <span class="${p.saldo > 0 ? 'text-warning' : 'text-success'}">$${p.saldo.toLocaleString('es-AR')} ARS</span>
          </div>
        </div>
        <div style="display:flex; gap:0.5rem; margin-top:1rem;">
          <button class="btn-primary" style="flex:1; padding:0.5rem;" onclick="verFichaPaciente('${p.id}')">Ver Ficha</button>
          <button class="btn-secondary" style="padding:0.5rem;" onclick="abrirOdontogramaPaciente('${p.id}')">🦷 Odontograma</button>
        </div>
      </div>
    `;
  }).join('');
}

function verFichaPaciente(id) {
  const pac = appState.pacientes.find(p => p.id === id);
  if (!pac) return;

  document.getElementById('fichaNombre').textContent = pac.nombre + ' (' + pac.dni + ')';
  document.getElementById('fichaBody').innerHTML = `
    <div style="margin-bottom:1.5rem; line-height:1.7;">
      <p><strong>Teléfono:</strong> ${pac.tel}</p>
      <p><strong>Cobertura Médica:</strong> ${pac.cobertura}</p>
      <p><strong>Antecedentes Clínicos:</strong> ${pac.antecedentes || 'Sin antecedentes informados.'}</p>
      <p><strong>Estado Financiero:</strong> <span class="${pac.saldo > 0 ? 'text-warning' : 'text-success'}">Saldo actual: $${pac.saldo.toLocaleString('es-AR')} ARS</span></p>
    </div>
    <div style="background:var(--slate-100); padding:1rem; border-radius:8px;">
      <h4 style="margin-bottom:0.5rem; font-size:0.95rem;">Resumen de Tratamientos Registrados</h4>
      <p style="font-size:0.85rem; color:#475569;">Piezas con registro en odontograma: ${Object.entries(pac.odontograma || {}).map(([n, c]) => `#${n} (${c})`).join(', ') || 'Ninguna'}</p>
    </div>
    <div style="margin-top:1.5rem; display:flex; justify-content:flex-end;">
      <button class="btn-primary" onclick="closeModal('modalFichaPaciente')">Cerrar Ficha</button>
    </div>
  `;
  openModal('modalFichaPaciente');
}

function abrirOdontogramaPaciente(id) {
  activePatientId = id;
  document.getElementById('odontogramaPatientSelect').value = id;
  switchTab('odontograma');
  renderOdontograma();
}

// 4. RENDER PRESUPUESTOS
function renderPresupuestos() {
  const tbody = document.getElementById('presupuestosTableBody');
  let totFact = 0, totCob = 0, totPend = 0;

  tbody.innerHTML = appState.presupuestos.map(p => {
    totFact += p.total;
    totCob += p.abonado;
    const saldo = p.total - p.abonado;
    totPend += saldo;

    return `
      <tr>
        <td><strong>${p.num}</strong></td>
        <td>${p.paciente}</td>
        <td>${p.tratamiento}</td>
        <td>$${p.total.toLocaleString('es-AR')}</td>
        <td class="text-success">$${p.abonado.toLocaleString('es-AR')}</td>
        <td class="${saldo > 0 ? 'text-warning' : 'text-success'}"><strong>$${saldo.toLocaleString('es-AR')}</strong></td>
        <td><span class="badge-status badge-${p.estado === 'Aceptado' ? 'Confirmado' : 'Espera'}">${p.estado}</span></td>
        <td>
          <button class="btn-ghost" onclick="imprimirPresupuesto('${p.num}')">🖨️ Imprimir</button>
        </td>
      </tr>
    `;
  }).join('');

  document.getElementById('metricTotalFacturado').textContent = '$ ' + totFact.toLocaleString('es-AR');
  document.getElementById('metricTotalCobrado').textContent = '$ ' + totCob.toLocaleString('es-AR');
  document.getElementById('metricTotalPendiente').textContent = '$ ' + totPend.toLocaleString('es-AR');
}

function imprimirPresupuesto(num) {
  const p = appState.presupuestos.find(x => x.num === num);
  if (!p) return;
  alert(`Comprobante de Presupuesto ${p.num}\nPaciente: ${p.paciente}\nTratamiento: ${p.tratamiento}\nTotal: $${p.total.toLocaleString('es-AR')} ARS\nAbonado: $${p.abonado.toLocaleString('es-AR')} ARS\nSaldo Pendiente: $${(p.total - p.abonado).toLocaleString('es-AR')} ARS\n\n(Documento para control interno no fiscal - OdontoClinic Pro)`);
}

// MODAL CONTROLS
function openModal(id) {
  document.getElementById(id).classList.add('open');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
  // Pestañas
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Selector de condición diagnóstica
  document.querySelectorAll('.cond-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cond-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCondition = btn.dataset.cond;
    });
  });

  // Selector de paciente para odontograma
  const patSelect = document.getElementById('odontogramaPatientSelect');
  patSelect.innerHTML = appState.pacientes.map(p => `<option value="${p.id}">${p.nombre} (${p.dni})</option>`).join('');
  patSelect.value = activePatientId;
  patSelect.addEventListener('change', (e) => {
    activePatientId = e.target.value;
    renderOdontograma();
  });

  // Filtros de turnos
  document.getElementById('filterDoctor').addEventListener('change', renderTurnos);
  document.getElementById('filterEstado').addEventListener('change', renderTurnos);

  // Buscador de pacientes
  document.getElementById('searchPatient').addEventListener('input', (e) => {
    renderPacientes(e.target.value);
  });

  // Nuevo Turno modal
  document.getElementById('btnNuevoTurno').addEventListener('click', () => {
    const sel = document.getElementById('turnoPaciente');
    sel.innerHTML = appState.pacientes.map(p => `<option value="${p.nombre}">${p.nombre}</option>`).join('');
    document.getElementById('turnoFecha').value = new Date().toISOString().split('T')[0];
    openModal('modalTurno');
  });

  document.getElementById('formNuevoTurno').addEventListener('submit', (e) => {
    e.preventDefault();
    const paciente = document.getElementById('turnoPaciente').value;
    const doctor = document.getElementById('turnoDoctor').value;
    const servicio = document.getElementById('turnoServicio').value;
    const fecha = document.getElementById('turnoFecha').value;
    const hora = document.getElementById('turnoHora').value;
    const pacObj = appState.pacientes.find(p => p.nombre === paciente);

    appState.turnos.unshift({
      id: 'tur-' + Date.now(),
      hora,
      fecha,
      paciente,
      doctor,
      servicio,
      estado: 'Confirmado',
      tel: pacObj ? pacObj.tel : '+54 9 11 0000-0000'
    });

    saveData(appState);
    renderTurnos();
    closeModal('modalTurno');
    alert('✓ Turno agendado exitosamente para ' + paciente);
  });

  // Reset Demo
  document.getElementById('btnResetDemo').addEventListener('click', () => {
    if (confirm('¿Restablecer los datos de fábrica de la demo?')) {
      localStorage.removeItem(STORAGE_KEY);
      appState = loadData();
      renderTurnos();
      renderOdontograma();
      renderPacientes();
      renderPresupuestos();
      alert('✓ Datos de demostración restablecidos.');
    }
  });

  // Render inicial
  renderTurnos();
  renderOdontograma();
  renderPacientes();
  renderPresupuestos();
});
