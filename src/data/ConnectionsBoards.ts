export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type WordSet = {
  words: string[];
  connection: string;
};

export type GameBoard = {
  sets: WordSet[];
  difficulty: Difficulty;
};

export const gameBoards: GameBoard[] = [
  // Easy Boards
  {
    sets: [
      { words: ['Mela', 'Pera', 'Banana', 'Arancia'], connection: 'Frutta' },
      { words: ['Cane', 'Gatto', 'Topo', 'Cavallo'], connection: 'Animali' },
      { words: ['Rosso', 'Blu', 'Verde', 'Giallo'], connection: 'Colori' },
      { words: ['Pizza', 'Pasta', 'Risotto', 'Lasagna'], connection: 'Piatti italiani' }
    ],
    difficulty: 'Easy'
  },
  {
    sets: [
      { words: ['Roma', 'Parigi', 'Londra', 'Berlino'], connection: 'Capitali europee' },
      { words: ['Violino', 'Pianoforte', 'Flauto', 'Chitarra'], connection: 'Strumenti musicali' },
      { words: ['Calcio', 'Tennis', 'Nuoto', 'Pallacanestro'], connection: 'Sport' },
      { words: ['Primavera', 'Estate', 'Autunno', 'Inverno'], connection: 'Stagioni' }
    ],
    difficulty: 'Easy'
  },
  {
    sets: [
      { words: ['Sole', 'Luna', 'Stella', 'Pianeta'], connection: 'Corpi celesti' },
      { words: ['Tavolo', 'Sedia', 'Letto', 'Armadio'], connection: 'Mobili' },
      { words: ['Matita', 'Penna', 'Gomma', 'Righello'], connection: 'Materiale scolastico' },
      { words: ['Bicicletta', 'Automobile', 'Treno', 'Aereo'], connection: 'Mezzi di trasporto' }
    ],
    difficulty: 'Easy'
  },
  {
    sets: [
      { words: ['Occhi', 'Naso', 'Bocca', 'Orecchie'], connection: 'Parti del viso' },
      { words: ['Scarpe', 'Calzini', 'Pantaloni', 'Maglietta'], connection: 'Abbigliamento' },
      { words: ['Forchetta', 'Coltello', 'Cucchiaio', 'Piatto'], connection: 'Posate e stoviglie' },
      { words: ['Medico', 'Insegnante', 'Poliziotto', 'Cuoco'], connection: 'Professioni' }
    ],
    difficulty: 'Easy'
  },
  {
    sets: [
      { words: ['Libro', 'Quaderno', 'Rivista', 'Giornale'], connection: 'Materiale di lettura' },
      { words: ['Fragola', 'Lampone', 'Mirtillo', 'Mora'], connection: 'Frutti di bosco' },
      { words: ['Cane', 'Gatto', 'Pesce', 'Uccello'], connection: 'Animali domestici' },
      { words: ['Dente', 'Lingua', 'Gengiva', 'Labbra'], connection: 'Parti della bocca' }
    ],
    difficulty: 'Easy'
  },

  // Medium Boards
  {
    sets: [
      { words: ['Dante', 'Petrarca', 'Boccaccio', 'Ariosto'], connection: 'Poeti italiani' },
      { words: ['Leonardo', 'Michelangelo', 'Raffaello', 'Donatello'], connection: 'Artisti del Rinascimento' },
      { words: ['Vesuvio', 'Etna', 'Stromboli', 'Vulcano'], connection: 'Vulcani italiani' },
      { words: ['Venezia', 'Firenze', 'Napoli', 'Milano'], connection: 'Città italiane' }
    ],
    difficulty: 'Medium'
  },
  {
    sets: [
      { words: ['Cappuccino', 'Espresso', 'Macchiato', 'Latte'], connection: 'Tipi di caffè' },
      { words: ['Colosseo', 'Torre di Pisa', 'Duomo di Milano', 'Ponte di Rialto'], connection: 'Monumenti italiani' },
      { words: ['Ferrari', 'Lamborghini', 'Maserati', 'Alfa Romeo'], connection: 'Marche di auto italiane' },
      { words: ['Parmigiano', 'Mozzarella', 'Gorgonzola', 'Pecorino'], connection: 'Formaggi italiani' }
    ],
    difficulty: 'Medium'
  },
  {
    sets: [
      { words: ['Galileo', 'Fermi', 'Volta', 'Marconi'], connection: 'Scienziati italiani' },
      { words: ['Aida', 'Rigoletto', 'La Traviata', 'Nabucco'], connection: 'Opere di Verdi' },
      { words: ['Toscana', 'Lombardia', 'Sicilia', 'Piemonte'], connection: 'Regioni italiane' },
      { words: ['Euro', 'Lira', 'Marco', 'Franco'], connection: 'Valute europee' }
    ],
    difficulty: 'Medium'
  },
  {
    sets: [
      { words: ['Botticelli', 'Caravaggio', 'Tiziano', 'Giotto'], connection: 'Pittori italiani' },
      { words: ['Carbonara', 'Amatriciana', 'Cacio e Pepe', 'Gricia'], connection: 'Paste romane' },
      { words: ['Chianti', 'Barolo', 'Brunello', 'Amarone'], connection: 'Vini rossi italiani' },
      { words: ['Fiat', 'Lancia', 'Autobianchi', 'Innocenti'], connection: 'Marche auto italiane storiche' }
    ],
    difficulty: 'Medium'
  },
  {
    sets: [
      { words: ['Mascagni', 'Leoncavallo', 'Puccini', 'Giordano'], connection: 'Compositori veristi' },
      { words: ['Panettone', 'Pandoro', 'Colomba', 'Torrone'], connection: 'Dolci natalizi italiani' },
      { words: ['Bormio', 'Cortina', 'Courmayeur', 'Sestriere'], connection: 'Località sciistiche italiane' },
      { words: ['Spritz', 'Negroni', 'Bellini', 'Americano'], connection: 'Cocktail italiani' }
    ],
    difficulty: 'Medium'
  },

  // Hard Boards
  {
    sets: [
      { words: ['Verdi', 'Puccini', 'Rossini', 'Bellini'], connection: 'Compositori d\'opera' },
      { words: ['Margherita', 'Marinara', 'Quattro Formaggi', 'Capricciosa'], connection: 'Tipi di pizza' },
      { words: ['Chianti', 'Barolo', 'Prosecco', 'Amarone'], connection: 'Vini italiani' },
      { words: ['Pinocchio', 'Geppetto', 'Fata Turchina', 'Lucignolo'], connection: 'Personaggi di Pinocchio' }
    ],
    difficulty: 'Hard'
  },
  {
    sets: [
      { words: ['Commedia', 'Tragedia', 'Farsa', 'Melodramma'], connection: 'Generi teatrali' },
      { words: ['Sicilia', 'Sardegna', 'Elba', 'Capri'], connection: 'Isole italiane' },
      { words: ['Stradivari', 'Guarneri', 'Amati', 'Bergonzi'], connection: 'Liutai di Cremona' },
      { words: ['Bocconi', 'Sapienza', 'Normale', 'Politecnico'], connection: 'Università italiane' }
    ],
    difficulty: 'Hard'
  },
  {
    sets: [
      { words: ['Carducci', 'Pascoli', 'Quasimodo', 'Montale'], connection: 'Poeti italiani Nobel' },
      { words: ['Burrata', 'Stracciatella', 'Giuncata', 'Squacquerone'], connection: 'Formaggi freschi pugliesi' },
      { words: ['Bialetti', 'Alessi', 'Lagostina', 'Brandani'], connection: 'Marche di utensili da cucina' },
      { words: ['Borsalino', 'Panizza', 'Barbisio', 'Grevi'], connection: 'Marche di cappelli italiani' }
    ],
    difficulty: 'Hard'
  },
  {
    sets: [
      { words: ['Goldoni', 'Pirandello', 'Fo', 'De Filippo'], connection: 'Drammaturghi italiani' },
      { words: ['Brunelleschi', 'Palladio', 'Bernini', 'Borromini'], connection: 'Architetti italiani' },
      { words: ['Lambrusco', 'Franciacorta', 'Asti', 'Trento DOC'], connection: 'Vini frizzanti italiani' },
      { words: ['Borsellino', 'Falcone', 'Dalla Chiesa', 'Chinnici'], connection: 'Magistrati antimafia' }
    ],
    difficulty: 'Hard'
  },
  {
    sets: [
      { words: ['Eco', 'Calvino', 'Moravia', 'Sciascia'], connection: 'Scrittori italiani del 900' },
      { words: ['Bartali', 'Coppi', 'Pantani', 'Nibali'], connection: 'Ciclisti italiani' },
      { words: ['Zegna', 'Brioni', 'Canali', 'Kiton'], connection: 'Marche di alta sartoria italiana' },
      { words: ['Vivaldi', 'Corelli', 'Tartini', 'Albinoni'], connection: 'Compositori barocchi italiani' }
    ],
    difficulty: 'Hard'
  }
];