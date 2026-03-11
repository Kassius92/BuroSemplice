# DEVLOG Update — Sessione 12

**Data:** 11 marzo 2026
**Stato:** 32 route. 24 guide attive + pagina Notizie (TG). Deploy attivo su zeroburocrazia.it. Repository: `Kassius92/zeroburocrazia.it`.

---

## Sessione 12 (11 marzo 2026)

### FIX SIDEBAR: STRUMENTI → LINK UTILI ISTITUZIONALI

Tutte le sidebar delle guide ora mostrano "🔗 Link utili" con 3 link a siti istituzionali (.gov.it, .inps.it, ecc.) invece della sezione "🛠 Strumenti". Zero link commerciali — solo Fiscozen quando arriveranno i link tracciati.

I link utili sono stati aggiunti anche nel contenuto principale (formato compatto `.perc` con `.perc-steps`), posizionati PRIMA della sezione "In sintesi" per visibilità mobile. Nomi accorciati a 2-3 parole max.

### FIX URL ROTTI

41 URL profondi sostituiti con homepage stabili (www.inps.it, www.agenziaentrate.gov.it, www.consap.it/fondo-prima-casa/, www.anagrafenazionale.interno.it/area-cittadino/, ecc.). Commit `791b05b`.

### FIX MEGA MENU DUPLICATI

Assegno Unico rimosso da "ISEE e bonus" — resta solo in Famiglia → Figli. Ogni guida compare una sola volta nel menu.

### FIX SAFE-AREA MOBILE MEGA MENU

`app/layout.js`: aggiunto `export const viewport = { viewportFit: 'cover' }`. `globals.css`: `padding-bottom: calc(32px + env(safe-area-inset-bottom, 0px))` su `.mega-inner`. Commit `9fcea0d`.

### 9 NUOVE GUIDE CREATE

**1. `/cambio-residenza` — cat-documenti**
- Glossario: residenza, ANPR, dichiarazione anagrafica, accoglimento con riserva, famiglia anagrafica, AIRE
- Procedura ANPR in 7 step, sezione sportello, cosa aggiornare dopo
- Esempio: Giulia, 27 anni, da Milano a Bologna
- Link utili: ANPR, certificati anagrafici, Portale Automobilista
- Mega menu: Casa → Vivere in casa
- Commit `7dce9e1` + OG `fb98b22`

**2. `/mutuo` — cat-casa**
- Glossario: LTV, TAN, TAEG, spread, Consap, surroga, perizia
- Tabella garanzie Consap (50%→80%→85%→90%), confronto tasso fisso vs variabile
- Esempio: Marco 29 anni, Torino, 150.000€, Consap 80%
- Link utili: Consap, Banca d'Italia, Agenzia Entrate
- Mega menu: Casa → Comprare e vendere
- Commit `869f352`

**3. `/congedo-parentale` — cat-famiglia**
- Novità 2026: esteso a 14 anni, malattia figlio da 5 a 10 giorni
- Tabella mesi (10 coppia, 11 se papà fa 3+), indennità 80% per 3 mesi / 30% per 6
- Esempio: Anna e Luca, strategia per massimizzare l'80%
- Mega menu: Famiglia → Figli
- Commit `2a1ab4b`

**4. `/bonus-mobili` — cat-casa**
- Detrazione 50%, tetto 5.000€, collegato a ristrutturazione
- Tabella mobili ammessi + elettrodomestici con classi energetiche minime
- Esempio: Valentina, bagno ristrutturato, 4.800€ → 2.400€ detrazione
- Mega menu: Casa → Lavori e bonus
- Commit `d006e8d`

**5. `/cie` — cat-documenti**
- URGENZA: dal 3 agosto 2026 carta cartacea non valida per espatrio
- Costo 22,21€, consegna 6 giorni, validità 10/5/3 anni + illimitata over 70
- Confronto CIE vs SPID (dark-block), procedura CieID
- Link utili: cartaidentita.interno.gov.it, prenotazionicie.interno.gov.it, ANPR
- Mega menu: Documenti → Identità digitale
- Commit `c21af46`

**6. `/pec` — cat-documenti**
- Glossario: PEC, gestore, AgID, INAD, INI-PEC, domicilio digitale
- Tabella obbligo per categoria, procedura attivazione 4 step
- Esempio: Davide disdice contratto telefonico (raccomandata vs PEC)
- Link utili: AgID, INI-PEC (inipec.gov.it), INAD (domiciliodigitale.gov.it)
- Mega menu: Documenti → Identità digitale
- Commit `7b46e2b`

**7. `/passaporto` — cat-documenti**
- Costo totale 116,20€ (42,70 contributo PagoPA + 73,50 marca da bollo)
- Novità 2026: pagamento solo via PagoPA (vecchi bollettini non accettati)
- Prenotazione su passaportonline.poliziadistato.it, Progetto Polis in Posta
- Procedura 4 step, tempi 10-15 gg, procedure d'urgenza, passaporto minori
- Esempio: Francesco, 30 anni, viaggio USA, timeline marzo→giugno
- 3 errori comuni (aspettare, bollettino vecchio, foto non ICAO)
- Link utili: Agenda Passaporti, Polizia di Stato, Viaggiare Sicuri
- 8 FAQ con schema.org
- Commit `d10567c`

