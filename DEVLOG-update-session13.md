# DEVLOG Update — Sessione 13

**Data:** 11 marzo 2026
**Stato:** 33 route. 25 guide attive + pagina Notizie (TG). Deploy attivo su zeroburocrazia.it. Repository: `Kassius92/zeroburocrazia.it`.

---

## Sessione 13 (11 marzo 2026)

### NUOVA GUIDA: CEDOLARE SECCA

**`/cedolare-secca`** — cat-fisco, 2.546 parole. La guida più cercata tra quelle non ancora coperte (~90-110K ricerche/mese).

Contenuto:
- Glossario 6 termini (cedolare secca, canone concordato, Modello RLI, locazione breve, imposta di registro, F24)
- 3 aliquote: 21% canone libero, 10% concordato, 26% affitti brevi (2° immobile)
- Sezione "Chi può e chi no" con 8 casi (comproprietari, ereditato, società, sublocazione, coniugi separati)
- Confronto IRPEF vs cedolare con dark-block e aliquote 2026
- Novità 2026: max 2 appartamenti affitti brevi (da 4), piattaforme sostituti d'imposta
- Scadenze e codici F24: 1840, 1841, 1842
- Sezione "5 errori da evitare"
- 2 esempi pratici: Marta (conviene, risparmio 1.282€) e Paolo (non conviene, reddito basso)
- 8 FAQ con schema.org
- Tip tooltip su termini tecnici
- Sidebar: 3 link istituzionali
- Mega menu aggiornato (non più "soon"), searchIndex (8 entry), sitemap (29 URL)
- OG image: ogcedolaresecca.png (via sharp SVG→PNG)
- package.json: aggiunto sharp (ottimizzazione immagini Next.js)

Commits: `60588df`, `31e014b`

### APPROFONDIMENTO GUIDE ESISTENTI — STRATEGIA SEO

Analisi dei volumi: le pagine in top 10 su Google hanno ~2.400 parole di media. Le 12 guide della sessione 9 erano già nel range (2.000-3.400). Le 13 guide nuove (sessione 12 + cedolare) erano tutte sotto soglia (1.400-1.850).

**Guide portate sopra le 2.000 parole:**

| Guida | Prima | Dopo | Cosa aggiunto |
|---|---|---|---|
| Cedolare secca | 0 | 2.546 | Nuova guida completa |
| IMU | 1.522 | 2.093 | Casi particolari (8 scenari), F24 compilazione, ravvedimento |
| Busta paga | 1.705 | 2.011 | TFR, detrazioni familiari, 13a/14a, sezione "busta sbagliata" |
| Passaporto | 1.561 | 2.034 | Minori, rinnovo/smarrimento/furto, validità, regola 6 mesi |
| Regime forfettario | 1.563 | 1.900 | Obblighi/adempimenti, uscita dal forfettario |
| Fattura elettronica | 1.453 | 1.791 | Scadenze/conservazione, errori comuni (SDI, marca bollo) |

Commits: `163aac5`, `c7ddd25`, `55efb2b`, `a68a952`

### STATO CONTEGGIO PAROLE (solo guide)

✅ Sopra 2.000 (18 guide): 730, ISEE, figlio, cedolare-secca, P.IVA, mi-sposo, mutuo, NASpI, SPID, cambio-residenza, dimissioni, assegno-unico, compro-casa, IMU, ristrutturare, passaporto, TFR, busta-paga

🟡 Vicine (1.800-2.000, 2 guide): regime-forfettario (1.900), spese-mediche (1.834)

⚠️ Sotto soglia (5 guide): congedo-parentale (1.798), fattura-elettronica (1.791), CIE (1.669), PEC (1.620), bonus-mobili (1.569)

---

## STATO PAGINE (33 route totali)

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
| Fattura elettronica | `/fattura-elettronica` | ✅ Approfondita S13 | cat-fisco |
| Regime forfettario | `/regime-forfettario` | ✅ Approfondito S13 | cat-fisco |
| Assegno unico | `/assegno-unico` | ✅ | cat-famiglia |
| Cambio residenza | `/cambio-residenza` | ✅ | cat-documenti |
| Mutuo | `/mutuo` | ✅ | cat-casa |
| Congedo parentale | `/congedo-parentale` | ✅ | cat-famiglia |
| Bonus mobili | `/bonus-mobili` | ✅ | cat-casa |
| CIE | `/cie` | ✅ | cat-documenti |
| PEC | `/pec` | ✅ | cat-documenti |
| Passaporto | `/passaporto` | ✅ Approfondito S13 | cat-documenti |
| Busta paga | `/busta-paga` | ✅ Approfondita S13 | cat-lavoro |
| IMU | `/imu` | ✅ Approfondita S13 | cat-fisco |
| Cedolare secca | `/cedolare-secca` | ✅ Nuova S13 | cat-fisco |
| Questa Settimana | `/tg` | ✅ Live | — |
| Novità | `/novita` | ✅ Live | — |
| Chi siamo | `/chi-siamo` | ✅ Live | — |
| Privacy | `/privacy` | ✅ Live | — |
| Termini | `/termini` | ✅ Live | — |
| Contatti | `/contatti` | ✅ Live | — |

**Pagine rimosse:** `/ordina` e `/professionisti` (redirect a homepage).

---

## DA FARE (prossima sessione)

1. **Approfondire guide rimanenti** sotto soglia: congedo parentale, CIE, PEC, bonus mobili, spese mediche
2. **Fiscozen** — Attendere risposta Elisa sul contratto persona fisica
3. **Reinviare sitemap** su Google Search Console (29 URL)
4. **Nuove guide** (prossime per volume): contratto affitto, legge 104, successione, bollo auto
5. **Aggiornare "Questa Settimana"** — Settimana 11 (10-16 marzo)
6. **Pagina donazioni** — "Offrici un caffè"
7. **Distribuzione** — Post gruppi Facebook, Reddit r/italy
8. **Creare info.zeroburocrazia@gmail.com**
9. **Awin** — Registrazione affiliate marketing
10. **Verificare indicizzazione** — Le 25 guide devono apparire su Google in 2-4 settimane

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
11. **Sitemap:** aggiornare ad ogni nuova guida (attualmente 29 URL)
12. **API keys:** MAI nel codice frontend. Usare env var su Vercel + API route server-side
13. **Font:** usare `next/font/google` (var --font-dm, --font-playfair), MAI link esterni
14. **Logo:** `logo-z.webp` (72×72, 3.3 KiB). Il PNG originale resta ma non è più usato
15. **Colori:** `--t3` è `#6E6E80` (WCAG AA su cream). `--tc` (#E36414) solo per testo ≥19px bold
16. **Profondità contenuto:** target minimo 2.000 parole di testo per guida (range Google: 2.000-3.000). Verificare con conteggio parole dopo stripping JSX
