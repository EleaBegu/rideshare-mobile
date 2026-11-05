# RideShare — Java 8

## Çfarë ndërtova
Shtova menaxhimin e lejeve të vendndodhjes (geolocation) përmes butonit "Përdor vendndodhjen time", shfaqjen e pikës së nisjes me koordinata fiktive dhe largësi prej 12 m, si dhe mundësinë e shkrimit manual të vendtakimit nëse leja refuzohet ose nuk mbështetet.

## Provat që bëra
### Prova 1: Leja nuk kërkohet sapo hapet faqja.
- Hapat: Hap faqen kryesore `/` pa klikuar asnjë buton.
- Pritshmëria: Shfletuesi të mos shfaqë pop-up për lejen e vendndodhjes menjëherë te ngarkimi.
- Vëzhgimi: Faqja u ngarkua plotësisht pa kërkuar lejen e vendndodhjes.

### Prova 2: Refuzimi i lejes nuk e bllokon përdoruesin.
- Hapat: Kliko butonin "Përdor vendndodhjen time" dhe refuzo lejen e vendndodhjes (Block/Deny) në shfletues.
- Pritshmëria: Aplikacioni të vazhdojë të funksionojë pa u bllokuar duke lejuar hyrjen manuale.
- Vëzhgimi: Shfletuesi shfaqi mesazhin me udhëzim dhe fushën tekstuale për shkrimin manual të vendtakimit.

### Prova 3: Dëshmitë në GitHub nuk tregojnë adresën time reale.
- Hapat: Kontrollo të dhënat e vendndodhjes që shfaqen në ndërfaqe (koordinatat 42.6392, 21.1126 · Largësia: 12 m) dhe skedarët e commit-eve në GitHub.
- Pritshmëria: Të dhënat e koordinatave reale ose adresat personale të jenë të anonimizuara me të dhëna fiktive.
- Vëzhgimi: Në ekran dhe në historikun e publikuar u përdorën vetëm koordinata fiktive dhe nuk u gjet asnjë adresë personale reale.

## Ku gjendet puna
Skedarët kryesorë: `aplikacioni/src/app/page.tsx`, `aplikacioni/src/components/Vendndodhja.tsx`

## Çfarë mbetet për përmbajtjen
Nevoja për të shtuar një njoftim më sqarues vizual kur përdoruesi e çaktivizon vendndodhjen direkte nga cilësimet e përgjithshme të shfletuesit ose pajisjes.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora AI për strukturimin e raportit, përcaktimin e rasteve të testimit me të dhëna fiktive dhe gjenerimin e logjikës alternative për hyrjen manuale. Të gjitha provat teknike i ekzekutova dhe i verifikova vetë në shfletues.