**8. `/busta-paga` — cat-lavoro**
- 3 parti della busta paga (intestazione, competenze, trattenute)
- Formula lordo→netto con numeri reali (2.000€ → ~1.551€)
- Aliquote IRPEF 2026 (23% / 33% / 43% — novità: 2° scaglione da 35% a 33%)
- 6 voci da controllare (paga base, superminimo, straordinari, ferie/ROL, trattamento integrativo, TFR)
- 3 novità 2026: scaglione 33%, cuneo fiscale strutturale, bonus sotto 20k
- Esempio: Laura, impiegata, RAL 28.000€, CCNL Commercio livello 4
- 8 FAQ con schema.org
- Commit `a732c23`

**9. `/imu` — cat-fisco**
- Formula: rendita × 1,05 × 160 × aliquota
- Prima casa esente (residenza + dimora), sentenza Corte Cost. 209/2022 (coniugi)
- Esenzioni complete, 4 agevolazioni (comodato −50%, canone concordato −25%, AIRE −50%, inagibili −50%)
- Scadenze: acconto 16/6, saldo 16/12, codici tributo F24
- Moltiplicatori per tutte le categorie catastali
- Esempio: Sergio, seconda casa al mare in Liguria, rendita 600€ → 1.068€/anno
- 8 FAQ con schema.org
- Commit `a052b36`

### PERFORMANCE — PAGESPEED INSIGHTS

Da **84 a 93-95** su mobile con le seguenti ottimizzazioni:

**1. Google Fonts → next/font/google** (commit `9220cd7`)
- Eliminata richiesta render-blocking a fonts.googleapis.com (780ms)
- Font scaricati in build time e serviti dal dominio zeroburocrazia.it
- `layout.js`: importa `DM_Sans` e `Playfair_Display` da `next/font/google`
- `globals.css`: tutte le `font-family` ora usano `var(--font-dm)` e `var(--font-playfair)`

**2. Logo WebP** (commit `cda7a41`)
- `logo-z.png` (482×373, 86.3 KiB) → `logo-z.webp` (72×72, 3.3 KiB) — 96% più leggero
- Nav.js: aggiornato src + width/height espliciti per eliminare layout shift

**3. browserslist** (commit `19ba362`)
- Aggiunto in `package.json` targeting chrome 87+, firefox 78+, safari 14+, edge 88+
- Nota: i polyfill Next.js (11.6 KiB) sono gestiti internamente dal framework e non sono eliminabili

**4. Accessibilità — Contrasto WCAG AA** (commit `aa24267`)
- `--t3` scurito da `#8A8A9A` a `#6E6E80` (rapporto 4.5:1+ su cream)
- `.section-label` da `var(--tc)` a `var(--warm-brown)` (teal scuro, 7:1+)
- `.btn-tg` da `var(--tc)` a `var(--warm-brown)`
- `.logo-text` da 17px a 19px (supera soglia "large text" WCAG per 3:1)
- `.footer-brand` da 18px/600 a 19px/700 (idem)

**Non risolvibili (limiti Next.js 14):**
- CSS render-blocking (2 fogli stile framework) — costo base Next.js
- Catena dipendenze HTML→CSS — struttura minima del framework
- Polyfill JS 11.6 KiB — gestito internamente, non configurabile
- CSS inutilizzato 14 KiB — globals.css condiviso tra 24 guide, quasi tutto usato

**Punteggio attuale homepage:**
- Prestazioni: 93-95 (mobile)
- Accessibilità: 94 → atteso 98+ dopo fix contrasto
- Best Practices: 100
- SEO: 100

### FISCOZEN — STATO

Elisa Monga (elisa.monga@fiscozen.it) ha inviato contratto via Dropbox Sign. Problema: contratto per società, Mirko opera come persona fisica. Email inviata a Elisa per chiarire. In attesa di risposta.

### GOOGLE SEARCH CONSOLE

Statistiche 10 marzo 2026 (ultime 24h):
- Clic totali: 16
- Impressioni: 21
- CTR: 76,2%
- Posizione media: 2,8
- Solo homepage indicizzata finora — le guide interne richiedono 1-4 settimane per un sito nuovo
- Sitemap reinviata con 28 URL

---

## STATO PAGINE (32 route totali)

