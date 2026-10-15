# RideShare — Java 5 · Hyrja dhe lejet

Ruaje si java-05.md pranë README, jashtë aplikacioni/.
Hiqi shenjat PLOTËSO. Mos vendos sekrete, email ose pamje të kredencialeve.

## Çfarë ndërtova
Në këtë javë kam ndarë qartë konceptet e identitetit, rolit dhe pronësisë në aplikacion. Identiteti verifikohet nga GitHub përmes NextAuth, i cili i jep përdoruesit një ID të sigurt sesioni. Roli përcaktohet në databazën Neon në tabelën profilet (udhetar ose shofer) dhe nuk mund të zgjidhet apo ndryshohet nga formulari. Pronësia lidh udhëtimin me shoferin përmes kolonës shofer_id. Në këtë mënyrë, vetëm përdoruesi që ka rolin shofer dhe është pronar i udhëtimit mund ta ndryshojë orën e atij udhëtimi.

## Provat që bëra
### Prova 1: Hyrja, rifreskimi dhe dalja
Kur hapa faqen /panel pa u kyçur, u shfaq mesazhi që lista është publike dhe butoni "Hyr me GitHub". Pasi u kyça me llogarinë e GitHub, në panel u shfaqën emri im dhe roli fillestar udhetar. Pas rifreskimit të faqes, sesioni mbeti i aktivizuar. Kur hapa panelin në dy skeda dhe klikova "Dil" në njërën skedë, rifreskimi i skedës tjetër e kërkoi përsëri hyrjen me GitHub, duke vërtetuar menaxhimin e saktë të sesionit.

### Prova 2: Shoferi ndryshon udhëtimin e vet
Pasi e caktova rolin shofer në Neon SQL Editor dhe bëra pronar të ID 2 llogarinë time, te paneli u shfaq formulari për ndryshimin e orës. Ndryshova orën e udhëtimit nga 08:15 në 08:25 dhe klikova "Ruaj orën". Në panel u shfaq mesazhi i suksesit "Ora u ruajt me sukses". Ndryshimi prej 08:25 u reflektekua menjëherë te lista kryesore, te faqja e detajeve të udhëtimit ID 2 dhe në databazë gjatë ekzekutimit të SELECT te Neon SQL Editor. Në fund e riktheva orën përsëri në 08:15.

### Prova 3: Veprimi pa leje refuzohet
Së pari, përmes DevTools ndryshova vlerën e fushës hidden id nga 2 në 1 dhe klikova ruaj. Serveri e refuzoi ndryshimin dhe shfaqi mesazhin "Nuk ke leje për këtë udhëtim. Ora nuk ndryshoi.", ndërsa ora e udhëtimit ID 1 në Neon mbeti 08:00.
Së dyti, në Neon ia hoqa vetes rolin shofer duke e kthyer në udhetar dhe ruajta nga formulari i hapur pa e rifreskuar faqe. Serveri e refuzoi ndryshimin.
Së treti, dola nga llogaria dhe provova të ruaj nga skeda tjetër e mbetur e hapur; kërkesa u refuzua dhe u kërkua hyrje përsëri. Në të gjitha rastet ora në databazë nuk ndryshoi.

## Ku gjendet puna
Kodi dhe raporti ndodhen në repository-n tim në GitHub. Skedarët e rinj të shtuar janë schema-java05.sql, src/lib/auth.ts, src/app/api/auth/...nextauth/route.ts, src/components/Hyrja.tsx, src/lib/lejet.ts, src/app/panel/actions.ts dhe src/app/panel/page.tsx, si dhe përditësimi i src/app/page.tsx.

## Çfarë mbetet për përmirësim
Kërkesa për vend mbetet ende një simulim në faqe sepse nuk ruhet në databazë dhe nuk dërgon njoftim te shoferi. Në hapat e ardhshëm do të shtoja një tabelë të re për kërkesat e rezervimit, ku udhëtarët mund të dërgojnë kërkesë reale dhe shoferi të mund ta pranojë ose refuzojë atë nga paneli.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Nuk përdora AI.