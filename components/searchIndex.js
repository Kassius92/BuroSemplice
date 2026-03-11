// Indice di ricerca: keyword → guida + sezione
// Ogni entry: { keywords: [...], guide: 'Nome guida', href: '/route#section', desc: 'breve' }

export const searchIndex = [
  // ═══ 730 ═══
  { keywords: ['730', 'dichiarazione redditi', 'dichiarazione dei redditi'], guide: '730', href: '/730', desc: 'Guida completa al 730' },
  { keywords: ['detrazioni', 'detrazioni fiscali', 'recuperare soldi', 'scaricare spese'], guide: '730', href: '/730#detrazioni', desc: 'Detrazioni: quanto puoi recuperare' },
  { keywords: ['730 precompilato', 'precompilato', 'agenzia entrate precompilato'], guide: '730', href: '/730#come', desc: 'Come si fa il 730 (anche precompilato)' },
  { keywords: ['scadenza 730', 'quando 730', 'calendario 730', 'termine 730'], guide: '730', href: '/730#calendario', desc: 'Scadenze e calendario 730 2026' },
  { keywords: ['sostituto imposta', 'senza sostituto', 'chi deve fare 730'], guide: '730', href: '/730#chi-deve', desc: 'Chi deve fare il 730' },
  { keywords: ['caf', 'commercialista 730', 'quanto costa 730', 'costo 730'], guide: '730', href: '/730#costi', desc: 'Quanto costa fare il 730' },
  { keywords: ['cu', 'certificazione unica', 'modello cu'], guide: '730', href: '/730#documenti', desc: 'Documenti per il 730 (CU, scontrini…)' },
  { keywords: ['conguaglio', 'rimborso 730', 'rimborso busta paga'], guide: '730', href: '/730#cose', desc: "Cos'è il 730 e come funziona il rimborso" },
  { keywords: ['novità 730 2026', 'aliquote 2026', 'tre aliquote'], guide: '730', href: '/730#novita', desc: 'Novità 730 nel 2026' },

  // ═══ ISEE ═══
  { keywords: ['isee', 'indicatore situazione economica'], guide: 'ISEE', href: '/isee', desc: "Guida completa all'ISEE" },
  { keywords: ['dsu', 'dichiarazione sostitutiva unica'], guide: 'ISEE', href: '/isee#come-si-fa', desc: 'Come si compila la DSU per l\u2019ISEE' },
  { keywords: ['isee precompilato', 'isee online'], guide: 'ISEE', href: '/isee#come-si-fa', desc: 'Fare l\u2019ISEE online (precompilato)' },
  { keywords: ['documenti isee', 'saldo 31 dicembre', 'giacenza media'], guide: 'ISEE', href: '/isee#documenti', desc: 'Documenti necessari per l\u2019ISEE' },
  { keywords: ['isee basso', 'abbassare isee', 'isee agevolazioni'], guide: 'ISEE', href: '/isee#serve', desc: 'A cosa serve l\u2019ISEE (bonus e agevolazioni)' },
  { keywords: ['isee corrente', 'variazione reddito'], guide: 'ISEE', href: '/isee#faq', desc: 'ISEE corrente per variazione di reddito' },
  { keywords: ['nucleo familiare', 'composizione nucleo', 'chi fa parte isee'], guide: 'ISEE', href: '/isee#cose', desc: 'Nucleo familiare: chi conta per l\u2019ISEE' },

  // ═══ SPID ═══
  { keywords: ['spid', 'identità digitale', 'sistema pubblico identità'], guide: 'SPID', href: '/spid', desc: 'Guida completa allo SPID' },
  { keywords: ['spid provider', 'poste spid', 'aruba spid', 'infocert', 'quale spid'], guide: 'SPID', href: '/spid#provider', desc: 'Quale provider SPID scegliere' },
  { keywords: ['spid cie', 'spid carta identità', 'spid veloce'], guide: 'SPID', href: '/spid#come-si-fa', desc: 'Come fare lo SPID (anche con CIE)' },
  { keywords: ['spid livello 2', 'spid livello 3', 'livelli spid'], guide: 'SPID', href: '/spid#cose', desc: 'I livelli dello SPID (1, 2, 3)' },
  { keywords: ['spid cosa serve', 'accedere inps', 'accedere agenzia entrate'], guide: 'SPID', href: '/spid#serve', desc: 'A cosa serve lo SPID (INPS, AdE, Comuni…)' },

  // ═══ COMPRO CASA ═══
  { keywords: ['comprare casa', 'acquisto casa', 'compro casa'], guide: 'Compro casa', href: '/compro-casa', desc: 'Guida completa per comprare casa' },
  { keywords: ['rogito', 'atto notarile', 'notaio casa'], guide: 'Compro casa', href: '/compro-casa#iter', desc: 'Il rogito e l\u2019iter di acquisto' },
  { keywords: ['compromesso', 'preliminare', 'proposta acquisto', 'caparra'], guide: 'Compro casa', href: '/compro-casa#iter', desc: 'Compromesso, proposta e caparra' },
  { keywords: ['prima casa', 'agevolazioni prima casa', 'imposta registro'], guide: 'Compro casa', href: '/compro-casa#prima-casa', desc: 'Agevolazioni prima casa' },
  { keywords: ['mutuo', 'mutuo casa', 'tasso fisso', 'tasso variabile', 'rata mutuo'], guide: 'Compro casa', href: '/compro-casa#mutuo', desc: 'Mutuo: tasso fisso o variabile' },
  { keywords: ['costi comprare casa', 'spese notaio', 'agenzia immobiliare'], guide: 'Compro casa', href: '/compro-casa#costi', desc: 'Tutti i costi per comprare casa' },
  { keywords: ['visura catastale', 'ape', 'certificato energetico', 'conformità urbanistica'], guide: 'Compro casa', href: '/compro-casa#documenti', desc: 'Documenti da chiedere al venditore' },

  // ═══ PARTITA IVA ═══
  { keywords: ['partita iva', 'aprire partita iva', 'piva', 'p.iva'], guide: 'Partita IVA', href: '/piva', desc: 'Guida completa alla Partita IVA' },
  { keywords: ['codice ateco', 'ateco', 'attività economica'], guide: 'Partita IVA', href: '/piva#ateco', desc: 'Codice ATECO e coefficiente di redditività' },
  { keywords: ['contributi inps', 'inps partita iva', 'gestione separata'], guide: 'Partita IVA', href: '/piva#contributi', desc: 'Contributi INPS per partite IVA' },
  { keywords: ['forfettario requisiti', 'limite 85000', 'forfettario ordinario'], guide: 'Partita IVA', href: '/piva#forfettario', desc: 'Forfettario o ordinario?' },
  { keywords: ['aprire piva come', 'apertura partita iva', 'modello aa9'], guide: 'Partita IVA', href: '/piva#come-aprire', desc: 'Come si apre la Partita IVA' },
  { keywords: ['commercialista costo', 'quanto costa commercialista', 'gestione piva'], guide: 'Partita IVA', href: '/piva#costi', desc: 'Costi di gestione: commercialista e strumenti' },

  // ═══ FIGLIO ═══
  { keywords: ['figlio', 'aspetto un figlio', 'neonato', 'nascita figlio'], guide: 'Aspetto un figlio', href: '/figlio', desc: 'Guida completa per chi diventa genitore' },
  { keywords: ['congedo maternità', 'maternità obbligatoria', 'astensione maternità'], guide: 'Aspetto un figlio', href: '/figlio#congedi', desc: 'Congedo di maternità obbligatorio' },
  { keywords: ['congedo paternità', 'paternità obbligatoria', '10 giorni padre'], guide: 'Aspetto un figlio', href: '/figlio#congedi', desc: 'Congedo di paternità (10 giorni)' },
  { keywords: ['congedo parentale', 'astensione facoltativa'], guide: 'Aspetto un figlio', href: '/figlio#congedi', desc: 'Congedo parentale facoltativo' },
  { keywords: ['bonus neonato', 'bonus nuovi nati', '1000 euro neonato', 'bonus nascita'], guide: 'Aspetto un figlio', href: '/figlio#bonus', desc: 'Bonus nuovi nati (1.000€)' },
  { keywords: ['bonus nido', 'asilo nido', 'nido bonus'], guide: 'Aspetto un figlio', href: '/figlio#bonus', desc: 'Bonus asilo nido 2026' },
  { keywords: ['bonus mamme', 'esonero contributivo madri', 'bonus mamma lavoratrice'], guide: 'Aspetto un figlio', href: '/figlio#bonus', desc: 'Bonus mamme lavoratrici' },
  { keywords: ['carta acquisti', 'social card'], guide: 'Aspetto un figlio', href: '/figlio#bonus', desc: 'Carta acquisti per famiglie' },
  { keywords: ['dichiarazione nascita', 'codice fiscale neonato', 'pediatra neonato'], guide: 'Aspetto un figlio', href: '/figlio#documenti', desc: 'Documenti da fare per il neonato' },
  { keywords: ['borsa ospedale', 'cosa portare ospedale', 'valigia parto'], guide: 'Aspetto un figlio', href: '/figlio#ospedale', desc: 'Cosa portare in ospedale' },

  // ═══ RISTRUTTURARE ═══
  { keywords: ['ristrutturazione', 'ristrutturare casa', 'bonus ristrutturazione'], guide: 'Ristrutturare', href: '/ristrutturare', desc: 'Guida completa alla ristrutturazione' },
  { keywords: ['bonus 50', 'detrazione 50', 'bonus casa 50%'], guide: 'Ristrutturare', href: '/ristrutturare#bonus', desc: 'Bonus ristrutturazione 50% (prima casa)' },
  { keywords: ['cila', 'scia', 'permesso costruire', 'edilizia libera'], guide: 'Ristrutturare', href: '/ristrutturare#permessi', desc: 'Quale permesso serve (CILA, SCIA…)' },
  { keywords: ['bonifico parlante', 'bonifico ristrutturazione', 'causale bonifico'], guide: 'Ristrutturare', href: '/ristrutturare#come-fare', desc: 'Bonifico parlante per la detrazione' },
  { keywords: ['bonus mobili', 'detrazione mobili', 'mobili ristrutturazione'], guide: 'Ristrutturare', href: '/ristrutturare#bonus', desc: 'Bonus mobili (se ristrutturi)' },
  { keywords: ['ecobonus', 'cappotto termico', 'caldaia', 'infissi', 'efficientamento'], guide: 'Ristrutturare', href: '/ristrutturare#bonus', desc: 'Ecobonus per efficientamento energetico' },

  // ═══ NASpI ═══
  { keywords: ['naspi', 'disoccupazione', 'indennità disoccupazione'], guide: 'NASpI', href: '/naspi', desc: 'Guida completa alla NASpI' },
  { keywords: ['naspi requisiti', 'chi ha diritto naspi', 'settimane contributi'], guide: 'NASpI', href: '/naspi#requisiti', desc: 'Requisiti per la NASpI' },
  { keywords: ['naspi quanto', 'calcolo naspi', 'importo naspi', 'naspi importo'], guide: 'NASpI', href: '/naspi#quanto-spetta', desc: 'Quanto spetta di NASpI (calcolo)' },
  { keywords: ['naspi durata', 'quanti mesi naspi', 'durata disoccupazione'], guide: 'NASpI', href: '/naspi#quanto-spetta', desc: 'Durata della NASpI' },
  { keywords: ['domanda naspi', 'come richiedere naspi', 'naspi online', '68 giorni'], guide: 'NASpI', href: '/naspi#domanda', desc: 'Come fare domanda di NASpI' },
  { keywords: ['naspi e lavoro', 'lavorare con naspi', 'naspi partita iva'], guide: 'NASpI', href: '/naspi#lavorare', desc: 'Lavorare mentre prendi la NASpI' },
  { keywords: ['naspi anticipata', 'naspi tutta insieme', 'naspi impresa'], guide: 'NASpI', href: '/naspi#anticipata', desc: 'NASpI anticipata in un\u2019unica soluzione' },
  { keywords: ['licenziamento', 'licenziato'], guide: 'NASpI', href: '/naspi#requisiti', desc: 'Licenziamento: hai diritto alla NASpI' },

  // ═══ DIMISSIONI ═══
  { keywords: ['dimissioni', 'mi dimetto', 'dare dimissioni', 'dimissioni volontarie'], guide: 'Dimissioni', href: '/dimissioni', desc: 'Guida completa alle dimissioni' },
  { keywords: ['dimissioni online', 'cliclavoro', 'procedura dimissioni'], guide: 'Dimissioni', href: '/dimissioni#procedura', desc: 'Come dare le dimissioni online' },
  { keywords: ['preavviso', 'giorni preavviso', 'preavviso dimissioni', 'quanti giorni'], guide: 'Dimissioni', href: '/dimissioni#preavviso', desc: 'Preavviso: quanti giorni dare' },
  { keywords: ['giusta causa', 'dimissioni giusta causa', 'mobbing'], guide: 'Dimissioni', href: '/dimissioni#giusta-causa', desc: 'Dimissioni per giusta causa' },
  { keywords: ['ultima busta paga', 'ferie non godute', 'tredicesima residua'], guide: 'Dimissioni', href: '/dimissioni#soldi', desc: 'TFR, ferie e ultima busta paga' },
  { keywords: ['ccnl commercio', 'ccnl metalmeccanici', 'contratto collettivo'], guide: 'Dimissioni', href: '/dimissioni#preavviso', desc: 'Preavviso per CCNL (Commercio, Metalmeccanici)' },

  // ═══ TFR ═══
  { keywords: ['tfr', 'trattamento fine rapporto', 'liquidazione', 'buonuscita'], guide: 'TFR', href: '/tfr', desc: 'Guida completa al TFR' },
  { keywords: ['calcolo tfr', 'quanto tfr', 'formula tfr'], guide: 'TFR', href: '/tfr#calcolo', desc: 'Come si calcola il TFR' },
  { keywords: ['tassazione tfr', 'tasse tfr', 'tassazione separata'], guide: 'TFR', href: '/tfr#tassazione', desc: 'Come viene tassato il TFR' },
  { keywords: ['anticipo tfr', 'tfr anticipato', 'prima casa tfr', 'spese mediche tfr'], guide: 'TFR', href: '/tfr#quando', desc: 'Anticipo del TFR (quando e come)' },
  { keywords: ['fondo pensione', 'tfr fondo', 'pensione integrativa', 'previdenza complementare'], guide: 'TFR', href: '/tfr#fondo', desc: 'TFR in azienda o fondo pensione?' },

  // ═══ MI SPOSO ═══
  { keywords: ['matrimonio', 'sposarsi', 'mi sposo', 'nozze'], guide: 'Mi sposo', href: '/mi-sposo', desc: 'Guida completa al matrimonio' },
  { keywords: ['pubblicazioni matrimonio', 'pubblicazioni', 'bando matrimoniale'], guide: 'Mi sposo', href: '/mi-sposo#pubblicazioni', desc: 'Le pubblicazioni di matrimonio' },
  { keywords: ['comunione beni', 'separazione beni', 'regime patrimoniale'], guide: 'Mi sposo', href: '/mi-sposo#regime', desc: 'Comunione o separazione dei beni' },
  { keywords: ['congedo matrimoniale', 'ferie matrimonio', 'permesso matrimonio'], guide: 'Mi sposo', href: '/mi-sposo#regime', desc: 'Congedo matrimoniale (15 giorni)' },
  { keywords: ['costo matrimonio', 'quanto costa sposarsi', 'spese matrimonio'], guide: 'Mi sposo', href: '/mi-sposo#costi', desc: 'Costi burocratici del matrimonio' },
  { keywords: ['matrimonio civile', 'matrimonio religioso', 'concordatario'], guide: 'Mi sposo', href: '/mi-sposo#cose', desc: 'Tipi di matrimonio (civile, religioso, concordatario)' },
  { keywords: ['documenti matrimonio', 'nulla osta', 'certificato nascita matrimonio'], guide: 'Mi sposo', href: '/mi-sposo#documenti', desc: 'Documenti per sposarsi' },

  // ═══ SPESE MEDICHE ═══
  { keywords: ['spese mediche', 'detrarre spese mediche', 'scaricare spese mediche'], guide: 'Spese mediche', href: '/spese-mediche', desc: 'Guida alle spese mediche detraibili' },
  { keywords: ['franchigia', 'franchigia 129', 'soglia spese mediche'], guide: 'Spese mediche', href: '/spese-mediche#cose', desc: 'Franchigia 129,11€ sulle spese mediche' },
  { keywords: ['farmaci detraibili', 'scontrino parlante', 'farmacia detrazione'], guide: 'Spese mediche', href: '/spese-mediche#elenco', desc: 'Farmaci detraibili e scontrino parlante' },
  { keywords: ['dentista detraibile', 'spese dentista', 'odontoiatra'], guide: 'Spese mediche', href: '/spese-mediche#elenco', desc: 'Spese del dentista: come detrarre' },
  { keywords: ['occhiali detraibili', 'lenti contatto', 'dispositivi medici'], guide: 'Spese mediche', href: '/spese-mediche#elenco', desc: 'Occhiali e dispositivi medici detraibili' },
  { keywords: ['psicologo detraibile', 'psicoterapeuta', 'bonus psicologo'], guide: 'Spese mediche', href: '/spese-mediche#elenco', desc: 'Spese psicologo: detraibili al 19%' },
  { keywords: ['pagamento tracciabile', 'contanti o carta medico', 'carta spese mediche'], guide: 'Spese mediche', href: '/spese-mediche#pagamento', desc: 'Pagamento tracciabile: quando è obbligatorio' },
  { keywords: ['integratori detraibili', 'parafarmaci'], guide: 'Spese mediche', href: '/spese-mediche#elenco', desc: 'Integratori NON detraibili' },
  { keywords: ['fisioterapia detraibile', 'fisioterapista', 'riabilitazione'], guide: 'Spese mediche', href: '/spese-mediche#elenco', desc: 'Fisioterapia e riabilitazione detraibili' },
  { keywords: ['quadro e', 'rigo e1', 'dove inserire spese mediche'], guide: 'Spese mediche', href: '/spese-mediche#cose', desc: 'Dove inserire le spese nel 730 (Quadro E)' },

  // ═══ FATTURA ELETTRONICA ═══
  { keywords: ['fattura elettronica', 'e-fattura', 'fatturazione elettronica'], guide: 'Fattura elettronica', href: '/fattura-elettronica', desc: 'Guida alla fattura elettronica' },
  { keywords: ['sdi', 'sistema di interscambio', 'codice sdi'], guide: 'Fattura elettronica', href: '/fattura-elettronica#cose', desc: 'SDI: Sistema di Interscambio' },
  { keywords: ['codice destinatario', 'codice univoco', '7 caratteri'], guide: 'Fattura elettronica', href: '/fattura-elettronica#dati', desc: 'Codice destinatario in fattura' },
  { keywords: ['xml fattura', 'formato xml', 'fattura xml'], guide: 'Fattura elettronica', href: '/fattura-elettronica#cose', desc: 'Formato XML della fattura elettronica' },
  { keywords: ['nota di credito', 'storno fattura', 'errore fattura'], guide: 'Fattura elettronica', href: '/fattura-elettronica#faq', desc: 'Nota di credito: come stornare' },
  { keywords: ['cassetto fiscale', 'fatture ricevute', 'consultazione fatture'], guide: 'Fattura elettronica', href: '/fattura-elettronica#strumenti', desc: 'Cassetto fiscale e consultazione' },
  { keywords: ['fatturae', 'fatture in cloud', 'aruba fatturazione', 'strumenti fattura'], guide: 'Fattura elettronica', href: '/fattura-elettronica#strumenti', desc: 'Strumenti per fatturare (gratis e a pagamento)' },
  { keywords: ['marca da bollo', 'bollo 2 euro', 'bollo fattura'], guide: 'Fattura elettronica', href: '/fattura-elettronica#dati', desc: 'Marca da bollo 2€ in fattura' },

  // ═══ REGIME FORFETTARIO ═══
  { keywords: ['regime forfettario', 'forfettario', 'flat tax'], guide: 'Regime forfettario', href: '/regime-forfettario', desc: 'Guida al regime forfettario' },
  { keywords: ['imposta sostitutiva', 'imposta sostitutiva 5%', 'imposta sostitutiva 15%'], guide: 'Regime forfettario', href: '/regime-forfettario#tasse', desc: 'Imposta sostitutiva 5% o 15%' },
  { keywords: ['coefficiente redditività', 'coefficiente forfettario', 'percentuale ateco'], guide: 'Regime forfettario', href: '/regime-forfettario#coefficienti', desc: 'Coefficienti di redditività per attività' },
  { keywords: ['limite forfettario', '85000', 'superare limite', 'uscita forfettario'], guide: 'Regime forfettario', href: '/regime-forfettario#limiti', desc: 'Limite 85.000€ e quando conviene uscire' },
  { keywords: ['requisiti forfettario', 'chi può stare forfettario', 'cause esclusione'], guide: 'Regime forfettario', href: '/regime-forfettario#requisiti', desc: 'Requisiti per accedere al forfettario' },
  { keywords: ['forfettario quanto si paga', 'tasse forfettario', 'calcolo tasse piva'], guide: 'Regime forfettario', href: '/regime-forfettario#tasse', desc: 'Quanto paghi in forfettario (calcolo)' },

  // ═══ ASSEGNO UNICO ═══
  { keywords: ['assegno unico', 'assegno universale', 'auu', 'assegno figli'], guide: 'Assegno unico', href: '/assegno-unico', desc: 'Guida completa all\u2019Assegno Unico 2026' },
  { keywords: ['importo assegno unico', 'tabella isee assegno', 'quanto prendo assegno'], guide: 'Assegno unico', href: '/assegno-unico#importi', desc: 'Importi per fascia ISEE' },
  { keywords: ['maggiorazione', 'maggiorazione figli', 'figli sotto 3 anni', 'neonato assegno'], guide: 'Assegno unico', href: '/assegno-unico#importi', desc: 'Maggiorazioni (neonati, disabilità, numerosi)' },
  { keywords: ['domanda assegno unico', 'richiedere assegno unico', 'inps assegno'], guide: 'Assegno unico', href: '/assegno-unico#domanda', desc: 'Come fare domanda all\u2019INPS' },
  { keywords: ['assegno unico gravidanza', 'assegno 7 mese', 'nascituri'], guide: 'Assegno unico', href: '/assegno-unico#domanda', desc: 'Assegno dal 7° mese di gravidanza' },
  { keywords: ['assegno unico senza isee', 'minimo assegno', '58 euro'], guide: 'Assegno unico', href: '/assegno-unico#importi', desc: 'Assegno minimo senza ISEE (58,30€)' },
  { keywords: ['scadenza 30 giugno', 'arretrati assegno', 'domanda giugno'], guide: 'Assegno unico', href: '/assegno-unico#domanda', desc: 'Scadenza 30 giugno per arretrati' },
  { keywords: ['assegno disabilità', 'figli disabili assegno', '104 assegno'], guide: 'Assegno unico', href: '/assegno-unico#importi', desc: 'Maggiorazione per figli con disabilità' },
  { keywords: ['separati assegno', 'divorziati assegno', 'affido condiviso'], guide: 'Assegno unico', href: '/assegno-unico#faq', desc: 'Assegno per genitori separati/divorziati' },
  { keywords: ['pagamento assegno unico', 'quando arriva assegno', 'date pagamento'], guide: 'Assegno unico', href: '/assegno-unico#faq', desc: 'Date di pagamento INPS' },

  // ═══ CAMBIO RESIDENZA ═══
  { keywords: ['cambio residenza', 'cambio di residenza', 'cambiare residenza'], guide: 'Cambio residenza', href: '/cambio-residenza', desc: 'Guida completa al cambio di residenza' },
  { keywords: ['cambio residenza online', 'anpr', 'anagrafe nazionale', 'residenza online'], guide: 'Cambio residenza', href: '/cambio-residenza#come', desc: 'Come fare il cambio online su ANPR' },
  { keywords: ['documenti residenza', 'cosa serve residenza', 'contratto affitto residenza'], guide: 'Cambio residenza', href: '/cambio-residenza#sportello', desc: 'Documenti necessari per il cambio' },
  { keywords: ['tempi residenza', 'quanto ci vuole residenza', '45 giorni', 'accertamento'], guide: 'Cambio residenza', href: '/cambio-residenza#come', desc: 'Tempi: 2 gg registrazione + 45 gg verifica' },
  { keywords: ['residenza stesso comune', 'cambio indirizzo', 'cambio abitazione'], guide: 'Cambio residenza', href: '/cambio-residenza#quando', desc: 'Cambio indirizzo nello stesso comune' },
  { keywords: ['medico base', 'asl', 'nuovo medico', 'scegliere medico'], guide: 'Cambio residenza', href: '/cambio-residenza#dopo', desc: 'Scegliere il nuovo medico di base' },
  { keywords: ['patente residenza', 'libretto auto', 'carta circolazione', 'aggiornare auto'], guide: 'Cambio residenza', href: '/cambio-residenza#dopo', desc: 'Aggiornamento auto e patente dopo il cambio' },
  { keywords: ['18 mesi residenza', 'prima casa residenza', 'agevolazioni residenza'], guide: 'Cambio residenza', href: '/cambio-residenza#quando', desc: 'Obbligo 18 mesi per agevolazioni prima casa' },
  { keywords: ['sanzioni residenza', 'multa residenza', 'falso residenza'], guide: 'Cambio residenza', href: '/cambio-residenza#errori', desc: 'Sanzioni per mancato cambio o falsa dichiarazione' },
  { keywords: ['delega residenza', 'residenza senza contratto', 'rimpatrio aire'], guide: 'Cambio residenza', href: '/cambio-residenza#faq', desc: 'Delega, senza contratto, rientro dall\u2019estero' },

  // ═══ MUTUO ═══
  { keywords: ['mutuo', 'mutuo prima casa', 'mutuo casa'], guide: 'Mutuo', href: '/mutuo', desc: 'Guida completa al mutuo prima casa' },
  { keywords: ['consap', 'fondo garanzia', 'garanzia statale', 'mutuo 100'], guide: 'Mutuo', href: '/mutuo#consap', desc: 'Garanzia Consap: mutuo con lo Stato garante' },
  { keywords: ['mutuo under 36', 'mutuo giovani', 'mutuo under36'], guide: 'Mutuo', href: '/mutuo#consap', desc: 'Mutuo agevolato per under 36' },
  { keywords: ['tasso fisso', 'tasso variabile', 'spread', 'euribor', 'irs'], guide: 'Mutuo', href: '/mutuo#tassi', desc: 'Tasso fisso vs variabile: come scegliere' },
  { keywords: ['requisiti mutuo', 'rata mutuo', 'quanto posso chiedere'], guide: 'Mutuo', href: '/mutuo#requisiti', desc: 'Requisiti e calcolo della rata sostenibile' },
  { keywords: ['documenti mutuo', 'buste paga mutuo', 'istruttoria'], guide: 'Mutuo', href: '/mutuo#come', desc: 'Documenti e procedura per richiedere il mutuo' },
  { keywords: ['surroga', 'surroga mutuo', 'cambiare banca mutuo'], guide: 'Mutuo', href: '/mutuo#faq', desc: 'Surroga: cambiare banca gratis' },
  { keywords: ['interessi mutuo', 'detrazione interessi', 'detrazione mutuo 730'], guide: 'Mutuo', href: '/mutuo#faq', desc: 'Detrazione 19% interessi passivi nel 730' },
  { keywords: ['perizia', 'notaio mutuo', 'costi mutuo', 'spese mutuo'], guide: 'Mutuo', href: '/mutuo#esempio', desc: 'Costi extra: notaio, perizia, agenzia, imposte' },
  { keywords: ['ipoteca', 'pignoramento', 'non pago rate mutuo'], guide: 'Mutuo', href: '/mutuo#faq', desc: 'Cosa succede se non paghi le rate' },

  // ═══ CONGEDO PARENTALE ═══
  { keywords: ['congedo parentale', 'congedo facoltativo', 'astensione facoltativa'], guide: 'Congedo parentale', href: '/congedo-parentale', desc: 'Guida completa al congedo parentale' },
  { keywords: ['mesi congedo', 'durata congedo', 'quanti mesi congedo'], guide: 'Congedo parentale', href: '/congedo-parentale#durata', desc: 'Quanti mesi spettano a mamma e pap\u00e0' },
  { keywords: ['indennit\u00e0 congedo', '80% congedo', '30% congedo', 'quanto pagano congedo'], guide: 'Congedo parentale', href: '/congedo-parentale#indennita', desc: 'Indennit\u00e0: 80% per 3 mesi, poi 30%' },
  { keywords: ['domanda congedo inps', 'come chiedere congedo', 'congedo online'], guide: 'Congedo parentale', href: '/congedo-parentale#come', desc: 'Come fare domanda all\u2019INPS' },
  { keywords: ['congedo padre', 'congedo pap\u00e0', 'paternit\u00e0 facoltativa'], guide: 'Congedo parentale', href: '/congedo-parentale#durata', desc: 'Congedo parentale per il pap\u00e0' },
  { keywords: ['congedo 14 anni', 'novit\u00e0 congedo 2026', 'malattia figlio'], guide: 'Congedo parentale', href: '/congedo-parentale#novita', desc: 'Novit\u00e0 2026: esteso a 14 anni' },
  { keywords: ['congedo ore', 'congedo frazionato', 'part time congedo'], guide: 'Congedo parentale', href: '/congedo-parentale#faq', desc: 'Congedo a ore o frazionato' },

  // ═══ BONUS MOBILI ═══
  { keywords: ['bonus mobili', 'bonus arredi', 'detrazione mobili'], guide: 'Bonus mobili', href: '/bonus-mobili', desc: 'Guida completa al bonus mobili' },
  { keywords: ['bonus elettrodomestici', 'lavatrice bonus', 'frigorifero bonus', 'classe energetica'], guide: 'Bonus mobili', href: '/bonus-mobili#cosa-compro', desc: 'Elettrodomestici ammessi e classi energetiche' },
  { keywords: ['5000 euro mobili', 'tetto bonus mobili', 'quanto detraggo mobili'], guide: 'Bonus mobili', href: '/bonus-mobili#cose', desc: 'Tetto 5.000\u20ac e detrazione 50%' },
  { keywords: ['pagamento bonus mobili', 'bonifico mobili', 'contanti mobili'], guide: 'Bonus mobili', href: '/bonus-mobili#come-pagare', desc: 'Come pagare: carta o bonifico, no contanti' },
  { keywords: ['bonus mobili 730', 'detrarre mobili', 'quadro e mobili'], guide: 'Bonus mobili', href: '/bonus-mobili#come-detrarre', desc: 'Come detrarre nel 730' },
  { keywords: ['bonus mobili senza ristrutturazione', 'requisiti bonus mobili'], guide: 'Bonus mobili', href: '/bonus-mobili#requisiti', desc: 'Requisiti: serve la ristrutturazione' },
  { keywords: ['enea bonus mobili', 'comunicazione enea'], guide: 'Bonus mobili', href: '/bonus-mobili#faq', desc: 'Comunicazione ENEA per elettrodomestici' },

  // ═══ CIE ═══
  { keywords: ['cie', 'carta identit\u00e0 elettronica', 'carta identit\u00e0'], guide: 'CIE', href: '/cie', desc: 'Guida completa alla carta d\u2019identit\u00e0 elettronica' },
  { keywords: ['richiedere cie', 'prenotare cie', 'agenda cie', 'appuntamento cie'], guide: 'CIE', href: '/cie#come', desc: 'Come richiedere la CIE passo per passo' },
  { keywords: ['costo cie', 'quanto costa carta identit\u00e0', '22 euro'], guide: 'CIE', href: '/cie#faq', desc: 'Costo CIE: 22,21\u20ac' },
  { keywords: ['carta cartacea scadenza', 'agosto 2026 carta', 'cartacea non valida'], guide: 'CIE', href: '/cie#scadenza', desc: 'Dal 3 agosto 2026 la cartacea non vale pi\u00f9' },
  { keywords: ['cieid', 'cie id', 'app cie', 'cie identit\u00e0 digitale'], guide: 'CIE', href: '/cie#digitale', desc: 'CieID: usare la CIE come identit\u00e0 digitale' },
  { keywords: ['pin cie', 'puk cie', 'cie pin perso'], guide: 'CIE', href: '/cie#faq', desc: 'PIN e PUK della CIE' },
  { keywords: ['cie espatrio', 'carta identit\u00e0 viaggio', 'cie estero'], guide: 'CIE', href: '/cie#faq', desc: 'CIE per viaggiare all\u2019estero' },
  { keywords: ['rinnovo carta identit\u00e0', 'cie scaduta', 'validit\u00e0 cie'], guide: 'CIE', href: '/cie#validita', desc: 'Validit\u00e0 e rinnovo CIE' },

  // ═══ PEC ═══
  { keywords: ['pec', 'posta elettronica certificata', 'posta certificata'], guide: 'PEC', href: '/pec', desc: 'Guida completa alla PEC' },
  { keywords: ['attivare pec', 'come fare pec', 'aprire pec'], guide: 'PEC', href: '/pec#come', desc: 'Come attivare una PEC in 5 minuti' },
  { keywords: ['pec obbligatoria', 'obbligo pec', 'pec professionisti'], guide: 'PEC', href: '/pec#obbligo', desc: 'Chi \u00e8 obbligato ad avere la PEC' },
  { keywords: ['costo pec', 'pec gratis', 'pec gratuita', 'quanto costa pec'], guide: 'PEC', href: '/pec#faq', desc: 'Quanto costa una PEC (da ~5\u20ac/anno)' },
  { keywords: ['domicilio digitale', 'inad', 'inad domicilio'], guide: 'PEC', href: '/pec#domicilio', desc: 'Domicilio digitale INAD' },
  { keywords: ['ini-pec', 'inipec', 'cercare pec azienda'], guide: 'PEC', href: '/pec#faq', desc: 'Cercare la PEC di un\u2019azienda su INI-PEC' },
  { keywords: ['pec raccomandata', 'valore legale pec', 'raccomandata digitale'], guide: 'PEC', href: '/pec#cose', desc: 'PEC = raccomandata con ricevuta di ritorno' },

  // ═══ PASSAPORTO ═══
  { keywords: ['passaporto', 'passaporto elettronico', 'fare passaporto'], guide: 'Passaporto', href: '/passaporto', desc: 'Guida completa al passaporto' },
  { keywords: ['costo passaporto', 'quanto costa passaporto', '116 euro passaporto'], guide: 'Passaporto', href: '/passaporto#costi', desc: 'Costo passaporto: 116,20\u20ac totali' },
  { keywords: ['prenotazione passaporto', 'appuntamento passaporto', 'agenda passaporti'], guide: 'Passaporto', href: '/passaporto#come', desc: 'Come prenotare l\u2019appuntamento online' },
  { keywords: ['documenti passaporto', 'cosa serve passaporto', 'foto passaporto'], guide: 'Passaporto', href: '/passaporto#documenti', desc: 'Documenti necessari per il passaporto' },
  { keywords: ['tempi passaporto', 'passaporto urgente', 'quanto tempo passaporto'], guide: 'Passaporto', href: '/passaporto#tempi', desc: 'Tempi di rilascio e procedure urgenza' },
  { keywords: ['rinnovo passaporto', 'passaporto scaduto'], guide: 'Passaporto', href: '/passaporto#faq', desc: 'Il passaporto non si rinnova: si rifà nuovo' },
  { keywords: ['passaporto posta', 'polis passaporto', 'passaporto ufficio postale'], guide: 'Passaporto', href: '/passaporto#faq', desc: 'Passaporto in Posta (Progetto Polis)' },
  { keywords: ['passaporto minorenni', 'passaporto bambini', 'passaporto figlio'], guide: 'Passaporto', href: '/passaporto#faq', desc: 'Passaporto per minorenni' },

  // ═══ BUSTA PAGA ═══
  { keywords: ['busta paga', 'cedolino', 'prospetto paga'], guide: 'Busta paga', href: '/busta-paga', desc: 'Guida completa alla busta paga' },
  { keywords: ['lordo netto', 'dal lordo al netto', 'calcolo stipendio netto'], guide: 'Busta paga', href: '/busta-paga#lordo-netto', desc: 'Come si passa dal lordo al netto' },
  { keywords: ['RAL stipendio', 'retribuzione annua lorda'], guide: 'Busta paga', href: '/busta-paga#faq', desc: 'Cos\u2019è la RAL' },
  { keywords: ['IRPEF busta paga', 'aliquote IRPEF 2026', 'trattenute fiscali'], guide: 'Busta paga', href: '/busta-paga#lordo-netto', desc: 'IRPEF e trattenute in busta paga' },
  { keywords: ['contributi INPS busta paga', 'trattenute previdenziali'], guide: 'Busta paga', href: '/busta-paga#lordo-netto', desc: 'Contributi INPS a carico del lavoratore' },
  { keywords: ['trattamento integrativo', 'bonus Renzi', 'bonus 100 euro'], guide: 'Busta paga', href: '/busta-paga#voci', desc: 'Trattamento integrativo (ex bonus Renzi)' },
  { keywords: ['conguaglio dicembre', 'conguaglio fiscale'], guide: 'Busta paga', href: '/busta-paga#faq', desc: 'Perché a dicembre il netto è più basso' },
  { keywords: ['ferie permessi ROL busta paga', 'ferie residue'], guide: 'Busta paga', href: '/busta-paga#voci', desc: 'Ferie, permessi e ROL in busta paga' },

  // ═══ IMU ═══
  { keywords: ['IMU', 'imposta municipale', 'tassa casa'], guide: 'IMU', href: '/imu', desc: 'Guida completa all\u2019IMU' },
  { keywords: ['calcolo IMU', 'formula IMU', 'rendita catastale IMU'], guide: 'IMU', href: '/imu#calcolo', desc: 'Come si calcola l\u2019IMU' },
  { keywords: ['IMU prima casa', 'esenzione IMU', 'abitazione principale IMU'], guide: 'IMU', href: '/imu#esenzioni', desc: 'Prima casa esente dall\u2019IMU' },
  { keywords: ['IMU seconda casa', 'aliquota IMU', 'aliquote comunali'], guide: 'IMU', href: '/imu#calcolo', desc: 'IMU seconda casa e aliquote' },
  { keywords: ['scadenza IMU', '16 giugno IMU', '16 dicembre IMU', 'F24 IMU'], guide: 'IMU', href: '/imu#scadenze', desc: 'Scadenze IMU: 16/6 e 16/12' },
  { keywords: ['comodato IMU', 'riduzione IMU figlio', 'canone concordato IMU'], guide: 'IMU', href: '/imu#agevolazioni', desc: 'Agevolazioni e riduzioni IMU' },
  { keywords: ['ravvedimento IMU', 'IMU non pagata', 'sanzioni IMU'], guide: 'IMU', href: '/imu#faq', desc: 'Cosa succede se non paghi l\u2019IMU' },
];
