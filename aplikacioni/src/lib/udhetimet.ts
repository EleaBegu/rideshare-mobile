export interface Udhetim {
  id: string;
  nisja: string;
  destinacioni: string;
  cmimi: string;
  data: string;
  vendtakimi: string;
  vendeTeLira: number;
}

export const udhetimet: Udhetim[] = [
  {
    id: "1",
    nisja: "Prishtinë",
    destinacioni: "Tiranë",
    cmimi: "15 €",
    data: "Sot, 14:00",
    vendtakimi: "Stacioni i Autobusëve",
    vendeTeLira: 2,
  },
  {
    id: "2",
    nisja: "Prizren",
    destinacioni: "Shkup",
    cmimi: "10 €",
    data: "Nesër, 09:00",
    vendtakimi: "Te Rrethi i Flamurit",
    vendeTeLira: 3,
  },
  {
    id: "3",
    nisja: "Pejë",
    destinacioni: "Prishtinë",
    cmimi: "5 €",
    data: "Sot, 18:30",
    vendtakimi: "Qendra e Qytetit",
    vendeTeLira: 0,
  },
];


