# Java 7 - Raporti i MVP-së

## Rasti im
(P7-436, GitHub: EleaBegu)

## Parashikimi
Pritja ime ishte që përdoruesi të mund të shfletonte listën e udhëtimeve publike, të hynte në panel dhe të klikonte butonin për kërkimin e vendit për të kaluar te faqja e simulimit pa gabime.

## Ndryshimi i ri
Shtova integrimin e butonit "Kërko vend" për të kaluar përdoruesin automatikisht te faqja e simulimit të udhëtimit.

## Ndihma nga AI
Përdora AI për strukturimin e raportit dhe për formulimin e hapave të provave teknike. Të gjitha provat dhe ekzekutimin e kodit i testova vetë në shfletues.

## Dy probleme
1. Lidhja e butonit të kërkimit të vendit me faqen e simulimit të udhëtimit.
2. Mungesa e një mesazhi vizual specifik kur shkëputet lidhja e rrjetit gjatë kërkesës.

## Korrigjimi
Arsyeja: Mundësimi i kalimit të përdoruesit te faqja e simulimit pas klikimit të butonit.

Skedari: aplikacioni/src/app/page.tsx

## Versionet
Para: https://github.com/EleaBegu/rideshare-mobile/commit/f913a2dfda260f99d081afc8dd602b7947986943
Pas: https://github.com/EleaBegu/rideshare-mobile/commit/736da16ee3baabedd70161277763687c3cd1f773

## Prova 1
- Hapat: Hap faqen kryesore `/` -> Zgjidh një udhëtim -> Kliko butonin "Kërko vend".
- Pritshmëria: Aplikacioni të hapë faqen e simulimit të udhëtimit.
- Vëzhgimi: Faqja e simulimit u hap saktësisht siç pritej.

## Prova 2
- Hapat: Kliko butonin e kërkimit të vendit nga lista e udhëtimeve publike.
- Pritshmëria: Përdoruesi të ridrejtohet te moduli përkatës i udhëtimit.
- Vëzhgimi: Ridrejtimi u krye me sukses në shfletues.

## Prova 3
- Hapat: Hap faqen e udhëtimeve me dhe pa lidhje interneti (PWA offline).
- Pritshmëria: Lista publike të lexohet nga cache e Service Worker edhe offline.
- Vëzhgimi: Lista e udhëtimeve u shfaq saktë nga kopja e ruajtur.
