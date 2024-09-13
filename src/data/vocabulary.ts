interface VocabularyItem {
    id: string;
    italianWord: string;
    englishTranslation: string;
    partOfSpeech: string;
    difficulty: number;
    category: string;
    tags: string[];
    examples: {
      italian: string;
      english: string;
    }[];
  }
  

    const vocabularyData: VocabularyItem[] = [
      {
        id: "1",
        italianWord: "il/lo/la/i/gli/le",
        englishTranslation: "the",
        partOfSpeech: "Article",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "articles"],
        examples: [
          {
            italian: "Il gatto è nero.",
            english: "The cat is black."
          }
        ]
      },
      {
        id: "2",
        italianWord: "di",
        englishTranslation: "of, from",
        partOfSpeech: "Preposition",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "prepositions"],
        examples: [
          {
            italian: "Il libro di Marco.",
            english: "Marco's book."
          }
        ]
      },
      {
        id: "3",
        italianWord: "e",
        englishTranslation: "and",
        partOfSpeech: "Conjunction",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "conjunctions"],
        examples: [
          {
            italian: "Mela e banana.",
            english: "Apple and banana."
          }
        ]
      },
      {
        id: "4",
        italianWord: "essere",
        englishTranslation: "to be",
        partOfSpeech: "Verb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "verbs", "essential verbs"],
        examples: [
          {
            italian: "Io sono felice.",
            english: "I am happy."
          }
        ]
      },
      {
        id: "5",
        italianWord: "che",
        englishTranslation: "that, which",
        partOfSpeech: "Pronoun/Conjunction",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "conjunctions"],
        examples: [
          {
            italian: "Il libro che leggo.",
            english: "The book that I'm reading."
          }
        ]
      },
      {
        id: "6",
        italianWord: "a",
        englishTranslation: "to, at",
        partOfSpeech: "Preposition",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "prepositions"],
        examples: [
          {
            italian: "Vado a casa.",
            english: "I'm going home."
          }
        ]
      },
      {
        id: "7",
        italianWord: "in",
        englishTranslation: "in, into",
        partOfSpeech: "Preposition",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "prepositions"],
        examples: [
          {
            italian: "Sono in cucina.",
            english: "I'm in the kitchen."
          }
        ]
      },
      {
        id: "8",
        italianWord: "un/uno/una",
        englishTranslation: "a, an",
        partOfSpeech: "Article",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "articles"],
        examples: [
          {
            italian: "Una mela.",
            english: "An apple."
          }
        ]
      },
      {
        id: "9",
        italianWord: "avere",
        englishTranslation: "to have",
        partOfSpeech: "Verb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "verbs", "essential verbs"],
        examples: [
          {
            italian: "Ho una mela.",
            english: "I have an apple."
          }
        ]
      },
      {
        id: "10",
        italianWord: "per",
        englishTranslation: "for, to, in order to",
        partOfSpeech: "Preposition",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "prepositions"],
        examples: [
          {
            italian: "Un regalo per te.",
            english: "A gift for you."
          }
        ]
      },
      {
        id: "11",
        italianWord: "non",
        englishTranslation: "not, no",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "negation"],
        examples: [
          {
            italian: "Non capisco.",
            english: "I don't understand."
          }
        ]
      },
      {
        id: "12",
        italianWord: "con",
        englishTranslation: "with",
        partOfSpeech: "Preposition",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "prepositions"],
        examples: [
          {
            italian: "Vado con te.",
            english: "I'm going with you."
          }
        ]
      },
      {
        id: "13",
        italianWord: "su",
        englishTranslation: "on, upon",
        partOfSpeech: "Preposition",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "prepositions"],
        examples: [
          {
            italian: "Il libro è sul tavolo.",
            english: "The book is on the table."
          }
        ]
      },
      {
        id: "14",
        italianWord: "da",
        englishTranslation: "from, by",
        partOfSpeech: "Preposition",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "prepositions"],
        examples: [
          {
            italian: "Vengo da Roma.",
            english: "I come from Rome."
          }
        ]
      },
      {
        id: "15",
        italianWord: "come",
        englishTranslation: "as, like",
        partOfSpeech: "Adverb/Conjunction",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "conjunctions"],
        examples: [
          {
            italian: "Come stai?",
            english: "How are you?"
          }
        ]
      },
      {
        id: "16",
        italianWord: "questo/questa",
        englishTranslation: "this",
        partOfSpeech: "Pronoun/Adjective",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "adjectives"],
        examples: [
          {
            italian: "Questo libro è interessante.",
            english: "This book is interesting."
          }
        ]
      },
      {
        id: "17",
        italianWord: "fare",
        englishTranslation: "to do, to make",
        partOfSpeech: "Verb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "verbs", "essential verbs"],
        examples: [
          {
            italian: "Cosa fai?",
            english: "What are you doing?"
          }
        ]
      },
      {
        id: "18",
        italianWord: "più",
        englishTranslation: "more",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "comparisons"],
        examples: [
          {
            italian: "Voglio più tempo.",
            english: "I want more time."
          }
        ]
      },
      {
        id: "19",
        italianWord: "anche",
        englishTranslation: "also, too",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs"],
        examples: [
          {
            italian: "Anche io sono italiano.",
            english: "I am Italian too."
          }
        ]
      },
      {
        id: "20",
        italianWord: "potere",
        englishTranslation: "can, to be able to",
        partOfSpeech: "Verb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "verbs", "modal verbs"],
        examples: [
          {
            italian: "Posso aiutarti?",
            english: "Can I help you?"
          }
        ]
      },
      {
        id: "21",
        italianWord: "dovere",
        englishTranslation: "must, to have to",
        partOfSpeech: "Verb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "verbs", "modal verbs"],
        examples: [
          {
            italian: "Devo studiare.",
            english: "I must study."
          }
        ]
      },
      {
        id: "22",
        italianWord: "dire",
        englishTranslation: "to say, to tell",
        partOfSpeech: "Verb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "verbs", "communication"],
        examples: [
          {
            italian: "Cosa vuoi dire?",
            english: "What do you want to say?"
          }
        ]
      },
      {
        id: "23",
        italianWord: "tutto",
        englishTranslation: "all, everything",
        partOfSpeech: "Pronoun/Adjective",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "adjectives"],
        examples: [
          {
            italian: "Tutto è possibile.",
            english: "Everything is possible."
          }
        ]
      },
      {
        id: "24",
        italianWord: "ma",
        englishTranslation: "but",
        partOfSpeech: "Conjunction",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "conjunctions"],
        examples: [
          {
            italian: "Voglio andare, ma non posso.",
            english: "I want to go, but I can't."
          }
        ]
      },
      {
        id: "25",
        italianWord: "se",
        englishTranslation: "if",
        partOfSpeech: "Conjunction",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "conjunctions", "conditionals"],
        examples: [
          {
            italian: "Se piove, resto a casa.",
            english: "If it rains, I'll stay at home."
          }
        ]
      },
      {
        id: "26",
        italianWord: "io",
        englishTranslation: "I",
        partOfSpeech: "Pronoun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "subject pronouns"],
        examples: [
          {
            italian: "Io parlo italiano.",
            english: "I speak Italian."
          }
        ]
      },
      {
        id: "27",
        italianWord: "quando",
        englishTranslation: "when",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "time expressions"],
        examples: [
          {
            italian: "Quando arrivi?",
            english: "When are you arriving?"
          }
        ]
      },
      {
        id: "28",
        italianWord: "tu",
        englishTranslation: "you (singular)",
        partOfSpeech: "Pronoun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "subject pronouns"],
        examples: [
          {
            italian: "Tu sei mio amico.",
            english: "You are my friend."
          }
        ]
      },
      {
        id: "29",
        italianWord: "noi",
        englishTranslation: "we",
        partOfSpeech: "Pronoun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "subject pronouns"],
        examples: [
          {
            italian: "Noi andiamo al cinema.",
            english: "We are going to the cinema."
          }
        ]
      },
      {
        id: "30",
        italianWord: "lei",
        englishTranslation: "she, you (formal)",
        partOfSpeech: "Pronoun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "subject pronouns"],
        examples: [
          {
            italian: "Lei è molto gentile.",
            english: "She is very kind. / You are very kind. (formal)"
          }
        ]
      },
      {
        id: "31",
        italianWord: "lui",
        englishTranslation: "he",
        partOfSpeech: "Pronoun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "subject pronouns"],
        examples: [
          {
            italian: "Lui è mio fratello.",
            english: "He is my brother."
          }
        ]
      },
      {
        id: "32",
        italianWord: "loro",
        englishTranslation: "they, you (plural)",
        partOfSpeech: "Pronoun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "subject pronouns"],
        examples: [
          {
            italian: "Loro sono studenti.",
            english: "They are students."
          }
        ]
      },
      {
        id: "33",
        italianWord: "volere",
        englishTranslation: "to want",
        partOfSpeech: "Verb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "verbs", "modal verbs"],
        examples: [
          {
            italian: "Voglio un gelato.",
            english: "I want an ice cream."
          }
        ]
      },
      {
        id: "34",
        italianWord: "molto",
        englishTranslation: "very, much",
        partOfSpeech: "Adverb/Adjective",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "adjectives", "quantity"],
        examples: [
          {
            italian: "Sono molto felice.",
            english: "I am very happy."
          }
        ]
      },
      {
        id: "35",
        italianWord: "dire",
        englishTranslation: "to say, to tell",
        partOfSpeech: "Verb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "verbs", "communication"],
        examples: [
          {
            italian: "Cosa vuoi dire?",
            english: "What do you want to say?"
          }
        ]
      },
      {
        id: "36",
        italianWord: "su",
        englishTranslation: "on, upon",
        partOfSpeech: "Preposition",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "prepositions"],
        examples: [
          {
            italian: "Il libro è sul tavolo.",
            english: "The book is on the table."
          }
        ]
      },
      {
        id: "37",
        italianWord: "così",
        englishTranslation: "so, like this",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs"],
        examples: [
          {
            italian: "Fallo così.",
            english: "Do it like this."
          }
        ]
      },
      {
        id: "38",
        italianWord: "tutto",
        englishTranslation: "all, everything",
        partOfSpeech: "Pronoun/Adjective",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "adjectives", "quantity"],
        examples: [
          {
            italian: "Ho mangiato tutto.",
            english: "I ate everything."
          }
        ]
      },
      {
        id: "39",
        italianWord: "bene",
        englishTranslation: "well, good",
        partOfSpeech: "Adverb/Noun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "common expressions"],
        examples: [
          {
            italian: "Sto bene, grazie.",
            english: "I'm well, thank you."
          }
        ]
      },
      {
        id: "40",
        italianWord: "vedere",
        englishTranslation: "to see",
        partOfSpeech: "Verb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "verbs", "senses"],
        examples: [
          {
            italian: "Posso vedere il menu?",
            english: "Can I see the menu?"
          }
        ]
      },
      {
        id: "41",
        italianWord: "ancora",
        englishTranslation: "still, yet, again",
        partOfSpeech: "Adverb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "time expressions"],
        examples: [
          {
            italian: "Sei ancora qui?",
            english: "Are you still here?"
          }
        ]
      },
      {
        id: "42",
        italianWord: "qui",
        englishTranslation: "here",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "location"],
        examples: [
          {
            italian: "Vieni qui!",
            english: "Come here!"
          }
        ]
      },
      {
        id: "43",
        italianWord: "poi",
        englishTranslation: "then, afterwards",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "time expressions"],
        examples: [
          {
            italian: "Prima mangiamo, poi usciamo.",
            english: "First we eat, then we go out."
          }
        ]
      },
      {
        id: "44",
        italianWord: "dove",
        englishTranslation: "where",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "question words"],
        examples: [
          {
            italian: "Dove sei?",
            english: "Where are you?"
          }
        ]
      },
      {
        id: "45",
        italianWord: "solo",
        englishTranslation: "only, alone",
        partOfSpeech: "Adjective/Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adjectives", "adverbs"],
        examples: [
          {
            italian: "Sono solo a casa.",
            english: "I'm alone at home."
          }
        ]
      },
      {
        id: "46",
        italianWord: "prima",
        englishTranslation: "before, first",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "time expressions"],
        examples: [
          {
            italian: "Prima di uscire, chiudi la porta.",
            english: "Before leaving, close the door."
          }
        ]
      },
      {
        id: "47",
        italianWord: "ora",
        englishTranslation: "now",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "time expressions"],
        examples: [
          {
            italian: "Devo andare ora.",
            english: "I have to go now."
          }
        ]
      },
      {
        id: "48",
        italianWord: "anche",
        englishTranslation: "also, too",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs"],
        examples: [
          {
            italian: "Anche io voglio venire.",
            english: "I want to come too."
          }
        ]
      },
      {
        id: "49",
        italianWord: "mai",
        englishTranslation: "never",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "negation"],
        examples: [
          {
            italian: "Non l'ho mai visto.",
            english: "I've never seen him."
          }
        ]
      },
      {
        id: "50",
        italianWord: "oggi",
        englishTranslation: "today",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "time expressions"],
        examples: [
          {
            italian: "Oggi fa caldo.",
            english: "It's hot today."
          }
        ]
      },
      {
        id: "51",
        italianWord: "solo",
        englishTranslation: "only, alone",
        partOfSpeech: "Adjective/Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adjectives", "adverbs"],
        examples: [
          {
            italian: "Sono solo a casa.",
            english: "I'm alone at home."
          }
        ]
      },
      {
        id: "52",
        italianWord: "tutti",
        englishTranslation: "all, everyone",
        partOfSpeech: "Pronoun/Adjective",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "adjectives", "quantity"],
        examples: [
          {
            italian: "Tutti sono invitati alla festa.",
            english: "Everyone is invited to the party."
          }
        ]
      },
      {
        id: "53",
        italianWord: "niente",
        englishTranslation: "nothing",
        partOfSpeech: "Pronoun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "negation"],
        examples: [
          {
            italian: "Non c'è niente da mangiare.",
            english: "There's nothing to eat."
          }
        ]
      },
      {
        id: "54",
        italianWord: "uno",
        englishTranslation: "one",
        partOfSpeech: "Numeral/Article",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "numbers", "articles"],
        examples: [
          {
            italian: "Ho solo uno euro.",
            english: "I only have one euro."
          }
        ]
      },
      {
        id: "55",
        italianWord: "sempre",
        englishTranslation: "always",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "frequency"],
        examples: [
          {
            italian: "Sei sempre in ritardo.",
            english: "You're always late."
          }
        ]
      },
      {
        id: "56",
        italianWord: "dare",
        englishTranslation: "to give",
        partOfSpeech: "Verb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "verbs"],
        examples: [
          {
            italian: "Mi dai una mano?",
            english: "Can you give me a hand?"
          }
        ]
      },
      {
        id: "57",
        italianWord: "cosa",
        englishTranslation: "what, thing",
        partOfSpeech: "Pronoun/Noun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "nouns", "question words"],
        examples: [
          {
            italian: "Cosa vuoi fare?",
            english: "What do you want to do?"
          }
        ]
      },
      {
        id: "58",
        italianWord: "due",
        englishTranslation: "two",
        partOfSpeech: "Numeral",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "numbers"],
        examples: [
          {
            italian: "Ho due fratelli.",
            english: "I have two brothers."
          }
        ]
      },
      {
        id: "59",
        italianWord: "quella",
        englishTranslation: "that (feminine)",
        partOfSpeech: "Pronoun/Adjective",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "adjectives", "demonstratives"],
        examples: [
          {
            italian: "Quella ragazza è mia sorella.",
            english: "That girl is my sister."
          }
        ]
      },
      {
        id: "60",
        italianWord: "vita",
        englishTranslation: "life",
        partOfSpeech: "Noun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["nouns", "abstract concepts"],
        examples: [
          {
            italian: "La vita è bella.",
            english: "Life is beautiful."
          }
        ]
      },
      {
        id: "61",
        italianWord: "sapere",
        englishTranslation: "to know",
        partOfSpeech: "Verb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "verbs", "cognition"],
        examples: [
          {
            italian: "Non so la risposta.",
            english: "I don't know the answer."
          }
        ]
      },
      {
        id: "62",
        italianWord: "già",
        englishTranslation: "already",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "time expressions"],
        examples: [
          {
            italian: "Sei già arrivato?",
            english: "Have you already arrived?"
          }
        ]
      },
      {
        id: "63",
        italianWord: "lei",
        englishTranslation: "she, you (formal)",
        partOfSpeech: "Pronoun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "subject pronouns"],
        examples: [
          {
            italian: "Lei è molto gentile.",
            english: "She is very kind. / You are very kind. (formal)"
          }
        ]
      },
      {
        id: "64",
        italianWord: "riuscire",
        englishTranslation: "to succeed, to manage",
        partOfSpeech: "Verb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "verbs"],
        examples: [
          {
            italian: "Sono riuscito a finire il lavoro.",
            english: "I managed to finish the work."
          }
        ]
      },
      {
        id: "65",
        italianWord: "perché",
        englishTranslation: "why, because",
        partOfSpeech: "Adverb/Conjunction",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "conjunctions", "question words"],
        examples: [
          {
            italian: "Perché sei triste?",
            english: "Why are you sad?"
          }
        ]
      },
      {
        id: "66",
        italianWord: "parlare",
        englishTranslation: "to speak, to talk",
        partOfSpeech: "Verb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "verbs", "communication"],
        examples: [
          {
            italian: "Parlo italiano.",
            english: "I speak Italian."
          }
        ]
      },
      {
        id: "67",
        italianWord: "meglio",
        englishTranslation: "better",
        partOfSpeech: "Adverb/Adjective",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "adjectives", "comparatives"],
        examples: [
          {
            italian: "Oggi sto meglio.",
            english: "I feel better today."
          }
        ]
      },
      {
        id: "68",
        italianWord: "trovare",
        englishTranslation: "to find",
        partOfSpeech: "Verb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "verbs"],
        examples: [
          {
            italian: "Non riesco a trovare le mie chiavi.",
            english: "I can't find my keys."
          }
        ]
      },
      {
        id: "69",
        italianWord: "ultimo",
        englishTranslation: "last, latest",
        partOfSpeech: "Adjective",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adjectives", "time expressions"],
        examples: [
          {
            italian: "Questo è l'ultimo giorno di vacanza.",
            english: "This is the last day of vacation."
          }
        ]
      },
      {
        id: "70",
        italianWord: "niente",
        englishTranslation: "nothing",
        partOfSpeech: "Pronoun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "negation"],
        examples: [
          {
            italian: "Non ho niente da fare.",
            english: "I have nothing to do."
          }
        ]
      },
      {
        id: "71",
        italianWord: "capire",
        englishTranslation: "to understand",
        partOfSpeech: "Verb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "verbs", "cognition"],
        examples: [
          {
            italian: "Non capisco questa frase.",
            english: "I don't understand this sentence."
          }
        ]
      },
      {
        id: "72",
        italianWord: "casa",
        englishTranslation: "house, home",
        partOfSpeech: "Noun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["nouns", "living"],
        examples: [
          {
            italian: "Torno a casa.",
            english: "I'm going home."
          }
        ]
      },
      {
        id: "73",
        italianWord: "anche",
        englishTranslation: "also, too",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs"],
        examples: [
          {
            italian: "Anche io voglio venire.",
            english: "I want to come too."
          }
        ]
      },
      {
        id: "74",
        italianWord: "giorno",
        englishTranslation: "day",
        partOfSpeech: "Noun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["nouns", "time expressions"],
        examples: [
          {
            italian: "Oggi è un bel giorno.",
            english: "Today is a beautiful day."
          }
        ]
      },
      {
        id: "75",
        italianWord: "anno",
        englishTranslation: "year",
        partOfSpeech: "Noun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["nouns", "time expressions"],
        examples: [
          {
            italian: "Buon anno nuovo!",
            english: "Happy New Year!"
          }
        ]
      },
      {
        id: "76",
        italianWord: "grande",
        englishTranslation: "big, great",
        partOfSpeech: "Adjective",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adjectives"],
        examples: [
          {
            italian: "Ho una grande idea.",
            english: "I have a great idea."
          }
        ]
      },
      {
        id: "77",
        italianWord: "paese",
        englishTranslation: "country, village",
        partOfSpeech: "Noun",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["nouns", "places"],
        examples: [
          {
            italian: "L'Italia è un bel paese.",
            english: "Italy is a beautiful country."
          }
        ]
      },
      {
        id: "78",
        italianWord: "ultimo",
        englishTranslation: "last, latest",
        partOfSpeech: "Adjective",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adjectives", "time expressions"],
        examples: [
          {
            italian: "È l'ultimo giorno di scuola.",
            english: "It's the last day of school."
          }
        ]
      },
      {
        id: "79",
        italianWord: "chi",
        englishTranslation: "who",
        partOfSpeech: "Pronoun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "question words"],
        examples: [
          {
            italian: "Chi è quella persona?",
            english: "Who is that person?"
          }
        ]
      },
      {
        id: "80",
        italianWord: "mano",
        englishTranslation: "hand",
        partOfSpeech: "Noun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["nouns", "body parts"],
        examples: [
          {
            italian: "Mi fa male la mano.",
            english: "My hand hurts."
          }
        ]
      },
      {
        id: "81",
        italianWord: "occhio",
        englishTranslation: "eye",
        partOfSpeech: "Noun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["nouns", "body parts"],
        examples: [
          {
            italian: "Ha gli occhi azzurri.",
            english: "He has blue eyes."
          }
        ]
      },
      {
        id: "82",
        italianWord: "ora",
        englishTranslation: "now, hour",
        partOfSpeech: "Adverb/Noun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "nouns", "time expressions"],
        examples: [
          {
            italian: "Ora devo andare.",
            english: "I have to go now."
          }
        ]
      },
      {
        id: "83",
        italianWord: "qualche",
        englishTranslation: "some, a few",
        partOfSpeech: "Adjective",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "adjectives", "quantity"],
        examples: [
          {
            italian: "Ho qualche idea.",
            english: "I have a few ideas."
          }
        ]
      },
      {
        id: "84",
        italianWord: "voler",
        englishTranslation: "to want",
        partOfSpeech: "Verb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "verbs", "modal verbs"],
        examples: [
          {
            italian: "Voglio un gelato.",
            english: "I want an ice cream."
          }
        ]
      },
      {
        id: "85",
        italianWord: "nulla",
        englishTranslation: "nothing",
        partOfSpeech: "Pronoun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "pronouns", "negation"],
        examples: [
          {
            italian: "Non ho nulla da dire.",
            english: "I have nothing to say."
          }
        ]
      },
      {
        id: "86",
        italianWord: "grazie",
        englishTranslation: "thank you",
        partOfSpeech: "Interjection",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["common expressions", "politeness"],
        examples: [
          {
            italian: "Grazie mille!",
            english: "Thank you very much!"
          }
        ]
      },
      {
        id: "87",
        italianWord: "nome",
        englishTranslation: "name",
        partOfSpeech: "Noun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["nouns", "personal information"],
        examples: [
          {
            italian: "Qual è il tuo nome?",
            english: "What's your name?"
          }
        ]
      },
      {
        id: "88",
        italianWord: "tipo",
        englishTranslation: "type, kind",
        partOfSpeech: "Noun",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["nouns", "description"],
        examples: [
          {
            italian: "Che tipo di musica ti piace?",
            english: "What kind of music do you like?"
          }
        ]
      },
      {
        id: "89",
        italianWord: "certo",
        englishTranslation: "certain, sure",
        partOfSpeech: "Adjective/Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adjectives", "adverbs"],
        examples: [
          {
            italian: "Sei certo di voler partire?",
            english: "Are you sure you want to leave?"
          }
        ]
      },
      {
        id: "90",
        italianWord: "momento",
        englishTranslation: "moment",
        partOfSpeech: "Noun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["nouns", "time expressions"],
        examples: [
          {
            italian: "Aspetta un momento, per favore.",
            english: "Wait a moment, please."
          }
        ]
      },
      {
        id: "91",
        italianWord: "punto",
        englishTranslation: "point",
        partOfSpeech: "Noun",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["nouns"],
        examples: [
          {
            italian: "Qual è il punto principale del discorso?",
            english: "What's the main point of the speech?"
          }
        ]
      },
      {
        id: "92",
        italianWord: "così",
        englishTranslation: "so, like this",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs"],
        examples: [
          {
            italian: "Fallo così.",
            english: "Do it like this."
          }
        ]
      },
      {
        id: "93",
        italianWord: "ogni",
        englishTranslation: "every, each",
        partOfSpeech: "Adjective",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adjectives", "quantity"],
        examples: [
          {
            italian: "Ogni giorno vado a correre.",
            english: "Every day I go running."
          }
        ]
      },
      {
        id: "94",
        italianWord: "parte",
        englishTranslation: "part",
        partOfSpeech: "Noun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["nouns"],
        examples: [
          {
            italian: "Questa è la parte più difficile.",
            english: "This is the most difficult part."
          }
        ]
      },
      {
        id: "95",
        italianWord: "problema",
        englishTranslation: "problem",
        partOfSpeech: "Noun",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["nouns"],
        examples: [
          {
            italian: "C'è un problema con la mia macchina.",
            english: "There's a problem with my car."
          }
        ]
      },
      {
        id: "96",
        italianWord: "dare",
        englishTranslation: "to give",
        partOfSpeech: "Verb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "verbs"],
        examples: [
          {
            italian: "Mi puoi dare una mano?",
            english: "Can you give me a hand?"
          }
        ]
      },
      {
        id: "97",
        italianWord: "pensare",
        englishTranslation: "to think",
        partOfSpeech: "Verb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "verbs", "cognition"],
        examples: [
          {
            italian: "Penso che sia una buona idea.",
            english: "I think it's a good idea."
          }
        ]
      },
      {
        id: "98",
        italianWord: "proprio",
        englishTranslation: "own, proper",
        partOfSpeech: "Adjective/Adverb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "adjectives", "adverbs"],
        examples: [
          {
            italian: "È il mio proprio libro.",
            english: "It's my own book."
          }
        ]
      },
      {
        id: "99",
        italianWord: "dove",
        englishTranslation: "where",
        partOfSpeech: "Adverb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "question words"],
        examples: [
          {
            italian: "Dove abiti?",
            english: "Where do you live?"
          }
        ]
      },
      {
        id: "100",
        italianWord: "allora",
        englishTranslation: "then, so",
        partOfSpeech: "Adverb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "time expressions"],
        examples: [
          {
            italian: "Allora, cosa facciamo?",
            english: "So, what do we do?"
          }
        ]
      },
      {
        id: "101",
        italianWord: "tanto",
        englishTranslation: "so much, a lot",
        partOfSpeech: "Adverb/Adjective",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "adverbs", "adjectives", "quantity"],
        examples: [
          {
            italian: "Ti voglio tanto bene.",
            english: "I love you so much."
          }
        ]
      },
      {
        id: "102",
        italianWord: "stare",
        englishTranslation: "to stay, to be",
        partOfSpeech: "Verb",
        difficulty: 2,
        category: "Foundational Italian",
        tags: ["grammar", "verbs", "essential verbs"],
        examples: [
          {
            italian: "Come stai?",
            english: "How are you?"
          }
        ]
      },
      {
        id: "103",
        italianWord: "vedere",
        englishTranslation: "to see",
        partOfSpeech: "Verb",
        difficulty: 1,
        category: "Foundational Italian",
        tags: ["grammar", "verbs", "senses"],
        examples: [
          {
            italian: "Non vedo l'ora di vederti.",
            english: "I can't wait to see you."
          }
        ]
      },
      {
        id: "104",
        italianWord: "andare",
        englishTranslation: "to go",
        partOfSpeech: "Verb",
        difficulty: 1,
    category: "Foundational Italian",
    tags: ["grammar", "verbs", "movement"],
    examples: [
      {
        italian: "Vado al supermercato.",
        english: "I'm going to the supermarket."
      }
    ]
  },
  {
    id: "105",
    italianWord: "ancora",
    englishTranslation: "still, yet, again",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs", "time expressions"],
    examples: [
      {
        italian: "Sei ancora qui?",
        english: "Are you still here?"
      }
    ]
  },
  {
    id: "106",
    italianWord: "dovere",
    englishTranslation: "to have to, must",
    partOfSpeech: "Verb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "verbs", "modal verbs"],
    examples: [
      {
        italian: "Devo andare a casa.",
        english: "I have to go home."
      }
    ]
  },
  {
    id: "107",
    italianWord: "parlare",
    englishTranslation: "to speak, to talk",
    partOfSpeech: "Verb",
    difficulty: 1,
    category: "Foundational Italian",
    tags: ["grammar", "verbs", "communication"],
    examples: [
      {
        italian: "Parlo italiano.",
        english: "I speak Italian."
      }
    ]
  },
  {
    id: "108",
    italianWord: "venire",
    englishTranslation: "to come",
    partOfSpeech: "Verb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "verbs", "movement"],
    examples: [
      {
        italian: "Vieni con me?",
        english: "Are you coming with me?"
      }
    ]
  },
  {
    id: "109",
    italianWord: "volere",
    englishTranslation: "to want",
    partOfSpeech: "Verb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "verbs", "modal verbs"],
    examples: [
      {
        italian: "Voglio un gelato.",
        english: "I want an ice cream."
      }
    ]
  },
  {
    id: "110",
    italianWord: "bello",
    englishTranslation: "beautiful, nice",
    partOfSpeech: "Adjective",
    difficulty: 1,
    category: "Foundational Italian",
    tags: ["grammar", "adjectives", "descriptions"],
    examples: [
      {
        italian: "Che bella giornata!",
        english: "What a beautiful day!"
      }
    ]
  },
  {
    id: "111",
    italianWord: "prenotare",
    englishTranslation: "to book, to reserve",
    partOfSpeech: "Verb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "verbs", "travel"],
    examples: [
      {
        italian: "Vorrei prenotare un tavolo per due.",
        english: "I'd like to reserve a table for two."
      }
    ]
  },
  {
    id: "112",
    italianWord: "camera",
    englishTranslation: "room, bedroom",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Foundational Italian",
    tags: ["nouns", "accommodation"],
    examples: [
      {
        italian: "La mia camera è al secondo piano.",
        english: "My room is on the second floor."
      }
    ]
  },
  {
    id: "113",
    italianWord: "colazione",
    englishTranslation: "breakfast",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Foundational Italian",
    tags: ["nouns", "food", "meals"],
    examples: [
      {
        italian: "La colazione è inclusa nel prezzo.",
        english: "Breakfast is included in the price."
      }
    ]
  },
  {
    id: "114",
    italianWord: "bagno",
    englishTranslation: "bathroom",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Foundational Italian",
    tags: ["nouns", "accommodation"],
    examples: [
      {
        italian: "Dov'è il bagno, per favore?",
        english: "Where is the bathroom, please?"
      }
    ]
  },
  {
    id: "115",
    italianWord: "chiave",
    englishTranslation: "key",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Foundational Italian",
    tags: ["nouns", "accommodation"],
    examples: [
      {
        italian: "Ecco la chiave della sua camera.",
        english: "Here's the key to your room."
      }
    ]
  },
  {
    id: "116",
    italianWord: "reception",
    englishTranslation: "reception",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Foundational Italian",
    tags: ["nouns", "accommodation", "travel"],
    examples: [
      {
        italian: "Si prega di lasciare le chiavi alla reception.",
        english: "Please leave the keys at the reception."
      }
    ]
  },
  {
    id: "117",
    italianWord: "ascensore",
    englishTranslation: "elevator, lift",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["nouns", "accommodation", "travel"],
    examples: [
      {
        italian: "L'ascensore è fuori servizio.",
        english: "The elevator is out of order."
      }
    ]
  },
  {
    id: "118",
    italianWord: "parcheggio",
    englishTranslation: "parking",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["nouns", "travel", "transportation"],
    examples: [
      {
        italian: "C'è un parcheggio vicino all'hotel?",
        english: "Is there a parking lot near the hotel?"
      }
    ]
  },
  {
    id: "119",
    italianWord: "wifi",
    englishTranslation: "wifi",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Foundational Italian",
    tags: ["nouns", "technology", "accommodation"],
    examples: [
      {
        italian: "Qual è la password del wifi?",
        english: "What's the wifi password?"
      }
    ]
  },
  {
    id: "120",
    italianWord: "aria condizionata",
    englishTranslation: "air conditioning",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["nouns", "accommodation", "weather"],
    examples: [
      {
        italian: "L'aria condizionata non funziona.",
        english: "The air conditioning is not working."
      }
    ]
  },
  {
    id: "121",
    italianWord: "biglietto",
    englishTranslation: "ticket",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Foundational Italian",
    tags: ["nouns", "travel", "transportation"],
    examples: [
      {
        italian: "Dove posso comprare un biglietto per il treno?",
        english: "Where can I buy a train ticket?"
      }
    ]
  },
  {
    id: "122",
    italianWord: "orario",
    englishTranslation: "timetable, schedule",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["nouns", "travel", "transportation"],
    examples: [
      {
        italian: "Puoi controllare l'orario dei treni?",
        english: "Can you check the train schedule?"
      }
    ]
  },
  {
    id: "123",
    italianWord: "ritardo",
    englishTranslation: "delay",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["nouns", "travel", "transportation"],
    examples: [
      {
        italian: "Il volo ha un ritardo di due ore.",
        english: "The flight has a two-hour delay."
      }
    ]
  },
  {
    id: "124",
    italianWord: "binario",
    englishTranslation: "platform (train)",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["nouns", "travel", "transportation"],
    examples: [
      {
        italian: "Il treno parte dal binario 3.",
        english: "The train departs from platform 3."
      }
    ]
  },
  {
    id: "125",
    italianWord: "coincidenza",
    englishTranslation: "connection (transport)",
    partOfSpeech: "Noun",
    difficulty: 3,
    category: "Foundational Italian",
    tags: ["nouns", "travel", "transportation"],
    examples: [
      {
        italian: "Ho perso la coincidenza per Roma.",
        english: "I missed the connection to Rome."
      }
    ]
  },
  {
    id: "126",
    italianWord: "andata e ritorno",
    englishTranslation: "round trip",
    partOfSpeech: "Phrase",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["phrases", "travel", "transportation"],
    examples: [
      {
        italian: "Vorrei un biglietto andata e ritorno per Firenze.",
        english: "I'd like a round trip ticket to Florence."
      }
    ]
  },
  {
    id: "127",
    italianWord: "solo andata",
    englishTranslation: "one-way",
    partOfSpeech: "Phrase",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["phrases", "travel", "transportation"],
    examples: [
      {
        italian: "Mi serve un biglietto solo andata per Milano.",
        english: "I need a one-way ticket to Milan."
      }
    ]
  },
  {
    id: "128",
    italianWord: "convalidare",
    englishTranslation: "to validate (a ticket)",
    partOfSpeech: "Verb",
    difficulty: 3,
    category: "Foundational Italian",
    tags: ["grammar", "verbs", "travel", "transportation"],
    examples: [
      {
        italian: "Non dimenticare di convalidare il biglietto prima di salire sul treno.",
        english: "Don't forget to validate your ticket before boarding the train."
      }
    ]
  },
  {
    id: "129",
    italianWord: "fermata",
    englishTranslation: "stop (bus, tram)",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["nouns", "travel", "transportation"],
    examples: [
      {
        italian: "La prossima fermata è Piazza Navona.",
        english: "The next stop is Piazza Navona."
      }
    ]
  },
  {
    id: "130",
    italianWord: "metropolitana",
    englishTranslation: "subway, underground",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["nouns", "travel", "transportation"],
    examples: [
      {
        italian: "Prenderemo la metropolitana per arrivare al centro.",
        english: "We'll take the subway to get to the center."
      }
    ]
  },
  {
    id: "131",
    italianWord: "sempre",
    englishTranslation: "always",
    partOfSpeech: "Adverb",
    difficulty: 1,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs", "time expressions"],
    examples: [
      {
        italian: "Sei sempre in ritardo.",
        english: "You're always late."
      }
    ]
  },
  {
    id: "132",
    italianWord: "capire",
    englishTranslation: "to understand",
    partOfSpeech: "Verb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "verbs", "cognition"],
    examples: [
      {
        italian: "Non capisco questa frase.",
        english: "I don't understand this sentence."
      }
    ]
  },
  {
    id: "133",
    italianWord: "insieme",
    englishTranslation: "together",
    partOfSpeech: "Adverb",
    difficulty: 1,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Andiamo insieme al cinema.",
        english: "Let's go to the cinema together."
      }
    ]
  },
  {
    id: "134",
    italianWord: "forse",
    englishTranslation: "maybe, perhaps",
    partOfSpeech: "Adverb",
    difficulty: 1,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Forse verrò alla festa.",
        english: "Maybe I'll come to the party."
      }
    ]
  },
  {
    id: "135",
    italianWord: "durante",
    englishTranslation: "during",
    partOfSpeech: "Preposition",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "prepositions", "time expressions"],
    examples: [
      {
        italian: "Durante le vacanze, ho visitato molte città.",
        english: "During the holidays, I visited many cities."
      }
    ]
  },
  {
    id: "136",
    italianWord: "quasi",
    englishTranslation: "almost, nearly",
    partOfSpeech: "Adverb",
    difficulty: 1,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Sono quasi arrivato.",
        english: "I've almost arrived."
      }
    ]
  },
  {
    id: "137",
    italianWord: "invece",
    englishTranslation: "instead, on the contrary",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Non voglio il caffè, invece prenderò un tè.",
        english: "I don't want coffee, instead I'll have tea."
      }
    ]
  },
  {
    id: "138",
    italianWord: "appena",
    englishTranslation: "just, as soon as",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs", "time expressions"],
    examples: [
      {
        italian: "Sono appena arrivato a casa.",
        english: "I've just arrived home."
      }
    ]
  },
  {
    id: "139",
    italianWord: "almeno",
    englishTranslation: "at least",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Mangia almeno un po' di verdura.",
        english: "Eat at least some vegetables."
      }
    ]
  },
  {
    id: "140",
    italianWord: "abbastanza",
    englishTranslation: "enough, quite",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs", "quantity"],
    examples: [
      {
        italian: "Ho mangiato abbastanza.",
        english: "I've eaten enough."
      }
    ]
  },
  {
    id: "141",
    italianWord: "davvero",
    englishTranslation: "really, truly",
    partOfSpeech: "Adverb",
    difficulty: 1,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Sei davvero bravo!",
        english: "You're really good!"
      }
    ]
  },
  {
    id: "142",
    italianWord: "comunque",
    englishTranslation: "anyway, however",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Non importa, comunque grazie.",
        english: "It doesn't matter, thanks anyway."
      }
    ]
  },
  {
    id: "143",
    italianWord: "soprattutto",
    englishTranslation: "especially, above all",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Mi piace l'Italia, soprattutto Roma.",
        english: "I like Italy, especially Rome."
      }
    ]
  },
  {
    id: "144",
    italianWord: "quindi",
    englishTranslation: "therefore, so",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Piove, quindi prendi l'ombrello.",
        english: "It's raining, so take an umbrella."
      }
    ]
  },
  {
    id: "145",
    italianWord: "inoltre",
    englishTranslation: "furthermore, moreover",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "È economico e inoltre è di buona qualità.",
        english: "It's cheap and furthermore it's of good quality."
      }
    ]
  },
  {
    id: "146",
    italianWord: "finalmente",
    englishTranslation: "finally, at last",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs", "time expressions"],
    examples: [
      {
        italian: "Finalmente sei arrivato!",
        english: "You've finally arrived!"
      }
    ]
  },
  {
    id: "147",
    italianWord: "purtroppo",
    englishTranslation: "unfortunately",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Purtroppo non posso venire alla festa.",
        english: "Unfortunately, I can't come to the party."
      }
    ]
  },
  {
    id: "148",
    italianWord: "ovviamente",
    englishTranslation: "obviously",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Ovviamente, devi studiare per l'esame.",
        english: "Obviously, you need to study for the exam."
      }
    ]
  },
  {
    id: "149",
    italianWord: "probabilmente",
    englishTranslation: "probably",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Probabilmente arriverò in ritardo.",
        english: "I'll probably arrive late."
      }
    ]
  },
  {
    id: "150",
    italianWord: "specialmente",
    englishTranslation: "especially",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Mi piacciono i fiori, specialmente le rose.",
        english: "I like flowers, especially roses."
      }
    ]
  },
  {
    id: "151",
    italianWord: "assolutamente",
    englishTranslation: "absolutely",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Sono assolutamente d'accordo con te.",
        english: "I absolutely agree with you."
      }
    ]
  },
  {
    id: "152",
    italianWord: "praticamente",
    englishTranslation: "practically",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Ho praticamente finito il lavoro.",
        english: "I've practically finished the work."
      }
    ]
  },
  {
    id: "153",
    italianWord: "sicuramente",
    englishTranslation: "surely, certainly",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Sicuramente verrò alla tua festa.",
        english: "I'll certainly come to your party."
      }
    ]
  },
  {
    id: "154",
    italianWord: "facilmente",
    englishTranslation: "easily",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Puoi facilmente risolvere questo problema.",
        english: "You can easily solve this problem."
      }
    ]
  },
  {
    id: "155",
    italianWord: "raramente",
    englishTranslation: "rarely",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs", "frequency"],
    examples: [
      {
        italian: "Raramente vado al cinema.",
        english: "I rarely go to the cinema."
      }
    ]
  },
  {
    id: "156",
    italianWord: "completamente",
    englishTranslation: "completely",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Sono completamente d'accordo con te.",
        english: "I completely agree with you."
      }
    ]
  },
  {
    id: "157",
    italianWord: "esattamente",
    englishTranslation: "exactly",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "È esattamente quello che volevo.",
        english: "It's exactly what I wanted."
      }
    ]
  },
  {
    id: "158",
    italianWord: "immediatamente",
    englishTranslation: "immediately",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs", "time expressions"],
    examples: [
      {
        italian: "Vieni qui immediatamente!",
        english: "Come here immediately!"
      }
    ]
  },
  {
    id: "159",
    italianWord: "attentamente",
    englishTranslation: "carefully",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Leggi attentamente le istruzioni.",
        english: "Read the instructions carefully."
      }
    ]
  },
  {
    id: "160",
    italianWord: "lentamente",
    englishTranslation: "slowly",
    partOfSpeech: "Adverb",
    difficulty: 1,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Parla lentamente, per favore.",
        english: "Speak slowly, please."
      }
    ]
  },
  {
    id: "161",
    italianWord: "velocemente",
    englishTranslation: "quickly",
    partOfSpeech: "Adverb",
    difficulty: 1,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
      {
        italian: "Corre velocemente.",
        english: "He runs quickly."
      }
    ]
  },
  {
    id: "162",
    italianWord: "naturalmente",
    englishTranslation: "naturally, of course",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
    {
    italian: "Naturalmente, sei invitato alla festa.",
    english: "Of course, you're invited to the party."
    }
    ]
    },
    {
    id: "163",
    italianWord: "certamente",
    englishTranslation: "certainly",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
    {
    italian: "Certamente, ti aiuterò.",
    english: "Certainly, I'll help you."
    }
    ]
    },
    {
    id: "164",
    italianWord: "veramente",
    englishTranslation: "really, truly",
    partOfSpeech: "Adverb",
    difficulty: 1,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
    {
    italian: "Sei veramente gentile.",
    english: "You're really kind."
    }
    ]
    },
    {
    id: "165",
    italianWord: "solamente",
    englishTranslation: "only",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
    {
    italian: "Ho solamente dieci euro.",
    english: "I only have ten euros."
    }
    ]
    },
    {
    id: "166",
    italianWord: "particolarmente",
    englishTranslation: "particularly",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
    {
    italian: "Sono particolarmente felice oggi.",
    english: "I'm particularly happy today."
    }
    ]
    },
    {
    id: "167",
    italianWord: "generalmente",
    englishTranslation: "generally",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
    {
    italian: "Generalmente vado a letto alle 23.",
    english: "I generally go to bed at 11 PM."
    }
    ]
    },
    {
    id: "168",
    italianWord: "sinceramente",
    englishTranslation: "sincerely",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
    {
    italian: "Ti dico sinceramente quello che penso.",
    english: "I'm telling you sincerely what I think."
    }
    ]
    },
    {
    id: "169",
    italianWord: "seriamente",
    englishTranslation: "seriously",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
    {
    italian: "Devi prendere questa situazione seriamente.",
    english: "You need to take this situation seriously."
    }
    ]
    },
    {
    id: "170",
    italianWord: "fortunatamente",
    englishTranslation: "fortunately",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
    {
    italian: "Fortunatamente, non è successo niente di grave.",
    english: "Fortunately, nothing serious happened."
    }
    ]
    },
    {
    id: "171",
    italianWord: "improvvisamente",
    englishTranslation: "suddenly",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
    {
    italian: "Improvvisamente, iniziò a piovere.",
    english: "Suddenly, it started to rain."
    }
    ]
    },
    {
    id: "172",
    italianWord: "recentemente",
    englishTranslation: "recently",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs", "time expressions"],
    examples: [
    {
    italian: "Ho visto quel film recentemente.",
    english: "I saw that movie recently."
    }
    ]
    },
    {
    id: "173",
    italianWord: "normalmente",
    englishTranslation: "normally",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
    {
    italian: "Normalmente vado in palestra tre volte a settimana.",
    english: "I normally go to the gym three times a week."
    }
    ]
    },
    {
    id: "174",
    italianWord: "effettivamente",
    englishTranslation: "actually, effectively",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
    {
    italian: "Effettivamente, hai ragione.",
    english: "Actually, you're right."
    }
    ]
    },
    {
    id: "175",
    italianWord: "personalmente",
    englishTranslation: "personally",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
    {
    italian: "Personalmente, preferisco il tè al caffè.",
    english: "Personally, I prefer tea to coffee."
    }
    ]
    },
    {
    id: "176",
    italianWord: "direttamente",
    englishTranslation: "directly",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
    {
    italian: "Vai direttamente a casa dopo il lavoro.",
    english: "Go directly home after work."
    }
    ]
    },
    {
    id: "177",
    italianWord: "perfettamente",
    englishTranslation: "perfectly",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
    {
    italian: "Parla italiano perfettamente.",
    english: "He speaks Italian perfectly."
    }
    ]
    },
    {
    id: "178",
    italianWord: "chiaramente",
    englishTranslation: "clearly",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
    {
    italian: "Spiega chiaramente il concetto.",
    english: "Explain the concept clearly."
    }
    ]
    },
    {
    id: "179",
    italianWord: "semplicemente",
    englishTranslation: "simply",
    partOfSpeech: "Adverb",
    difficulty: 2,
    category: "Foundational Italian",
    tags: ["grammar", "adverbs"],
    examples: [
    {
    italian: "È semplicemente fantastico!",
    english: "It's simply fantastic!"
  }
]
},
{
id: "180",
italianWord: "totalmente",
englishTranslation: "totally",
partOfSpeech: "Adverb",
difficulty: 2,
category: "Foundational Italian",
tags: ["grammar", "adverbs"],
examples: [
  {
    italian: "Sono totalmente d'accordo con te.",
    english: "I totally agree with you."
  }
]
},
{
id: "181",
italianWord: "principalmente",
englishTranslation: "mainly, primarily",
partOfSpeech: "Adverb",
difficulty: 2,
category: "Foundational Italian",
tags: ["grammar", "adverbs"],
examples: [
  {
    italian: "Lavoro principalmente da casa.",
english: "I work mainly from home."
}
]
},
{
id: "182",
italianWord: "eventualmente",
englishTranslation: "possibly, if necessary",
partOfSpeech: "Adverb",
difficulty: 3,
category: "Foundational Italian",
tags: ["grammar", "adverbs"],
examples: [
{
italian: "Eventualmente, potremmo rimandare l'incontro.",
english: "If necessary, we could postpone the meeting."
}
]
},
{
id: "183",
italianWord: "apparentemente",
englishTranslation: "apparently",
partOfSpeech: "Adverb",
difficulty: 3,
category: "Foundational Italian",
tags: ["grammar", "adverbs"],
examples: [
{
italian: "Apparentemente, non c'è nessuno in casa.",
english: "Apparently, there's no one at home."
}
]
},
{
id: "184",
italianWord: "sostanzialmente",
englishTranslation: "substantially, essentially",
partOfSpeech: "Adverb",
difficulty: 3,
category: "Foundational Italian",
tags: ["grammar", "adverbs"],
examples: [
{
italian: "Le due proposte sono sostanzialmente simili.",
english: "The two proposals are essentially similar."
}
]
},
{
id: "185",
italianWord: "relativamente",
englishTranslation: "relatively",
partOfSpeech: "Adverb",
difficulty: 3,
category: "Foundational Italian",
tags: ["grammar", "adverbs"],
examples: [
{
italian: "Il compito era relativamente facile.",
english: "The task was relatively easy."
}
]
},
{
id: "186",
italianWord: "attualmente",
englishTranslation: "currently",
partOfSpeech: "Adverb",
difficulty: 2,
category: "Foundational Italian",
tags: ["grammar", "adverbs", "time expressions"],
examples: [
{
italian: "Attualmente vivo a Roma.",
english: "I currently live in Rome."
}
]
},
{
id: "187",
italianWord: "ugualmente",
englishTranslation: "equally",
partOfSpeech: "Adverb",
difficulty: 2,
category: "Foundational Italian",
tags: ["grammar", "adverbs"],
examples: [
{
italian: "Tratto tutti ugualmente.",
english: "I treat everyone equally."
}
]
},
{
id: "188",
italianWord: "possibilmente",
englishTranslation: "possibly",
partOfSpeech: "Adverb",
difficulty: 2,
category: "Foundational Italian",
tags: ["grammar", "adverbs"],
examples: [
{
italian: "Arriva possibilmente in orario.",
english: "Arrive on time if possible."
}
]
},
{
id: "189",
italianWord: "contemporaneamente",
englishTranslation: "simultaneously",
partOfSpeech: "Adverb",
difficulty: 3,
category: "Foundational Italian",
tags: ["grammar", "adverbs", "time expressions"],
examples: [
{
italian: "Non posso fare due cose contemporaneamente.",
english: "I can't do two things simultaneously."
}
]
},
{
id: "190",
italianWord: "gradualmente",
englishTranslation: "gradually",
partOfSpeech: "Adverb",
difficulty: 2,
category: "Foundational Italian",
tags: ["grammar", "adverbs"],
examples: [
{
italian: "La situazione sta migliorando gradualmente.",
english: "The situation is gradually improving."
}
]
},
{
id: "191",
italianWord: "inevitabilmente",
englishTranslation: "inevitably",
partOfSpeech: "Adverb",
difficulty: 3,
category: "Foundational Italian",
tags: ["grammar", "adverbs"],
examples: [
{
italian: "Inevitabilmente, ci saranno dei problemi.",
english: "Inevitably, there will be problems."
}
]
},
{
id: "192",
italianWord: "frequentemente",
englishTranslation: "frequently",
partOfSpeech: "Adverb",
difficulty: 2,
category: "Foundational Italian",
tags: ["grammar", "adverbs", "frequency"],
examples: [
{
italian: "Vado frequentemente al cinema.",
english: "I go to the cinema frequently."
}
]
},
{
id: "193",
italianWord: "regolarmente",
englishTranslation: "regularly",
partOfSpeech: "Adverb",
difficulty: 2,
category: "Foundational Italian",
tags: ["grammar", "adverbs", "frequency"],
examples: [
{
italian: "Faccio esercizio regolarmente.",
english: "I exercise regularly."
}
]
},
{
id: "194",
italianWord: "occasionalmente",
englishTranslation: "occasionally",
partOfSpeech: "Adverb",
difficulty: 3,
category: "Foundational Italian",
tags: ["grammar", "adverbs", "frequency"],
examples: [
{
italian: "Occasionalmente mangio carne.",
english: "I occasionally eat meat."
}
]
},
{
id: "195",
italianWord: "costantemente",
englishTranslation: "constantly",
partOfSpeech: "Adverb",
difficulty: 2,
category: "Foundational Italian",
tags: ["grammar", "adverbs", "frequency"],
examples: [
{
italian: "Il telefono suona costantemente.",
english: "The phone is ringing constantly."
}
]
},
{
id: "196",
italianWord: "rapidamente",
englishTranslation: "rapidly, quickly",
partOfSpeech: "Adverb",
difficulty: 2,
category: "Foundational Italian",
tags: ["grammar", "adverbs"],
examples: [
{
italian: "La situazione è cambiata rapidamente.",
english: "The situation changed rapidly."
}
]
},
{
id: "197",
italianWord: "accuratamente",
englishTranslation: "accurately, carefully",
partOfSpeech: "Adverb",
difficulty: 3,
category: "Foundational Italian",
tags: ["grammar", "adverbs"],
examples: [
{
italian: "Controlla accuratamente il documento.",
english: "Check the document carefully."
}
]
},
{
id: "198",
italianWord: "deliberatamente",
englishTranslation: "deliberately",
partOfSpeech: "Adverb",
difficulty: 3,
category: "Foundational Italian",
tags: ["grammar", "adverbs"],
examples: [
{
italian: "Ha agito deliberatamente contro le regole.",
english: "He deliberately acted against the rules."
}
]
},
{
id: "199",
italianWord: "presumibilmente",
englishTranslation: "presumably",
partOfSpeech: "Adverb",
difficulty: 3,
category: "Foundational Italian",
tags: ["grammar", "adverbs"],
examples: [
{
italian: "Presumibilmente, arriverà domani.",
english: "Presumably, he will arrive tomorrow."
}
]
},
{
id: "200",
italianWord: "definitivamente",
englishTranslation: "definitely",
partOfSpeech: "Adverb",
difficulty: 2,
category: "Foundational Italian",
tags: ["grammar", "adverbs"],
examples: [
{
italian: "Ho definitivamente deciso di partire.",
english: "I've definitely decided to leave."
}
]
},
{
id: "201",
italianWord: "menu",
englishTranslation: "menu",
partOfSpeech: "Noun",
difficulty: 1,
category: "At the Restaurant",
tags: ["food", "dining"],
examples: [
{
italian: "Posso vedere il menu, per favore?",
english: "Can I see the menu, please?"
}
]
},
{
id: "202",
italianWord: "antipasto",
englishTranslation: "appetizer",
partOfSpeech: "Noun",
difficulty: 2,
category: "At the Restaurant",
tags: ["food", "dining"],
examples: [
{
italian: "Come antipasto, prenderò la bruschetta.",
english: "As an appetizer, I'll have the bruschetta."
}
]
},
{
id: "203",
italianWord: "primo piatto",
englishTranslation: "first course",
partOfSpeech: "Noun",
difficulty: 2,
category: "At the Restaurant",
tags: ["food", "dining"],
examples: [
{
italian: "Per primo piatto, consiglio la pasta al pesto.",
english: "For the first course, I recommend the pasta with pesto."
}
]
},
{
id: "204",
italianWord: "secondo piatto",
englishTranslation: "main course",
partOfSpeech: "Noun",
difficulty: 2,
category: "At the Restaurant",
tags: ["food", "dining"],
examples: [
{
italian: "Come secondo piatto, prenderò il pollo arrosto.",
english: "For the main course, I'll have the roast chicken."
}
]
},
{
id: "205",
italianWord: "contorno",
englishTranslation: "side dish",
partOfSpeech: "Noun",
difficulty: 2,
category: "At the Restaurant",
tags: ["food", "dining"],
examples: [
{
italian: "Vorrei un'insalata mista come contorno.",
english: "I'd like a mixed salad as a side dish."
}
]
},
{
id: "206",
italianWord: "dolce",
englishTranslation: "dessert",
partOfSpeech: "Noun",
difficulty: 1,
category: "At the Restaurant",
tags: ["food", "dining"],
examples: [
{
italian: "Per dolce, prendo il tiramisù.",
english: "For dessert, I'll have the tiramisu."
}
]
},
{
id: "207",
italianWord: "bevanda",
englishTranslation: "drink",
partOfSpeech: "Noun",
difficulty: 1,
category: "At the Restaurant",
tags: ["food", "dining"],
examples: [
{
italian: "Che bevanda desidera?",
english: "What drink would you like?"
}
]
},
{
id: "208",
italianWord: "cameriere",
englishTranslation: "waiter",
partOfSpeech: "Noun",
difficulty: 2,
category: "At the Restaurant",
tags: ["people", "dining"],
examples: [
{
italian: "Scusi, cameriere, posso ordinare?",
english: "Excuse me, waiter, can I order?"
}
]
},
{
id: "209",
italianWord: "cameriera",
englishTranslation: "waitress",
partOfSpeech: "Noun",
difficulty: 2,
category: "At the Restaurant",
tags: ["people", "dining"],
examples: [
{
italian: "La cameriera ci ha portato il conto.",
english: "The waitress brought us the bill."
}
]
},
{
id: "210",
italianWord: "conto",
englishTranslation: "bill",
partOfSpeech: "Noun",
difficulty: 1,
category: "At the Restaurant",
tags: ["dining", "money"],
examples: [
{
italian: "Potrei avere il conto, per favore?",
english: "Could I have the bill, please?"
}
]
},
{
id: "211",
italianWord: "prenotare",
englishTranslation: "to book, to reserve",
partOfSpeech: "Verb",
difficulty: 2,
category: "At the Restaurant",
tags: ["dining", "actions"],
examples: [
{
italian: "Vorrei prenotare un tavolo per due persone.",
english: "I'd like to reserve a table for two people."
}
]
},
{
id: "212",
italianWord: "ordinare",
englishTranslation: "to order",
partOfSpeech: "Verb",
difficulty: 2,
category: "At the Restaurant",
tags: ["dining", "actions"],
examples: [
{
italian: "Siete pronti per ordinare?",
english: "Are you ready to order?"
}
]
},
{
id: "213",
italianWord: "consigliare",
englishTranslation: "to recommend",
partOfSpeech: "Verb",
difficulty: 2,
category: "At the Restaurant",
tags: ["dining", "actions"],
examples: [
{
italian: "Cosa ci consiglia come specialità della casa",
english: "What do you recommend as the house specialty?"
      }
    ]
  },
  {
    id: "214",
    italianWord: "assaggiare",
    englishTranslation: "to taste",
    partOfSpeech: "Verb",
    difficulty: 2,
    category: "At the Restaurant",
    tags: ["dining", "actions"],
    examples: [
      {
        italian: "Vorrei assaggiare il vino prima di ordinare una bottiglia.",
        english: "I'd like to taste the wine before ordering a bottle."
      }
    ]
  },
  {
    id: "215",
    italianWord: "allergico",
    englishTranslation: "allergic",
    partOfSpeech: "Adjective",
    difficulty: 2,
    category: "At the Restaurant",
    tags: ["dining", "health"],
    examples: [
      {
        italian: "Sono allergico alle arachidi.",
        english: "I'm allergic to peanuts."
      }
    ]
  },
  {
    id: "216",
    italianWord: "vegetariano",
    englishTranslation: "vegetarian",
    partOfSpeech: "Adjective/Noun",
    difficulty: 2,
    category: "At the Restaurant",
    tags: ["dining", "diet"],
    examples: [
      {
        italian: "Avete opzioni vegetariane?",
        english: "Do you have vegetarian options?"
      }
    ]
  },
  {
    id: "217",
    italianWord: "vegano",
    englishTranslation: "vegan",
    partOfSpeech: "Adjective/Noun",
    difficulty: 2,
    category: "At the Restaurant",
    tags: ["dining", "diet"],
    examples: [
      {
        italian: "Questo piatto è vegano?",
        english: "Is this dish vegan?"
      }
    ]
  },
  {
    id: "218",
    italianWord: "piccante",
    englishTranslation: "spicy",
    partOfSpeech: "Adjective",
    difficulty: 2,
    category: "At the Restaurant",
    tags: ["dining", "food description"],
    examples: [
      {
        italian: "Quanto è piccante questo piatto?",
        english: "How spicy is this dish?"
      }
    ]
  },
  {
    id: "219",
    italianWord: "al dente",
    englishTranslation: "cooked to be firm to the bite",
    partOfSpeech: "Phrase",
    difficulty: 3,
    category: "At the Restaurant",
    tags: ["dining", "food description"],
    examples: [
      {
        italian: "Mi piace la pasta al dente.",
        english: "I like pasta cooked al dente."
      }
    ]
  },
  {
    id: "220",
    italianWord: "ben cotto",
    englishTranslation: "well done",
    partOfSpeech: "Phrase",
    difficulty: 2,
    category: "At the Restaurant",
    tags: ["dining", "food description"],
    examples: [
      {
        italian: "Vorrei la bistecca ben cotta.",
        english: "I'd like the steak well done."
      }
    ]
  },
  {
    id: "221",
    italianWord: "al sangue",
    englishTranslation: "rare (for meat)",
    partOfSpeech: "Phrase",
    difficulty: 3,
    category: "At the Restaurant",
    tags: ["dining", "food description"],
    examples: [
      {
        italian: "Preferisco la carne al sangue.",
        english: "I prefer meat rare."
      }
    ]
  },
  {
    id: "222",
    italianWord: "coperto",
    englishTranslation: "cover charge",
    partOfSpeech: "Noun",
    difficulty: 3,
    category: "At the Restaurant",
    tags: ["dining", "money"],
    examples: [
      {
        italian: "Il coperto è incluso nel conto?",
        english: "Is the cover charge included in the bill?"
      }
    ]
  },
  {
    id: "223",
    italianWord: "mancia",
    englishTranslation: "tip",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "At the Restaurant",
    tags: ["dining", "money"],
    examples: [
      {
        italian: "Lasciamo una mancia per il buon servizio.",
        english: "Let's leave a tip for the good service."
      }
    ]
  },
  {
    id: "224",
    italianWord: "acqua naturale",
    englishTranslation: "still water",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "At the Restaurant",
    tags: ["dining", "drinks"],
    examples: [
      {
        italian: "Vorrei un bicchiere di acqua naturale, per favore.",
        english: "I'd like a glass of still water, please."
      }
    ]
  },
  {
    id: "225",
    italianWord: "acqua frizzante",
    englishTranslation: "sparkling water",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "At the Restaurant",
    tags: ["dining", "drinks"],
    examples: [
      {
        italian: "Preferisco l'acqua frizzante.",
        english: "I prefer sparkling water."
      }
    ]
  },
  {
    id: "226",
    italianWord: "vino della casa",
    englishTranslation: "house wine",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "At the Restaurant",
    tags: ["dining", "drinks"],
    examples: [
      {
        italian: "Prenderemo una bottiglia di vino della casa.",
        english: "We'll have a bottle of house wine."
      }
    ]
  },
  {
    id: "227",
    italianWord: "lista dei vini",
    englishTranslation: "wine list",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "At the Restaurant",
    tags: ["dining", "drinks"],
    examples: [
      {
        italian: "Potrei vedere la lista dei vini?",
        english: "Could I see the wine list?"
      }
    ]
  },
  {
    id: "228",
    italianWord: "caffè",
    englishTranslation: "coffee",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "At the Restaurant",
    tags: ["dining", "drinks"],
    examples: [
      {
        italian: "Un caffè espresso, per favore.",
        english: "An espresso coffee, please."
      }
    ]
  },
  {
    id: "229",
    italianWord: "digestivo",
    englishTranslation: "digestif",
    partOfSpeech: "Noun",
    difficulty: 3,
    category: "At the Restaurant",
    tags: ["dining", "drinks"],
    examples: [
      {
        italian: "Vorrei un digestivo dopo cena.",
        english: "I'd like a digestif after dinner."
      }
    ]
  },
  {
    id: "230",
    italianWord: "buon appetito",
    englishTranslation: "enjoy your meal",
    partOfSpeech: "Phrase",
    difficulty: 1,
    category: "At the Restaurant",
    tags: ["dining", "expressions"],
    examples: [
      {
        italian: "Buon appetito a tutti!",
        english: "Enjoy your meal, everyone!"
      }
    ]
  },
  {
    id: "231",
    italianWord: "negozio",
    englishTranslation: "shop, store",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Shopping",
    tags: ["commerce", "places"],
    examples: [
      {
        italian: "C'è un negozio di scarpe qui vicino?",
        english: "Is there a shoe store nearby?"
      }
    ]
  },
  {
    id: "232",
    italianWord: "centro commerciale",
    englishTranslation: "shopping mall",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "places"],
    examples: [
      {
        italian: "Andiamo al centro commerciale questo weekend?",
        english: "Shall we go to the shopping mall this weekend?"
      }
    ]
  },
  {
    id: "233",
    italianWord: "mercato",
    englishTranslation: "market",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Shopping",
    tags: ["commerce", "places"],
    examples: [
      {
        italian: "Il mercato è aperto ogni sabato mattina.",
        english: "The market is open every Saturday morning."
      }
    ]
  },
  {
    id: "234",
    italianWord: "saldi",
    englishTranslation: "sales",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "events"],
    examples: [
      {
        italian: "I saldi invernali iniziano a gennaio.",
        english: "The winter sales start in January."
      }
    ]
  },
  {
    id: "235",
    italianWord: "sconto",
    englishTranslation: "discount",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "money"],
    examples: [
      {
        italian: "C'è uno sconto del 20% su questo articolo.",
        english: "There's a 20% discount on this item."
      }
    ]
  },
  {
    id: "236",
    italianWord: "taglia",
    englishTranslation: "size",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "clothing"],
    examples: [
      {
        italian: "Qual è la tua taglia?",
        english: "What's your size?"
      }
    ]
  },
  {
    id: "237",
    italianWord: "provare",
    englishTranslation: "to try on",
    partOfSpeech: "Verb",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "actions"],
    examples: [
      {
        italian: "Posso provare questi pantaloni?",
        english: "Can I try on these pants?"
      }
    ]
  },
  {
    id: "238",
    italianWord: "camerino",
    englishTranslation: "fitting room",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "places"],
    examples: [
      {
        italian: "Dov'è il camerino?",
        english: "Where is the fitting room?"
      }
    ]
  },
  {
    id: "239",
    italianWord: "cassa",
    englishTranslation: "cash register, checkout",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "places"],
    examples: [
      {
        italian: "C'è molta fila alla cassa.",
        english: "There's a long line at the checkout."
      }
    ]
  },
  {
    id: "240",
    italianWord: "pagare",
    englishTranslation: "to pay",
    partOfSpeech: "Verb",
    difficulty: 1,
    category: "Shopping",
    tags: ["commerce", "actions", "money"],
    examples: [
      {
        italian: "Posso pagare con carta di credito?",
        english: "Can I pay by credit card?"
      }
    ]
  },
  {
    id: "241",
    italianWord: "contanti",
    englishTranslation: "cash",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "money"],
    examples: [
      {
        italian: "Accettate solo contanti?",
        english: "Do you only accept cash?"
      }
    ]
  },
  {
    id: "242",
    italianWord: "carta di credito",
    englishTranslation: "credit card",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "money"],
    examples: [
      {
        italian: "La mia carta di credito è stata rifiutata.",
        english: "My credit card was declined."
      }
    ]
  },
  {
    id: "243",
    italianWord: "bancomat",
    englishTranslation: "ATM card",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "money"],
    examples: [
      {
        italian: "Devo prelevare dei soldi al bancomat.",
        english: "I need to withdraw some money from the ATM."
      }
    ]
  },
  {
    id: "244",
    italianWord: "scontrino",
    englishTranslation: "receipt",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "money"],
    examples: [
      {
        italian: "Posso avere lo scontrino, per favore?",
        english: "Can I have the receipt, please?"
      }
    ]
  },
  {
    id: "245",
    italianWord: "garanzia",
    englishTranslation: "warranty",
    partOfSpeech: "Noun",
    difficulty: 3,
    category: "Shopping",
    tags: ["commerce", "customer service"],
    examples: [
      {
        italian: "Quanto dura la garanzia su questo prodotto?",
        english: "How long is the warranty on this product?"
      }
    ]
  },
  {
    id: "246",
    italianWord: "cambio",
    englishTranslation: "exchange",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "customer service"],
    examples: [
      {
        italian: "Posso fare un cambio se non mi sta bene?",
        english: "Can I exchange it if it doesn't fit?"
      }
    ]
  },
  {
    id: "247",
    italianWord: "rimborso",
    englishTranslation: "refund",
    partOfSpeech: "Noun",
    difficulty: 3,
    category: "Shopping",
    tags: ["commerce", "customer service", "money"],
    examples: [
      {
        italian: "Vorrei chiedere un rimborso per questo articolo.",
        english: "I'd like to request a refund for this item."
      }
    ]
  },
  {
    id: "248",
    italianWord: "offerta speciale",
    englishTranslation: "special offer",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "marketing"],
    examples: [
      {
        italian: "C'è un'offerta speciale sui prodotti per la casa.",
        english: "There's a special offer on household products."
      }
    ]
  },
  {
    id: "249",
    italianWord: "vetrina",
    englishTranslation: "shop window",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "places"],
    examples: [
      {
        italian: "Ho visto un bellissimo vestito in vetrina.",
        english: "I saw a beautiful dress in the shop window."
      }
    ]
  },
  {
    id: "250",
    italianWord: "reparto",
    englishTranslation: "department",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "places"],
    examples: [
      {
        italian: "Il reparto scarpe è al secondo piano.",
        english: "The shoe department is on the second floor."
      }
    ]
  },
  {
    id: "251",
    italianWord: "centro commerciale",
    englishTranslation: "shopping mall",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "places"],
    examples: [
      {
        italian: "Andiamo al centro commerciale questo weekend?",
        english: "Shall we go to the shopping mall this weekend?"
      }
    ]
  },
  {
    id: "252",
    italianWord: "fare shopping",
    englishTranslation: "to go shopping",
    partOfSpeech: "Verb",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "actions"],
    examples: [
      {
        italian: "Mi piace fare shopping il sabato pomeriggio.",
        english: "I like to go shopping on Saturday afternoons."
      }
    ]
  },
  {
    id: "253",
    italianWord: "acquisto",
    englishTranslation: "purchase",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "actions"],
    examples: [
      {
        italian: "Hai fatto un buon acquisto.",
        english: "You made a good purchase."
      }
    ]
  },
  {
    id: "254",
    italianWord: "carrello",
    englishTranslation: "shopping cart",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "objects"],
    examples: [
      {
        italian: "Il mio carrello è pieno di prodotti.",
        english: "My shopping cart is full of products."
      }
    ]
  },
  {
    id: "255",
    italianWord: "cestino",
    englishTranslation: "shopping basket",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "objects"],
    examples: [
      {
        italian: "Prendi un cestino all'ingresso del negozio.",
        english: "Take a shopping basket at the store entrance."
      }
    ]
  },
  {
    id: "256",
    italianWord: "etichetta",
    englishTranslation: "label, price tag",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "objects"],
    examples: [
      {
        italian: "Controlla l'etichetta per vedere il prezzo.",
        english: "Check the price tag to see the price."
      }
    ]
  },
  {
    id: "257",
    italianWord: "espositore",
    englishTranslation: "display stand",
    partOfSpeech: "Noun",
    difficulty: 3,
    category: "Shopping",
    tags: ["commerce", "objects"],
    examples: [
      {
        italian: "I nuovi prodotti sono sull'espositore vicino all'entrata.",
        english: "The new products are on the display stand near the entrance."
      }
    ]
  },
  {
    id: "258",
    italianWord: "scaffale",
    englishTranslation: "shelf",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "objects"],
    examples: [
      {
        italian: "Il libro che cerchi è sullo scaffale in alto.",
        english: "The book you're looking for is on the top shelf."
      }
    ]
  },
  {
    id: "259",
    italianWord: "cliente",
    englishTranslation: "customer",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Shopping",
    tags: ["commerce", "people"],
    examples: [
      {
        italian: "Il cliente ha sempre ragione.",
        english: "The customer is always right."
      }
    ]
  },
  {
    id: "260",
    italianWord: "commesso",
    englishTranslation: "shop assistant",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Shopping",
    tags: ["commerce", "people"],
    examples: [
      {
        italian: "Ho chiesto aiuto al commesso per trovare la mia taglia.",
        english: "I asked the shop assistant for help finding my size."
      }
    ]
  },
  {
    id: "261",
    italianWord: "valigia",
    englishTranslation: "suitcase",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Traveling",
    tags: ["travel", "luggage"],
    examples: [
      {
        italian: "Ho perso la mia valigia all'aeroporto.",
        english: "I lost my suitcase at the airport."
      }
    ]
  },
  {
    id: "262",
    italianWord: "passaporto",
    englishTranslation: "passport",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Traveling",
    tags: ["travel", "documents"],
    examples: [
      {
        italian: "Non dimenticare il passaporto quando viaggi all'estero.",
        english: "Don't forget your passport when traveling abroad."
      }
    ]
  },
  {
    id: "263",
    italianWord: "biglietto",
    englishTranslation: "ticket",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Traveling",
    tags: ["travel", "documents"],
    examples: [
      {
        italian: "Ho prenotato il biglietto aereo online.",
        english: "I booked the plane ticket online."
      }
    ]
  },
  {
    id: "264",
    italianWord: "prenotazione",
    englishTranslation: "reservation",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Traveling",
    tags: ["travel", "accommodation"],
    examples: [
      {
        italian: "Hai fatto la prenotazione per l'albergo?",
        english: "Did you make the reservation for the hotel?"
      }
    ]
  },
  {
    id: "265",
    italianWord: "albergo",
    englishTranslation: "hotel",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Traveling",
    tags: ["travel", "accommodation"],
    examples: [
      {
        italian: "L'albergo si trova nel centro della città.",
        english: "The hotel is located in the city center."
      }
    ]
  },
  {
    id: "266",
    italianWord: "ostello",
    englishTranslation: "hostel",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Traveling",
    tags: ["travel", "accommodation"],
    examples: [
      {
        italian: "Gli ostelli sono un'opzione economica per i giovani viaggiatori.",
        english: "Hostels are an economical option for young travelers."
      }
    ]
  },
  {
    id: "267",
    italianWord: "aeroporto",
    englishTranslation: "airport",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Traveling",
    tags: ["travel", "transportation"],
    examples: [
      {
        italian: "L'aeroporto è a 30 minuti dal centro città.",
        english: "The airport is 30 minutes from the city center."
      }
    ]
  },
  {
    id: "268",
    italianWord: "stazione",
    englishTranslation: "station",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Traveling",
    tags: ["travel", "transportation"],
    examples: [
      {
        italian: "Il treno parte dalla stazione centrale.",
        english: "The train departs from the central station."
      }
    ]
  },
  {
    id: "269",
    italianWord: "volo",
    englishTranslation: "flight",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Traveling",
    tags: ["travel", "transportation"],
    examples: [
      {
        italian: "Il mio volo è stato cancellato.",
        english: "My flight has been canceled."
      }
    ]
  },
  {
    id: "270",
    italianWord: "ritardo",
    englishTranslation: "delay",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Traveling",
    tags: ["travel", "transportation"],
    examples: [
      {
        italian: "C'è un ritardo di 30 minuti per il treno.",
        english: "There's a 30-minute delay for the train."
      }
    ]
  },
  {
    id: "271",
    italianWord: "partenza",
    englishTranslation: "departure",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Traveling",
    tags: ["travel", "transportation"],
    examples: [
      {
        italian: "L'ora di partenza è alle 9:00.",
        english: "The departure time is at 9:00."
      }
    ]
  },
  {
    id: "272",
    italianWord: "arrivo",
    englishTranslation: "arrival",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Traveling",
    tags: ["travel", "transportation"],
    examples: [
      {
        italian: "L'arrivo è previsto per le 15:30.",
        english: "The arrival is scheduled for 15:30."
      }
    ]
  },
  {
    id: "273",
    italianWord: "bagaglio",
    englishTranslation: "luggage",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Traveling",
    tags: ["travel", "luggage"],
    examples: [
      {
        italian: "Hai controllato il peso del tuo bagaglio?",
        english: "Did you check the weight of your luggage?"
      }
    ]
  },
  {
    id: "274",
    italianWord: "bagaglio a mano",
    englishTranslation: "hand luggage, carry-on",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Traveling",
    tags: ["travel", "luggage"],
    examples: [
      {
        italian: "Puoi portare solo un bagaglio a mano in cabina.",
        english: "You can only bring one carry-on in the cabin."
      }
    ]
  },
  {
    id: "275",
    italianWord: "dogana",
    englishTranslation: "customs",
    partOfSpeech: "Noun",
    difficulty: 3,
    category: "Traveling",
    tags: ["travel", "legal"],
    examples: [
      {
        italian: "Devi dichiarare gli oggetti alla dogana.",
        english: "You must declare items at customs."
      }
    ]
  },
  {
    id: "276",
    italianWord: "visto",
    englishTranslation: "visa",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Traveling",
    tags: ["travel", "documents"],
    examples: [
      {
        italian: "Ho bisogno di un visto per visitare quel paese.",
        english: "I need a visa to visit that country."
      }
    ]
  },
  {
    id: "277",
    italianWord: "turista",
    englishTranslation: "tourist",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Traveling",
    tags: ["travel", "people"],
    examples: [
      {
        italian: "Ci sono molti turisti in città durante l'estate.",
        english: "There are many tourists in the city during summer."
      }
    ]
  },
  {
    id: "278",
    italianWord: "guida turistica",
    englishTranslation: "tour guide",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Traveling",
    tags: ["travel", "people"],
    examples: [
      {
        italian: "La guida turistica ci ha mostrato i monumenti più importanti.",
        english: "The tour guide showed us the most important monuments."
      }
    ]
  },
  {
    id: "279",
    italianWord: "mappa",
    englishTranslation: "map",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Traveling",
    tags: ["travel", "objects"],
    examples: [
      {
        italian: "Ho bisogno di una mappa per orientarmi in città.",
        english: "I need a map to orient myself in the city."
      }
    ]
  },
  {
    id: "280",
    italianWord: "itinerario",
    englishTranslation: "itinerary",
    partOfSpeech: "Noun",
    difficulty: 3,
    category: "Traveling",
    tags: ["travel", "planning"],
    examples: [
      {
        italian: "Abbiamo pianificato un itinerario dettagliato per il nostro viaggio.",
        english: "We planned a detailed itinerary for our trip."
      }
    ]
  },
  {
    id: "281",
    italianWord: "escursione",
    englishTranslation: "excursion, hike",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Traveling",
    tags: ["travel", "activities"],
    examples: [
      {
        italian: "Domani faremo un'escursione in montagna.",
        english: "Tomorrow we'll go on a hike in the mountains."
      }
    ]
  },
  {
    id: "282",
    italianWord: "vacanza",
    englishTranslation: "vacation, holiday",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Traveling",
    tags: ["travel", "time"],
    examples: [
      {
        italian: "Ho prenotato una vacanza al mare per agosto.",
        english: "I booked a beach vacation for August."
      }
    ]
  },
  {
    id: "283",
    italianWord: "prenotazione",
    englishTranslation: "reservation, booking",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Traveling",
    tags: ["travel", "planning"],
    examples: [
      {
        italian: "Hai fatto la prenotazione per l'hotel?",
        english: "Did you make the reservation for the hotel?"
      }
    ]
  },
  {
    id: "284",
    italianWord: "camera",
    englishTranslation: "room",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Traveling",
    tags: ["travel", "accommodation"],
    examples: [
      {
        italian: "Vorrei una camera con vista mare.",
        english: "I'd like a room with a sea view."
      }
    ]
  },
  {
    id: "285",
    italianWord: "reception",
    englishTranslation: "reception desk",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Traveling",
    tags: ["travel", "accommodation"],
    examples: [
      {
        italian: "Puoi ritirare la chiave alla reception.",
        english: "You can pick up the key at the reception desk."
      }
    ]
  },
  {
    id: "286",
    italianWord: "colazione",
    englishTranslation: "breakfast",
    partOfSpeech: "Noun",
    difficulty: 1,
    category: "Traveling",
    tags: ["travel", "food"],
    examples: [
      {
        italian: "La colazione è inclusa nel prezzo della camera?",
        english: "Is breakfast included in the room price?"
      }
    ]
  },
  {
    id: "287",
    italianWord: "soggiorno",
    englishTranslation: "stay",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Traveling",
    tags: ["travel", "accommodation"],
    examples: [
      {
        italian: "Il nostro soggiorno durerà una settimana.",
        english: "Our stay will last a week."
      }
    ]
  },
  {
    id: "288",
    italianWord: "check-in",
    englishTranslation: "check-in",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Traveling",
    tags: ["travel", "accommodation"],
    examples: [
      {
        italian: "Il check-in è dalle 14:00 in poi.",
        english: "Check-in is from 2:00 PM onwards."
      }
    ]
  },
  {
    id: "289",
    italianWord: "check-out",
    englishTranslation: "check-out",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Traveling",
    tags: ["travel", "accommodation"],
    examples: [
      {
        italian: "Il check-out deve essere effettuato entro le 11:00.",
        english: "Check-out must be completed by 11:00 AM."
      }
    ]
  },
  {
    id: "290",
    italianWord: "souvenir",
    englishTranslation: "souvenir",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Traveling",
    tags: ["travel", "shopping"],
    examples: [
      {
        italian: "Ho comprato un souvenir per mia sorella.",
        english: "I bought a souvenir for my sister."
      }
    ]
  },
  {
    id: "291",
    italianWord: "matrimonio",
    englishTranslation: "wedding",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Meeting an Italian partner's family for the first time at their sister's wedding",
    tags: ["wedding", "family", "events"],
    examples: [
      {
        italian: "Siamo qui per il matrimonio di mia sorella.",
        english: "We are here for my sister's wedding."
      }
    ]
  },
  {
    id: "292",
    italianWord: "sposa",
    englishTranslation: "bride",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Meeting an Italian partner's family for the first time at their sister's wedding",
    tags: ["wedding", "family"],
    examples: [
      {
        italian: "La sposa è bellissima nel suo abito.",
        english: "The bride is beautiful in her dress."
      }
    ]
  },
  {
    id: "293",
    italianWord: "sposo",
    englishTranslation: "groom",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Meeting an Italian partner's family for the first time at their sister's wedding",
    tags: ["wedding", "family"],
    examples: [
      {
        italian: "Lo sposo sembra molto nervoso.",
        english: "The groom looks very nervous."
      }
    ]
  },
  {
    id: "294",
    italianWord: "cerimonia",
    englishTranslation: "ceremony",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Meeting an Italian partner's family for the first time at their sister's wedding",
    tags: ["wedding", "events"],
    examples: [
      {
        italian: "La cerimonia si terrà in chiesa.",
        english: "The ceremony will be held in the church."
      }
    ]
  },
  {
    id: "295",
    italianWord: "ricevimento",
    englishTranslation: "reception",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Meeting an Italian partner's family for the first time at their sister's wedding",
    tags: ["wedding", "events"],
    examples: [
      {
        italian: "Il ricevimento sarà in un bellissimo giardino.",
        english: "The reception will be in a beautiful garden."
      }
    ]
  },
  {
    id: "296",
    italianWord: "invitato",
    englishTranslation: "guest",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Meeting an Italian partner's family for the first time at their sister's wedding",
    tags: ["wedding", "people"],
    examples: [
      {
        italian: "Ci sono più di 100 invitati al matrimonio.",
        english: "There are more than 100 guests at the wedding."
      }
    ]
  },
  {
    id: "297",
    italianWord: "testimone",
    englishTranslation: "best man/maid of honor",
    partOfSpeech: "Noun",
    difficulty: 3,
    category: "Meeting an Italian partner's family for the first time at their sister's wedding",
    tags: ["wedding", "people"],
    examples: [
      {
        italian: "Il testimone dello sposo farà un discorso durante il ricevimento.",
        english: "The best man will give a speech during the reception."
      }
    ]
  },
  {
    id: "298",
    italianWord: "damigella",
    englishTranslation: "bridesmaid",
    partOfSpeech: "Noun",
    difficulty: 3,
    category: "Meeting an Italian partner's family for the first time at their sister's wedding",
    tags: ["wedding", "people"],
    examples: [
      {
        italian: "Le damigelle indossano abiti color pastello.",
        english: "The bridesmaids are wearing pastel-colored dresses."
      }
    ]
  },
  {
    id: "299",
    italianWord: "bouquet",
    englishTranslation: "bouquet",
    partOfSpeech: "Noun",
    difficulty: 2,
    category: "Meeting an Italian partner's family for the first time at their sister's wedding",
    tags: ["wedding", "objects"],
    examples: [
      {
        italian: "La sposa lancerà il bouquet alle nubili.",
        english: "The bride will throw the bouquet to the single women."
      }
    ]
  },
  {
    id: "300",
    italianWord: "fede nuziale",
    englishTranslation: "wedding ring",
    partOfSpeech: "Noun",
    difficulty: 3,
    category: "Meeting an Italian partner's family for the first time at their sister's wedding",
    tags: ["wedding", "objects"],
    examples: [
      {
        italian: "Gli sposi si scambieranno le fedi nuziali durante la cerimonia.",
        english: "The bride and groom will exchange wedding rings during the ceremony."
      }
    ]
  }
];

export default vocabularyData;