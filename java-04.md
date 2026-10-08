# RideShare — Java 4 · Neon dhe PostgreSQL

## Çfarë ndërtova
Në këtë javë lidha aplikacionin me databazën Neon PostgreSQL. Lista e udhëtimeve dhe faqja e detajeve marrin të dhënat direkt nga tabela `udhetimet`, duke përdorur query `SELECT` në vend të të dhënave statike. Projekti është në dosjen `aplikacioni/` dhe përdor skedarin `schema.sql` si strukturë bazë të tabelës.

## Provat që bëra
### Prova 1: Ndryshimi në databazë shfaqet në aplikacion
Ndryshova orën e udhëtimit me ID 2 nga 08:15 në 08:25 në Neon SQL Editor. Pas rifreskimit të faqes, ndryshimi u shfaq menjëherë si te lista e udhëtimeve ashtu edhe te faqeja e detajeve. Më pas e ktheva orën përsëri në 08:15 dhe aplikacioni u përditësua sërish korrektësisht.

### Prova 2: Lista bosh dhe rikthimi
Shtova kushtin `WHERE false` në query-n e `lexoUdhetimet` për të testuar sjelljen kur nuk ka të dhëna. Aplikacioni shfaqi mesazhin e listës boshe të udhëtimeve, dhe pas heqjes së kushtit të falsë, të tre kartat e udhëtimeve u shfaqën përsëri normalisht.

### Prova 3: Lidhja mungon, rikthimi dhe siguria
Ndryshova emrin e variablës `DATABASE_URL` në `.env.local` dhe pas rinisjes së serverit u shfaq një gabim lidhjeje, sepse aplikacioni nuk mundi të hynte në databazë. Pasi rikthova vlerën e saktë dhe rinisja serverin, sistemi punoi përsëri pa probleme. Ky është një kontroll i rëndësishëm i sigurisë, sepse skedari `.env.local` duhet të mbetet lokal dhe jo i publikuar në GitHub.

## Ku gjendet puna
- `schema.sql` gjendet brenda dosjes `aplikacioni/`
- Skedarët e ndryshuar: `aplikacioni/src/lib/udhetimet.ts`, `aplikacioni/src/app/page.tsx`, `aplikacioni/src/app/udhetimi/[id]/page.tsx`
- Projekti është ruajtur në repo lokal dhe në GitHub

## Çfarë mbetet për përmirësim
Kërkesa për udhëtim në faqen `kerkesa` mbetet ende një simulim vizual, sepse nuk kemi krijuar ende tabelë dhe logjikë reale për ruajtjen e rezervimeve. Kjo është pjesë e funksionalitetit që do të shtohet më vonë.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora inteligjencën artificiale për të sqaruar hapat e lidhjes me Neon dhe për të organizuar strukturën e skedarit `schema.sql`, ndërsa ekzekutimin dhe testet i verifikova vetë në projekt.



