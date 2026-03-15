import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BrevoForm from '@/components/BrevoForm';
import ScrollReveal from '@/components/ScrollReveal';
import GuideEnhancer from '@/components/GuideEnhancer';
import WiseSection, { WiseFAQ } from '@/components/WiseSection';
import Calculator730 from '@/components/Calculator730';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';
import Tip from '@/components/Tip';
import './wise730.css';

export const metadata = {
  title: '730 Precompilato 2026: Come Farlo, Detrazioni, Scadenze e Rimborso',
  description: '730 precompilato 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze e come ottenere il massimo rimborso. Guida gratuita passo per passo.',
  keywords: ["730","730 2026","dichiarazione redditi","730 precompilato","come fare 730","detrazioni fiscali","scadenza 730","modello 730","730 online","CAF 730"],
  alternates: { canonical: 'https://zeroburocrazia.it/730' },
  openGraph: { type:'article', title:'730 Precompilato 2026: Come Farlo, Detrazioni, Scadenze e Rimborso', description:'730 precompilato 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze e come ottenere il massimo rimborso.', url:'https://zeroburocrazia.it/730', siteName:'ZeroBurocrazia', locale:'it_IT', images:[{url:'https://zeroburocrazia.it/og-730.png',width:1200,height:630}] },
  twitter: { card:'summary', title:'730 Precompilato 2026: Come Farlo, Detrazioni, Scadenze e Rimborso', description:'730 precompilato 2026: chi deve farlo, tutte le detrazioni, documenti necessari, scadenze e come ottenere il massimo rimborso.', images:['https://zeroburocrazia.it/og-730.png'] },
};

const faqItems = [
  { q: "Se non faccio il 730, cosa succede?", a: "<strong>Non vai in prigione.</strong> Ma perdi le detrazioni: centinaia o migliaia di euro ogni anno. Se eri obbligato e non lo fai, rischi sanzioni dal 120% al 240% delle imposte dovute." },
  { q: "Posso scaricare Netflix, palestra?", a: "<strong>Netflix no.</strong> Palestra per i tuoi figli 5\u201318 anni s\u00ec (detraibili al 19% fino a 210\u20ac). Per adulti: solo se prescritta dal medico." },
  { q: "Il CU non mi arriva, che faccio?", a: "Il datore \u00e8 <strong>obbligato per legge</strong> a consegnartela entro il 16 marzo. Sollecita per iscritto. Puoi scaricarla dal sito Agenzia Entrate con SPID." },
  { q: "Ho pagato in contanti, \u00e8 tutto perso?", a: "<strong>Dipende.</strong> Dal 2025 anche i farmaci da banco richiedono pagamento tracciabile. Ancora OK in contanti: farmaci <strong>con ricetta</strong> e visite mediche." },
  { q: "Ho cambiato lavoro, devo fare due 730?", a: "<strong>No, un solo 730</strong> con entrambe le CU. Probabilmente dovrai pagare un conguaglio." },
  { q: "730 congiunto con il partner?", a: "<strong>Solo se sposati o uniti civilmente.</strong> Crediti e debiti si compensano. Conviventi no." },
  { q: "Ho fatto un errore, posso correggerlo?", a: "<strong>S\u00ec.</strong> Entro il 30/9: 730 integrativo. Dopo: Modello Redditi correttivo entro il 30/11, o dichiarazione integrativa entro 5 anni." },
  { q: "NASpI, devo farlo?", a: "<strong>S\u00ec.</strong> NASpI = reddito. Se hai avuto stipendio + NASpI, il 730 \u00e8 praticamente obbligatorio." },
];

