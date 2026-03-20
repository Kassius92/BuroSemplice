import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import FAQ from '@/components/FAQ';
import SchemaOrg, { articleSchema, faqSchema } from '@/components/SchemaOrg';

export const metadata = {
  title: 'SPID Non Funziona: Problemi Comuni e Come Risolverli nel 2026',
  description: 'SPID non funziona? Password scaduta, OTP che non arriva, errore di autenticazione, app bloccata. Tutti i problemi e le soluzioni, provider per provider.',
  keywords: ['SPID non funziona', 'SPID problemi', 'SPID errore', 'SPID OTP non arriva', 'SPID password scaduta', 'SPID bloccato', 'PosteID non funziona', 'SPID errore autenticazione'],
  alternates: { canonical: 'https://zeroburocrazia.it/spid/non-funziona' },
  openGraph: {
    title: 'SPID Non Funziona: Problemi Comuni e Soluzioni 2026',
    description: 'SPID non funziona? Ecco i problemi pi\u00f9 comuni e come risolverli.',
    url: 'https://zeroburocrazia.it/spid/non-funziona',
    type: 'article', siteName: 'ZeroBurocrazia', locale: 'it_IT',
    images: [{ url: 'https://zeroburocrazia.it/ogspid.png', width: 1200, height: 630 }],
  },
};

const faqItems = [
  { q: "L\u2019OTP non arriva via SMS, cosa faccio?", a: "Tre cose da verificare: <strong>1)</strong> il numero di telefono associato \u00e8 ancora attivo e corretto; <strong>2)</strong> hai campo (prova in un\u2019altra zona); <strong>3)</strong> riavvia il telefono. Se non funziona, passa all\u2019autenticazione <strong>via app</strong> (pi\u00f9 affidabile degli SMS). Se hai cambiato numero, devi aggiornarlo nell\u2019area personale del provider." },
  { q: "La password dello SPID \u00e8 scaduta, come la cambio?", a: "Vai sul sito del tuo provider (es. posteid.poste.it) e clicca <strong>\u201CPassword dimenticata\u201D</strong>. Ricevi un link via email per reimpostarla. Se non hai pi\u00f9 accesso all\u2019email, contatta il servizio clienti del provider o vai in ufficio postale con un documento." },
  { q: "L\u2019app PosteID non si apre o va in crash", a: "<strong>Aggiorna l\u2019app</strong> all\u2019ultima versione dallo store. Se non basta: disinstalla, reinstalla, e rifai il login. Se continua a non funzionare, controlla che il sistema operativo sia aggiornato (PosteID richiede versioni recenti di iOS/Android)." },
  { q: "Errore \u201CAutenticazione fallita\u201D sul sito della PA", a: "Spesso \u00e8 un problema del <strong>sito della PA</strong>, non del tuo SPID. Prova: 1) svuota cache e cookie del browser; 2) usa un browser diverso; 3) riprova dopo 10 minuti. Se il problema persiste, il sito potrebbe avere un\u2019interruzione temporanea." },
  { q: "Ho cambiato telefono e lo SPID non funziona pi\u00f9", a: "Se usavi l\u2019<strong>app come secondo fattore</strong>, devi reinstallarla sul nuovo telefono e riassociarla. Con PosteID: accedi su posteid.poste.it dal computer, vai in \u201CGestione app\u201D e associa il nuovo dispositivo. Con altri provider: stessa procedura nell\u2019area personale." },
  { q: "Lo SPID \u00e8 stato sospeso per mancato pagamento (Poste)", a: "Dal 2026, se non paghi il canone di 6\u20ac/anno, PosteID viene <strong>sospeso</strong> (non cancellato). Hai 24 mesi per pagare e riattivarlo. Puoi pagare online nell\u2019area personale o in ufficio postale. In alternativa, attiva uno SPID gratuito con un altro provider (Lepida, InfoCamere)." },
];

