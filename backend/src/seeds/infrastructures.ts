import { Strapi } from "@strapi/strapi";

const infrastructures_en = [
  {
    locale: "en",
    order: 1,
    name: "Roads",
    slug: "roads",
    description: `The network of national public roads has a length of **5996 km**.
<br><br>
**4105 km** of national roads does not correspond to quality, safety and comfort standards, being in mediocre, poor and very poor condition.
<br><br>
The Government's priority is to improve the quality of national public roads, **develop the TEN-T network**, which includes the construction of the **Iasi - Ungheni - Chisinau - Odessa highway**, the modernization and rehabilitation of express roads according to EU requirements and the construction of the **Chisinau Ring Road**.`,
  },
  {
    locale: "en",
    order: 2,
    name: "Bridges",
    slug: "bridges",
    description: `Bridges are a component part of the roads that ensure continuity in the presence of obstacles (deep valleys, watercourses, etc.).<br /><br />The Government's priority is the rehabilitation, consolidation and construction of the bridges over the Dniester and Prut which will ensure citizens' needs for mobility and will facilitate trade on the domestic and international markets.`,
  },
  {
    locale: "en",
    order: 3,
    name: "Railways",
    slug: "railways",
    description: `The railway system of Moldova consists of 1.151 km of non-electrified lines with 90 stations for freight and passenger services, managed by the state-owned company “Calea Ferata din Moldova”.
<br /><br />
1.013.1 of the main lines have 1520 mm gauge, and 32.3 km in stations have 1435 mm gauge (in the border crossing areas of Ungheni and Giurgiulesti).


### Rolling stock inventory:

- 145 diesel locomotives, most of them outdated
- 5582 freight wagons
- 233 passenger coaches.

The Moldovan railway network is part of the trans-European transport corridor IX and two OSJD corridors. In 2014 the Government of Moldova initiated the Railway Sector Reform and concluded financing agreements with EBRD, EIB and the EU. As part of the Association Agreement the Government committed to transpose the EU legislation and to establish new railway transport institutions, such as the Railway Agency, and implement a new railway code.`,
  },
  {
    locale: "en",
    order: 4,
    name: "Airports",
    slug: "airports",
    description: `### Chisinau International Airport:
(IATA: KIV; ICAO: LUKK)

- Total area: 364 ha;
- Elevation: 121,6 m above the sea.
- 1x passenger terminal.
- In 2019 before COVID, Chisinau Airport traffic was approximately 3.0 million passengers. The number of seats on offer grew at a compound annual growth rate of 13% between 2012 and 2019, one of the highest for Eastern European airports.
- 7th category security level
- 13 operating airlines
- 37 routes

### Marculesti Airport:
(ICAO: LUBM)

- Total area: 265,2 ha;
- Elevation: 101m above the sea;
- Runways length: 2,512m x 40m (concrete plates);
- Space to accommodate regular commercial operations;
- Under the status of a Free Economic Zone.`,
  },
  {
    locale: "en",
    order: 5,
    name: "Ports & Rivers",
    slug: "ports_rivers",
    description: `### Giurgiulesti Passenger and Cargo Port (state terminal)
- Located on the left bank of the Prut river at its confluence with the Danube river, approx. at 650m distance.
- Is part of the Giurgiulesti Port Complex.
- Moldova's only port accessible to seagoing vessels.
- Access to the Black Sea via the Sulina Canal (Romania) and the Bystroye Canal (Ukraine).
- 1x operating berth.
- accommodates barges (grain cargo, gravel, and other bulk cargo) and river sea vessels (fertilizers).
- accessible for trucks
- no direct railway connection
- 600k t/year max. cargo handling capacity.
- 5,400 m2 port area
- unstable draft in Prut river, ranging from 3 to 6 meters.
- vessels entered so far (2023) - 348
- cargo operations import/export (2023) - 360 746,343 t.
        
### Waterways
    
The Republic of Moldova has 2 navigable rivers, Dniester (approx. 660 km) and Prut (approx. 700 km).According to the European Agreement on the main inland waterways of international importance, the Dniester from the port of Belgorod-Dnestrovsk (Ukraine) to the port of Bender (228 km) and Prut from the estuary to the town of Ungheni (407.0 km) are considered as navigable inland waterways. In these sectors, dredging and development of the navigable channel are necessary.`,
  },
  {
    locale: "en",
    order: 6,
    name: "Urban Development",
    slug: "urban_development",
    description: `The most significant factor compromising the balanced territorial development of the Republic of Moldova is determined by a low level of urbanization 43 % and an extremely fragile urban architecture, characterized by three major challenges:
<br><br>
- The existence of a significant demographic and economic gap between the city of Chișinău and the city of Bălți, the first and second-largest urban centers in the country. This disparity greatly undermines the prospects for a polycentric development of the national territory.
- The absence of dynamic medium-sized towns that could function as centers of regional growth.
- The six municipalities with the potential to become regional centers (Ungheni, Orhei, Comrat, Cahul, Edineț, and Soroca) currently face developmental deficiencies and do not meet the minimum criteria for municipal status:
- 80% of the local roads in these municipalities are of unsatisfactory quality.
<br><br>
Furthermore, in the municipalities of Cahul and Ungheni, the percentage of asphalted roads is less than 35%, which falls far below the minimum requirement of 60%.
<br><br>
- Except Orhei, none of these six municipalities have a quality local urban public transportation service.
- Except  Orhei and Cahul, the current level of sewerage service coverage in the other municipalities does not meet the minimum requirements (70%). Furthermore, in the municipalities of Comrat and Edineț, this indicator is less than 50%.
- The coverage of public lighting falls below the level stipulated by legislation in 3 of the 6 cities.
- Four municipalities (Edineț, Soroca, Orhei, and Ungheni) lack authorized solid waste disposal sites and face serious environmental deficiencies.`,
  },
  {
    locale: "en",
    order: 7,
    name: "Transportation",
    slug: "transportation",
    description: `In **2022**, **246.4 million passengers** were transported by public transport, of which 40% by road transport between the main cities and municipalities.
<br>
Transportation is ensured by means of **1652 routes** that ensure the connection between the main localities.
<br>
The fleet of buses/coaches trained to serve regular passenger transport services - **6107 units**.
<br><br>
**46%** of the total fleet of buses/coaches is over **20 years old**.
<br><br>
Access to services is achieved through travel tickets, which **can mostly be purchased only at bus station offices or drivers;** a single system is missing to ensure the interconnection between regular services, which affects the mobility of citizens.`,
  },
  {
    locale: "en",
    order: 8,
    name: "Water & Sanitation",
    slug: "water_sanitation",
    description: `- Only 55 municipalities and cities have access to water, which represents 61.7% of the country's localities;
- About 60.3% of Moldovan villages have access to drinking water supply from public systems;
- 907 localities have public water supply systems in operation (Compared to 2018, the number of localities with access to public water supply systems in operation increased by 12.8%);
- 86.4% of the population has access to water supply sources from the total population;
- the total length of aqueducts and public water distribution networks was 19.0 thousand km and, compared to 2021, it expanded by 15.9% (245.8 km of newly built networks);
- 18.9 thousand km of aqueducts and public water distribution networks (99.5% of the total length) are actually operating;
- Only 53 municipalities and cities and 89 rural localities had access to public sewage systems, which represents 9.3% of the country's localities.`,
  },
];

