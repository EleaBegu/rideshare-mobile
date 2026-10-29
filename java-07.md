# Java 7 - Raporti i MVP-së

## Rasti im
- ID: P7-436
- GitHub: EleaBegu

## Parashikimi
Pritja ime ishte që përdoruesi të mund të shfletonte listën e udhëtimeve publike, të hynte në panel dhe të klikonte butonin për kërkimin e vendit pa shkaktuar kërkesa të dyfishta ose gabime gjatë ngarkimit.

## Ndryshimi i ri
Shtova kontrollin e gjendjes së butonit gjatë dërgimit të kërkesës (`isSubmitting`) për të parandaluar klikimet e shumfishta nga përdoruesi gjatë procesimit.

## Ndihma nga AI
Përdora AI për strukturimin e raportit dhe për formulimin e hapave të provave teknike. Të gjitha provat dhe ekzekutimin e kodit i testova vetë në shfletues.

## Dy probleme
1. Butoni i kërkimit të vendit mbetej i aktivizuar gjatë dërgimit të kërkesës API.
2. Mungesa e një mesazhi vizual specifik kur shkëputet lidhja e rrjetit gjatë kërkesës.

## Korrigjimi
Arsyeja: Parandalimi i kërkesave të dyfishta në server gjatë ngarkimit.

Skedari: aplikacioni/src/app/page.tsx

## Versionet
Para: https://github.com/EleaBegu/rideshare-mobile/commit/f913a2dfda260f99d081afc8dd602b7947986943
Pas: https://github.com/EleaBegu/rideshare-mobile/commit/736da16ee3baabedd70161277763687c3cd1f773

## Prova 1
### Hapat
Hap faqen kryesore `/` -> Zgjidh një udhëtim -> Kliko butonin për kërkim vendi.

### Pritshmëria
Udhëtimi të tregojë statusin e kërkesës pa shkaktuar gabime.

### Vëzhgimi
Kërkesa u dërgua dhe statusi u përditësua me sukses.

## Prova 2
### Hapat
Kliko butonin e rezervimit disa herë rresht shpejt gjatë ngarkimit.

### Pritshmëria
Butoni të çaktivizohet (`disabled`) menjëherë pas klikimit të parë.

### Vëzhgimi
Butoni u çaktivizua gjatë kohës që kërkesa ishte në procesim.

## Prova 3
### Hapat
Hap faqen e udhëtimeve me dhe pa lidhje interneti (PWA offline).

### Pritshmëria
Lista publike të lexohet nga cache e Service Worker edhe offline.

### Vëzhgimi
Lista e udhëtimeve u shfaq saktë nga kopja e ruajtur.
