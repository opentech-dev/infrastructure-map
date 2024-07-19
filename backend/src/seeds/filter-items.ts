import { Strapi } from "@strapi/strapi";
import * as chisinauRingOuterSectionOne from "./assets/geojson/roads/chisinau-ring-road-outer-section-one.json";
import * as chisinauRingOuterSectionTwo from "./assets/geojson/roads/chisinau-ring-road-outer-section-two.json";
import * as chisinauRingSectionFour from "./assets/geojson/roads/chisinau-ring-road-section-four.json";
import * as chisinauRingSectionOne from "./assets/geojson/roads/chisinau-ring-road-section-one.json";
import * as chisinauRingSectionThree from "./assets/geojson/roads/chisinau-ring-road-section-three.json";
import * as chisinauRingSectionTwo from "./assets/geojson/roads/chisinau-ring-road-section-two.json";
import * as highwayOne from "./assets/geojson/roads/highway-1.json";
import * as highwayTwo from "./assets/geojson/roads/highway-2.json";
import * as m1 from "./assets/geojson/roads/m1.json";
import * as m3 from "./assets/geojson/roads/m3.json";
import * as m3_1 from "./assets/geojson/roads/m3_1.json";
import * as m5 from "./assets/geojson/roads/m5.json";
import * as r1 from "./assets/geojson/roads/r1.json";
import * as r1_1 from "./assets/geojson/roads/r1_1.json";
import * as r2 from "./assets/geojson/roads/r2.json";
import * as r3 from "./assets/geojson/roads/r3.json";
import * as r3_1 from "./assets/geojson/roads/r3_1.json";
import * as r3_2 from "./assets/geojson/roads/r3_2.json";
import * as r4 from "./assets/geojson/roads/r4.json";
import * as r5 from "./assets/geojson/roads/r5.json";
import * as r6 from "./assets/geojson/roads/r6.json";
import * as r7 from "./assets/geojson/roads/r7.json";
import * as r7r5 from "./assets/geojson/roads/r7-r5.json";
import * as r8 from "./assets/geojson/roads/r8.json";
import * as r8_1 from "./assets/geojson/roads/r8_1.json";
import * as r9 from "./assets/geojson/roads/r9.json";
import * as r10 from "./assets/geojson/roads/r10.json";
import * as r11 from "./assets/geojson/roads/r11.json";
import * as r12 from "./assets/geojson/roads/r12.json";
import * as r12_1 from "./assets/geojson/roads/r12_1.json";
import * as r13 from "./assets/geojson/roads/r13.json";
import * as r14 from "./assets/geojson/roads/r14.json";
import * as r14_1 from "./assets/geojson/roads/r14_1.json";
import * as r14_3 from "./assets/geojson/roads/r14_3.json";
import * as r14_2 from "./assets/geojson/roads/r14_2.json";
import * as r15 from "./assets/geojson/roads/r15.json";
import * as r16 from "./assets/geojson/roads/r16.json";
import * as r16_1 from "./assets/geojson/roads/r16_1.json";
import * as r17 from "./assets/geojson/roads/r17.json";
import * as r19 from "./assets/geojson/roads/r19.json";
import * as r20 from "./assets/geojson/roads/r20.json";
import * as r21 from "./assets/geojson/roads/r21.json";
import * as r22 from "./assets/geojson/roads/r22.json";
import * as r23 from "./assets/geojson/roads/r23.json";
import * as r25 from "./assets/geojson/roads/r25.json";
import * as r26 from "./assets/geojson/roads/r26.json";
import * as r28 from "./assets/geojson/roads/r28.json";
import * as r29 from "./assets/geojson/roads/r29.json";
import * as r29_1 from "./assets/geojson/roads/r29_1.json";
import * as r30 from "./assets/geojson/roads/r30.json";
import * as r30_1 from "./assets/geojson/roads/r30_1.json";
import * as r31 from "./assets/geojson/roads/r31.json";
import * as r32 from "./assets/geojson/roads/r32.json";
import * as r32_1 from "./assets/geojson/roads/r32_1.json";
import * as r32_2 from "./assets/geojson/roads/r32_2.json";
import * as r33 from "./assets/geojson/roads/r33.json";
import * as r34 from "./assets/geojson/roads/r34.json";
import * as r34_1 from "./assets/geojson/roads/r34_1.json";
import * as r34_2 from "./assets/geojson/roads/r34_2.json";
import * as r34_3 from "./assets/geojson/roads/r34_3.json";
import * as r35 from "./assets/geojson/roads/r35.json";
import * as r36 from "./assets/geojson/roads/r36.json";
import * as r37 from "./assets/geojson/roads/r37.json";

// Bridges
import * as p_gg from "./assets/geojson/bridges/giurgiulest-galati.json";
import * as p_la from "./assets/geojson/bridges/leuseni-albita.json";
import * as p_uu from "./assets/geojson/bridges/ungheni.json";
import * as p_ss from "./assets/geojson/bridges/sculeni.json";
import * as p_ca from "./assets/geojson/bridges/cahul-oancea.json";
import * as p_lb from "./assets/geojson/bridges/leova-bumbata.json";
import * as p_lr from "./assets/geojson/bridges/lipcani-radauti.json";
import * as p_bs from "./assets/geojson/bridges/braniste-stanca.json";
import * as p_lf from "./assets/geojson/bridges/leca-falciu.json";

import * as n_cy from "./assets/geojson/bridges/cosauti-yampol.json";
import * as n_op from "./assets/geojson/bridges/otaci-podolsk.json";
import * as n_ub from "./assets/geojson/bridges/unguri-bronitsa.json";
import * as n_c from "./assets/geojson/bridges/camenca.json";
import * as n_rr from "./assets/geojson/bridges/rezina-ribnita.json";
import * as n_cd from "./assets/geojson/bridges/criuleni-dubasari.json";
import * as n_gb from "./assets/geojson/bridges/gura-bicului.json";
import * as n_tb from "./assets/geojson/bridges/tighina-bender.json";
import * as n_rh from "./assets/geojson/bridges/rascaieti-hlinaia.json";

// Railways
import * as benCauBasEtGiu from "./assets/geojson/railways/ben-cau-bas-et-giu.json";
import * as giuCahBas from "./assets/geojson/railways/giu-cah-bas.json";
import * as glodeniRibnita from "./assets/geojson/railways/glodeni-ribnita.json";
import * as prut1Falciu from "./assets/geojson/railways/prut1-falciu.json";
import * as ungheniChisinau from "./assets/geojson/railways/uc.json";
import * as vobucc from "./assets/geojson/railways/vobucc.json";
import * as dryPort from "./assets/geojson/railways/dry-port.json";

// Airports
import * as air_ch from "./assets/geojson/airports/chisinau.json";
import * as air_ma from "./assets/geojson/airports/marculesti.json";
import * as air_ba from "./assets/geojson/airports/balti.json";
import * as air_ca from "./assets/geojson/airports/cahul.json";

// Ports
import * as dunare from "./assets/geojson/rivers/dunare.json";
import * as nistru from "./assets/geojson/rivers/nistru.json";
import * as prut from "./assets/geojson/rivers/prut.json";
import * as port from "./assets/geojson/rivers/port.json";

// Cities
import * as chisinau from "./assets/geojson/cities/chisinau.json";
import * as balti from "./assets/geojson/cities/balti.json";
import * as cahul from "./assets/geojson/cities/cahul.json";
import * as soroca from "./assets/geojson/cities/soroca.json";
import * as orhei from "./assets/geojson/cities/orhei.json";
import * as ungheni from "./assets/geojson/cities/ungheni.json";
import * as comrat from "./assets/geojson/cities/comrat.json";
import * as edinet from "./assets/geojson/cities/edinet.json";

// Transportation
import * as lineOne from "./assets/geojson/transportation/line-1.json";
import * as lineTwo from "./assets/geojson/transportation/line-2.json";

import * as balti_c from "./assets/geojson/cities/centers/balti.json";
import * as cahul_c from "./assets/geojson/cities/centers/cahul.json";
import * as chisinau_c from "./assets/geojson/cities/centers/chisinau.json";
import * as comrat_c from "./assets/geojson/cities/centers/comrat.json";
import * as edinet_c from "./assets/geojson/cities/centers/edinet.json";
import * as orhei_c from "./assets/geojson/cities/centers/orhei.json";
import * as soroca_c from "./assets/geojson/cities/centers/soroca.json";
import * as ungheni_c from "./assets/geojson/cities/centers/ungheni.json";

// Water & Sanitation
import * as d_cahul from "./assets/geojson/districts/cahul.json";
import * as d_causeni from "./assets/geojson/districts/causeni.json";
import * as d_donduseni from "./assets/geojson/districts/donduseni.json";
import * as d_falesti from "./assets/geojson/districts/falesti.json";
import * as d_ialoveni from "./assets/geojson/districts/ialoveni.json";
import * as d_ocnita from "./assets/geojson/districts/ocnita.json";
import * as d_soroca from "./assets/geojson/districts/soroca.json";
import * as d_stefan_voda from "./assets/geojson/districts/stefan-voda.json";
import * as d_c_cahul from "./assets/geojson/districts/centers/cahul.json";
import * as d_c_falesti from "./assets/geojson/districts/centers/falesti.json";
import * as d_c_center from "./assets/geojson/districts/centers/center.json";
import * as d_c_south from "./assets/geojson/districts/centers/south.json";
import * as d_c_north from "./assets/geojson/districts/centers/north.json";

