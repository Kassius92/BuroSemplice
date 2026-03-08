'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import './ordina.css';

const LOGGER_URL = 'https://script.google.com/macros/s/AKfycbzwgeKBMEUseNbkEGq5c8HW_EBc72h3Ls3FBQ6v6N1NzIrgIuiKrYfYv5xKcXwvYWlAQw/exec';

const schedeConfig = {
  '730': {
    title: 'Personalizza la tua guida al 730',
    back: '/730',
    sectionTitle: 'Dettagli per il tuo 730',
    fields: [
      { id:'s_prima730', label:'È la prima volta che fai il 730?', type:'select', options:['Sì, prima volta','No, l\'ho già fatto in passato'], required:true },
      { id:'s_mutuo', label:'Hai un mutuo sulla prima casa?', type:'select', options:['Sì','No','Non ho casa di proprietà'], required:true },
      { id:'s_spese', label:'Spese principali da scaricare', type:'select', options:['Spese mediche','Ristrutturazione / bonus casa','Figli (asilo, sport, scuola)','Più di una categoria','Non lo so ancora'], required:true },
      { id:'s_cu', label:'Hai già ricevuto il CU dal datore di lavoro?', type:'select', options:['Sì','No, non ancora','Non so cos\'è'], required:false },
    ],
  },
  'spid': {
    title: 'Personalizza la tua guida allo SPID',
    back: '/spid',
    sectionTitle: 'Dettagli per il tuo SPID',
    fields: [
      { id:'s_cie', label:'Hai la CIE (carta d\'identità elettronica con chip)?', type:'select', options:['Sì','No','Non so'], required:true },
      { id:'s_provato', label:'Hai già provato a fare lo SPID?', type:'select', options:['No, parto da zero','Sì ma non ci sono riuscito','Sì ma l\'ho perso / devo rifarlo'], required:true },
      { id:'s_urgenza', label:'Ti serve subito o puoi aspettare?', type:'select', options:['Mi serve entro questa settimana','Entro un mese','Nessuna fretta'], required:false },
    ],
  },
  'isee': {
    title: 'Personalizza la tua guida all\'ISEE',
    back: '/isee',
    sectionTitle: 'Dettagli per il tuo ISEE',
    fields: [
      { id:'s_proprieta', label:'Hai casa di proprietà?', type:'select', options:['Sì, prima casa','Sì, più immobili','No, sono in affitto'], required:true },
      { id:'s_risparmio', label:'Risparmi complessivi (conti, depositi, investimenti)', type:'select', options:['Meno di 6.000 €','6.000 – 20.000 €','20.000 – 50.000 €','Oltre 50.000 €','Preferisco non dirlo'], required:true },
      { id:'s_motivo', label:'Perché ti serve l\'ISEE?', type:'select', options:['Bonus / agevolazioni','Mensa scolastica','Università','Assegno unico','Più di un motivo','Altro'], required:true },
    ],
  },
  'piva': {
    title: 'Personalizza la guida — Partita IVA',
    back: '/piva',
    sectionTitle: 'Dettagli per la tua Partita IVA',
    fields: [
      { id:'s_attivita', label:'Che tipo di attività vuoi aprire?', type:'text', placeholder:'Es. Consulente marketing, sviluppatore, personal trainer…', required:true },
      { id:'s_fatturato', label:'Fatturato annuo che prevedi', type:'select', options:['Meno di 30.000 €','30.000 – 50.000 €','50.000 – 85.000 €','Oltre 85.000 €','Non ho idea'], required:true },
      { id:'s_regime', label:'Hai già un\'idea sul regime fiscale?', type:'select', options:['Vorrei il forfettario','Penso di dover fare l\'ordinario','Non so quale scegliere'], required:false },
      { id:'s_comm', label:'Hai già un commercialista?', type:'select', options:['Sì','No, ne cerco uno','Non so se mi serve'], required:true },
    ],
  },
  'compro-casa': {
    title: 'Personalizza la tua guida — Compro casa',
    back: '/compro-casa',
    sectionTitle: 'Dettagli per il tuo acquisto casa',
    fields: [
      { id:'s_budget', label:'Budget approssimativo dell\'immobile', type:'select', options:['Meno di 100.000 €','100.000 – 200.000 €','200.000 – 350.000 €','Oltre 350.000 €'], required:true },
      { id:'s_prima', label:'È la tua prima casa?', type:'select', options:['Sì, prima casa','No, ne ho già una','Sto vendendo per ricomprare'], required:true },
      { id:'s_mutuo_casa', label:'Hai bisogno di mutuo?', type:'select', options:['Sì','No, pago in contanti','Devo ancora capire'], required:true },
      { id:'s_fase', label:'A che punto sei?', type:'select', options:['Sto cercando casa','Ho trovato casa, devo fare l\'offerta','Ho già firmato il compromesso','Sono in fase di rogito'], required:true },
    ],
  },
  'figlio': {
    title: 'Personalizza la guida — Aspetto un figlio',
    back: '/figlio',
    sectionTitle: 'Dettagli sulla tua situazione',
    fields: [
      { id:'s_fase_figlio', label:'A che punto sei?', type:'select', options:['In gravidanza','Figlio appena nato (0–3 mesi)','Figlio piccolo (3–12 mesi)','Sto pianificando'], required:true },
      { id:'s_data', label:'Data presunta parto o data di nascita', type:'text', placeholder:'Es. Giugno 2026, oppure 15/01/2026', required:false },
      { id:'s_lavoro_m', label:'Situazione lavorativa della madre', type:'select', options:['Dipendente','Autonoma / P.IVA','Disoccupata','Altro'], required:true },
      { id:'s_isee_f', label:'Hai già un ISEE in corso di validità?', type:'select', options:['Sì','No','Non so cos\'è'], required:true },
    ],
  },
  'ristrutturare': {
    title: 'Personalizza la guida — Ristrutturare casa',
    back: '/ristrutturare',
    sectionTitle: 'Dettagli sulla tua ristrutturazione',
    fields: [
      { id:'s_tipo_lavori', label:'Tipo di lavori previsti', type:'select', options:['Ristrutturazione interna (bagno, cucina, pavimenti)','Efficientamento energetico (caldaia, cappotto, infissi)','Entrambi','Altro / non so ancora'], required:true },
      { id:'s_importo', label:'Budget previsto per i lavori', type:'select', options:['Meno di 20.000 €','20.000 – 50.000 €','50.000 – 96.000 €','Oltre 96.000 €'], required:true },
      { id:'s_primacasa_r', label:'I lavori sono sulla prima casa?', type:'select', options:['Sì','No, seconda casa','Immobile appena acquistato'], required:true },
      { id:'s_inizio', label:'Quando prevedi di iniziare?', type:'select', options:['Già iniziati','Entro 1 mese','Entro 6 mesi','Non ho ancora deciso'], required:false },
    ],
  },
};