| Pagina | Route | Stato | Categoria |
|--------|-------|-------|-----------|
| Homepage | `/` | ✅ Live | — |
| 730 | `/730` | ✅ Riscritta | cat-fisco |
| ISEE | `/isee` | ✅ Riscritta | cat-fisco |
| SPID | `/spid` | ✅ Riscritta | cat-documenti |
| Compro casa | `/compro-casa` | ✅ Riscritta | cat-casa |
| P.IVA | `/piva` | ✅ Riscritta + Fiscozen | cat-fisco |
| Figlio | `/figlio` | ✅ Riscritta | cat-famiglia |
| Ristrutturare | `/ristrutturare` | ✅ Riscritta | cat-casa |
| NASpI | `/naspi` | ✅ Riscritta | cat-lavoro |
| Dimissioni | `/dimissioni` | ✅ Riscritta + Fiscozen | cat-lavoro |
| TFR | `/tfr` | ✅ Riscritta | cat-lavoro |
| Mi sposo | `/mi-sposo` | ✅ Riscritta | cat-famiglia |
| Spese mediche | `/spese-mediche` | ✅ | cat-fisco |
| Fattura elettronica | `/fattura-elettronica` | ✅ Fiscozen | cat-fisco |
| Regime forfettario | `/regime-forfettario` | ✅ Fiscozen | cat-fisco |
| Assegno unico | `/assegno-unico` | ✅ | cat-famiglia |
| Cambio residenza | `/cambio-residenza` | ✅ Nuova S12 | cat-documenti |
| Mutuo | `/mutuo` | ✅ Nuova S12 | cat-casa |
| Congedo parentale | `/congedo-parentale` | ✅ Nuova S12 | cat-famiglia |
| Bonus mobili | `/bonus-mobili` | ✅ Nuova S12 | cat-casa |
| CIE | `/cie` | ✅ Nuova S12 | cat-documenti |
| PEC | `/pec` | ✅ Nuova S12 | cat-documenti |
| Passaporto | `/passaporto` | ✅ Nuova S12 | cat-documenti |
| Busta paga | `/busta-paga` | ✅ Nuova S12 | cat-lavoro |
| IMU | `/imu` | ✅ Nuova S12 | cat-fisco |
| Questa Settimana | `/tg` | ✅ Live | — |
| Novità | `/novita` | ✅ Live | — |
| Chi siamo | `/chi-siamo` | ✅ Live | — |
| Privacy | `/privacy` | ✅ Live | — |
| Termini | `/termini` | ✅ Live | — |
| Contatti | `/contatti` | ✅ Live | — |

**Pagine rimosse:** `/ordina` e `/professionisti` (redirect a homepage).

---

## DA FARE (prossima sessione)

1. **Fiscozen** — Attendere risposta Elisa sul contratto persona fisica. Quando arrivano link tracciati: inserire in 4 guide (piva, dimissioni, fattura-elettronica, regime-forfettario)
2. **Reinviare sitemap** su Google Search Console e Bing Webmaster Tools (28 URL)
3. **Nuove guide** (prossime per volume di ricerca): cedolare secca, affitto, bonus nido, esenzione ticket, primo lavoro, bollo auto, pensione, successione, 104
4. **Aggiornare "Questa Settimana"** — Settimana 11 (10-16 marzo)
5. **Pagina donazioni** — "Offrici un caffè"
6. **Distribuzione** — Post gruppi Facebook, Reddit r/italy
7. **Creare info.zeroburocrazia@gmail.com** — Gmail per i servizi esterni
8. **Awin** — Registrazione affiliate marketing
9. **Video TikTok/Instagram** — Temi caldi: CIE (urgenza agosto), 730 (aprile)
10. **Verificare indicizzazione** — Le 24 guide devono apparire su Google in 2-4 settimane

---

## REGOLE CONSOLIDATE

1. **DEVLOG = fonte di verità** (pushato su GitHub, MAI nel tar.gz)
2. **Push GitHub SUBITO** dopo ogni modifica — MAI git fetch/checkout prima di aver pushato
3. **git add esplicito** — MAI `git add -A` (file cache del container causano push rejection)
4. **MAI regex/bulk su JSX** — solo str_replace mirati
5. **Ogni guida:** glossario 5-7 termini, Tip tooltip, esempio pratico dark-block con personaggio, TOC 8 voci, FAQ con schema.org, keywords meta tag, OG image
6. **Sidebar:** solo link utili istituzionali (.gov.it). Fiscozen solo con link tracciati
7. **Link utili nel contenuto:** formato `.perc`, posizionati PRIMA di "In sintesi", nomi max 2-3 parole
8. **URL esterni:** solo homepage stabili, mai URL profondi che si rompono
9. **Mega menu:** ogni guida compare UNA SOLA VOLTA nel posto più logico. Aggiornare conteggio
10. **searchIndex.js:** aggiornare con keyword per ogni nuova guida
11. **Sitemap:** aggiornare ad ogni nuova guida (attualmente 28 URL)
12. **API keys:** MAI nel codice frontend. Usare env var su Vercel + API route server-side
13. **Font:** usare `next/font/google` (var --font-dm, --font-playfair), MAI link esterni
14. **Logo:** `logo-z.webp` (72×72, 3.3 KiB). Il PNG originale resta ma non è più usato
15. **Colori:** `--t3` è `#6E6E80` (WCAG AA su cream). `--tc` (#E36414) solo per testo ≥19px bold
