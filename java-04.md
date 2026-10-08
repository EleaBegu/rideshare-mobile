# RideShare — Java 4 · Neon dhe PostgreSQL

Ruaje këtë skedar si java-04.md pranë README, jashtë aplikacioni/.
Plotëso të gjitha përgjigjet; hiqi shenjat [PLOTËSO].
Mos vendos DATABASE_URL, pamje të kredencialeve ose të dhëna reale.

## Çfarë ndërtova
Në këtë javë lidha aplikacionin me databazën Neon PostgreSQL përmes Vercel. Lista e udhëtimeve dhe faqe e detajeve tani i marrin të dhënat drejtpërdrejt nga tabela `udhetimet` me `SELECT`, në vend të të dhënave statike.

## Provat që bëra
### Prova 1: Ndryshimi në databazë shfaqet në aplikacion
Ndryshova orën e ID 2 nga 08:15 në 08:25 në Neon SQL Editor. Pas rifreskimit të faqes, ora u përditësua menjëherë në 08:25 si te lista ashtu edhe te faqe e detajeve. E ktheva përsëri në 08:15 dhe u përditësua sërish korrektësisht.


### Prova 2: Lista bosh dhe rikthimi
Shtova `WHERE false` te query-ja e `lexoUdhetimet`. Aplikacioni shfaqi mesazhin se nuk ka udhëtime të disponueshme. Pas heqjes së `WHERE false`, të tri kartat e udhëtimeve u shfaqën përsëri.


### Prova 3: Lidhja mungon, rikthimi dhe siguria
Ndryshova emrin e `DATABASE_URL` në `.env.local` dhe pas rinisjes së serverit shfaqet gabim lidhjeje pasi aplikacioni nuk gjen dot databazën. Pas rikthimit të emrit të saktë dhe rinisjes, gjithçka punoi sërish. Skedari `.env.local` mungon në GitHub Desktop sepse është i përfshirë në `.gitignore`.

## Ku gjendet puna
- `schema.sql` gjendet brenda dosjes `aplikacioni/`
- Skedarët e ndryshuar: `src/lib/udhetimet.ts`, `src/app/page.tsx`, `src/app/udhetimi/[id]/page.tsx`
- Repository: Linku i projektit tim në GitHub


## Çfarë mbetet për përmirësim
Kërkesa për udhëtim te faqja `kerkesa` mbetet ende vetëm një simulim vizual sepse nuk kemi krijuar një tabelë ose funksionalitet për të ruajtur rezervimet reale në databazë.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora inteligjencën artificiale për të sqaruar hapat e lidhjes së Neon me Vercel dhe strukturuar skedarin `schema.sql`, ndërsa ekzekutimin dhe testet i verifikova vetë në projekt.