export default function OrdinaForm() {
  const [schedaParam, setSchedaParam] = useState('');
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nome:'', eta:'', citta:'', lavoro:'', reddito:'', famiglia:'', situazione:'', email:'', telefono:'',
  });
  const [specificData, setSpecificData] = useState({});
  const [checks, setChecks] = useState({ privacy:false, marketing:false, termini:false });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const s = p.get('scheda') || '';
    if (s && schedeConfig[s]) setSchedaParam(s);
  }, []);

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }));
  const setSpec = (k, v) => setSpecificData(prev => ({ ...prev, [k]: v }));

  const config = schedaParam ? schedeConfig[schedaParam] : null;
  const backHref = config ? config.back : '/';
  const totalSteps = config ? 3 : 2;

  const validateStep = (s) => {
    if (s === 1) {
      const missing = [];
      if (!form.eta) missing.push('Età');
      if (!form.citta) missing.push('Città o CAP');
      if (!form.lavoro) missing.push('Situazione lavorativa');
      if (!form.reddito) missing.push('Reddito annuo lordo');
      if (!form.famiglia) missing.push('Nucleo familiare');
      if (missing.length) { setError('Completa questi campi: ' + missing.join(', ')); return false; }
      return true;
    }
    if (s === 2 && config) {
      const missing = [];
      config.fields.forEach(f => { if (f.required && !specificData[f.id]) missing.push(f.label); });
      if (missing.length) { setError('Completa questi campi: ' + missing.join(', ')); return false; }
      return true;
    }
    return true;
  };

  const nextStep = () => {
    setError('');
    if (!validateStep(step)) return;
    setStep(s => Math.min(s + 1, totalSteps));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const prevStep = () => {
    setError(''); setStep(s => Math.max(s - 1, 1)); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const handleSubmit = async () => {
    setError('');
    if (!form.email || !form.email.includes('@') || !form.email.includes('.')) {
      setError('Inserisci un\'email valida per ricevere la scheda.'); return;
    }
    if (!form.telefono || form.telefono.replace(/\D/g,'').length < 8) {
      setError('Inserisci un numero di telefono valido.'); return;
    }
    if (!checks.privacy || !checks.marketing || !checks.termini) {
      setError('Per procedere devi accettare tutte e tre le condizioni.'); return;
    }
    setLoading(true);
    const logData = new URLSearchParams({
      email: form.email, telefono: form.telefono, nome: form.nome, eta: form.eta, citta: form.citta,
      lavoro: form.lavoro, reddito: form.reddito, famiglia: form.famiglia,
      situazione: form.situazione, scheda: schedaParam || 'non specificata',
      dettagli: JSON.stringify(specificData),
      privacy: checks.privacy ? 'Sì' : 'No',
      marketing: checks.marketing ? 'Sì' : 'No',
      termini: checks.termini ? 'Sì' : 'No',
    });
    new Image().src = `${LOGGER_URL}?${logData.toString()}`;
    await new Promise(r => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  const renderField = (f) => {
    const reqMark = f.required ? <span className="req"> *</span> : <span className="opt"> (facoltativo)</span>;
    return (
      <div className="field" key={f.id}>
        <label htmlFor={f.id}>{f.label}{reqMark}</label>
        {f.type === 'select' ? (
          <select id={f.id} value={specificData[f.id] || ''} onChange={e => setSpec(f.id, e.target.value)}>
            <option value="" disabled>Seleziona</option>
            {f.options.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        ) : (
          <input type="text" id={f.id} placeholder={f.placeholder || ''} value={specificData[f.id] || ''} onChange={e => setSpec(f.id, e.target.value)} />
        )}
      </div>
    );
  };

  const renderSpecificFields = () => {
    if (!config) return null;
    const fields = config.fields;
    const rows = [];
    for (let i = 0; i < fields.length; i += 2) {
      const f1 = fields[i]; const f2 = fields[i + 1];
      if (f2) rows.push(<div className="row2" key={i}>{renderField(f1)}{renderField(f2)}</div>);
      else rows.push(<div key={i}>{renderField(f1)}</div>);
    }
    return rows;
  };

  // ─── STEPS BAR ───
  const StepsBar = () => {
    const items = [{ n: 1, label: 'La tua situazione' }];
    if (config) items.push({ n: 2, label: 'Dettagli' });
    items.push({ n: config ? 3 : 2, label: 'Contatti' });
    return (
      <div className="steps-bar">
        {items.map((it, i) => (
          <div key={it.n} style={{ display: 'flex', alignItems: 'center' }}>
            {i > 0 && <div className={`step-line${step > it.n - 1 ? ' done' : ''}`} />}
            <div className={`step-item${step === it.n ? ' active' : ''}${step > it.n ? ' done' : ''}`}>
              <div className="step-circle">{step > it.n ? '✓' : it.n}</div>
              <div className="step-label">{it.label}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // ─── SUCCESS ───
  if (submitted) {
    return (
      <div className="ordina-wrap">
        <div className="ordina-success">
          <div className="success-icon">✅</div>
          <h2>Richiesta ricevuta!</h2>
          <p>Ti ricontatteremo all&apos;indirizzo <strong>{form.email}</strong> entro 24 ore per aiutarti con la tua pratica.</p>
          <p className="success-sub">In base alla tua situazione, ti indirizzeremo verso il professionista più adatto nella tua zona. Nessun obbligo — solo se ti fa comodo.</p>
          <Link href={backHref} className="btn-back">← Torna alla guida</Link>
        </div>
      </div>
    );
  }

  // ─── FORM ───
  return (
    <div className="ordina-wrap">
      <div className="ordina-hero">
        <Link href={backHref} className="back-top">← Torna alla guida gratuita</Link>
        <h1>{config ? config.title : 'Personalizza la tua guida'}</h1>
        <p>Compila il form e ti ricontattiamo <strong>gratis entro 24 ore</strong> per aiutarti con i tuoi numeri esatti, i bonus a cui hai diritto e i professionisti giusti nella tua zona.</p>
      </div>

      <div className="ordina-form">
        <StepsBar />

        {error && (
          <div className="form-error">
            <span className="form-error-icon">⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* STEP 1: DATI GENERALI */}
        {step === 1 && (
          <div className="form-section">
            <div className="fs-title">La tua situazione</div>
            <div className="row2">
              <div className="field">
                <label htmlFor="nome">Nome <span className="opt">(facoltativo)</span></label>
                <input type="text" id="nome" placeholder="Come ti chiami?" value={form.nome} onChange={e => set('nome', e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="eta">Età <span className="req">*</span></label>
                <select id="eta" value={form.eta} onChange={e => set('eta', e.target.value)}>
                  <option value="" disabled>Seleziona</option>
                  <option>Meno di 26 anni</option><option>26–35 anni</option><option>36–45 anni</option><option>46–60 anni</option><option>Oltre 60 anni</option>
                </select>
              </div>
            </div>
            <div className="row2">
              <div className="field">
                <label htmlFor="citta">Città o CAP <span className="req">*</span></label>
                <input type="text" id="citta" placeholder="Es. Milano oppure 80100" value={form.citta} onChange={e => set('citta', e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="lavoro">Situazione lavorativa <span className="req">*</span></label>
                <select id="lavoro" value={form.lavoro} onChange={e => set('lavoro', e.target.value)}>
                  <option value="" disabled>Seleziona</option>
                  <option>Dipendente a tempo indeterminato</option><option>Dipendente a tempo determinato</option><option>Partita IVA / Autonomo</option><option>Pensionato</option><option>Disoccupato / In cerca</option><option>Studente</option><option>Altro</option>
                </select>
              </div>
            </div>
            <div className="row2">
              <div className="field">
                <label htmlFor="reddito">Reddito annuo lordo <span className="req">*</span> <span className="opt">(circa)</span></label>
                <select id="reddito" value={form.reddito} onChange={e => set('reddito', e.target.value)}>
                  <option value="" disabled>Seleziona</option>
                  <option>Meno di 15.000 €</option><option>15.000 – 28.000 €</option><option>28.000 – 50.000 €</option><option>50.000 – 75.000 €</option><option>Oltre 75.000 €</option><option>Preferisco non dirlo</option>
                </select>
                <div className="field-hint">Serve solo per calcolare detrazioni e scaglioni IRPEF.</div>
              </div>
              <div className="field">
                <label htmlFor="famiglia">Nucleo familiare <span className="req">*</span></label>
                <select id="famiglia" value={form.famiglia} onChange={e => set('famiglia', e.target.value)}>
                  <option value="" disabled>Seleziona</option>
                  <option>Single, senza figli</option><option>Coppia, senza figli</option><option>Con 1 figlio</option><option>Con 2 figli</option><option>Con 3 o più figli</option>
                </select>
              </div>
            </div>
            <div className="step-btns">
              <button className="step-next" onClick={nextStep}>Passo {config ? '2' : '2'} di {totalSteps} →</button>
            </div>
          </div>
        )}

        {/* STEP 2: DETTAGLI SPECIFICI (only if scheda has fields) */}
        {step === 2 && config && (
          <div className="form-section">
            <div className="fs-title">{config.sectionTitle}</div>
            {renderSpecificFields()}
            <div className="field" style={{ marginTop: 20 }}>
              <label htmlFor="situazione">Qualcos&apos;altro? <span className="opt">(facoltativo)</span></label>
              <textarea id="situazione" placeholder="Dettagli aggiuntivi sulla tua situazione..." value={form.situazione} onChange={e => set('situazione', e.target.value)} />
            </div>
            <div className="step-btns">
              <button className="step-back" onClick={prevStep}>← Indietro</button>
              <button className="step-next" onClick={nextStep}>Passo 3 di 3 →</button>
            </div>
          </div>
        )}

        {/* STEP 2 (no config) or STEP 3: CONTATTI + CONSENSI */}
        {((step === 2 && !config) || step === 3) && (
          <div className="form-section">
            <div className="fs-title">Dove ti ricontattiamo</div>
            <div className="row2">
              <div className="field">
                <label htmlFor="email">Email <span className="req">*</span></label>
                <input type="email" id="email" placeholder="la-tua@email.it" value={form.email} onChange={e => set('email', e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="telefono">Telefono <span className="req">*</span></label>
                <input type="tel" id="telefono" placeholder="Es. 333 1234567" value={form.telefono} onChange={e => set('telefono', e.target.value)} />
              </div>
            </div>
            <div className="field-hint" style={{ marginBottom: 20 }}>Ti ricontatteremo entro 24 ore per aiutarti con la tua pratica.</div>

            {!config && (
              <div className="field">
                <label htmlFor="situazione">Raccontami la tua situazione <span className="opt">(facoltativo)</span></label>
                <textarea id="situazione" placeholder="Es. Ho comprato casa l'anno scorso con mutuo, ho due figli..." value={form.situazione} onChange={e => set('situazione', e.target.value)} />
              </div>
            )}

            <hr className="divider" />

            <div className="price-box free-box">
              <div className="price-left">
                <div className="price-what">Cosa ricevi gratis</div>
                <div className="price-items">
                  <span>Analisi della tua situazione specifica</span>
                  <span>Bonus e detrazioni a cui hai diritto tu</span>
                  <span>Contatto con professionisti qualificati nella tua zona</span>
                  <span>Risposta entro 24 ore</span>
                </div>
              </div>
              <div className="price-right">
                <div className="price-amount free-amount">Gratis</div>
              </div>
            </div>

            <div className="legal-block">
              <label className="checkbox-row">
                <input type="checkbox" checked={checks.privacy} onChange={e => setChecks(p => ({...p, privacy: e.target.checked}))} />
                <span>Acconsento al trattamento dei miei dati personali per la generazione della scheda personalizzata, come descritto nella <Link href="/privacy" target="_blank">Privacy Policy</Link>.</span>
              </label>
              <label className="checkbox-row">
                <input type="checkbox" checked={checks.marketing} onChange={e => setChecks(p => ({...p, marketing: e.target.checked}))} />
                <span>Acconsento a essere contattato da <strong>professionisti selezionati</strong> (commercialisti, consulenti, mediatori creditizi, geometri) in relazione alla mia situazione, e a ricevere comunicazioni commerciali da ZeroBurocrazia. Posso revocare il consenso in qualsiasi momento.</span>
              </label>
              <label className="checkbox-row">
                <input type="checkbox" checked={checks.termini} onChange={e => setChecks(p => ({...p, termini: e.target.checked}))} />
                <span>Ho letto e accetto i <Link href="/termini" target="_blank">Termini di Servizio</Link>.</span>
              </label>
            </div>

            <div className="step-btns" style={{ justifyContent: 'space-between' }}>
              <button className="step-back" onClick={prevStep}>← Indietro</button>
              <button className="btn-submit" onClick={handleSubmit} disabled={loading} style={{ margin: 0 }}>
                {loading ? 'Invio in corso…' : 'Invia richiesta gratuita →'}
              </button>
            </div>

            <div className="secure-note">🔒 I tuoi dati sono protetti e trattati nel rispetto del GDPR</div>
          </div>
        )}
      </div>

      <div className="back-link">
        <Link href={backHref}>← Torna alla guida gratuita</Link>
      </div>
    </div>
  );
}
