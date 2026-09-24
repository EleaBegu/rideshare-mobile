# SHABLLON PRD (Product Requirements Document) — 1 Faqe
**Kursi:** Programimi për Pajisje Mobile (2026/2027) • **Kolegji AAB**  
**Emri i Projektit:** (Torx — Shtrafa dhe Pajisje Pune)  
**Themeluesi / Ekipi:** [Elea Begu, RE-93962/24]  
**Data & Versioni:** Java 02 • Versioni 1.0 (Draft për MVP)

---

## 1. Përdoruesi dhe Problemi Real
- **Kush e përjeton dhimbjen?** Klientët që kanë nevojë për shtrafa dhe pajisje pune, si dhe pronari i biznesit Torx, i cili duhet t'u përgjigjet vazhdimisht pyetjeve të klientëve për produktet dhe sasinë në depo.
- **Kur ndodh?**  Kur klientët kanë nevojë për një produkt dhe duan të dinë nëse gjendet në depo dhe sa copë janë në dispozicion.
- **Si e zgjidhin sot?** Klientët e telefonojnë pronarin e biznesit dhe e pyesin nëse ka produktin që u nevojitet dhe sa copë ka. Pronari kontrollon në depo dhe pastaj, nëse klienti e kërkon, ia dërgon produktet.

## 2. Evidenca e Vëzhgimit (3 Bisedat me Përdoruesit)
- **Biseda 1 (Klient):** *"“Kur më duhet ndonjë shtrafë ose pajisje pune, zakonisht duhet ta telefonoj pronarin për të pyetur nëse e ka dhe sa copë ka.”"*
- **Biseda 2 (Pronari i Torx):** *"Shpesh më telefonojnë klientët dhe më pyesin a e kam një produkt të caktuar dhe sa copë janë në depo. Pastaj duhet të kontrolloj në depo dhe t’ua tregoj."*
- **Biseda 3 (Klient):** *"Do të ishte më lehtë nëse mund t’i shihja produktet që i ka Torx-i dhe pastaj ta telefonoja pronarin vetëm kur më intereson ndonjë produkt."*

## 3. Hipoteza e Vlerës
> **Nëse** u ofrojmë klientëve një aplikacion mobil ku mund të shohin produktet e Torx-it dhe informacionet bazë për to,.,  
> **atëherë** klientët do të kenë më lehtë të kontrollojnë se çfarë produktesh ofron biznesi, ndërsa pronari do të ketë më pak pyetje të përsëritura për produktet dhe sasinë e tyre në depo.

## 4. Rrjedha Kryesore e Përdoruesit (Core Flow — Max 5 Hapa)
1. **Hyrja** Klienti hap aplikacionin Torx dhe shikon produktet e ofruara nga biznesi..
2. **Kërkimi / Postimi:** Klienti kërkon ose shfleton produktet dhe shikon produktet që janë në dispozicion në depo.
3. **Kërkesa:** Klienti interesohet për një produkt dhe vendos të kontaktojë pronarin përmes telefonit.`.
4. **Konfirmimi:** Pronari konfirmon në telefon nëse produkti dhe sasia e kërkuar janë në dispozicion.
5. **Përfundimi:** Pronari ia përgatit dhe ia dërgon produktin klientit, nëse bëhet marrëveshja.

## 5. Kufijtë e MVP-së (Scope Contract)
- **BRENDA MVP-së (Maksimumi 3 funksione):**
  1. Shfaqja e produkteve të Torx-it me fotografi dhe emër.
  2. Organizimi i produkteve sipas kategorive.
  3. Shfaqja e sasisë së produkteve në dispozicion.
- **JASHTË MVP-së (Të përjashtuara qëllimisht për këtë semestër):**
  - Zero pagesa përmes aplikacionit; pagesat mund të bëhen me para në dorë ose me transfer bankar direkt në llogarinë e biznesit.
  - Zero porosi ose rezervime direkte brenda aplikacionit.
  - Zero chat-i të brendshëm; komunikimi bëhet përmes telefonatës.

## 6. Kriteret e Pranimit (Acceptance Criteria - Çfarë testohet)
- [ ] **AC-1:** Kur shtohet një produkt i ri, ai shfaqet në listën e produkteve me emër, fotografi dhe sasi.
- [ ] **AC-2:** Kur ndryshohet sasia e një produkti, sasia e re shfaqet në aplikacion.
- [ ] **AC-3:** Produktet shfaqen të organizuara sipas kategorive përkatëse.
- [ ] **AC-4:** Kur klienti hap aplikacionin, lista e produkteve shfaqet me informacionet përkatëse..

## 7. Modeli Minimal i të Dhënave (Supabase PostgreSQL)
```sql
products (id, name, category, quantity, image, description)

```

## 8. Rreziku Kryesor që Duhet Testuar
- **Rreziku:** A do t'u besojnë klientët informacioneve për produktet dhe sasinë e tyre në aplikacion, pa pasur nevojë ta telefonojnë menjëherë pronarin?
- **Testi në Javën 2:** Të testohet nëse klientët arrijnë të gjejnë lehtë produktin dhe të kuptojnë informacionin e shfaqur, veçanërisht sasinë në dispozicion.