const infrastructures_ro = [
  {
    locale: "ro",
    order: 11,
    name: "Drumuri",
    slug: "roads",
    description: `Drumuri publice naționale - **5996 km**.


**4105 km** nu corespund standardelor de calitate, siguranță și confort fiind în stare mediocră, rea și foarte rea.


Prioritatea Guvernului este îmbunătățirea calității drumurilor publice naționale, **dezvoltarea rețelei TEN-T** care include  construcția **Autostrăzii Iași - Ungheni - Chișinău - Odessa**, modernizarea și reabilitarea drumurilor expres conform cerințelor EU și construcția  **centurii orașului Chișinău**.`,
  },
  {
    locale: "ro",
    order: 12,
    name: "Poduri",
    slug: "bridges",
    description: `Podurile sunt parte componentă a drumurilor care asigură continuitatea în cazul existenței unor obstacole (văi adânci, cursuri de apă etc.).
<br /><br />
Prioritatea Guvernului este reconstrucția, consolidarea și construcția podurilor peste Nistru și Prut care vor asigura necesitățile cetățenilor pentru mobilitate și vor facilita comerțul pe piețele interne și internaționale.`,
  },
  {
    locale: "ro",
    order: 13,
    name: "Căi Ferate",
    slug: "railways",
    description: `Rețeaua de cale ferată a Republicii Moldova constituie 1.151 km de linii neelectrificate cu 90 de stații pentru servicii de marfă și călători, administrate de întreprinderea de stat „Calea Ferată din Moldova”.
<br />
1.013,1 din liniile principale au ecartament de 1520 mm, iar 32,3 km în stații au ecartament de 1435 mm (zonele de trecere a frontierei Ungheni și Giurgiulești).
<br />
### Inventarul de material rulant:
- 145 de locomotive diesel, majoritatea învechite
- 5582 vagoane de marfă
- 233 vagoane de pasageri.
<br />
Rețeaua feroviară moldovenească face parte din coridorul de transport trans-European IX și din două coridoare OSJD. În 2014, Guvernul Moldovei a inițiat Reforma Sectorului Feroviar și a încheiat acorduri de finanțare cu BERD, BEI și UE. Ca parte a Acordului de Asociere, Guvernul s-a angajat să transpună legislația UE și să înființeze noi instituții feroviare, cum ar fi Agenția Feroviara, și să implementeze un nou cod al transportului feroviar.`,
  },
  {
    locale: "ro",
    order: 14,
    name: "Aeroporturi",
    slug: "airports",
    description: `### Aeroportul Internațional Chișinău  
(IATA: KIV; ICAO: LUKK)
- Suprafața totală: 364 ha;
- Altitudine: 121,6 m deasupra mării;
- 1x terminal de pasageri;
- În 2019 înainte de COVID, traficul pe Aeroportul Chișinău a fost de aproximativ 3,0 milioane pasageri. Numărul de locuri oferite a crescut cu o rată de creștere anuală compusă de 13% între 2012 și 2019, una dintre cele mai mari pentru aeroporturile din Europa de Est;
- Nivelul de securitate: categoria 7;
- 13 companii aeriene prezente;
- 37 de trasee.
<br>
### Aeroportul Mărculești:  
(ICAO: LUBM)
- Suprafața totală: 265,2 ha;
- Altitudine: 101m deasupra mării;
- Lungime piste: 2.512m x 40m (plăci de beton);
- Spațiu pentru operațiuni comerciale regulate;
- Statutul de Zonă Economică Liberă.`,
  },
  {
    locale: "ro",
    order: 15,
    name: "Porturi și Căi Fluviale",
    slug: "ports_rivers",
    description: `### Portul de pasageri și mărfuri Giurgiulesti
- Situat pe malul stâng al râului Prut la confluența acestuia cu râul Dunărea la o distanță de aprox. 650m
- Este parte a Complexului Portuar Giurgiulești.
- Singurul port din Moldova accesibil pentru navele maritime.
- Acces la Marea Neagră prin intermediul Canalului Sulina (România) și Canalului Bystroye (Ucraina).
- 1x dană de operare.
- recepționează barje (mărfuri cu cereale, pietriș și alte mărfuri în vrac) și vase fluviale maritime (îngrășăminte).
- accesibil pe cale rutieră pentru camioane
- nu dispune de conexiune feroviară directă
- 600k t/an  capacitatea maximă de operare a mărfurilor.
- 5.400 m2 suprafața portuară
- pescaj instabil în râul Prut, variind de la 3 la 6 metri.
- intrări nave în prezent (2023) - 348
- operatiuni marfare import/export (2023) - 360 746,343 t.


### Căi Fluviale

Republica Moldova are 2 rîuri navigabile, Nistru (curgând pe teritoriul ţării aproximativ 660 km) și Prut (pe teritoriul ţării, aproximativ 700 km);
Din care conform Acordului European cu privire la principalele căi navigabile interne de importanță internațională Nistru de la portul Belgorod-Dnestrovsk (Ucraina) pînă la portul Bender (228 km) . Prut, de la estuar pînă la or. Ungheni (407,0 km). Pe aceste sectoare sunt necesare lucrări de dragare și amenajare a șenalului navigabil.`,
  },
  {
    locale: "ro",
    order: 16,
    name: "Dezvoltare Urbană",
    slug: "urban_development",
    description: `Factorul cel mai important care compromite dezvoltarea teritorială echilibrată a Republicii Moldova este determinat de gradul scăzut de urbanizare - 43% și o arhitectură urbană extrem de fragilă, caracterizată de 3 provocări majore:
<br />
- Existența unui decalaj demografic și economic foarte mare mun. Chișinău și mun. Bălți, primul și al doilea, după mărime centre urbane din țară, ceea ce subminează foarte mult perspectivele de dezvoltare policentrică a teritoriului național.
- Lipsa unor orașe terțe dinamice de mărime medie, care ar funcționa ca poli de creștere regională.
- Cele 6 municipii cu potențial de a deveni poli regionali (Ungheni, Orhei, Comrat, Cahul, Edineț și Soroca) se confruntă în prezent cu deficiențe de dezvoltare:
- 80% din drumurile locale din aceste municipii sunt de calitate nesatisfăcătoare.
<br />
În municipiile Cahul și Ungheni ponderea drumurilor asfaltate este mai mică de 35%, nivelul minim pentru un municipiu e de 60%.
<br />
- Nici unul din aceste 6 municipii (cu excepția Orhei) nu  dispune de un serviciu local de transport public urban de calitate.
- Cu excepția mun. Orhei și Cahul, în restul municipiilor gradul actual de acoperire cu servicii de canalizare nu corespunde cerințelor minime (70%). Mai mult  decât atât, în mun. Comrat și Edineț este  mai mic de 50%.
- Gradul de acoperire  cu iluminat public este sub nivelul stabilit de legislație în 3 din cele 6 orașe.
- Patru municipii (Edineț, Soroca, Orhei și Ungheni) nu dispun de poligoane autorizate de depozitare a deșeurilor solide, confruntându-se cu carențe serioase de mediu.`,
  },
  {
    locale: "ro",
    order: 17,
    name: "Transport",
    slug: "transportation",
    description: `În anul **2022** cu transportul public au fost transportați **246,4 milioane pasageri**, dintre care 40 % prin intermediul transportului rutier între principale orașe și municipii.  
<br>
Transportarea este asigurată prin intermediul a **1652 rute** care asigură legătura între principalele localități.
<br>
Parcului de autobuze/autocare antrenat la deservirea serviciilor regulate de transport pasageri - **6107 unități**.
<br><br>
**46%** din totalul parcului de autobuze/autocare dintre care cu **vîrstă de peste 20 ani**.
<br><br>
Accesul la servicii este realizat prin intermediul biletelor de călătorie, care în mare parte pot fi **procurate doar la casele autogărilor sau conducătorii auto;** lipsește un sistem unic pentru a asigura interconectarea între serviciile regulate, ce afectează mobilitatea cetățenilor.`,
  },
  {
    locale: "ro",
    order: 18,
    name: "Apă și Salubrizare",
    slug: "water_sanitation",
    description: `- Doar 55 municipii și orașe, au acces la surse de apă, ceea ce reprezintă 61,7% din localităţile ţării;
- circa 60,3% din satele Moldovei au acces la alimentare cu apă potabilă din sistemele publice;
- 907 de localități dispun de sisteme publice de alimentare cu apă date în exploatare (Comparativ cu anul 2018, numărul localităților cu acces la sistemele publice de alimentare cu apă date în exploatare s-a majorat cu 12,8%);
- 86,4% populație are acces la surse de alimentare cu apă din totalul populației;
- lungimea totală a apeductelor şi rețelelor publice de distribuţie a apei a constituit 19,0 mii km și, comparativ cu anul 2021, s-a extins cu 15,9% (245,8 km de rețele noi construite);
- funcționează efectiv 18,9 mii km de apeducte și reţele publice de distribuție a apei (99,5% din lungimea totală);
- Doar 53 municipii și orașe și 89 localități rurale au acces la sistemele publice de canalizare, ceea ce reprezintă 9,3% din localităţile ţării.`,
  },
];

const MAX_RETRIES = 3; // You can increase or decrease based on requirements

// Helper function for retry mechanism
const retry = async (fn, retries = MAX_RETRIES) => {
  let lastError;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      console.error(`Attempt ${i+1} failed: ${err.message}`);
      lastError = err;
      if (err.code !== 'ER_LOCK_DEADLOCK') throw err; // Re-throw if it's not a deadlock error
    }
  }
  throw lastError; // If all retries fail, throw the last error
}

export const setInfrastructures = async (strapi: Strapi) => {
  const infrastructureCount = await retry(() => 
    strapi.entityService.count('api::infrastructure.infrastructure')
  );

  if (!infrastructureCount) {
    const engInfrastructures = await retry(() => 
      Promise.all(
        infrastructures_en.map((item) =>
          strapi.entityService.create("api::infrastructure.infrastructure", {
            data: item,
          })
        )
      )
    );

    const roInfrastructures = await retry(() => 
      Promise.all(
        infrastructures_ro.map((item, i) =>
          strapi.entityService.create("api::infrastructure.infrastructure", {
            data: { ...item, localizations: [engInfrastructures[i].id] },
            populate: ["localizations"],
          })
        )
      )
    );

    return { engInfrastructures, roInfrastructures };
  }

  return null;
};