//

// Roads
const tenTData = [m1, m3, m3_1, r7r5, m5].map((gJson) => {
  gJson.features.forEach((feature) =>
    Object.assign(feature.properties, {
      style: { color: "#BE123C", weight: 8 },
    })
  );
  return gJson;
});

const ringRoadData = [
  chisinauRingSectionOne,
  chisinauRingSectionTwo,
  chisinauRingSectionThree,
  chisinauRingSectionFour,
  chisinauRingOuterSectionOne,
  chisinauRingOuterSectionTwo,
].map((gJson) => {
  gJson.features.forEach((feature) =>
    Object.assign(feature.properties, {
      style: { color: "#059669", weight: 8 },
    })
  );
  return gJson;
});

const highwayData = [highwayOne, highwayTwo].map((gJson) => {
  gJson.features.forEach((feature) =>
    Object.assign(feature.properties, {
      style: { color: "#0EA5E9", weight: 8 },
    })
  );
  return gJson;
});

const republicanArr = [
  r1_1,
  r1,
  r2,
  r3_1,
  r3_2,
  r3,
  r4,
  r5,
  r6,
  r7,
  r8_1,
  r8,
  r9,
  r10,
  r11,
  r12_1,
  r12,
  r13,
  r14_1,
  r14_2,
  r14_3 as typeof r14_2,
  r14,
  r15,
  r16_1,
  r16,
  r17,
  r19,
  r20,
  r21,
  r22,
  r23,
  r25,
  r26,
  r28,
  r29_1,
  r29,
  r30_1,
  r30,
  r31,
  r32_1,
  r32_2,
  r32,
  r33,
  r34_1,
  r34_2,
  r34_3,
  r34,
  r35,
  r36,
  r37,
]
  .map((gJson) => {
    gJson.features.forEach((feature) =>
      Object.assign(feature.properties, {
        style: { color: "#1D4ED8", weight: 2 },
      })
    );
    return gJson;
  })
  .map((item) => item.features[0]);

const republicanData = {
  type: "FeatureCollection",
  features: republicanArr,
};

