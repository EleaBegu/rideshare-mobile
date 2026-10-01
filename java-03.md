# RideShare — Java 3

Ruaje këtë skedar si `java-03.md` pranë README në repository-n tënd, jashtë dosjes `aplikacioni/`. Mos shto `.txt` pas emrit. Zëvendëso të gjitha shenjat e plotësimit me atë që ndodhi vërtet. Mjafton një fjali e qartë për çdo provë, por trego çfarë prite dhe çfarë pe.

## Çfarë ndërtova
Sot ndërtova faqen kryesore me tri karta udhëtimesh, faqen e detajeve dinamike `/udhetimi/[id]`, si dhe faqen e kërkesës me mesazhin e simulimit për rezervimin e udhëtimit.

## Provat që bëra
### Prova 1: Lista në telefon
Hapa faqen kryesore në pamjen e telefonit; prisja tri karta pa lëvizje anash; pashë që të tri kartat shfaqeshin saktë dhe nuk kishte skrollim horizontal.

### Prova 2: Detajet e udhëtimit të dytë
Klikova kartën 2; prisja adresën /udhetimi/2 dhe vendtakimin e saj; pashë që të dhënat u ngarkuan saktë bashkë me informacionet përkatëse. Te karta 3 (zero vende) pashë se opsioni i rezervimit ishte i pamundësuar, ndërsa te /udhetimi/99 shfaqej mesazhi që udhëtimi nuk ekziston.

### Prova 3: Kërkesa në pritje
Klikova Kërko vend; prisja “Simulim: Në pritje”, pa rezervim real; pashë që mesazhi i simulimit u shfaq saktë në ekran. Pastaj u ktheva te detajet dhe lista ku çdo gjë funksiononte pa probleme.

## Çfarë do të përmirësoj
Do të përmirësoj dizajnin e kartave në ekranet e vogla dhe do të shtoj lidhjen me një bazë të dhënash reale për javën tjetër.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora AI për të më ndihmuar në rregullimin e navigimit dinamik `/udhetimi/[id]` dhe stilit të faqeve, ndërsa strukturen e komponentëve dhe testat i realizova vetë.
