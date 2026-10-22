# RideShare — Java 6 · PWA dhe puna offline

Puna u realizua gjatë laboratorit të Javës 6. Ska asnjë sekret apo të dhënë private të publikuar.

## Çfarë ndërtova
Në këtë javë ndërtova një PWA (Progressive Web App) me lexim offline për udhëtimet publike të RideShare:
- **Manifesti (`manifest.ts`)**: Përshkruan identitetin e aplikacionit (emrin "RideShare AAB", ngjyrat dhe ikonat) duke mundësuar pamjen standalone.
- **Service Worker (`sw.js`)**: Intercepton kërkesat e rrjetit, ruan dokumentin `offline.html`, ikonat dhe kthen përgjigjen e ruajtur (cache) për API-n `/api/udhetimet` kur mungon interneti.
- **Kopja publike / Lexuesi offline (`offline.html`)**: Një faqe autonome HTML që lexon dhe shfaq tri udhëtimet e ruajtura lokalisht pa pasur nevojë për serverin ose React/Next.js gjatë mungesës së lidhjes.

## Provat që bëra
### Prova 1: Manifesti dhe vizita online
- Hapa adreshën `http://localhost:3005/manifest.webmanifest` ku u shfaq emri "RideShare AAB" si dhe ikonat 192x192 dhe 512x512.
- Te DevTools (`F12`) -> **Application** -> **Service Workers** verifikova që `/sw.js` u regjistrua dhe është aktiv (*Activated and running*).
- Te **Cache Storage** u ruajt lista publike te `rideshare-public-v1` duke përfshirë `/offline.html`, ikonat dhe `/api/udhetimet`.

### Prova 2: Pa internet dhe pas rifreskimit
- Simulova ndërprerjen e internetit duke zgjedhur **Network -> Offline** te DevTools në shfletues.
- Pas rifreskimit të faqes `/offline.html`, të tria kartat e udhëtimeve u shfaqën pa problem në ekran.
- Koha e ruajtjes tregonte datën/orën e kopjes së fundit dhe mesazhi konfirmonte se të dhënat erdhën nga "cache".
- Kjo pamje nuk përbën konfirmim rezervimi sepse nuk lidhet me databazën në kohë reale dhe butoni i rezervimit është i çaktivizuar.

### Prova 3: Lidhja rikthehet
- Në Neon SQL Editor ndryshova orën e udhëtimit me ID 2 nga `08:15` në `08:25`.
- Për sa kohë isha Offline, faqja tregonte orën e vjetër `08:15`.
- Pas ndryshimit të rrjetit në **Online** dhe klikimit të butonit **"Rifresko listën"**, ora e ID 2 u përditësua menjëherë në `08:25` dhe burimi ndryshoi në "server". Pas provës e riktheva orën sërish në `08:15`.

## Ku gjendet puna
- **Skedarët e shtuar**: `src/app/manifest.ts`, `src/app/api/udhetimet/route.ts`, `public/sw.js`, `public/offline.html`, `src/components/Pwa.tsx` dhe përditësimi te `src/app/layout.tsx`.
- Raporti ndodhet në rrënjë të projektit si `java-06.md`.

## Çfarë mbetet për përmirësim
- Nëse përdoruesi hap aplikacionin për herë të parë pa lidhje interneti (pa bërë asnjë vizitë paraprake online), Service Worker-i nuk ka pasur mundësi të rruajë asgjë, prandaj shfaqet mesazhi se nuk ka listë të ruajtur.
- Kufizimi i leximit offline është se të dhënat janë vetëm vetive statike/lexuese dhe nuk lejohet kryerja e veprimeve shkruese (rezervime apo ndryshime orari).

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
- Përdora AI për të sqaruar hapat e konfigurimit të PWA, strukturuar skedarët `sw.js` dhe `Pwa.tsx`, si dhe për të ndihmuar me zgjidhjen e rrugëve të dosjeve në VS Code. Provat teknike, testimin offline dhe ekzekutimin e komandave SQL i realizova vetë.
