import barberaPassita from '../assets/loghi/VITIDAUTUNNO-PIEMONTE-BARBERA.jpg';
import barbaresco from '../assets/loghi/BARBARESCO-LANCAIA.jpg';
import amarone from '../assets/loghi/amarone-scriani.webp';
import cigliegioloDoc from '../assets/loghi/cigliegioloDoc.webp';
import cigliegioloRiserva from '../assets/loghi/CigliegioloRiserva.webp';
import rosatoToscano from '../assets/loghi/rosatoToscano.jpeg';
import chiantiFiasco from '../assets/loghi/chiantiFiasco.jpeg';
import ruchèGatto from '../assets/loghi/ruchèGatto.jpeg';
import grignolinoGatto from '../assets/loghi/grignolinoGatto.jpeg';
import valpolicellaClassico from '../assets/loghi/valpolicellaClassico.webp';
import barberaAlbaLodali from '../assets/loghi/barberaAlbaLodali.jpeg';
import rossese from '../assets/loghi/rossese.jpeg'
import lagrenLavis from '../assets/loghi/lagrenLavis.webp'; 
import teroldegoLavis from '../assets/loghi/teroldegoLavis.jpeg'; 
/* test deploy */

export const listaVini = [
  {
    id: 1,
    title: 'Barbera Passita',
    subtitle: 'Barbera Passita',
    produttore: 'Teo Costa',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    imageUrl: barberaPassita,
    imageDetail: barberaPassita,
    tipologia: 'rosso',
    classificazione: 'Passito Barbera DOC',
    regione: 'Piemonte',
    vitigno: '100% Barbera',
    alcol: '14,5° in volume',
    formato: '0,75 LT Standard',
    produttore: 'Teo Costa',
    annata: '2019',
    consumo: '2023-2026',
    temperatura: '20,5°',
    abbinamenti: 'Formaggi stagionati, Secondi di carne rossa'
  },

  {
    id: 2,
    title: 'Barbaresco',
    subtitle: 'Barbaresco',
    produttore: 'Teo Costa',
    description: 'Il Barbaresco è sicuramente il vino più strutturato, ma al tempo stesso più elegante, che si produca oggi con l’uva Nebbiolo in Langa. La zona, a denominazione di origine controllata e garantita, è estremamente vocata e molto limitata. I comuni di produzione infatti sono essenzialmente: Barbaresco, Neive, Treiso. Ed è proprio a Treiso che la Teo Costa ha individuato una collina di particolare pregio, esposta a Sud-Ovest, che dopo cinque anni di sperimentazione è stata assunta come emblema per la produzione del Lancaia.',
    imageUrl: barbaresco,
    imageDetail: barbaresco,
    tipologia: 'rosso',
    classificazione: 'Barbaresco DOC',
    regione: 'Piemonte',
    vitigno: 'Nebbiolo Lampia 100%',
    alcol: '14% - acidità: 5,4 gr/l',
    formato: '0,75 LT Standard',
    produttore: 'Teo Costa'
  },

  {
    id: 3,
    title: 'Amarone della Valpolicella',
    subtitle: 'Scriani Amarone della Valpolicella Classico 2019',
    produttore: 'Scriani',
    description: 'Situata a Fumane, nella zona del Valpolicella Classico, la cantina Scriani è un azienda pluripremiata, di proprietà della famiglia Cottini, che produce vini locali di eccellente qualità.La tenuta si estende su circa 28 ettari di vigneti. Amarone della cantina Scriani è un blend di uve autoctone Corvina, Corvinone e Rondinella, selezionate manualmente nei vigneti Mandolari, Tondin, Bosco e La Costa. Dopo la vendemmia, le uve vengono lasciate maturare naturalmente nella sala frutta per un massimo di 110 giorni. La fermentazione avviene con lieviti indigeni e il vino finito viene affinato per un totale di oltre 30 mesi, prima in barrique, poi in botti grandi e infine in bottiglia.Il vino ha un colore rosso intenso con sfumature rubino. Il profilo aromatico è rotondo e ampio, con note di frutta rossa matura, ciliegia e cassis, vaniglia e spezie dolci e altri sentori di liquirizia. Al palato, è morbido e profondo, con un eccellente concentrazione di frutta.I tannini sono solidi ma ben integrati e il finale è lungo e persistente.Nonostante l elevata gradazione alcolica, il vino è elegante ed equilibrato. È il vino ideale per la carne di selvaggina e i formaggi stagionati, ma può anche abbinarsi bene al cioccolato.',
    imageUrl: amarone,
    imageDetail: amarone,
    tipologia: 'rosso',
    classificazione: '',
    regione: 'Veneto',
    vitigno: 'Corvina 60%, Corvinone 25%, Rondinella 15%',
    alcol: '16%',
    formato: '0,75 LT Standard',
    produttore: 'Scriani',
    annata: '2019',
    consumo: '2023-2026',
    temperatura: '20,5°',
    abbinamenti: 'Formaggi stagionati, Secondi di carne rossa'
  },

  {
    id: 4,
    title: 'Valpolicella Classico',
    subtitle: 'Valpolicella Classico Superiore DOC 2020 – Scriani',
    produttore: 'S',
    description: 'Corvina, Corvinone e Rondinella, selezionate manualmente nei vigneti Mandolari, Tondin, Bosco e La Costa. Dopo la vendemmia, le uve vengono lasciate maturare naturalmente nella sala frutta per un massimo di 110 giorni. La fermentazione avviene con lieviti indigeni e il vino finito viene affinato per un totale di oltre 30 mesi, prima in barrique, poi in botti grandi e infine in bottiglia.Il vino ha un colore rosso intenso con sfumature rubino. Il profilo aromatico è rotondo e ampio, con note di frutta rossa matura, ciliegia e cassis, vaniglia e spezie dolci e altri sentori di liquirizia. Al palato, è morbido e profondo, con un eccellente concentrazione di frutta.I tannini sono solidi ma ben integrati e il finale è lungo e persistente.Nonostante l elevata gradazione alcolica, il vino è elegante ed equilibrato. È il vino ideale per la carne di selvaggina e i formaggi stagionati, ma può anche abbinarsi bene al cioccolato.',
    imageUrl: valpolicellaClassico,
    imageDetail: valpolicellaClassico,
    tipologia: 'rosso',
    classificazione: '',
    regione: 'Veneto',
    vitigno: '60% Corvina, 20% Corvinon, 10% Rondinella, 7% Molinara, 3% Oseleta',
    alcol: '12,5%',
    formato: '0,75 LT Standard',
    produttore: 'Scriani',
    annata: '2022',
    consumo: 'entro 3 anni',
    temperatura: '20,5°',
    abbinamenti: '	Primi piatti di pasta, riso e risotti, minestre e zuppe di verdure, trippe in brodo e alla parmigiana, secondi piatti a base di carni bianche, salumi.'
  },

  {
    id: 5,
    title: 'Cigliegiolo Doc',
    subtitle: 'Cantina Vignaioli Morellino Scansano',
    produttore: 'M',
    description: 'Rosso rubino luminoso. Al naso offre piacevoli sentori fruttati con riconoscimenti di ciliegie e frutti di bosco uniti a richiami floreali. All assaggio è fruttato, dotato di ottima struttura, secco, godibile e ben bilanciato grazie ai tannini eleganti e alla nota fresca. Finale di ottima persistenza dai ricordi fruttati.',
    imageUrl: cigliegioloDoc,
    imageDetail: cigliegioloDoc,
    tipologia: 'rosso',
    classificazione: '',
    regione: 'Toscana',
    vitigno: '85% Ciliegiolo, 15% Alicante',
    alcol: '14,5% vol',
    formato: '0,75 LT Standard',
    produttore: 'Morellino Scansano',
    annata: '2019',
    consumo: 'Preferibilmente dopo 5-10 anni dalla vendemmia',
    temperatura: '18°',
    abbinamenti: 'Con arrosti e brasati, piatti di carne succulenti, formaggi stagionati'
  },

  {
    id: 6,
    title: 'Cigliegiolo Riserva',
    subtitle: 'Cantina Vignaioli Morellino Scansano',
    produttore: 'M',
    description: 'Rosso rubino concentrato, al naso offre grande piacevolezza con le dolci note speziate e fruttate di marasca, frutti di bosco, cannella e vaniglia. Palato pieno, secco, dotato di tanninipotenti ma eleganti, bilanciati dal calore alcolico e dalla morbidezza. Assaggio equilibrato e dilunga persistenza dai ritorni fruttati e speziati.',
    imageUrl: cigliegioloRiserva,
    imageDetail: cigliegioloRiserva,
    tipologia: 'rosso',
    classificazione: '',
    regione: 'Toscana',
    vitigno: 'Sangiovese 100%',
    alcol: '13% vol',
    formato: '0,75 LT Standard',
    produttore: 'Morellino Scansano',
    annata: '2021',
    consumo: '2023-2026',
    temperatura: '16°',
    abbinamenti: 'Aperitivo, Menu di carne'
  },

  {
    id: 7,
    title: 'Rosato Toscano IGT',
    subtitle: 'Cantina Vignaioli Morellino Scansano',
    produttore: 'M',
    description: 'Rosato rosa, intrigante, luminoso e pieno. Al naso si distingue per le note di caramella ai frutti di bosco, fragoline e lamponi su un fondo elegantemente floreale di rosa rossa e rosa canina. All’assaggio conquista con il suo carattere fruttato, vivacizzato da sapidità e freschezza che invitano al riassaggio e ne rendono particolarmente piacevole la beva. Lungo finale giocato sulle note fruttate e minerali.',
    imageUrl: rosatoToscano,
    imageDetail: rosatoToscano,
    tipologia: 'rosato',
    classificazione: '',
    regione: 'Toscana',
    vitigno: 'Sangiovese 50%, Ciliegiolo 50%',
    alcol: '???',
    formato: '0,75 LT Standard',
    produttore: 'Morellino Scansano',
    annata: '2021',
    consumo: '',
    temperatura: '14°',
    abbinamenti: 'Perfetto con antipasti a base di salumi, primi piatti con sughi di carne, secondi piatti a base di carni bianche o zuppe di pesce.'
  },

  {
    id: 8,
    title: 'Chianti Superiore DOCG',
    subtitle: 'Ruffino',
    produttore: 'R',
    description: 'È caratterizzato da un colore rosso rubino, con riflessi violacei. Al naso si apre con un bouquet intenso di note fruttate di prugne, susine e ciliegie, arricchite da piacevoli sentori speziati di pepe nero. Al palato risulta piacevolmente intenso, con un corpo elegante e fruttato. Il vino presenta un persistente retrogusto di ciliegie e prugne fresche.',
    imageUrl: chiantiFiasco,
    imageDetail: chiantiFiasco,
    tipologia: 'rosso',
    classificazione: 'Chianti DOCG',
    regione: 'Toscana',
    vitigno: 'Sangiovese 70%, Altri vitigni 30%',
    alcol: '13% vol',
    formato: '0,75 LT Standard',
    produttore: 'Ruffino',
    annata: '2021',
    consumo: '',
    temperatura: '18-20°',
    abbinamenti: 'Perfetto per accompagnare carni rosse e selvaggina, è ideale in abbinamento a formaggi stagionati.'
  },

  {
    id: 9,
    title: 'Ruchè di Castagnole Monferrato DOCG',
    subtitle: 'Pierfrancesco Gatto',
    produttore: 'G',
    description: 'È caratterizzato da un colore rosso rubino, con riflessi violacei. Al naso si apre con un bouquet intenso di note fruttate di prugne, susine e ciliegie, arricchite da piacevoli sentori speziati di pepe nero. Al palato risulta piacevolmente intenso, con un corpo elegante e fruttato. Il vino presenta un persistente retrogusto di ciliegie e prugne fresche.',
    imageUrl: ruchèGatto,
    imageDetail: ruchèGatto,
    tipologia: 'rosso',
    classificazione: 'Ruchè DOCG',
    regione: 'Piemonte',
    vitigno: 'Ruchè 100%',
    alcol: '15% vol',
    formato: '0,75 LT Standard',
    produttore: 'Pierfrancesco Gatto',
    annata: '2022',
    consumo: '2020-2029',
    temperatura: '18-20°',
    abbinamenti: 'Perfetto per accompagnare carni rosse e selvaggina, è ideale in abbinamento a formaggi stagionati.'
  },

  {
    id: 10,
    title: 'Grignolino Asti DOCG',
    subtitle: 'Pierfrancesco Gatto',
    produttore: 'G',
    description: 'Rosso rubino scarico alla vista, al naso si percepiscono sentori di frutta a polpa rossa e rose, con rintocchi speziati sullo sfondo. In bocca offre un sorso di medio corpo, caratterizzato da tannini delicati e ben amalgamati nella fresca struttura.',
    imageUrl: grignolinoGatto,
    imageDetail: grignolinoGatto,
    tipologia: 'rosso',
    classificazione: 'Grignolino DOCG',
    regione: 'Piemonte',
    vitigno: 'Ruchè 100%',
    alcol: '13% vol',
    formato: '0,75 LT Standard',
    produttore: 'Pierfrancesco Gatto',
    annata: '2022',
    consumo: '2020-2029',
    temperatura: '18-20°',
    abbinamenti: 'Perfetto per accompagnare carni rosse e selvaggina, è ideale in abbinamento a formaggi stagionati.'
  },

  {
    id: 11,
    title: 'Barbera Alba DOC',
    subtitle: 'Lodali',
    produttore: 'G',
    description: 'colore rosso rubino pieno e luminoso. Profumo: intenso e persistente con note di prugna, violetta e spezie dolci. Gusto: di grande pienezza e rotondità, lungo e sapido.',
    imageUrl: barberaAlbaLodali,
    imageDetail: barberaAlbaLodali,
    tipologia: 'rosso',
    classificazione: 'Barbera Alba DOC',
    regione: 'Piemonte',
    vitigno: '100% Barbera d’Alba',
    alcol: '14% vol',
    formato: '0,75 LT Standard',
    produttore: 'Lodali',
    annata: '2022',
    consumo: '2023-2026',
    temperatura: '18-20°',
    abbinamenti: 'Perfetto per accompagnare carni rosse e selvaggina, è ideale in abbinamento a formaggi stagionati.'
  },

  {
    id: 12,
    title: 'Nebbiolo Alba DOC',
    subtitle: 'Lodali',
    produttore: 'G',
    description: 'Di colore rosso rubino con riflessi granati, il vino svela al naso profumi di viola, prugna e spezie. Il sorso è secco e rotondo, abbastanza strutturato, di lunga persistenza.',
    imageUrl: barberaAlbaLodali,
    imageDetail: barberaAlbaLodali,
    tipologia: 'rosso',
    classificazione: 'Nebbiolo Alba DOC',
    regione: 'Piemonte',
    vitigno: '100% Nebbiolo',
    alcol: '14% vol',
    formato: '0,75 LT Standard',
    produttore: 'Lodali',
    annata: '2022',
    consumo: '2023-2026',
    temperatura: '16-18°',
    abbinamenti: 'Si abbina idealmente a piatti di pasta al ragù sia di manzo che di salsiccia, agli arrosti e ai formaggi stagionati'
  },

  {
    id: 13,
    title: 'Rossese Riviera Ligure di Ponente DOC',
    subtitle: 'Viticoltori Ingauni',
    produttore: 'I',
    description: 'Colore rosso rubino chiaro, profumo delicato caratteristico. Sapore asciutto, aromatico, morbido.',
    imageUrl: rossese,
    imageDetail: rossese,
    tipologia: 'rosso',
    classificazione: 'Nebbiolo Alba DOC',
    regione: 'Liguria',
    vitigno: '??',
    alcol: '11% vol',
    formato: '0,75 LT Standard',
    produttore: 'Viticoltori Ingauni',
    annata: '2022',
    consumo: '2023-2026',
    temperatura: '16°',
    abbinamenti: '???'
  },

  {
    id: 14,
    title: 'Lagrein DOC',
    subtitle: 'Lavis',
    produttore: 'L',
    description: 'Il Lagrein di La Vis è un rosso prodotto con un vitigno tipico dell’Alto Adige, che si è ben ambientato anche nelle zone più fresche e vocate del Trentino. La versione della cantina La Vis, che prevede un affinamento con un minimo utilizzo del legno, ci fa conoscere soprattutto le caratteristiche varietali di questa uva dalla forte personalità. Il bouquet ricorda i piccoli frutti a bacca scura e la ciliegia, con sentori speziati e di erbe selvatiche. Il sorso è robusto, leggermente tannico, con frutto fragrante e finale di buona persistenza.',
    imageUrl: lagrenLavis,
    imageDetail: lagrenLavis,
    tipologia: 'rosso',
    classificazione: 'Lagrein La Vis 2022',
    regione: 'Trentino Alto Adige',
    vitigno: 'Lagrein 100%',
    alcol: '13% vol',
    formato: '0,75 LT Standard',
    produttore: 'Lavis',
    annata: '2022',
    consumo: '2022-2026',
    temperatura: '16-18°',
    abbinamenti: 'Affettati e Salumi, Pasta e risotti con carne o funghi, Carne arrosto e grigliata'
  },

  {
    id: 15,
    title: 'Teroldego Dolomiti IGT',
    subtitle: 'Lavis',
    produttore: 'L',
    description: 'Il Teroldego Dolomiti IGT è un rosso di colore rubino con sfumature violacee, al naso il profilo aromatico ricorda la frutta matura, dalla mora, ai mirtilli, alla prugna. Il sorso è secco e morbido, dalla buona persistenza.',
    imageUrl: teroldegoLavis,
    imageDetail: teroldegoLavis,
    tipologia: 'rosso',
    classificazione: 'Vigneti delle Dolomiti',
    regione: 'Trentino Alto Adige',
    vitigno: 'Lagrein 100%',
    alcol: '13% vol',
    formato: '0,75 LT Standard',
    produttore: 'Lavis',
    annata: '2022',
    consumo: '2022-2026',
    temperatura: '16-18°',
    abbinamenti: 'Carni rosse alla brace, Carni bianche alla brace'
  },
 
 /*  {
    id: 16,
    title: 'New Wine Title',
    subtitle: 'New Wine Subtitle',
    produttore: 'New Winery',
    description: 'Description of the new wine goes here.',
    imageUrl: newWineImage,
    imageDetail: newWineImage,
    tipologia: 'rosso',
    classificazione: 'New Wine Classification',
    regione: 'New Wine Region',
    vitigno: 'Grape variety of the new wine',
    alcol: 'Alcohol content of the new wine',
    formato: 'Bottle size of the new wine',
    produttore: 'New Winery',
    annata: 'Vintage year of the new wine',
    consumo: 'Recommended consumption period',
    temperatura: 'Serving temperature',
    abbinamenti: 'Food pairings for the new wine'
  }, */

 /*  {
    id: 17,
    title: 'Langhe DOC Dolcetto Trifulot',
    subtitle: 'Langhe DOC Dolcetto Trifulot',
    produttore: 'Teo Costa',
    description: 'Descrizione del Langhe DOC Dolcetto Trifulot di Teo Costa qui.',
    imageUrl: barberaPassita,
    imageDetail: barberaPassita,
    tipologia: 'rosso',
    classificazione: 'Langhe DOC Dolcetto',
    regione: 'Piemonte',
    vitigno: '100% Dolcetto',
    alcol: 'Grado alcolico del Langhe DOC Dolcetto Trifulot',
    formato: 'Formato della bottiglia del Langhe DOC Dolcetto Trifulot',
    produttore: 'Teo Costa',
    annata: 'Anno di vendemmia del Langhe DOC Dolcetto Trifulot',
    consumo: 'Periodo di consumo consigliato per il Langhe DOC Dolcetto Trifulot',
    temperatura: 'Temperatura di servizio per il Langhe DOC Dolcetto Trifulot',
    abbinamenti: 'Piatti di carne leggeri, formaggi e antipasti'
  },

  {
    id: 17,
    title: 'Langhe DOC Dolcetto Trifulot',
    subtitle: 'Langhe DOC Dolcetto Trifulot',
    produttore: 'Teo Costa',
    description: 'Il Langhe DOC Dolcetto Trifulot è un vino rosso secco e fruttato, caratterizzato da sentori di frutti di bosco, ciliegie e note speziate. Ha un colore rosso rubino intenso e un sapore fresco e vivace.',
    imageUrl: barberaPassita,
    imageDetail: barberaPassita,
    tipologia: 'rosso',
    classificazione: 'Langhe DOC Dolcetto',
    regione: 'Piemonte',
    vitigno: 'Dolcetto',
    alcol: '12-13% vol',
    formato: 'Bottiglia standard',
    produttore: 'Teo Costa',
    annata: '',
    consumo: '',
    temperatura: '16-18°C',
    abbinamenti: 'Ideale con piatti di carne, formaggi stagionati e salumi tipici piemontesi.'
  }, */

  
 
   
 ];

export default listaVini;