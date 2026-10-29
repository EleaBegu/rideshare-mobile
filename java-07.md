# RideShare — Java 7

## Çfarë ndërtova
Këtë javë përfundova dhe demonstrova skenarin e plotë të përdoruesit (End-to-End) për aplikacionin RideShare. Integrova rrjedhën ku pasagjeri (Arta) kyçet në sistem, shfleton udhëtimet nga lista publike, shikon detajet e një udhëtimi dhe dërgon kërkesën për rezervim vendi. Po ashtu, testova funksionimin e lexuesit offline (PWA) të realizuar në Javën 6 dhe korrigjova gabimet në menaxhimin e gjendjes së rezervimeve.

## Provat që bëra
### Prova 1: Rrjedha kryesore mund të demonstrohet nga fillimi në fund.
- **Hapat:** Hap faqen kryesore `/` -> Kyçem si pasagjer -> Zgjedh një udhëtim nga lista -> Kliko "Kërko vend" -> Kontrollo ndryshimin e statusit të rezervimit.
- **Rezultati i pritur:** Udhëtimi të shfaqë statusin e ri të kërkesës dhe numri i vendeve të lira të përditësohet pa gabime.
- **Çfarë ndodhi:** Rrjedha funksionoi plotësisht nga fillimi në fund me të dhëna fiktive në databazën Neon.

### Prova 2: Raporti përshkruan një gabim dhe korrigjimin e tij.
- **Hapat:** Shtyp butonin "Kërko vend" disa herë rresht shpejt gjatë kohës që kërkesa API ishte duke u procesuar.
- **Rezultati i pritur:** Butoni duhet të çaktivizohet menjëherë pas klikimit të parë për të parandaluar kërkesat e dyfishta.
- **Çfarë ndodhi:** Fillimisht butoni mbetej i klikueshëm gjatë kohës së ngarkimit. U korrigjua duke shtuar një gjendje `isSubmitting` (disabled) gjatë ekzekutimit të `fetch()`.

### Prova 3: Mund të shpjegoj ku ruhen të dhënat dhe kush lejohet t’i ndryshojë.
- **Hapat:** Kontrollo API routes (`/api/udhetimet`) dhe tabelat në databazën Neon.
- **Rezultati i pritur:** Të dhënat publike (orari, nisja, destinacioni) mund të lexohen nga kushdo (edhe offline), ndërsa krijimi i udhëtimeve dhe konfirmimi i rezervimeve kërkojnë autentifikim.
- **Çfarë ndodhi:** U konfirmua se të dhënat ruhen në Neon (PostgreSQL). Leximi publik bëhet me kërkesë `GET`, kurse ndryshimet e të dhënave (POST/UPDATE) lejohen vetëm për përdoruesit e autentifikuar me lejet përkatëse.

## Ku gjendet puna
- **Skedarët kryesorë:**
  - `src/app/page.tsx` (Faqja kryesore dhe lista e udhëtimeve)
  - `src/app/api/udhetimet/route.ts` (API endpoint për të dhënat publike)
  - `public/sw.js` & `public/offline.html` (Service Worker dhe faqja offline PWA)
  - `src/components/Pwa.tsx` (Komponenti i regjistrimit të Service Worker)
- **Vendndodhja e kodit:** Skedarët janë të ruajtur në repository-n personal në GitHub në degën kryesore (main).

## Çfarë mbetet për përmirësim
Nëse rrjeti shkëputet ekzaktsisht në momentin kur dërgohet kërkesa për rezervim vendi, përdoruesi merr një gabim të përgjithshëm në shfletues. Hapi i ardhshëm është shtimi i një mesazhi me njoftim vizual (toast/banner) që informon përdoruesin se rezervimet kërkojnë lidhje me serverin.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora AI për të strukturuar raportin e Javës 7, për të verifikuar logjikën e çaktivizimit të butonit të rezervimit gjatë ngarkimit, dhe për formulimin e hapave të provave teknike. Të gjitha provat dhe ekzekutimin e kodit i testova vetë në shfletues.