const tentEN = [
  {
    name: "M1 (Leușeni-Dubăsari)",
    description: `The M1 Leușeni - Chisinau - Dubăsari road has a total length of 153.6 km.

### Status Quo:
We currently have the EBRD's approval for financing the modernization of 85 km from Chisinau to Leușeni. (Estimated value EUR 250 million).

### Necesitate:
Respectively for 68.6 km it is necessary to identify the financing. (Estimated value EUR 200 million).`,
    geojson: tenTData[0] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "M3 (Chișinău-Giurgiulești)",
    description: `The M3 Chisinau - Comrat - Giurgiulesti road has a total length of 213.73 km.

### Status Quo:
Only 55.2 km corresponds to the EU directive on the TEN-T network.

### Needs:
For the remaining 158.5 km it is necessary to identify the financing. Estimated cost is around 300 mln EUR.
    `,
    geojson: tenTData[1] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "M3.1 (Reni-Giurgiulești)",
    description: `The M3.1 Ukrainian border (Reni) - Giurgiulești road has a total length of 0.75 km and is a continuation of the M3 road.

### Status Quo:
Road in the very poor condition

### Needs:
2,7 mil EUR is required for financing.`,
    geojson: tenTData[2] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "R7 (Râșcani-Yampol)",
    description: `This road sector has a length of 91.7 km and was proposed to the European Commission to be included into the TEN-T network in the context of the construction of the transboundary bridge over Nistru river Cosauti (Moldova) - Yampol (Ukraine).

### Status Quo:
Road in the very poor condition

### Needs:
For the entire section is necessary identification of around 200 mln. EUR`,
    geojson: tenTData[3] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "M5 (Criva-Kuchurhan)",
    description: `The M5 road has a total length of 370.26 km.

### Status Quo:
133 km of road will be modernized with the support of EIB, namely the Criva - Balti section. At the same time, the M5 road represents a large part of the future Iasi - Ungheni - Chisinau Odessa highway.

### Needs:
For 237,3 km is required for financing around 900 mln.EUR.`,
    geojson: tenTData[4] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const tentRO = [
  {
    name: "M1 (Leușeni-Dubăsari)",
    description: `Drumul M1 Leușeni - Chișinău - Dubăsari are o lungime totală de 153.6 km.

### Status Quo:
În prezent avem acceptul BERD privind finanțarea modernizării a 85 km de la Chișinău spre Leușeni. (Valoarea estimativa 250 mln EUR)

### Necesitate:
Respectiv pentru 68.6 km este necesar identificarea finanțării. (Valoarea estimativă 200 mln EUR).`,
    geojson: tenTData[0] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "M3 (Chișinău-Giurgiulești)",
    description: `Drumul M3 Chișinău - Comrat - Giurgiulești are o lungime totală de 213.73 km.

### Status Quo:
Doar 55.2 km corespund directivei EU privind rețeaua TEN-T).

### Necesitate:
Respectiv pentru 158.5 km este necesar identificarea finanțării. (Valoarea estimativa 300 mln EUR).`,
    geojson: tenTData[1] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "M3.1 (Reni-Giurgiulești)",
    description: `Drumul M3.1 frontiera cu Ucraina (Reni) - Giurgiulești are o lungime totala de 0.75 km și este continuare a drumului M3.

### Status Quo:
Drumul se află într-o stare deplorabilă

### Necesitate:
Este necesar identificarea finanțării în valoare de 2,7 mln EUR.`,
    geojson: tenTData[2] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "R7 (Râșcani-Yampol)",
    description: `Acest sector de drum are lungimea de 91.7 km și a fost propus Comisiei Europene pentru a fi inclus în rețeaua TEN-T în contextul construcției podului transfrontalier peste rîul Nistru Cosauti (Moldova) - Yampol (Ucraina)

### Status Quo:
Drumul se află într-o stare rea

### Necesitate:
Pentru toata porțiunea de drum este necesar identificarea surselor financiare în valoare de 200 mln EUR.`,
    geojson: tenTData[3] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "M5 (Criva-Kuchurhan)",
    description: `Drumul M5 are o lungime totala de 370.26 km.

### Status Quo:
Cu suportul BEI vor fi modernizate 133 km de drum, sectorul Criva - Bălți. Totodata drumul M5 reprezinta o mare parte din viitoarea autostradă Iași - Ungheni - Chișinău Odessa.

### Necesitate:
Pentru 237,3 km este necesar identificarea finanțării în valoare de 900 mln EUR.`,
    geojson: tenTData[4] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const ringRoadEN = [
  {
    name: "Section 1 - M2",
    description: `Acest sector are o lungime de 6.6 km și a fost modernizat la finele anului 2022.

  ### Status Quo:
  Lucrările au costat  9.9 mln EUR: modernizarea și reabilitarea sectorului de drum existent, cu executarea intersecțiilor și îmbunătățirea siguranței rutiere.

  ### Necesitate:
  Nu necesită.`,
    geojson: ringRoadData[0] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Section 2",
    description: `This sector has a length of 8.2 km. The works will start in 2024.

### Status Quo:
The estimated cost of works is 44 mln EUR and the financing will be provided by EIB and EBRD.

### Needs:
Not required.`,
    geojson: ringRoadData[1] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Section 3",
    description: `This sector has a length of 9.2 km. The works will start in 2024.

### Status Quo:
The estimated cost of works is 56 mln. EUR and the financing will be provided by EIB and EBRD.

### Needs:
Co Financing is necessary.`,
    geojson: ringRoadData[2] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Section 4",
    description: `This sector has a length of 10 km. Works will be launched estimated in 2026.

### Status Quo:
The development of pre-feasibility and feasibility studies is foreseen to start in 2024.

### Needs:
It is necessary to identify 27 mln. EUR.`,
    geojson: ringRoadData[3] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Section 5",
    description: `This sector has a length of 17 km. Works will be launched estimated in 2026.

### Status Quo:
The development of pre-feasibility and feasibility studies is foreseen to start in 2024.

### Needs:
It is necessary to identify 136 mln. EUR.`,
    geojson: ringRoadData[4] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Section 6",
    description: `This sector has a length of 19 km. Works will be launched estimated in 2026.

### Status Quo:
The development of pre-feasibility and feasibility studies is foreseen to start in 2024.

### Needs:
It is necessary to identify 220 mln. EUR.`,
    geojson: ringRoadData[5] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const ringRoadRO = [
  {
    name: "Secțiunea 1 - M2",
    description: `Acest sector are o lungime de 6.6 km și a fost modernizat la finele anului 2022.

### Status Quo:
Lucrările au costat  9.9 mln EUR: modernizarea și reabilitarea sectorului de drum existent, cu executarea intersecțiilor și îmbunătățirea siguranței rutiere.

### Necesitate:
Nu necesită.`,
    geojson: ringRoadData[0] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Secțiunea 2",
    description: `Acest sector are o lungime de 8.2 km. Lucrările vor începe în 2024.

### Status Quo:
Costul estimativ al lucrărilor este de 44 mln. EUR și va fi finanțat cu suport BEI și BERD.

### Necesitate:
Nu necesită.`,
    geojson: ringRoadData[1] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Secțiunea 3",
    description: `Acest sector are o lungime de 9.2 km. Lucrările vor începe în 2024.

### Status Quo:
Costul estimativ al lucrărilor este de 56 mln. EUR is va fi finanțat cu suport BEI și BERD.

### Necesitate:
Este necesară identificarea cofinanțării.`,
    geojson: ringRoadData[2] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Secțiunea 4",
    description: `Acest sector are o lungime de 10 km. Lansarea lucrărilor estimativ 2026.

### Status Quo:
În 2024 va fi inițiată elaborarea studiilor de prefezabilitate și fezabilitate.

### Necesitate:
Este necesară identificarea finanțării în valoare de 27 mln. EUR.`,
    geojson: ringRoadData[3] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Secțiunea 5",
    description: `Acest sector are o lungime de 17 km. Lansarea lucrărilor estimativ 2026.

### Status Quo:
În 2024 va începe elaborarea studiilor de prefezabilitate și fezabilitate.

### Necesitate:
Este necesară identificarea finanțării în valoare de 136 mln. EUR.`,
    geojson: ringRoadData[4] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Secțiunea 6",
    description: `Acest sector are o lungime de 19 km. Lansarea lucrărilor estimativ 2026.

### Status Quo:
În 2024 va începe elaborarea studiilor de prefezabilitate și fezabilitate.

### Necesitate:
Este necesară identificarea finanțării în valoare de 220 mln. EUR.`,
    geojson: ringRoadData[5] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const highwayEN = [
  {
    name: "Section 1 - Ungheni-Chișinău",
    description: `Sector no. 1 starts from Ungheni towards Chisinau and has a length of approximately 100 km.

### Status Quo:
Feasibility Study will be elaborated in 2024.

### Needs:
It is necessary elaboration of Technical Documentation and Construction Works.
Estimated cost is around 1.1 billion EUR.`,
    geojson: highwayData[0] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Section 2 - Chișinău-Palanca",
    description: `Sector no. 2 starts from Chisinau towards Palanca (Ukrainian border) with final destination Odessa (UA) and is approximately 145 km long. Estimated cost 1.6 billion EUR.

### Status Quo:
Feasibility Study will be elaborated in 2024.

### Needs:
It is necessary elaboration of Technical Documentation and Construction Works.
Estimated cost is around 1.6  billion EUR.`,
    geojson: highwayData[1] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const highwayRO = [
  {
    name: "Secțiunea 1 - Ungheni-Chișinău",
    description: `Sectorul nr.1 începe de la Ungheni spre Chișinău și are o lungime de aproximativ 100 km.

### Status Quo:
Studiul de Fezabilitate va fi elaborat în 2024.

### Necesitate:
Elaborarea Documentației de Proiect și efectuarea lucrărilor de construcție.
Valoarea necesară este de 1.1 miliarde EUR`,
    geojson: highwayData[0] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Secțiunea 2 - Chișinău-Palanca",
    description: `Conform Sectoru nr.2 începe de la Chișinău spre Palanca (frontiera cu Ucraina) în continuare spre Odesa (UA) și are o lungime de aproximativ 145 km. Cost estimativ 1,6 miliarde EUR.

### Status Quo:
Studiul de Fezabilitate va fi elaborat în 2024.

### Necesitate:
Elaborarea Documentației de Proiect și efectuarea lucrărilor de construcție.
Valoarea necesară este de 1.6 miliarde EUR.`,
    geojson: highwayData[1] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const republicanEN = [
  {
    name: "All Republican Roads",
    description: `The republican road network consists of 1996 km and is managed by State-owned Enterprise “State Road Administration”.

### Status Quo:
Their current status is as follows - very bad 13.86%, bad 20.67%, mediocre 20.35%, good and very good 23.8%.

### Needs:
In order to rehabilitate republican roads, the Ministry of Infrastructure and Regional Development has developed a list of roads that require investments of around 400 million EUR.`,
    geojson: republicanData as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const republicanRO = [
  {
    name: "Toate Drumurile Republicane",
    description: `Rețeaua de drumuri republicane are o lungime de 1996 km și este gestionată de către Întreprinderea de Stat Administrația de Stat a Drumurilor.

### Status Quo:
Starea lor actuală este următoarea - foarte rea 13,86%, rea 20,67%, mediocră 20,35%, bună și foarte bună 23,8%.

### Necesitate:
Pentru reabilitarea drumurilor republicane Ministerul Infrastructurii și Dezvoltării Regionale a elaborat o listă de drumuri care necesita investiții de aproximativ  400 mln EUR.`,
    geojson: republicanData as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

//

// Bridges
const prutEN = [
  {
    name: "Giurgiuelești(MD) - Galați(RO)",
    description: `The bridge has been rehabilitated, the construction of the crossing point is necessary.`,
    geojson: p_gg as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Leușeni(MD) - Albița(RO)",
    description: `In the process of negotiating the agreement with the World Bank. Co-financing will be supported by CEF.`,
    geojson: p_la as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Ungheni(MD) - Ungheni(RO)",
    description: `In the process of negotiating the agreement with the World Bank. Co-financing will be supported by CEF.`,
    geojson: p_uu as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Sculeni(MD) - Sculeni(RO)",
    description: `In the process of negotiating the agreement with the World Bank. Co-financing will be supported by CEF.`,
    geojson: p_ss as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Cahul(MD) - Oancea(RO)",
    description: `It is necessary to develop the Feasibility Study for the construction of a permanent bridge.`,
    geojson: p_ca as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Leova(MD) - Bumbăta(RO)",
    description: `It is necessary to develop the Feasibility Study for the reconstruction of the bridge.`,
    geojson: p_lb as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Lipcani(MD) - Rădăuţi(RO)",
    description: `The bridge is in good condition, investments are needed for the access road.`,
    geojson: p_lr as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Branişte(MD) - Stânca(RO)",
    description: `It is necessary to develop the Feasibility Study for the construction of a permanent bridge.`,
    geojson: p_bs as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Leca(MD) - Fălciu(RO)",
    description: `It is necessary to develop the Feasibility study for the construction of the bridge.`,
    geojson: p_lf as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const prutRO = [
  {
    name: "Giurgiuelești(MD) - Galați(RO)",
    description: `Podul a fost reconstruit, este necesară construirea punctelor de trecere.`,
    geojson: p_gg as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Leușeni(MD) - Albița(RO)",
    description: `În proces de negociere a acordului de colaborare cu World Bank. Co-finanțarea va fi susținută de CEF.`,
    geojson: p_la as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Ungheni(MD) - Ungheni(RO)",
    description: `În proces de negociere a acordului de colaborare cu World Bank. Co-finanțarea va fi susținută de CEF.`,
    geojson: p_uu as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Sculeni(MD) - Sculeni(RO)",
    description: `În proces de negociere a acordului de colaborare cu World Bank. Co-finanțarea va fi susținută de CEF.`,
    geojson: p_ss as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Cahul(MD) - Oancea(RO)",
    description: `Este necesar de desfășurat un Studiu de Fezabilitate pentru construirea unui pod permanent.`,
    geojson: p_ca as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Leova(MD) - Bumbăta(RO)",
    description: `Este necesar de desfășurat un Studiu de Fezabilitate pentru reconstruirea podului.`,
    geojson: p_lb as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Lipcani(MD) - Rădăuţi(RO)",
    description: `Podul este în condiții bune, sunt necesare investiții pentru drumul de acces.`,
    geojson: p_lr as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Branişte(MD) - Stânca(RO)",
    description: `Este necesar de desfășurat un Studiu de Fezabilitate pentru construirea unui pod permanent.`,
    geojson: p_bs as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Leca(MD) - Fălciu(RO)",
    description: `Este necesar de desfășurat un Studiu de Fezabilitate pentru construirea podului.`,
    geojson: p_lf as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const nistruEN = [
  {
    name: "Cosăuți(MD) - Yampol(UA)",
    description: `The Feasibility Study is at the Finalization stage. It is necessary to identify the financing.`,
    geojson: n_cy as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Otaci(MD) - Moghilev Podolsk(UA)",
    description: `Maintenance is required. The bridge is in mediocre condition.`,
    geojson: n_op as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Unguri(MD) - Bronitsa(UA)",
    description: `Maintenance is required. The bridge is in mediocre condition.`,
    geojson: n_ub as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Camenca",
    description: `Reconstruction of the bridge is necessary.`,
    geojson: n_c as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Rezina - Râbnița",
    description: `Maintenance is required. The bridge is in mediocre condition.`,
    geojson: n_rr as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Criuleni - Dubăsari",
    description: `Capital repair is required.`,
    geojson: n_cd as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "M5 Gura Bîcului",
    description: `Capital repair is required.`,
    geojson: n_gb as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Tighina Bender",
    description: `Capital repair is required.`,
    geojson: n_tb as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Răscăieți - Hlinaia",
    description: `Capital repair is required.`,
    geojson: n_rh as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const nistruRO = [
  {
    name: "Cosăuți(MD) - Yampol(UA)",
    description: `Studiul de Fezabilitate este în etapa de finalizare. Este necesar de identificat finanțatorul.`,
    geojson: n_cy as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Otaci(MD) - Moghilev Podolsk(UA)",
    description: `Este necesară întreținerea. Podul este în stare mediocră.`,
    geojson: n_op as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Unguri(MD) - Bronitsa(UA)",
    description: `Este necesară întreținerea. Podul este în stare mediocră.`,
    geojson: n_ub as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Camenca",
    description: `Este necesară reconstrucția podului.`,
    geojson: n_c as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Rezina - Râbnița",
    description: `Este necesară întreținerea. Podul este în stare mediocră.`,
    geojson: n_rr as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Criuleni - Dubăsari",
    description: `Este necesară reparația capitală.`,
    geojson: n_cd as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "M5 Gura Bîcului",
    description: `Este necesară reparația capitală.`,
    geojson: n_gb as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Tighina Bender",
    description: `Este necesară reparația capitală.`,
    geojson: n_tb as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Răscăieți - Hlinaia",
    description: `Este necesară reparația capitală.`,
    geojson: n_rh as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];
//

// Railways
const speedLineData = ungheniChisinau;

const onGoingData = benCauBasEtGiu;

const quickWinsData = [vobucc, prut1Falciu].map((gJson) => {
  gJson.features.forEach((feature) =>
    Object.assign(feature.properties, {
      style: { color: "#fbbf24", weight: 6 },
    })
  );
  return gJson;
});

const unfundedData = [giuCahBas, glodeniRibnita].map((gJson) => {
  gJson.features.forEach((feature) =>
    Object.assign(feature.properties, {
      style: { color: "#be123c", weight: 12 },
    })
  );
  return gJson;
});

const speedLineEN = [
  {
    name: "Chișinău-Ungheni",
    description: `Central Railway Corridor
Railway line Chisinau - Ungheni.
Total length: 110 km.

### Investment needs:
- Construction of a standard gauge electrified railway line (1435 mm).`,
    geojson: speedLineData as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const speedLineRO = [
  {
    name: "Chișinău-Ungheni",
    description: `Coridorul Feroviar Centru
Tronsonul de cale ferată Chisinau - Ungheni.
Lungime: 110 km.

### Investiții necesare:
- Construcția liniei de cale ferată electrificată cu ecartament standard (1435 mm).`,
    geojson: speedLineData as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const onGoingEN = [
  {
    name: "Tighina-Basarabeasca-Giurgiulesti",
    description: `Southern Railway Corridor
Railway line Tighina - Basarabeasca - Giurgiulesti.
Total length: 297 km.
Financial resources: EBRD/EIB loan agreement.
Cost: 107,5 mln EUR.
Start of works: may 2022.`,
    geojson: onGoingData as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const onGoingRO = [
  {
    name: "Tighina-Basarabeasca-Giurgiulesti",
    description: `Coridorul Feroviar de Sud
Tronsonul de cale ferată Tighina - Basarabeasca - Giurgiulesti.
Lungime: 297 km.
Surse de finantare: Acord de împrumut BERD/BEI.
Cost: 107,5 mln EUR.
Începutul lucrărilor: mai 2022.`,
    geojson: onGoingData as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const quickWinsEN = [
  {
    name: "Vălcineț-Ocnița-Bălți-Ungheni-Chișinău-Căinari",
    description: `Northern and Central Railway Corridors
Railway lines Valcinet - Ocnita - Balti - Ungheni - Chisinau - Cainari.
Total length: 446 km.
Part of Solidarity Lanes.

### Investment needs:
- Rehabilitation works, 392 km. Aprox. Cost 147 mln EUR.
Donors for 128 km works: EU - 20 mln EUR grant; EBRD - 23 mln EUR loan.`,
    geojson: quickWinsData[0] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Prut 1-Fălciu",
    description: `Southern Railway Corridor (alternative)
Railway line Prut 1 (MD) - Falciu (RO)

### Investment needs:
- Feasibility study;
- Construction of a double-track railway line (1520/1435 mm)`,
    geojson: quickWinsData[1] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const quickWinsRO = [
  {
    name: "Vălcineț-Ocnița-Bălți-Ungheni-Chișinău-Căinari",
    description: `Coridorul Feroviar de Nord și Centru
Tronsonul de cale ferata Valcinet - Ocnita - Bălți - Ungheni - Chișinău - Căinari.
Lungime: 446 km.
Parte a Solidarity Lanes.

### Investiții necesare:
- Lucrări de reabilitare 392 km. Cost approx. 147 mln EUR.
Donatori pentru lucrări 128 km: UE - 20 mln EUR grant,
BERD - 23 mln EUR împrumut.`,
    geojson: quickWinsData[0] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Prut 1-Fălciu",
    description: `Coridorul Feroviar de Sud (alternativ)
Tronsonul de cale ferată Prut 1 (MD) - Falciu (RO)

### Investiții necesare:
- Studiu de fezabilitate;
- Construcția liniei de cale ferată încălecată (1520/1435 mm)`,
    geojson: quickWinsData[1] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const unfundedEN = [
  {
    name: "Basarabeasca-Prut-Cahul-Giurgiulești",
    description: `Southern Railway Corridor (alternative)
Railway line Basarabeasca - Prut - Cahul - Giurgiulesti
Total length: 187 km

### Investment needs:
- Feasibility study;
- Rehabilitation works. Approx. cost - 80 mln EUR.`,
    geojson: unfundedData[0] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Glodeni-Bălți-Rîbnița",
    description: `Northern Railway Corridor
Railway line Glodeni - Balti - Ribnita
Total length: 162 km

### Investment needs:
- Feasibility study;
- Rehabilitation works.`,
    geojson: unfundedData[1] as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const unfundedRO = [
  {
    name: "Basarabeasca-Prut-Cahul-Giurgiulești",
    description: `Coridorul Feroviar de Sud (alternativ)
Tronsonul de cale ferată Basarabeasca - Prut - Cahul - Giurgiulești
Lungime: 187 km

### Investiții necesare:
- Studiu de fezabilitate;
- Lucrări de reabilitare. Cost approx. - 80 mln EUR.`,
    geojson: unfundedData[0] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Glodeni-Bălți-Rîbnița",
    description: `Coridorul Feroviar de Nord
Tronsonul de cale ferată Glodeni - Bălți -  Rîbnița
Lungime: 162 km

### Investiții necesare:
- Studiu de fezabilitate;
- Lucrări de reabilitare.`,
    geojson: unfundedData[1] as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const dryPortEN = [
  {
    name: "Bereshty Terminal",
    description: `### Multimodal Logistics Terminal (dry port):
- Beresti freight railway terminal;
- total area 80 ha;
- railway lines with both broad and standard gauge;
- access to Ungheni bypass road, heading to Sculeni BCP (RO);
- access to Ungheni railway BCP heading to Iasi (RO);
- access to utilities (water, canalization, energy);
- marchaling railway lines;
- neighboring to Ungheni Free Economic Zone;
- space for construction of cargo terminals (containers, cereals, oil products);
- connecting the Northern railway corridor with the Central one.

### Investment needs:
- construction of the container and storage facilities;
- construction of administrative building(s) (terminal operator, customs office, sanitary inspection, customs brokers, etc.);
- rehabilitation of railway lines;
- acquisition of equipment (loading/unloading cranes handling vehicles);
- development of the terminal area.

Total estimated costs 70 mln EUR.`,
    geojson: dryPort as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const dryPortRO = [
  {
    name: "Berești Terminal",
    description: `### Terminal logistic multimodal (port sec):
- stația feroviară marfară Berești;
- suprafața totală 80 ha;
- linii de cale ferată cu ecartament larg și standard;
- acces la șoseaua de ocolire a mun. Ungheni, direcția spre PTF Sculeni (RO);
- acces pe cale ferată spre PTF pe cale ferată Ungheni spre Iași (RO);
- acces la utilități (apă, canalizare, curent electric);
- linii de cale ferată pentru manevre;
- în apropiere de Zona Economica Liberă Ungheni;
- spațiu liber pentru construcția de terminale marfare (containere, cereale, produse petroliere);
- conexiune dintre coridoarele feroviare Nord și Centru.

### Investiții necesare:
- construcția facilităților de operare și stocare a containerelor;
- construcția clădirilor administrative (operator terminal, post vamal, inspecție sanitară, brokeri vamali, etc.);
- reabilitarea liniilor de cale ferată;
- achiziția echipamentelor necesare (macarale, auto vehicule de operare);
- amenajarea spațiului/terminalului.

Cost estimativ 70 mln EUR.`,
    geojson: dryPort as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const rollStockEN = [
  {
    name: "All Rolling Stock",
    description: `The freight transport is the most profitable activity of CFM and without the renewal of the freight wagons this activity is threatened. The renewal of the freight wagons can be carried out by capital repairs and acquisition of new wagons.
By the end of 2024, 3487 wagons will be withdrawn from the existing fleet, therefore, it is necessary for capital repairs with the extension of the operating term of 600 wagons and the acquisition of 3800 new freight wagons.

CFM operates 57 shunting locomotives of "ЧМЭ-3" model, which have an increased degree of usage and age. The renewal of the fleet of shunting locomotives is an advantageous and necessary option for the daily operations at CFM.

### Investment needs:
- approx. 3800 freight wagons;
Cost - 171 mln EUR.
- 25 shunting locomotives;
Cost - 62.5 mln EUR.
- 5x passenger trains;
- 200 sets of bogies (1435mm).`,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const rollStockRO = [
  {
    name: "Toate Stocurile Rulante",
    description: `Transportul de mărfuri este activitatea rentabilă a CFM și fără reînnoirea parcului de vagoane de marfă, acest tip de activitate este ameninţat. Reînnoirea parcului de vagoane poate fi efectuată prin reparații capitale și achiziționare a vagoanelor noi. Către sfârșitul anului 2024, 3487 de vagoane vor fi excluse din parcul existent, astfel, este necesară reparația capitală cu prelungirea termenului de exploatare a 600 de vagoane și achiziționarea a 3800 de vagoane noi.

CFM operează cu 57 locomotive de manevră de model “ЧМЭ-3”, care au un grad sporit de uzură și vechime. Reînnoirea parcului de locomotive de manevră este o opțiune avantajoasă și necesară pentru operațiunile zilnice la CFM.

### Investiții necesare:
- approx. 3800 de vagoane Cost approx. - 171 mln EUR;
- 25 locomotive de manevră;
Cost approx. - 62.5 mln EUR.
- 5 trenuri de pasageri;
- 200 perechi de boghii (1435mm).`,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const functionalAirportsEN = [
  {
    name: "Chișinău International Airport",
    description: `### Investment needs:
- Construction of a new passenger terminal, increasing capacities from 3 to 5,5 mln passengers per year;
- Construction of a new cargo terminal;
- Rehabilitation of runway (3590m);
- Rehabilitation of the main platform, the portion with NCP.

Total Investments: 300 mln EUR.`,
    geojson: air_ch as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Mărculești Free International Airport",
    description: `### Investment needs:
- New Passenger Terminal and car parking area, customs HQ;
- Rehabilitation of pavements (runway, taxiways and apron);
- Lighting system;
- Basic terminal facilities for passenger processing.`,
    geojson: air_ma as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const functionalAirportsRO = [
  {
    name: "Aeroport Internațional Chișinău",
    description: `### Investiții necesare:
- Construcția unui nou terminal de pasageri, cu creșterea capacităților de la 3 la 5,5 milioane de pasageri pe an;
- Construcția unui terminal cargo;
- Reabilitarea pistei de decolare/aterizare (3590m);
- Reabilitarea platformei principale, portiunea cu NCP.

Investiții totale: 300 mln EUR.`,
    geojson: air_ch as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Aeroport Internațional Mărculești",
    description: `### Investiții necesare:
- construcția unui terminal de pasageri nou și zonă de parcare, sediu vamal;
- Reabilitarea pistă, căi de rulare și platformă;
- Sistem de iluminare;
- Facilități terminale de bază pentru procesarea pasagerilor.`,
    geojson: air_ma as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const nonFunctionalAirportsEN = [
  {
    name: "Bălți International Airport",
    description: "",
    geojson: air_ba as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Cahul International Airport",
    description: "",
    geojson: air_ca as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const nonFunctionalAirportsRO = [
  {
    name: "Aeroport Internațional Bălți",
    description: "",
    geojson: air_ba as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Aeroport Internațional Cahul",
    description: "",
    geojson: air_ca as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

//

// Ports & waterays
const waterwaysFeatures = [nistru, prut, dunare]
  .map((gJson) => {
    gJson.features.forEach((feature) =>
      Object.assign(feature.properties, {
        style: { color: "#1d4ed8", weight: 4 },
      })
    );
    return gJson;
  })
  .map((item) => item.features[0]);
const waterwaysData = {
  type: "FeatureCollection",
  features: waterwaysFeatures,
};

const gPortEN = [
  {
    name: "Giurgiulești",
    description: `### Investment needs:
- construction of grain silos, with a capacity of approximately 80,000 tons;
- construction of a berth (150m length, 5m draft);
- grain loaders, with an estimated speed of 1500 t/h;
- access railway lines and unloading stations;
- construction of a truck parking lot and  unloading station;
- construction of covered warehouses;
- mobile cranes;
- development of the territory of 2.5 ha for the new terminal.

Total investments: 34 mln EUR.

### Additionally:
- tugboat. Cost 3-7 mln EUR;
- port reception facilities /waste management. Cost 0.7-1.5 mln EUR.`,
    geojson: port as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const gPortRO = [
  {
    name: "Giurgiulești",
    description: `### Investiții necesare:
- construcția de silozuri de cereale, cu o capacitate de aproximativ 80 000 de tone;
- amenajarea unei dane de 150 m lungime și 5 m pescaj;
- dotarea cu încărcătoare de cereale cu viteze estimată de 1500 t/h.;
- amenajarea liniilor de cale ferată și stații de descărcare;
- construcția unei parcări pentru camioane;
- construcția unei stații de descărcare a camioanelor;
- construcția de depozite acoperite;
- dotarea cu macarale mobile;
- amenajarea teritoriului de 2,5 ha pentru noul terminal.

Total investiții: 34 mln EUR.

### Adițional:
- remorcher. Cost 3-7 mln EUR;
- echipament preluare deșeuri. Cost 0.7-1.5 mln EUR.`,
    geojson: port as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const waterwaysEN = [
  {
    name: "Waterways",
    description: `### Investment needs:
- dredging works in the Prut river, to make the channel navigable as per European standards - approx. cost - 1.5 mln EUR;
- floating dredger - 1.2-3 mln EUR.`,
    geojson: waterwaysData as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const waterwaysRO = [
  {
    name: "Căi Fluviale",
    description: `### Investiții necesare:
- lucrări de dragare în albia râului Prut, în scopul aducerii parametrilor șenalului navigabil la standardele europene - cost aprox. - 1,5 mln EUR;
- dragă plutitoare - 1.2-3 mln EUR.`,
    geojson: waterwaysData as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

// Cities
const citiesEN = [
  {
    name: "Bălți",
    label: "Bălți",
    description: `### Development priorities:
- Urbanistic modernization of the civic center of Bălți municipality - 7.5 million EUR;
- Regeneration and technical-utility equipment of the "Kayak-Canoe" area as a national recreational and leisure area - 5 million EUR;
- Construction of a multifunctional national sports complex, similar to "Bălți Arena" - 20 million EUR;
- Rehabilitation and expansion of sewage networks to increase service coverage from 70% to 75% - 12 million EUR;
- Rehabilitation and expansion of water supply networks to increase service coverage from 73% to 80% - 7 million EUR;
- Construction of a new Regional Wastewater Treatment Station (SEAU) equipped with mechanical, biological, and tertiary treatment stages - 30 million EUR;
- Comprehensive regeneration and modernization of multi-story residential block neighborhoods - 10 million EUR.`,
    geojson: balti as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Cahul",
    label: "Cahul",
    description: `### Development priorities:
- Rehabilitation of road infrastructure - 7.8 million EUR;
- Development of the urban public transportation system (equipping with eco-friendly transport units) - 0.62 million EUR;
- Capital construction of the agro-food market on Dunării street - 0.78 million EUR;
- Construction of a modern multifunctional sports complex of regional importance - 2.6 million EUR;
- Major repairs of Sports School No. 1 - 1.81 million EUR;
- Capital reconstruction of Student Dormitory No. 3 at "B.P. Hasdeu" State University, Cahul - 1.81 million EUR;
- Improvement of the "Veterans Park" in the city of Cahul - 0.67 million EUR;
- Improving the energy efficiency of public buildings - 1.04 million EUR.`,
    geojson: cahul as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Chișinău",
    label: "Chișinău",
    description: `### Development priorities:
- Developing the Botanical Garden as an ecotourism destination - 1,5 mln EUR;
- Rehabilitation and energy efficiency measures for Vadul lui Voda pumping station - 13 million EUR.`,
    geojson: chisinau as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Comrat",
    label: "Comrat",
    description: `### Development priorities:
- Rehabilitation of roads within the Comrat municipality - 5.7 million EUR;
- Development of the urban public transportation system - 0.16 million EUR;
- Construction of the multifunctional regional Business Center building - 2.6 million EUR;
- Development of technical and utility infrastructure and land development in the Ialpug River basin - 1.04 million EUR;
- Expansion of the sewage network and increasing sewage service coverage from 38% to 70% - 3.89 million EUR;
- Construction of a wastewater treatment plant - 9.32 million EUR;
- Construction and development of technical and utility infrastructure to attract investments and build a new residential district - 10.04 million EUR.`,
    geojson: comrat as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Edineț",
    label: "Edineț",
    description: `### Development priorities:
- Rehabilitation of local road infrastructure - 4.66 million EUR;
- Development of the urban public transportation system (equipping with eco-friendly transport units) - 0.16 million EUR;
- Connecting the industrial park's land to a new high-voltage power source, a 110 kV transmission line - 1.04 million EUR;
- Development and revitalization of the regional Recreation Area of V. Alecsandri Park (40 hectares with 3 lakes) - 0.94 million EUR;
- Renovation of the cinema building into a modern regional tourist information center - 3.1 million EUR;
- Expansion of sewage networks to increase service coverage from 45% to 70% - 1.6 million EUR.`,
    geojson: edinet as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Orhei",
    label: "Orhei",
    description: `### Development priorities:
- Rehabilitation of road infrastructure (5 km of upgraded local roads) - 2.6 million EUR;
- Construction of urban public transportation stations (renovation/development of 35 waiting stations) - 0.1 million EUR;
- Construction of the multifunctional regional business center building - 2.49 million EUR;
- Expansion of the territory of the free economic subzone (engineering networks and land preparation works) - 0.47 million EUR;
- Capital construction of the regional agri-food market - 1.56 million EUR;
- Major reconstruction of the building "Former County Zemstvo Leadership Complex with Adjacent Park" - 2.08 million EUR;
- Modern multifunctional regional sports complex (with a swimming pool) - 2.6 million EUR;
- Road traffic surveillance video system - 0.78 million EUR;
- Electronic public transportation payment system - 0.42 million EUR.`,
    geojson: orhei as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Soroca",
    label: "Soroca",
    description: `### Development priorities:
- Rehabilitation of local road infrastructure - 2.6 million EUR;
- Development of the urban public transportation system (equipping with eco-friendly transport units) - 1.6 million EUR;
- Establishment of a multifunctional smart tourist information center - 0.78 million EUR;
- Rehabilitation of the Nistru River embankment (4 km) and the adjacent area for promenades and recreational purposes to strengthen Soroca as a major tourist destination in Moldova - 1.04 million EUR;
- Complex urban revitalization works (city center and residential block neighborhoods) to bring the city center of Soroca in line with European standards - 1.04 million EUR;
- Creation of a modern multifunctional regional sports complex - 1.04 million EUR;
- Development of a public square on the municipal property located along V. Stroescu Street in Soroca - 0.09 million EUR;
- Expansion of sewage networks by 122 km to increase the coverage rate of wastewater disposal services in Soroca - 2.6 million EUR.`,
    geojson: soroca as any,
    locale: "en",
    publishedAt: Date.now(),
  },
  {
    name: "Ungheni",
    label: "Ungheni",
    description: `### Development priorities:
- Rehabilitation of  the road infrastructure - 14.42 km - 7.5 million EUR;
- Construction of a modern hall for the regional agri-food market - 0.52 million EUR;
- Construction of the regional business center "ExpUN" - 2.6 million EUR;
- Repair of the levee on the Prut River - 4.9 km - 1.6 million EUR;
- Construction of the wastewater treatment plant (SEAU) - 14.41 million EUR;
- Expansion of sewage networks - 24.2 km - 4.39 million EUR.`,
    geojson: ungheni as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const citiesRO = [
  {
    name: "Bălți",
    label: "Bălți",
    description: `### Prioritățile de dezvoltare:
- Modernizarea urbanistică a centrului civic al mun. Bălți - 7,5 mil EUR;
- Regenerarea și dotarea tehnico-edilitară a zonei ”Caiac-Canoe” în calitate de zonă de recreere și petrecere a timpului liber de importanță națională - 5 mil EUR;
- Construcția unui complex sportiv multifuncțional de importanță națională de tipul ”Bălți Arena” - 20 mil EUR;
- Reabilitarea și extinderea rețelelor de canalizare pentru a crește rata de acoperire cu servicii de la 70% la 75% - 12 mil EUR;
- Reabilitarea și extinderea rețelelor de apeduct pentru a crește rata de acoperire cu servicii de la 73% la 80%- 7 mil EUR;
- Construcția unei noi Stații regionale de Epurare a Apelor Uzate (SEAU), dotată cu treptele mecanică, biologică și terțiară de tratare - 30 mil EUR;
- Regenerarea și modernizarea complexă a cartierelor blocurilor de locuințe multietajate 10 mil EUR.`,
    geojson: balti as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Cahul",
    label: "Cahul",
    description: `### Prioritățile de dezvoltare:
- Reabilitarea infrastructurii drumurilor – 7,8 mil EUR;
- Dezvoltarea sistemului de transport public urban (dotarea tehnică cu unități de transport ecologic) – 0,62 mil EUR;
- Construcția capitală a pieței agro-alimentare pe str. Dunării – 0,78 mil EUR;
- Construcția unui Complex sportiv multifuncțional modern de importanță regională – 2,6 mil EUR;
- Reparația capitală a Școlii sportive Nr. 1 – 1,81 mil EUR;
- Reconstrucția capitală a căminului studențesc Nr. 3 al Universității de stat ”B.P. Hasdeu” Cahul – 1, 81 mil. EUR;
- Amenajarea „Parcului Veteranilor” din municipiul Cahul.– 0,67 mil EUR;
- Îmbunătățirea eficienței energetice a clădirilor publice- 1,04 mil. EUR.`,
    geojson: cahul as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Chișinău",
    label: "Chișinău",
    description: `### Prioritățile de dezvoltare:
- Dezvoltarea Grădinii Botanice ca destinație ecoturistică - 1,5 mln EUR;
- Reabilitarea și eficientizarea energetică a stației de pompare Vadul lui Voda - 13 mil EUR.`,
    geojson: chisinau as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Comrat",
    label: "Comrat",
    description: `### Prioritățile de dezvoltare:
- Reabilitarea drumurilor în perimetrul mun. Comrat – 5,7 mil. EUR;
- Dezvoltarea sistemului transportului public urban – 0,16 mil. EUR;
- Construcția edificiului Business - centrului multifuncțional regional -  2,6 mil. EUR;
- Dezvoltarea infrastructurii tehnico-edilitare și amenajarea teritoriului în albia rîului Ialpug  1,04 mil. EUR;
- Extinderea rețelei de canalizare și acoperirea cu servicii publice de canalizare de la 38% la 70% -  3,89 mil. EUR;
- Construcția stației de epurare a apelor uzate -  9,32 mil. EUR;
- Edificarea și dezvoltarea infrastructurii tehnico-edilitare pentru atragerea investițiilor și construcția unui nou micro-raion de spațiu locativ - 10,04 mil. EUR.`,
    geojson: comrat as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Edineț",
    label: "Edineț",
    description: `### Prioritățile de dezvoltare:
- Reabilitarea infrastructurii drumurilor locale – 4,66 mil. EUR;
- Dezvoltarea sistemului de transport public urban (dotarea tehnică cu unități de transport ecologic – 0,16 mil. EUR;
- Conectarea terenului parcului industrial la o nouă sursă de energie electrică, linie de tensiune înaltă LEA 110 – 1,04 mil. EUR;
- Amenajarea și revitalizarea zonei regionale de Agrement a Parcului V. Alecsandri (40 ha cu 3 lacuri) – 0,94 mil. EUR;
- Renovarea clădirii cinematografului într-un centru de informare turistică regional modern – 3,1 mil. EUR;
- Extinderea rețelelor de canalizare pentru creșterea ratei de acoperire cu servicii de la 45% la 70% – 1,6 mil. EUR.`,
    geojson: edinet as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Orhei",
    label: "Orhei",
    description: `### Prioritățile de dezvoltare:
- Reabilitarea infrastructurii drumurilor (5 km de drumuri locale modernizate) – 2,6 mil. EUR;
- Construcția stațiilor transportului public urban (35 stații de așteptare renovate/amenajate) – 0,1 mil. EUR;
- Construcția edificiului Centrului regional de business, multifuncțional – 2,49 mil. EUR;
- Extinderea teritoriului subzonei economice libere (rețele inginerești și lucrări de pregătire a terenului) – 0,47 mil. EUR;
- Construcția capitală a pieței agroalimentare regionale – 1,56 mil. EUR;
- Reconstrucția capitală a edificiului „Complexul fostei conduceri a Zemstvei județene cu parcul aferent” – 2,08 mil. EUR;
- Complex sportiv multifuncțional, modern, de importanță regională (cu bazin de înot) – 2,6 mil. EUR;
- Sistemul de supraveghere video a traficului rutier – 0,78 mil. EUR;
- Sistem electronic de achitare in transport public – 0,42 mil. EUR.`,
    geojson: orhei as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Soroca",
    label: "Soroca",
    description: `### Prioritățile de dezvoltare:
- Reabilitarea infrastructurii drumurilor locale – 2,6 mil. EUR;
- Dezvoltarea sistemului de transport public urban (dotarea tehnică cu unități de transport ecologic) – 1,6 mil. EUR;
- Crearea unui centru multifuncțional de informare turistică inteligentă) – 0,78 mil. EUR;
- Reabilitarea falezei râului Nistru (4 km) și a spațiului adiacent în zonă de promenadă și agrement pentru consolidarea mun. Soroca ca destinație majoră turistică în RM – 1,04 mil. EUR;
- Lucrări complexe de revitalizare urbană (centrul civic și cartierele blocurilor de locuințe) pentru adaptarea la standardele europene a zonei din centru a mun. Soroca – 1,04 mil. EUR;
- Crearea unui complex sportiv multifuncțional modern de importanță regională – 1,04 mil. EUR;
- Amenajarea unui scuar public pe terenul, proprietate municipală aliniat str. V. Stroescu, situat în mun. Soroca – 0,09 mil. EUR;
- Extinderea cu 122 km a rețelelor de canalizare pentru creșterea ratei de acoperire cu servicii de la evacuare a apelor uzate în mun. Soroca - – 2,6 mil. EUR.`,
    geojson: soroca as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
  {
    name: "Ungheni",
    label: "Ungheni",
    description: `### Prioritățile de dezvoltare:
- Reabilitarea infrastructurii drumurilor – 14,42 km – 7,5 mil. EUR;
- Construcția unei hale moderne pentru piața agroalimentară regional – 0,52 mil. EUR;
- Construcția centrului regional de business ”ExpUN” – 2,6 mil. EUR;
- Reparația digului pe râul Prut – 4,9 Km – 1,6 mil. EUR;
- Construcția stației de epurare a apelor uzate (SEAU) – 14,41 mil. EUR;
- Extinderea rețelelor de canalizare – 24,2 km – 4,39 mil. EUR.`,
    geojson: ungheni as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];
//

// Transportation
const transportationFeatures = [
  lineOne,
  lineTwo,
  balti_c,
  cahul_c,
  chisinau_c,
  comrat_c,
  edinet_c,
  orhei_c,
  soroca_c,
  ungheni_c,
].map((item) => item.features[0]);

const transportationData = {
  type: "FeatureCollection",
  features: transportationFeatures,
};

const digitalizationEN = [
  {
    name: "Information System Development",
    description: `### Investment needs:
- Development and implementation of the "e-GPS" Information System. Necessary investments 5 mln EUR;
- Development and implementation of the "e-Ticket" Information System. Necessary investments 5 mln EUR.`,
    geojson: transportationData as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const digitalizationRO = [
  {
    name: "Dezvoltarea Sistemului Informațional",
    description: `### Investiții necesare:
- Dezvoltarea și implementarea Sistemului Informațional ,,E-GPS”. Investiții necesare 5 mln EUR;
- Dezvoltarea și implementarea Sistemului Informațional ,,E-Bilet”. Investiții necesare 5 mln EUR.`,
    geojson: transportationData as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const modernizationEN = [
  {
    name: "Information System Development",
    description: `### Investment needs:
- The program for the renovation of the bus fleet used in public transportation. Necessary investments 200 mln EUR.`,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const modernizationRO = [
  {
    name: "Renovarea Parcului de Autocare",
    description: `### Investiții necesare:
- Programul de renovare a parcului de autocare. Investiții necesare 200 mln EUR.`,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const southernRegionData = {
  type: "FeatureCollection",
  features: [d_c_south, d_causeni, d_stefan_voda]
    .map((gJson) => {
      gJson.features.forEach((feature) =>
        Object.assign(feature.properties, {
          style: { color: "#D97706", weight: 0 },
        })
      );
      return gJson;
    })
    .reduce((acc, curr) => acc.concat(curr.features), []),
};

const northernRegionData = {
  type: "FeatureCollection",
  features: [d_c_north, d_donduseni, d_soroca, d_ocnita]
    .map((gJson) => {
      gJson.features.forEach((feature) =>
        Object.assign(feature.properties, {
          style: { color: "#059669", weight: 0 },
        })
      );
      return gJson;
    })
    .reduce((acc, curr) => acc.concat(curr.features), []),
};

const centralRegionData = {
  type: "FeatureCollection",
  features: [d_c_center, d_ialoveni]
    .map((gJson) => {
      gJson.features.forEach((feature) =>
        Object.assign(feature.properties, {
          style: { color: "#1d4ed8", weight: 0 },
        })
      );
      return gJson;
    })
    .reduce((acc, curr) => acc.concat(curr.features), []),
};

const cahulData = {
  type: "FeatureCollection",
  features: [d_c_cahul, d_cahul]
    .map((gJson) => {
      gJson.features.forEach((feature) =>
        Object.assign(feature.properties, {
          style: { color: "#be123d", weight: 0 },
        })
      );
      return gJson;
    })
    .reduce((acc, curr) => acc.concat(curr.features), []),
};

const falestiData = {
  type: "FeatureCollection",
  features: [d_c_falesti, d_falesti]
    .map((gJson) => {
      gJson.features.forEach((feature) =>
        Object.assign(feature.properties, {
          style: { color: "#6c28d9", weight: 0 },
        })
      );
      return gJson;
    })
    .reduce((acc, curr) => acc.concat(curr.features), []),
};

const centralRegionEN = [
  {
    name: "Aqueducts",
    label: "Central Region",
    description: `Main aqueduct for the localities in the Ialoveni district, Central region.

Beneficiary population: approx. 20.000 inhabitants, with access to water from the localities: Rusestii Vechi, Văsieni, Ulmu, Pojoreni, Costești.`,
    geojson: centralRegionData as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const northernRegionEN = [
  {
    name: "Water Supply",
    label: "Northern Region",
    description: `The supply of water from the Dniester River for 33 localities in the districts of Dondușeni, Soroca, Ocnița - improving the living conditions of the population in the respective districts by creating regional infrastructure with access to safe and quality water supplies.

Beneficiaries of the project are approximately 48,000 inhabitants from 33 localities.`,
    geojson: northernRegionData as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const falestiDistrictEN = [
  {
    name: "Main Transmission Pipe",
    label: "Falești District",
    description: `Ensuring the functionality of the Prut-Falesti aqueduct and interconnection with the sub-crossing point at Sculeni - Gherman:
- Construction of the pipeline from the Sculeni interconnection point to the Gherman collection/treatment station;
- Repair/reconstruction of water tanks in the town of Falesti
Beneficiary population: 19 thousand inhabitants;
- Localities with access to drinking water at the first stage: 3 localities (Falesti, Risipeni, Bocșa).

Estimated cost EUR 2.5 million.`,
    geojson: falestiData as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const southernRegionEN = [
  {
    name: "Aqueducts",
    label: "Southern Region",
    description: `Main aqueduct for the Ștefan Vodă - Căușeni - Căinari districts, South region.

The main water supply pipeline will have its point of departure from the village of Cioburciu, which is located in the Lower Dniester area. The project also includes the creation of a regional water supply service.

Beneficiaries: 35,000 inhabitants of the towns of Ștefan Vodă, Causeni, Cainari and other inhabitants from the respective districts.`,
    geojson: southernRegionData as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const cahulDistrictEN = [
  {
    name: "Water Supply",
    label: "Cahul District",
    description: `The project is included in the annual financing plan for regional development priority projects from the Single Program Document 2022-2024.

Beneficiaries: 17.000 inhabitants of the localities from the Cahul district.`,
    geojson: cahulData as any,
    locale: "en",
    publishedAt: Date.now(),
  },
];

const centralRegionRO = [
  {
    name: "Apeducte",
    label: "Regiunea Centru",
    description: `Apeduct magistral pentru localitățile din raionul Ialoveni, regiunea Centru.

Beneficiari ai proiectului: acces la apă potabilă pentru aproximativ 20.000 locuitori ai localitatilor Ruseștii Vechi, Văsieni, Ulmu, Pojăreni, Costești.`,
    geojson: centralRegionData as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const northernRegionRO = [
  {
    name: "Aprovizionare cu Apă",
    label: "Regiunea Nord",
    description: `Aprovizionarea cu apă din râul Nistru pentru 33 localități din raioanele Dondușeni, Soroca, Ocnița - îmbunătățirea condițiilor de trai a populației din raioanele respective prin crearea infrastructurii regionale cu acces la sursa de apă sigură și de calitate.

Beneficiari ai proiectului aproximativ 48.000 locuitori din 33 localități.
    `,
    geojson: northernRegionData as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const falestiDistrictRO = [
  {
    name: "Conducta Principală de Transmisie",
    label: "Raionul Fălești",
    description: `Asigurarea funcționalității apeductului Prut Fălești și interconectarea cu punctul de subtraversare la punctul Sculeni - Gherman:
- Construcția aducțiunii de la punctul de interconectare Sculeni până la stația de captare/tratare din Gherman;
- Reparația/reconstrucția rezervoarelor de apă din orașul Fălești.
Populație beneficiară: 19 mii locuitori;
- Localități cu acces la apă potabilă la prima etapa: 3 localități (Fălești, Risipeni, Bocșa).

Cost estimat 2,5 milioane EUR.`,
    geojson: falestiData as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const southernRegionRO = [
  {
    name: "Apeducte",
    label: "Regiunea Sud",
    description: `Apeduct magistral pentru raioanele Ștefan Vodă - Căușeni - Căinari, regiunea Sud.

Conducta magistrală de alimentare cu apă va avea punctul de plecare din satul Cioburciu, care se află în zona Nistrului inferior. De asemenea, proiectul include crearea unui serviciu regional de aprovizionare cu apă potabilă.

Beneficiari: 35000 locuitori ai orașelor Ștefan Vodă, Causeni, Cainari și alți locuitori ai raioanelor respective.`,
    geojson: southernRegionData as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

const cahulDistrictRO = [
  {
    name: "Aprovizionare cu Apă",
    label: "Raionul Cahul",
    description: `Proiectul este inclus în Planul anual de finanțare a proiectelor prioritare de dezvoltare regională din Documentul Unic de Program 2022-2024.

Beneficiari: 17.000 locuitori ai localităților din raionul Cahul.`,
    geojson: cahulData as any,
    locale: "ro",
    publishedAt: Date.now(),
  },
];

//

export const setFilterItems = async (strapi: Strapi) => {
  const filterItemsCount = await strapi.entityService.count(
    "api::filter-item.filter-item"
  );

  if (!filterItemsCount) {
    // roads
    // const tntEn = await Promise.all(
    //   tentEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const tntEn = await (async () => {
      let data = [];

      for (let item of tentEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const tntRo = await Promise.all(
    //   tentRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [tntEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const tntRo = await (async () => {
      let data = [];

      for (let [i, item] of tentRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [tntEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const ringRoadEn = await Promise.all(
    //   ringRoadEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const ringRoadEn = await (async () => {
      let data = [];

      for (let item of ringRoadEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const ringRoadRo = await Promise.all(
    //   ringRoadRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [ringRoadEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const ringRoadRo = await (async () => {
      let data = [];

      for (let [i, item] of ringRoadRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [ringRoadEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const highwayEn = await Promise.all(
    //   highwayEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const highwayEn = await (async () => {
      let data = [];

      for (let item of highwayEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const highwayRo = await Promise.all(
    //   highwayRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [highwayEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const highwayRo = await (async () => {
      let data = [];

      for (let [i, item] of highwayRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [highwayEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const republicanEn = await Promise.all(
    //   republicanEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const republicanEn = await (async () => {
      let data = [];

      for (let item of republicanEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const republicanRo = await Promise.all(
    //   republicanRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [republicanEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const republicanRo = await (async () => {
      let data = [];

      for (let [i, item] of republicanRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [republicanEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    //

    // bridges
    // const prutEn = await Promise.all(
    //   prutEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const prutEn = await (async () => {
      let data = [];

      for (let item of prutEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const prutRo = await Promise.all(
    //   prutRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [prutEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const prutRo = await (async () => {
      let data = [];

      for (let [i, item] of prutRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [prutEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const nistruEn = await Promise.all(
    //   nistruEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const nistruEn = await (async () => {
      let data = [];

      for (let item of nistruEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const nistruRo = await Promise.all(
    //   nistruRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [nistruEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const nistruRo = await (async () => {
      let data = [];

      for (let [i, item] of nistruRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [nistruEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    //

    // railways

    // const speedLineEn = await Promise.all(
    //   speedLineEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const speedLineEn = await (async () => {
      let data = [];

      for (let item of speedLineEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const speedLineRo = await Promise.all(
    //   speedLineRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [speedLineEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const speedLineRo = await (async () => {
      let data = [];

      for (let [i, item] of speedLineRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [speedLineEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const onGoingEn = await Promise.all(
    //   onGoingEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const onGoingEn = await (async () => {
      let data = [];

      for (let item of onGoingEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const onGoingRo = await Promise.all(
    //   onGoingRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [onGoingEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const onGoingRo = await (async () => {
      let data = [];

      for (let [i, item] of onGoingRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [onGoingEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const quickWinsEn = await Promise.all(
    //   quickWinsEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const quickWinsEn = await (async () => {
      let data = [];

      for (let item of quickWinsEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const quickWinsRo = await Promise.all(
    //   quickWinsRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [quickWinsEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const quickWinsRo = await (async () => {
      let data = [];

      for (let [i, item] of quickWinsRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [quickWinsEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const unfundedEn = await Promise.all(
    //   unfundedEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const unfundedEn = await (async () => {
      let data = [];

      for (let item of unfundedEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const unfundedRo = await Promise.all(
    //   unfundedRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [unfundedEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const unfundedRo = await (async () => {
      let data = [];

      for (let [i, item] of unfundedRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [unfundedEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const dryPortEn = await Promise.all(
    //   dryPortEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const dryPortEn = await (async () => {
      let data = [];

      for (let item of dryPortEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const dryPortRo = await Promise.all(
    //   dryPortRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [dryPortEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const dryPortRo = await (async () => {
      let data = [];

      for (let [i, item] of dryPortRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [dryPortEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const rollStockEn = await Promise.all(
    //   rollStockEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const rollStockEn = await (async () => {
      let data = [];

      for (let item of rollStockEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const rollStockRo = await Promise.all(
    //   rollStockRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [rollStockEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const rollStockRo = await (async () => {
      let data = [];

      for (let [i, item] of rollStockRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [rollStockEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();
    //

    // ports and waterays
    // const portEn = await Promise.all(
    //   gPortEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const portEn = await (async () => {
      let data = [];

      for (let item of gPortEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const portRo = await Promise.all(
    //   gPortRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [portEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const portRo = await (async () => {
      let data = [];

      for (let [i, item] of gPortRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [portEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const waterwaysEn = await Promise.all(
    //   waterwaysEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const waterwaysEn = await (async () => {
      let data = [];

      for (let item of waterwaysEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const waterwaysRo = await Promise.all(
    //   waterwaysRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [waterwaysEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const waterwaysRo = await (async () => {
      let data = [];

      for (let [i, item] of waterwaysRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [waterwaysEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // airports
    // const functionalAirportsEn = await Promise.all(
    //   functionalAirportsEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const functionalAirportsEn = await (async () => {
      let data = [];

      for (let item of functionalAirportsEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const functionalAirportsRo = await Promise.all(
    //   functionalAirportsRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [functionalAirportsEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const functionalAirportsRo = await (async () => {
      let data = [];

      for (let [i, item] of functionalAirportsRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [functionalAirportsEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const nonFunctionalAirportsEn = await Promise.all(
    //   nonFunctionalAirportsEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const nonFunctionalAirportsEn = await (async () => {
      let data = [];

      for (let item of nonFunctionalAirportsEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const nonFunctionalAirportsRo = await Promise.all(
    //   nonFunctionalAirportsRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [nonFunctionalAirportsEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const nonFunctionalAirportsRo = await (async () => {
      let data = [];

      for (let [i, item] of nonFunctionalAirportsRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [nonFunctionalAirportsEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // modernization and digitalization
    // const digitEn = await Promise.all(
    //   digitalizationEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const digitEn = await (async () => {
      let data = [];

      for (let item of digitalizationEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const digitRo = await Promise.all(
    //   digitalizationRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [digitEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const digitRo = await (async () => {
      let data = [];

      for (let [i, item] of digitalizationRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [digitEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // cities
    // const citiesEn = await Promise.all(
    //   citiesEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const citiesEn = await (async () => {
      let data = [];

      for (let item of citiesEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const citiesRo = await Promise.all(
    //   citiesRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [citiesEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const citiesRo = await (async () => {
      let data = [];

      for (let [i, item] of citiesRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [citiesEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const modernEn = await Promise.all(
    //   modernizationEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const modernEn = await (async () => {
      let data = [];

      for (let item of modernizationEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const modernRo = await Promise.all(
    //   modernizationRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: {
    //         ...item,
    //         localizations: [modernEn[i].id],
    //       },
    //       populate: ["localizations"],
    //     })
    //   )
    // );

    const modernRo = await (async () => {
      let data = [];

      for (let [i, item] of modernizationRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [modernEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // water and sanitation
    // const centralRegionEn = await Promise.all(
    //   centralRegionEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const centralRegionEn = await (async () => {
      let data = [];

      for (let item of centralRegionEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const southernRegionEn = await Promise.all(
    //   southernRegionEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const southernRegionEn = await (async () => {
      let data = [];

      for (let item of southernRegionEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const northernRegionEn = await Promise.all(
    //   northernRegionEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const northernRegionEn = await (async () => {
      let data = [];

      for (let item of northernRegionEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const cahulDistrictEn = await Promise.all(
    //   cahulDistrictEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const cahulDistrictEn = await (async () => {
      let data = [];

      for (let item of cahulDistrictEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const falestiDistrictEn = await Promise.all(
    //   falestiDistrictEN.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const falestiDistrictEn = await (async () => {
      let data = [];

      for (let item of falestiDistrictEN) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: item,
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const centralRegionRo = await Promise.all(
    //   centralRegionRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const centralRegionRo = await (async () => {
      let data = [];

      for (let [i, item] of centralRegionRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [centralRegionEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const southernRegionRo = await Promise.all(
    //   southernRegionRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const southernRegionRo = await (async () => {
      let data = [];

      for (let [i, item] of southernRegionRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [southernRegionEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const northernRegionRo = await Promise.all(
    //   northernRegionRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const northernRegionRo = await (async () => {
      let data = [];

      for (let [i, item] of northernRegionRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [northernRegionEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const cahulDistrictRo = await Promise.all(
    //   cahulDistrictRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const cahulDistrictRo = await (async () => {
      let data = [];

      for (let [i, item] of cahulDistrictRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [cahulDistrictEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    // const falestiDistrictRo = await Promise.all(
    //   falestiDistrictRO.map((item, i) =>
    //     strapi.entityService.create("api::filter-item.filter-item", {
    //       data: item,
    //     })
    //   )
    // );

    const falestiDistrictRo = await (async () => {
      let data = [];

      for (let [i, item] of falestiDistrictRO.entries()) {
        await strapi.entityService
          .create("api::filter-item.filter-item", {
            data: {
              ...item,
              localizations: [falestiDistrictEn[i].id],
            },
            populate: ["localizations"],
          })
          .then((item) => data.push(item));
      }

      return data;
    })();

    //

    const roads = {
      tntEn,
      ringRoadEn,
      highwayEn,
      republicanEn,
      tntRo,
      ringRoadRo,
      highwayRo,
      republicanRo,
    };

    const bridges = {
      prutEn,
      prutRo,
      nistruEn,
      nistruRo,
    };

    const railways = {
      speedLineEn,
      speedLineRo,
      onGoingEn,
      onGoingRo,
      quickWinsEn,
      quickWinsRo,
      unfundedEn,
      unfundedRo,
      dryPortEn,
      dryPortRo,
      rollStockEn,
      rollStockRo,
    };

    const airports = {
      functionalAirportsEn,
      functionalAirportsRo,
      nonFunctionalAirportsEn,
      nonFunctionalAirportsRo,
    };

    const ports = {
      portEn,
      portRo,
      waterwaysEn,
      waterwaysRo,
    };

    const tansportation = {
      digitEn,
      digitRo,
      modernEn,
      modernRo,
    };

    const urbanDevelopment = {
      citiesEn,
      citiesRo,
    };

    const waterSanitation = {
      centralRegionEn,
      southernRegionEn,
      northernRegionEn,
      cahulDistrictEn,
      falestiDistrictEn,
      centralRegionRo,
      southernRegionRo,
      northernRegionRo,
      cahulDistrictRo,
      falestiDistrictRo,
    };

    return {
      roads,
      bridges,
      railways,
      airports,
      ports,
      urbanDevelopment,
      tansportation,
      waterSanitation,
    };
  }

  return null;
};