export default function Pagina730() {
  const schemas = [
    articleSchema({ title:'Guida completa al 730: detrazioni, rimborso e scadenze 2026', description:'Come fare il 730 nel 2026: chi deve farlo, detrazioni, documenti, scadenze e come massimizzare il rimborso.', url:'/730', image:'og730.png' }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-fisco page-730">
      <Nav variant="scheda" />
      <ScrollReveal />
      <GuideEnhancer />
      <SchemaOrg schemas={schemas} />

      {/* ═══ HERO ═══ */}
      <section className="ws ws-teal" style={{paddingTop:'90px',paddingBottom:'36px'}}>
        <div className="cat-badge" style={{background:'rgba(255,255,255,.12)',marginBottom:'14px'}}>💰 Fisco e soldi</div>
        <h1 style={{fontSize:'clamp(28px,7vw,40px)',fontWeight:800,color:'#fff',lineHeight:1.15,marginBottom:'10px',fontFamily:'var(--font-playfair),serif'}}>Faccio il <em style={{color:'var(--tc)'}}>730</em></h1>
        <p style={{fontSize:'15px',color:'rgba(255,255,255,.7)',lineHeight:1.6,marginBottom:'16px',maxWidth:'480px'}}>Come ottenere il rimborso più alto possibile dalla dichiarazione dei redditi. Guida gratuita aggiornata al 2026.</p>
        <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
          <span className="pill" style={{background:'rgba(255,255,255,.12)',color:'rgba(255,255,255,.85)',border:'none'}}>🕐 15 min</span>
          <span className="pill" style={{background:'rgba(255,255,255,.12)',color:'rgba(255,255,255,.85)',border:'none'}}>⏰ Scade 30/9</span>
          <span className="pill" style={{background:'rgba(255,255,255,.12)',color:'rgba(255,255,255,.85)',border:'none'}}>✓ Marzo 2026</span>
        </div>
      </section>

      {/* ═══ KEY STATS ═══ */}
      <div className="ws-stats">
        <div className="ws-stat"><div className="ws-stat-n" style={{color:'var(--sage)'}}>0€</div><div className="ws-stat-l">da solo online</div></div>
        <div className="ws-stat"><div className="ws-stat-n" style={{color:'var(--tc)'}}>30/9</div><div className="ws-stat-l">scadenza</div></div>
        <div className="ws-stat"><div className="ws-stat-n" style={{color:'var(--teal)'}}>~760€</div><div className="ws-stat-l">rimborso medio</div></div>
      </div>

      {/* ═══ 1. COS'È ═══ */}
      <section className="ws ws-gray" id="cose">
        <div className="ws-label">Le basi</div>
        <div className="ws-title">Cos'è il 730</div>
        <div className="ws-sub">In 30 secondi</div>
        <div className="ws-vgrid">
          <div className="ws-vcard"><div className="ws-vcard-e">💼</div><div className="ws-vcard-t">Tu lavori</div><div className="ws-vcard-s">Il datore toglie le tasse &quot;a occhio&quot;</div></div>
          <div className="ws-vcard"><div className="ws-vcard-e">🧾</div><div className="ws-vcard-t">Fai il 730</div><div className="ws-vcard-s">Dici allo Stato le tue spese</div></div>
        </div>
        <div className="ws-arrow">↓</div>
        <div style={{padding:'18px',borderRadius:'16px',background:'var(--sage)',textAlign:'center'}}>
          <div style={{fontSize:'24px',fontWeight:800,color:'#fff'}}>💸 Rimborso</div>
          <div style={{fontSize:'13px',color:'rgba(255,255,255,.8)',marginTop:'4px'}}>In busta paga tra luglio e agosto</div>
        </div>
        <WiseSection expandText={<>
          <p>Quando lavori come dipendente, il tuo datore di lavoro (il <strong>sostituto d'imposta</strong>) ti toglie le tasse dallo stipendio ogni mese. Il problema è che lui non sa tutto di te: non sa se paghi l'affitto, se vai dal dentista, se hai figli che fanno sport.</p>
          <p>Il 730 serve a dire allo Stato: <strong>&quot;Ehi, ho speso questi soldi. Ridammene un po'.&quot;</strong> Nella maggior parte dei casi hai pagato più tasse del dovuto. Il 730 ti fa riottenere la differenza.</p>
          <div className="ws-tip"><div className="ws-tip-t">💡 Conviene anche se non sei obbligato</div><p>Dentista + metro + sport + affitto fanno facilmente 500–1.500€ di rimborso. Ogni anno. Se non fai il 730, quei soldi li regali allo Stato.</p></div>
          <p style={{fontSize:'15px',fontWeight:700,color:'var(--t1)',marginBottom:'8px'}}>📖 Glossario</p>
          <div className="ws-gloss">
            <div className="ws-gloss-item"><span className="ws-gloss-term">CU</span> <span className="ws-gloss-def">— il foglio che il datore ti dà entro marzo. Dice quanto hai guadagnato.</span></div>
            <div className="ws-gloss-item"><span className="ws-gloss-term">IRPEF</span> <span className="ws-gloss-def">— la tassa principale sui redditi. Quella in busta paga.</span></div>
            <div className="ws-gloss-item"><span className="ws-gloss-term">Detrazione</span> <span className="ws-gloss-def">— spesa che lo Stato ti rimborsa in parte (di solito 19%).</span></div>
            <div className="ws-gloss-item"><span className="ws-gloss-term">Franchigia</span> <span className="ws-gloss-def">— soglia sotto cui non rimborsano. Per le mediche: 129,11€.</span></div>
            <div className="ws-gloss-item"><span className="ws-gloss-term">Precompilata</span> <span className="ws-gloss-def">— il 730 che l'Agenzia prepara per te, già parzialmente compilato.</span></div>
            <div className="ws-gloss-item"><span className="ws-gloss-term">Conguaglio</span> <span className="ws-gloss-def">— il conto finale. Troppe tasse = rimborso. Poche = devi saldare.</span></div>
          </div>
        </>} />
      </section>

      {/* ═══ 2. QUANTO PERDI ═══ */}
      <section className="ws ws-teal" id="quanto-perdi">
        <div className="ws-label">Il conto che nessuno ti fa</div>
        <div className="ws-title">Quanto perdi senza il 730</div>
        <div className="ws-bign"><div className="ws-bign-n">1.178€</div><div className="ws-bign-l">persi ogni anno da Marco, 28 anni, dipendente</div></div>
        <div className="ws-vgrid">
          <div className="ws-vcard"><div className="ws-vcard-e">🦷</div><div className="ws-vcard-n">+89€</div><div className="ws-vcard-t">Dentista</div></div>
          <div className="ws-vcard"><div className="ws-vcard-e">🚇</div><div className="ws-vcard-n">+47€</div><div className="ws-vcard-t">Metro</div></div>
          <div className="ws-vcard"><div className="ws-vcard-e">🏠</div><div className="ws-vcard-n">+991€</div><div className="ws-vcard-t">Affitto</div></div>
          <div className="ws-vcard"><div className="ws-vcard-e">🐕</div><div className="ws-vcard-n">+51€</div><div className="ws-vcard-t">Veterinario</div></div>
        </div>
        <WiseSection expandLabel="Vedi il calcolo completo ↓" expandText={<>
          <p>Marco ha 28 anni, lavora come dipendente e guadagna 14.000€ lordi. Non ha mai fatto il 730.</p>
          <p><strong>Spese mediche:</strong> 600€ − 129€ franchigia × 19% = <strong>89€</strong></p>
          <p><strong>Abbonamento metro:</strong> 250€ × 19% = <strong>47€</strong></p>
          <p><strong>Affitto under 31:</strong> detrazione fissa = <strong>fino a 991€</strong></p>
          <p><strong>Veterinario:</strong> 400€ − 129 × 19% = <strong>51€</strong></p>
          <p>Con <strong>mutuo</strong>, <strong>figli</strong>, o <strong>ristrutturazione</strong> si recuperano 2.000–4.000€/anno. In 5 anni sono quasi <strong>6.000€ regalati</strong>.</p>
        </>} />
      </section>

      {/* ═══ 3. NOVITÀ 2026 ═══ */}
      <section className="ws ws-white" id="novita">
        <div className="ws-label">Aggiornamenti</div>
        <div className="ws-title">Novità 2026</div>
        <div className="ws-sub">Le regole cambiano ogni anno. Ecco cosa sapere.</div>
        <div className="ws-tip"><div className="ws-tip-t">💡 Tre scaglioni IRPEF definitivi</div><p>Fino a 28.000€: 23%. Da 28.001 a 50.000€: 33% (era 35%). Oltre 50.000€: 43%. Risparmio ~440€.</p></div>
        <div className="ws-warn"><div className="ws-warn-t">⚠️ Reddito sopra 75.000€? Detrazioni ridotte</div><p>Tagliate fino ad azzerarsi a 100.000€. Eccezione: spese sanitarie e mutui pre-2024.</p></div>
        <div className="ws-warn"><div className="ws-warn-t">⚠️ Figli a carico: limite 30 anni</div><p>Solo fino ai 30 anni (prima nessun limite). Oltre i 30, non detraibili (salvo disabilità).</p></div>
        <div className="ws-money"><div className="ws-money-t">💶 Detrazione lavoro dipendente aumentata</div><p>Se guadagni meno di 15.000€: da 1.880€ a 1.955€.</p></div>
        <div className="ws-tip"><div className="ws-tip-t">💡 Spese scolastiche: sale il tetto</div><p>Da 800€ a 1.000€ per studente. Risparmio max da 152€ a 190€ per figlio.</p></div>
      </section>

      {/* ═══ 4. DETRAZIONI ═══ */}
      <section className="ws ws-gray" id="detrazioni">
        <div className="ws-label">Rimborsi</div>
        <div className="ws-title">Quanto recuperi</div>
        <div className="ws-sub">Lo Stato ti rimborsa il 19% su queste spese</div>
        <div className="ws-vgrid">
          <div className="ws-vcard"><div className="ws-vcard-e">🦷</div><div className="ws-vcard-t">Dentista</div><div className="ws-vcard-n">+127€</div><div className="ws-vcard-s">su 800€</div></div>
          <div className="ws-vcard"><div className="ws-vcard-e">🏠</div><div className="ws-vcard-t">Mutuo</div><div className="ws-vcard-n">+760€</div><div className="ws-vcard-s">su 4.000€</div></div>
          <div className="ws-vcard"><div className="ws-vcard-e">🚇</div><div className="ws-vcard-t">Trasporti</div><div className="ws-vcard-n">+47€</div><div className="ws-vcard-s">su 250€</div></div>
          <div className="ws-vcard"><div className="ws-vcard-e">👶</div><div className="ws-vcard-t">Sport figli</div><div className="ws-vcard-n">+40€</div><div className="ws-vcard-s">su 500€</div></div>
          <div className="ws-vcard"><div className="ws-vcard-e">🐕</div><div className="ws-vcard-t">Veterinario</div><div className="ws-vcard-n">+51€</div><div className="ws-vcard-s">su 400€</div></div>
          <div className="ws-vcard"><div className="ws-vcard-e">🏫</div><div className="ws-vcard-t">Scuola</div><div className="ws-vcard-n">+190€</div><div className="ws-vcard-s">su 1.000€</div></div>
        </div>
        <WiseSection expandText={<>
          <p>Le <strong>detrazioni</strong> sono spese che lo Stato ti rimborsa in parte. Dentista + metro + sport + veterinario + affitto fanno facilmente <strong>500–1.500€ di rimborso</strong>. Ogni anno.</p>
          <p style={{fontSize:'15px',fontWeight:700,color:'var(--t1)',marginBottom:'8px'}}>Tabella completa</p>
          <div className="ws-dtable">
            {[["Spese mediche","19%"],["Interessi mutuo","19%"],["Affitto","300–991€"],["Spese scolastiche","19%"],["Sport figli 5–18","19%"],["Trasporto pubblico","19%"],["Veterinario","19%"],["Assicurazione vita","19%"],["Donazioni ONLUS","26%"],["Ristrutturazione","50%"],["Ecobonus","50–65%"],["Bonus mobili","50%"]].map((r,i)=><div className="ws-dtable-row" key={i}><div className="ws-dtable-name">{r[0]}</div><div className="ws-dtable-pct">{r[1]}</div></div>)}
          </div>
          <div className="ws-warn"><div className="ws-warn-t">⚠️ Le detrazioni dimenticate</div><p>Trasporti, veterinario, sport figli, funebri, donazioni ONLUS, badanti. Se non le inserisci, li perdi.</p></div>
        </>} />
      </section>

      {/* ═══ 5. CHI DEVE FARLO ═══ */}
      <section className="ws ws-white" id="chi-deve">
        <div className="ws-label">Obblighi</div>
        <div className="ws-title">Chi deve fare il 730</div>
        <div className="ws-sub">Tre casi: obbligatorio, consigliato, impossibile</div>
        <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
          <div style={{padding:'16px',borderRadius:'14px',background:'#f0f8f5',border:'1px solid rgba(42,157,143,.2)'}}><div style={{fontSize:'14px',fontWeight:700,color:'var(--sage)'}}>✅ Devi farlo se</div><div style={{fontSize:'14px',color:'var(--t2)',marginTop:'4px'}}>Dipendente o pensionato con redditi nel 2025</div></div>
          <div style={{padding:'16px',borderRadius:'14px',background:'#FFF0E0',border:'1px solid rgba(227,100,20,.15)'}}><div style={{fontSize:'14px',fontWeight:700,color:'#b34e0e'}}>⚠️ Praticamente obbligatorio se</div><div style={{fontSize:'14px',color:'var(--t2)',marginTop:'4px'}}>Cambiato lavoro (due CU) o stipendio + NASpI</div></div>
          <div style={{padding:'16px',borderRadius:'14px',background:'#f3f7fb',border:'1px solid rgba(15,76,92,.12)'}}><div style={{fontSize:'14px',fontWeight:700,color:'var(--teal)'}}>💡 Ti conviene se</div><div style={{fontSize:'14px',color:'var(--t2)',marginTop:'4px'}}>Un lavoro tutto l'anno + spese da scaricare</div></div>
          <div style={{padding:'16px',borderRadius:'14px',background:'#f5f5f2'}}><div style={{fontSize:'14px',fontWeight:700,color:'var(--t3)'}}>🚫 Non puoi farlo se</div><div style={{fontSize:'14px',color:'var(--t2)',marginTop:'4px'}}>Hai la partita IVA → serve il Modello Redditi</div></div>
        </div>
        <WiseSection expandText={<>
          <p><strong>Due datori = 730 obbligatorio.</strong> Ogni datore ti ha tolto le tasse come se fossi stato lì tutto l'anno. Senza 730: avviso + sanzioni.</p>
          <div className="ws-tip"><div className="ws-tip-t">💡 La regola semplice</div><p>Se hai speso per salute, casa, figli, trasporti o animali — fai il 730. Ti spetta un rimborso.</p></div>
        </>} />
      </section>

      {/* ═══ 6. COME SI FA ═══ */}
      <section className="ws ws-white" id="come">
        <div className="ws-label">Passo per passo</div>
        <div className="ws-title">Come si fa il 730</div>
        <div className="ws-sub">5 passi dal divano di casa</div>
        <div className="ws-flow">
          {[["🔐","Fai lo SPID","15 min, gratis"],["📄","Raccogli i documenti","CU + ricevute spese"],["💻","Apri la precompilata","agenziaentrate.gov.it"],["✅","Controlla e invia","Entro il 30/9"],["💸","Ricevi il rimborso","Luglio in busta"]].map((s,i)=><div key={i}><div className="ws-flow-item"><div className="ws-flow-icon"><span dangerouslySetInnerHTML={{__html:s[0]}}/></div><div className="ws-flow-info"><div className="ws-flow-t">{s[1]}</div><div className="ws-flow-s">{s[2]}</div></div><div className="ws-flow-num">{i+1}</div></div>{i<4&&<div className="ws-flow-line"/>}</div>)}
        </div>
        <WiseSection expandText={<>
          <p><strong>Passo 0 — SPID.</strong> Per la precompilata online serve lo SPID. <Link href="/spid" style={{color:'var(--tc)',fontWeight:600}}>15 minuti per farlo</Link>. Al CAF non serve.</p>
          <p><strong>Passo 1 — Documenti.</strong> CU dal datore (entro 16 marzo), ricevute mediche, affitto, mutuo, scuola, trasporti.</p>
          <p><strong>Passo 2 — Decidi come.</strong> Da solo (gratis, 1–2h). CAF (30–80€, 30 min). Commercialista (80–200€).</p>
          <p><strong>Passo 3 — Precompilata.</strong> Dal 30 aprile. <strong>Non accettarla senza controllare.</strong> Mancano sempre: sport figli, affitto, spese private.</p>
          <p><strong>Passo 4 — Invia.</strong> Fallo tra maggio e giugno: prima lo fai, prima il rimborso.</p>
          <p><strong>Passo 5 — Rimborso.</strong> In busta paga tra luglio e agosto. Pensionati: agosto–settembre.</p>
        </>} />
      </section>

      {/* ═══ 7. QUANTO COSTA ═══ */}
      <section className="ws ws-gray" id="costi">
        <div className="ws-label">Confronto</div>
        <div className="ws-title">Quanto costa farlo</div>
        <div className="ws-sub">Tre opzioni, un solo vincitore</div>
        <div className="ws-compare">
          <div className="ws-cmp ws-cmp-best"><div className="ws-cmp-badge">Consigliato</div><div className="ws-cmp-info"><div className="ws-cmp-name">Da solo online</div><div className="ws-cmp-detail">1–2 ore · Serve SPID</div></div><div className="ws-cmp-cost">0€</div></div>
          <div className="ws-cmp"><div className="ws-cmp-info"><div className="ws-cmp-name">Al CAF</div><div className="ws-cmp-detail">30 min + attesa</div></div><div className="ws-cmp-cost">30–80€</div></div>
          <div className="ws-cmp"><div className="ws-cmp-info"><div className="ws-cmp-name">Commercialista</div><div className="ws-cmp-detail">15 min tu</div></div><div className="ws-cmp-cost">80–200€</div></div>
        </div>
        <div className="ws-money"><div className="ws-money-t">💶 Il consiglio onesto</div><p><strong>Un lavoro + poche spese</strong> → da solo. <strong>Mutuo o cambio lavoro</strong> → CAF. <strong>Immobili, cripto</strong> → commercialista.</p></div>
      </section>

      {/* ═══ 8. DOCUMENTI ═══ */}
      <section className="ws ws-white" id="documenti">
        <div className="ws-label">Checklist</div>
        <div className="ws-title">Cosa ti serve</div>
        <div className="ws-clabel">Obbligatori</div>
        <div className="ws-chk"><span className="ws-chk-e">📄</span><span className="ws-chk-t">CU 2026</span><span className="ws-chk-ok">✓</span></div>
        <div className="ws-chk"><span className="ws-chk-e">🪪</span><span className="ws-chk-t">Documento + codice fiscale</span><span className="ws-chk-ok">✓</span></div>
        <div className="ws-chk"><span className="ws-chk-e">🏦</span><span className="ws-chk-t">IBAN</span><span className="ws-chk-ok">✓</span></div>
        <div className="ws-clabel">Per le detrazioni</div>
        {[["🦷","Spese mediche"],["🏠","Contratto affitto"],["🏦","Interessi mutuo"],["🏫","Spese scolastiche"],["⚽","Sport figli"],["🚇","Abbonamento trasporti"],["🐕","Veterinario"],["🔨","Fatture ristrutturazione"]].map((d,i)=><div className="ws-chk" key={i}><span className="ws-chk-e" dangerouslySetInnerHTML={{__html:d[0]}}/><span className="ws-chk-t">{d[1]}</span><span className="ws-chk-no"/></div>)}
        <WiseSection expandText={<>
          <p><strong>CU</strong> — il foglio dal datore. Dice quanto hai guadagnato e quante tasse hai pagato. Senza: non puoi fare nulla.</p>
          <p><strong>Ricevute mediche</strong> — farmaci, visite, esami, dentista, psicologo, occhiali.</p>
          <p><strong>Contratto affitto</strong> — registrato, per la detrazione.</p>
          <p><strong>Interessi mutuo</strong> — te li manda la banca tra febbraio e marzo.</p>
          <p><strong>Fatture ristrutturazione</strong> — con bonifici parlanti. Senza: perdi la detrazione.</p>
          <div className="ws-tip"><div className="ws-tip-t">💡 Metti tutto in una cartellina</div><p>Quando ricevi una ricevuta, mettila subito nella cartellina &quot;730&quot;. A maggio avrai tutto pronto in 5 minuti.</p></div>
        </>} />
      </section>

      {/* ═══ 9. ERRORI ═══ */}
      <section className="ws ws-warn" id="errori">
        <div className="ws-label">Attenzione</div>
        <div className="ws-title">Errori da evitare</div>
        <div className="ws-wcard"><span className="ws-wcard-e">⚠️</span><div><div className="ws-wcard-t">Accettare la precompilata senza controllarla</div><div className="ws-wcard-d">Sport figli, affitto, spese private spesso mancano.</div></div></div>
        <div className="ws-wcard"><span className="ws-wcard-e">⚠️</span><div><div className="ws-wcard-t">Non fare il 730 perché &quot;tanto non cambia&quot;</div><div className="ws-wcard-d">Anche con poche spese: 200–400€ ogni anno.</div></div></div>
        <div className="ws-wcard"><span className="ws-wcard-e">⚠️</span><div><div className="ws-wcard-t">Pagare in contanti</div><div className="ws-wcard-d">Dal 2025 anche i farmaci da banco richiedono tracciabilità.</div></div></div>
        <div className="ws-wcard"><span className="ws-wcard-e">⚠️</span><div><div className="ws-wcard-t">Andare al CAF a settembre</div><div className="ws-wcard-d">Vai tra maggio e giugno: zero code, tempo per errori.</div></div></div>
      </section>

      {/* ═══ 10. CALENDARIO ═══ */}
      <section className="ws ws-white" id="calendario">
        <div className="ws-label">Scadenze</div>
        <div className="ws-title">Calendario 2026</div>
        <div className="ws-tl">
          <div className="ws-tl-item ws-tl-active"><div className="ws-tl-dot"/><div className="ws-tl-date">16 Marzo</div><div className="ws-tl-title">Ricevi la CU</div><div className="ws-tl-desc">Dal datore di lavoro o INPS</div></div>
          <div className="ws-tl-item"><div className="ws-tl-dot"/><div className="ws-tl-date">30 Aprile</div><div className="ws-tl-title">Online la precompilata</div><div className="ws-tl-desc">Accedi con SPID su agenziaentrate.gov.it</div></div>
          <div className="ws-tl-item"><div className="ws-tl-dot"/><div className="ws-tl-date">Maggio – Giugno</div><div className="ws-tl-title">Periodo ideale</div><div className="ws-tl-desc">Meno code, rimborso a luglio</div></div>
          <div className="ws-tl-item"><div className="ws-tl-dot"/><div className="ws-tl-date">Luglio – Agosto</div><div className="ws-tl-title">Rimborso in busta</div><div className="ws-tl-desc">Se hai inviato entro giugno</div></div>
          <div className="ws-tl-item"><div className="ws-tl-dot"/><div className="ws-tl-date">30 Settembre</div><div className="ws-tl-title">Scadenza invio</div><div className="ws-tl-desc">Dopo: Modello Redditi</div></div>
        </div>
      </section>

      {/* ═══ 11. CALCOLATORE ═══ */}
      <section className="ws ws-gray" id="calcolatore">
        <div className="ws-label">Stimatore</div>
        <div className="ws-title">Calcola il tuo rimborso</div>
        <div className="ws-sub">Muovi i cursori per stimare quanto recuperi</div>
        <Calculator730 />
      </section>

      {/* ═══ 12. ESEMPIO ═══ */}
      <section className="ws ws-white" id="esempio">
        <div className="ws-label">Esempio pratico</div>
        <div className="ws-title">Maria fa il 730</div>
        <div className="ws-sub">26 anni, impiegata a Torino, 22.000€ lordi</div>
        <div className="ws-flow">
          {[["📄","Marzo: raccoglie i documenti","CU + dentista 320€ + GTT 350€ + affitto"],["💻","Maggio: apre la precompilata","Dentista c'è, manca GTT — lo aggiunge"],["🔍","Controlla tutto","Mediche 36€ + affitto 991€ + trasporti 66€ = 1.093€"],["✅","Invia e aspetta","A luglio: 1.093€ in più. Costo: 0€. Tempo: 1h30"]].map((s,i)=><div key={i}><div className="ws-flow-item"><div className="ws-flow-icon"><span dangerouslySetInnerHTML={{__html:s[0]}}/></div><div className="ws-flow-info"><div className="ws-flow-t">{s[1]}</div><div className="ws-flow-s">{s[2]}</div></div></div>{i<3&&<div className="ws-flow-line"/>}</div>)}
        </div>
        <div className="ws-money"><div className="ws-money-t">💶 Morale</div><p>Maria per 4 anni non ha fatto il 730. Ha perso ~4.000€. Quest'anno ha recuperato 1.093€ in 1 ora e mezza.</p></div>
      </section>

      {/* ═══ 13. RITARDO ═══ */}
      <section className="ws ws-warn" id="ritardo">
        <div className="ws-label">Ritardi e sanzioni</div>
        <div className="ws-title">Se sei in ritardo</div>
        <div className="ws-sub">La vita succede. Ecco cosa fare.</div>
        <div className="ws-wcard"><span className="ws-wcard-e">📅</span><div><div className="ws-wcard-t">Entro il 25 ottobre</div><div className="ws-wcard-d">730 integrativo. Nessuna sanzione.</div></div></div>
        <div className="ws-wcard"><span className="ws-wcard-e">📅</span><div><div className="ws-wcard-t">Entro il 30 novembre</div><div className="ws-wcard-d">Modello Redditi correttivo. Meglio al CAF.</div></div></div>
        <div className="ws-wcard"><span className="ws-wcard-e">📅</span><div><div className="ws-wcard-t">Dopo il 30 novembre</div><div className="ws-wcard-d">Tardiva entro 90 giorni. Sanzione: 25€ o 1–10%.</div></div></div>
        <WiseSection expandText={<>
          <div className="ws-tip"><div className="ws-tip-t">💡 Hai dimenticato anni fa?</div><p>Dichiarazione integrativa entro 5 anni. Se ti spettava un rimborso, puoi ancora recuperarlo. Ravvedimento operoso = sanzioni ridotte.</p></div>
        </>} />
      </section>

      {/* ═══ 14. FAQ ═══ */}
      <section className="ws ws-teal" id="faq">
        <div className="ws-label">FAQ</div>
        <div className="ws-title">Domande frequenti</div>
        <div style={{marginTop:'16px'}}><WiseFAQ items={faqItems} /></div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="ws ws-white" style={{paddingBottom:'48px'}}>
        <div className="ws-cta">
          <div style={{fontSize:'28px',marginBottom:'8px'}}>📬</div>
          <div style={{fontSize:'18px',fontWeight:800,color:'var(--t1)',marginBottom:'6px'}}>Non perderti la scadenza</div>
          <div style={{fontSize:'13px',color:'var(--t3)',marginBottom:'16px'}}>Ti avvisiamo prima del 30 settembre.</div>
        </div>
        <BrevoForm pageName="730" />
      </section>

      <Footer />
    </div>
  );
}