export default function Page() {
  const schemas = [
    articleSchema({
      title: 'SPID Non Funziona: Problemi Comuni e Soluzioni 2026',
      description: 'SPID non funziona? Tutti i problemi pi\u00f9 comuni e come risolverli.',
      url: '/spid/non-funziona', image: 'ogspid.png',
      datePublished: '2026-03-20', dateModified: '2026-03-20',
    }),
    faqSchema(faqItems),
  ];

  return (
    <div className="cat-documenti">
    <>
      <Nav variant="scheda" />
      <ScrollReveal />
      <SchemaOrg schemas={schemas} />

      <div className="layout" style={{paddingTop: '120px'}}>
        <main className="main">

          <div className="perc r">
            <span className="perc-label">Guida principale</span>
            <div className="perc-steps">
              <a href="/spid" className="ps active">{'\uD83D\uDD10'} Come Fare lo SPID</a>
              <span className="pa">{'\u203A'}</span>
              <a href="/spid/non-funziona" className="ps">{'\u26A0\uFE0F'} Non funziona</a>
            </div>
          </div>

          <div className="sec r" id="intro">
            <div className="sec-tag">Guida specifica</div>
            <h1 style={{fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.3px', marginBottom: '18px'}}>SPID <em>non funziona</em>: problemi e soluzioni</h1>

            <p>Lo SPID non ti fa entrare? Stai calmo. Il 90% dei problemi si risolve in <strong>meno di 5 minuti</strong>. Ecco i problemi pi&ugrave; comuni e la soluzione per ognuno.</p>
          </div>

          <div className="sec r" id="problemi">
            <div className="sec-tag">Problemi comuni</div>
            <h2>Trova il tuo problema</h2>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} 1. Password scaduta o dimenticata</div>
              <p><strong>Sintomo:</strong> &ldquo;Credenziali non valide&rdquo; anche se sei sicuro della password.</p>
              <p><strong>Causa:</strong> La password SPID scade ogni 6-12 mesi (dipende dal provider). Se non la cambi, smette di funzionare.</p>
              <p><strong>Soluzione:</strong> Vai sul sito del provider &rarr; &ldquo;Password dimenticata&rdquo; &rarr; ricevi un link via email &rarr; imposta una nuova password. Con PosteID puoi anche andare in ufficio postale con un documento.</p>
            </div>

            <div className="ib warn r d1">
              <div className="ib-t">{'\u26A0\uFE0F'} 2. L&apos;OTP (codice via SMS) non arriva</div>
              <p><strong>Sintomo:</strong> Inserisci le credenziali, ti chiede il codice OTP, ma l&apos;SMS non arriva.</p>
              <p><strong>Cause possibili:</strong> numero di telefono cambiato, problemi di rete, SMS bloccati dal telefono.</p>
              <p><strong>Soluzione:</strong> 1) Verifica che il numero associato sia ancora corretto nell&apos;area personale del provider. 2) Riavvia il telefono. 3) Passa all&apos;autenticazione <strong>via app</strong> invece che via SMS (pi&ugrave; affidabile). 4) Se hai cambiato numero, aggiornalo nell&apos;area personale.</p>
            </div>

            <div className="ib warn r d2">
              <div className="ib-t">{'\u26A0\uFE0F'} 3. L&apos;app del provider non funziona</div>
              <p><strong>Sintomo:</strong> L&apos;app si blocca, non carica, o non genera il codice di autenticazione.</p>
              <p><strong>Soluzione:</strong> 1) <strong>Aggiorna l&apos;app</strong> all&apos;ultima versione. 2) Se non basta: disinstalla, reinstalla, rifai il login. 3) Controlla che il sistema operativo del telefono sia aggiornato. 4) Se hai cambiato telefono, devi riassociare l&apos;app al nuovo dispositivo.</p>
            </div>

            <div className="ib warn r d3">
              <div className="ib-t">{'\u26A0\uFE0F'} 4. &ldquo;Errore di autenticazione&rdquo; su un sito della PA</div>
              <p><strong>Sintomo:</strong> Lo SPID funziona su alcuni siti ma non su altri.</p>
              <p><strong>Causa:</strong> Spesso &egrave; un problema del <strong>sito della PA</strong>, non del tuo SPID. Il sistema SPID e i siti governativi a volte hanno interruzioni.</p>
              <p><strong>Soluzione:</strong> 1) Svuota cache e cookie del browser. 2) Prova con un browser diverso. 3) Aspetta 10-15 minuti e riprova. 4) Se il problema &egrave; solo su un sito, &egrave; colpa loro &mdash; riprova pi&ugrave; tardi.</p>
            </div>

            <div className="ib warn r d4">
              <div className="ib-t">{'\u26A0\uFE0F'} 5. SPID sospeso (Poste, mancato pagamento)</div>
              <p><strong>Sintomo:</strong> &ldquo;Il tuo servizio SPID risulta sospeso&rdquo;.</p>
              <p><strong>Causa:</strong> Dal 2026, PosteID costa 6&euro;/anno dal secondo anno. Se non paghi, lo SPID viene sospeso.</p>
              <p><strong>Soluzione:</strong> 1) Paga il canone online su posteid.poste.it o in ufficio postale. 2) In alternativa, <strong>attiva uno SPID gratuito</strong> con Lepida, InfoCamere o Namirial (puoi averli in parallelo) e poi disattiva Poste.</p>
            </div>

            <div className="ib warn r">
              <div className="ib-t">{'\u26A0\uFE0F'} 6. Ho cambiato telefono</div>
              <p><strong>Sintomo:</strong> Lo SPID funzionava sul vecchio telefono ma non sul nuovo.</p>
              <p><strong>Soluzione:</strong> Installa l&apos;app del provider sul nuovo telefono. Accedi all&apos;area personale del provider (da computer) e <strong>associa il nuovo dispositivo</strong>. Con PosteID: &ldquo;Gestione app&rdquo; nell&apos;area riservata. Con Lepida/altri: sezione &ldquo;Dispositivi&rdquo; o &ldquo;Sicurezza&rdquo;.</p>
            </div>
          </div>

          <div className="sec r" id="contatti">
            <div className="sec-tag">Assistenza</div>
            <h2>Contatti assistenza per provider</h2>
            <div className="tw r">
              <table>
                <thead><tr><th>Provider</th><th>Telefono</th><th>Disponibilit&agrave;</th></tr></thead>
                <tbody>
                  <tr><td className="cv">Poste Italiane (PosteID)</td><td className="cv">06 977 977 77</td><td>Lun-Sab 8:00-20:00 (sospensione: 24h)</td></tr>
                  <tr><td className="cv">Aruba</td><td className="cv">0575 0505</td><td>Lun-Dom 7:00-24:00</td></tr>
                  <tr><td className="cv">InfoCert</td><td className="cv">06 836 911</td><td>Lun-Ven 9:00-18:00</td></tr>
                  <tr><td className="cv">Lepida</td><td>Assistenza online</td><td>Ticket su lepida.it</td></tr>
                  <tr><td className="cv">Namirial</td><td>Assistenza online</td><td>Ticket su namirial.com</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="sec r" id="faq">
            <div className="sec-tag">Risposte rapide</div>
            <h2>Domande frequenti</h2>
            <FAQ items={faqItems} />
          </div>

          <div className="related r">
            <h2>Guide correlate</h2>
            <div className="rg">
              <a href="/spid" className="rc"><span className="rc-e">{'\uD83D\uDD10'}</span><div className="rc-t">Come Fare lo SPID</div><div className="rc-d">Guida completa: provider, attivazione e tempi.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/spid/costo-2026" className="rc"><span className="rc-e">{'\uD83D\uDCB0'}</span><div className="rc-t">SPID Costo 2026</div><div className="rc-d">Poste 6\u20ac/anno e alternative gratuite.</div><span className="rc-ar">&rarr;</span></a>
              <a href="/cie" className="rc"><span className="rc-e">{'\uD83D\uDCB3'}</span><div className="rc-t">CIE</div><div className="rc-d">Se lo SPID ti d&agrave; problemi, la CIE &egrave; un&apos;alternativa solida.</div><span className="rc-ar">&rarr;</span></a>
            </div>
          </div>

        </main>
      </div>
      <Footer variant="scheda" />
    </>
    </div>
  );
}
