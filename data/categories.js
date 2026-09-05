export const DIFFICULTIES = ['facile', 'moyen', 'difficile'];

export const DIFFICULTY_LABELS = {
  facile: '😊 Facile',
  moyen: '🤔 Moyen',
  difficile: '🔥 Difficile',
};

export const CATEGORIES = {
  animaux: {
    label: 'Animaux',
    emoji: '🐘',
    color: '#f59e0b',
    words: {
      facile: [
        'Éléphant', 'Kangourou', 'Pingouin', 'Chat', 'Chien', 'Lion', 'Tigre',
        'Girafe', 'Zèbre', 'Panda', 'Ours', 'Loup', 'Renard', 'Lapin',
        'Hamster', 'Serpent', 'Crocodile', 'Requin', 'Dauphin', 'Baleine',
        'Aigle', 'Perroquet', 'Hibou', 'Papillon', 'Abeille', 'Escargot',
        'Mouton', 'Vache', 'Cochon', 'Cheval', 'Poule', 'Canard', 'Hérisson',
        'Écureuil', 'Tortue', 'Grenouille'
      ],
      moyen: [
        'Hippopotame', 'Rhinocéros', 'Léopard', 'Jaguar', 'Guépard', 'Gorille',
        'Chimpanzé', 'Manchot', 'Phoque', 'Otarie', 'Pieuvre', 'Méduse',
        'Crevette', 'Homard', 'Crabe', 'Limace', 'Castor', 'Loutre',
        'Chauve-souris', 'Cygne', 'Flamant rose', 'Autruche', 'Caméléon',
        'Iguane', 'Lézard', 'Scorpion', 'Coccinelle', 'Libellule', 'Sauterelle',
        'Fourmi', 'Mouche', 'Moustique', 'Singe', 'Coq', 'Dinde', 'Souris'
      ],
      difficile: [
        'Pangolin', 'Tapir', 'Capybara', 'Tatou', 'Okapi', 'Lémurien', 'Axolotl',
        'Narval', 'Lamantin', 'Ornithorynque', 'Wombat', 'Quokka', 'Tarsier',
        'Yack', 'Marmotte', 'Belette', 'Suricate', 'Wallaby', 'Orque',
        'Cachalot', 'Albatros', 'Toucan', 'Casoar', 'Tamanoir', 'Élan',
        'Caribou', 'Bison', 'Buffle', 'Mouflon', 'Mangouste', 'Vautour',
        'Calmar', 'Espadon'
      ]
    }
  },

  films: {
    label: 'Films',
    emoji: '🎬',
    color: '#ef4444',
    words: {
      facile: [
        'Titanic', 'Amélie Poulain', 'Intouchables', 'Le Roi Lion', 'Avatar',
        'Inception', 'Star Wars', 'Matrix', 'Forrest Gump', 'OSS 117',
        'Les Bronzés', 'La Grande Vadrouille', 'Astérix', 'Les Visiteurs',
        'Le Cinquième Élément', 'Jurassic Park', 'Pulp Fiction', 'Le Parrain',
        'Shrek', 'Toy Story', 'La Reine des Neiges', 'Harry Potter',
        'Le Seigneur des Anneaux', 'Spider-Man', 'Batman', 'Indiana Jones',
        'Retour vers le futur', 'Le Dîner de cons', 'Taxi',
        'Bienvenue chez les Ch\'tis', 'La Haine', 'Les Choristes',
        'Le Fabuleux Destin', 'Ratatouille', 'Là-haut'
      ],
      moyen: [
        'Superman', 'E.T.', 'Les Dents de la mer', 'Rocky', 'Rambo', 'Terminator',
        'Alien', 'Ghostbusters', 'Pirates des Caraïbes', 'Top Gun', 'Pretty Woman',
        'Dirty Dancing', 'La Vie est belle', 'Coco', 'Vice-versa',
        'Le Monde de Nemo', 'Wall-E', 'Cars', 'Madagascar', 'Kung Fu Panda',
        'Moi moche et méchant', 'Mary Poppins', 'Cendrillon', 'Blanche-Neige',
        'Le Livre de la jungle', 'Aladdin', 'La Belle et la Bête', 'Pinocchio',
        'Bambi', 'Mulan', 'Hercule', 'Tarzan', 'Pocahontas', 'Raiponce',
        'Vaiana'
      ],
      difficile: [
        'Citizen Kane', 'Casablanca', '2001 l\'Odyssée de l\'espace', 'Le Mépris',
        'Les Quatre Cents Coups', 'Vertigo', 'Psychose', 'La Liste de Schindler',
        'Le Septième Sceau', 'La Dolce Vita', 'Les Sept Samouraïs', 'La Strada',
        'Le Pianiste', 'Memento', 'Mulholland Drive', 'Persona', 'Apocalypse Now',
        'Le Voyage de Chihiro', 'Princesse Mononoké', 'Mon Voisin Totoro',
        'Le Château ambulant', 'Ponyo', 'Stalker', 'Solaris', 'Rashomon',
        'Métropolis', 'Eraserhead', 'Brazil', 'Donnie Darko', 'Trainspotting',
        'Le Pont de la rivière Kwaï'
      ]
    }
  },

  metiers: {
    label: 'Métiers',
    emoji: '👷',
    color: '#3b82f6',
    words: {
      facile: [
        'Boulanger', 'Pompier', 'Astronaute', 'Médecin', 'Infirmière', 'Pilote',
        'Professeur', 'Avocat', 'Juge', 'Policier', 'Plombier', 'Électricien',
        'Jardinier', 'Cuisinier', 'Serveur', 'Coiffeur', 'Vétérinaire',
        'Dentiste', 'Architecte', 'Journaliste', 'Photographe', 'Pharmacien',
        'Agriculteur', 'Mécanicien', 'Peintre', 'Charpentier', 'Facteur',
        'Boucher', 'Fleuriste', 'Libraire', 'Chanteur', 'Acteur', 'Footballeur',
        'Danseur', 'Magicien', 'Pêcheur'
      ],
      moyen: [
        'Notaire', 'Comptable', 'Banquier', 'Ingénieur', 'Informaticien',
        'Designer', 'Traducteur', 'Bibliothécaire', 'Archéologue', 'Biologiste',
        'Chimiste', 'Astronome', 'Géologue', 'Sage-femme', 'Kinésithérapeute',
        'Psychologue', 'Orthophoniste', 'Ostéopathe', 'Esthéticienne', 'Tatoueur',
        'Bijoutier', 'Cordonnier', 'Tailleur', 'Sommelier', 'Pâtissier',
        'Chocolatier', 'Brasseur', 'Apiculteur', 'Berger', 'Forgeron', 'Ébéniste',
        'Chauffeur', 'Maçon', 'Cascadeur', 'Maître-nageur'
      ],
      difficile: [
        'Funambule', 'Dompteur', 'Garde-forestier', 'Maître-chien', 'Vannier',
        'Verrier', 'Scaphandrier', 'Aiguilleur', 'Cambiste', 'Géomètre',
        'Luthier', 'Paléontologue', 'Volcanologue', 'Spéléologue', 'Égyptologue',
        'Cartographe', 'Calligraphe', 'Marionnettiste', 'Costumier', 'Doubleur',
        'Bruiteur', 'Étalonneur', 'Tonnelier', 'Sellier', 'Tapissier',
        'Coutelier', 'Ferronnier', 'Maréchal-ferrant', 'Œnologue',
        'Souffleur de verre', 'Heaumier', 'Plumassier', 'Marin-pêcheur'
      ]
    }
  },

  celebrites: {
    label: 'Célébrités',
    emoji: '⭐',
    color: '#ec4899',
    words: {
      facile: [
        'Zinédine Zidane', 'Kylian Mbappé', 'Brigitte Bardot', 'Johnny Hallyday',
        'Édith Piaf', 'Coco Chanel', 'Napoléon', 'Louis XIV', 'Charles de Gaulle',
        'Jean Reno', 'Marion Cotillard', 'Audrey Tautou', 'Vanessa Paradis',
        'Jean Dujardin', 'Omar Sy', 'Dany Boon', 'Gad Elmaleh', 'Vincent Cassel',
        'Sophie Marceau', 'Catherine Deneuve', 'Gérard Depardieu', 'Daft Punk',
        'Stromae', 'Indila', 'Aya Nakamura', 'Patrick Bruel', 'Renaud',
        'Mylène Farmer', 'Céline Dion', 'Florent Pagny', 'Coluche',
        'Louis de Funès', 'Jean Gabin', 'Brigitte Macron', 'Emmanuel Macron'
      ],
      moyen: [
        'Albert Einstein', 'Marie Curie', 'Louis Pasteur', 'Victor Hugo',
        'Molière', 'Voltaire', 'Rousseau', 'Picasso', 'Monet', 'Van Gogh',
        'Léonard de Vinci', 'Michel-Ange', 'Beethoven', 'Mozart', 'Bach',
        'Shakespeare', 'Nelson Mandela', 'Gandhi', 'Martin Luther King',
        'Barack Obama', 'Donald Trump', 'Vladimir Poutine', 'Angela Merkel',
        'Reine Élisabeth', 'Lady Diana', 'Steve Jobs', 'Bill Gates',
        'Elon Musk', 'Mark Zuckerberg', 'Walt Disney', 'Roald Dahl',
        'Agatha Christie', 'Stephen King', 'JK Rowling', 'Jamel Debbouze'
      ],
      difficile: [
        'Simone de Beauvoir', 'Simone Veil', 'Olympe de Gouges', 'Frida Kahlo',
        'Salvador Dalí', 'Andy Warhol', 'Marc Chagall', 'Henri Matisse',
        'Auguste Rodin', 'Camille Claudel', 'Marcel Proust', 'Albert Camus',
        'Jean-Paul Sartre', 'Marguerite Duras', 'Romain Gary', 'Émile Zola',
        'Honoré de Balzac', 'Marcel Pagnol', 'François Truffaut',
        'Jean-Luc Godard', 'Agnès Varda', 'Frédéric Chopin', 'Maria Callas',
        'Luciano Pavarotti', 'Charles Aznavour', 'Serge Gainsbourg',
        'Jacques Brel', 'Léo Ferré', 'Barbara', 'Georges Brassens',
        'Mireille Mathieu', 'Diego Rivera'
      ]
    }
  },

  nourriture: {
    label: 'Nourriture',
    emoji: '🥐',
    color: '#10b981',
    words: {
      facile: [
        'Croissant', 'Raclette', 'Sushi', 'Pizza', 'Burger', 'Baguette',
        'Fromage', 'Chocolat', 'Escargot', 'Foie gras', 'Ratatouille', 'Quiche',
        'Crêpe', 'Macaron', 'Tarte Tatin', 'Bœuf bourguignon', 'Cassoulet',
        'Choucroute', 'Bouillabaisse', 'Salade niçoise', 'Steak frites',
        'Jambon', 'Saucisson', 'Camembert', 'Brie', 'Éclair', 'Mille-feuille',
        'Profiterole', 'Soupe à l\'oignon', 'Blanquette', 'Pain au chocolat',
        'Gaufre', 'Madeleine', 'Tiramisu', 'Mousse au chocolat'
      ],
      moyen: [
        'Tartiflette', 'Fondue', 'Pot-au-feu', 'Coq au vin', 'Aligot',
        'Confit de canard', 'Crème brûlée', 'Roquefort', 'Comté', 'Gruyère',
        'Lasagne', 'Risotto', 'Paella', 'Tacos', 'Curry', 'Couscous',
        'Tajine', 'Hot-dog', 'Kebab', 'Falafel', 'Houmous', 'Nems',
        'Soupe miso', 'Pad thaï', 'Ramen', 'Spaghetti', 'Carbonara',
        'Bolognaise', 'Pâté', 'Rillettes', 'Tarte aux pommes', 'Bûche',
        'Galette des rois', 'Crumble', 'Cheesecake'
      ],
      difficile: [
        'Bouchée à la reine', 'Vol-au-vent', 'Gougère', 'Quenelle',
        'Andouillette', 'Boudin noir', 'Tripes', 'Cervelle de canut',
        'Tête de veau', 'Pieds de cochon', 'Pissaladière', 'Socca', 'Galette',
        'Far breton', 'Kouign-amann', 'Canelé', 'Paris-Brest', 'Saint-honoré',
        'Religieuse', 'Baba au rhum', 'Clafoutis', 'Tarte flambée',
        'Vichyssoise', 'Garbure', 'Aïoli', 'Anchoïade', 'Tapenade',
        'Brandade', 'Daube provençale', 'Reblochon', 'Munster'
      ]
    }
  },

  objets: {
    label: 'Objets',
    emoji: '☂️',
    color: '#8b5cf6',
    words: {
      facile: [
        'Parapluie', 'Brosse à dents', 'Télécommande', 'Téléphone', 'Clavier',
        'Casserole', 'Chaise', 'Table', 'Lit', 'Lampe', 'Miroir', 'Ciseaux',
        'Marteau', 'Tournevis', 'Balai', 'Aspirateur', 'Micro-ondes',
        'Réfrigérateur', 'Machine à laver', 'Télévision', 'Ordinateur', 'Livre',
        'Stylo', 'Crayon', 'Gomme', 'Sac à dos', 'Chapeau', 'Lunettes', 'Montre',
        'Ceinture', 'Clé', 'Portefeuille', 'Briquet', 'Bougie', 'Oreiller',
        'Couverture'
      ],
      moyen: [
        'Cahier', 'Couteau', 'Fourchette', 'Cuillère', 'Verre', 'Assiette',
        'Bol', 'Bouteille', 'Vélo', 'Voiture', 'Pince', 'Échelle', 'Brouette',
        'Tondeuse', 'Arrosoir', 'Sèche-cheveux', 'Fer à repasser', 'Grille-pain',
        'Bouilloire', 'Cafetière', 'Tirelire', 'Couette', 'Drap', 'Serviette',
        'Éponge', 'Pelle', 'Râteau', 'Sécateur', 'Tabouret', 'Hamac', 'Berceau',
        'Tronçonneuse', 'Perceuse', 'Boussole', 'Lampe de poche'
      ],
      difficile: [
        'Sextant', 'Astrolabe', 'Périscope', 'Stéthoscope', 'Diapason',
        'Métronome', 'Boulier', 'Sablier', 'Polaroïd', 'Gramophone',
        'Phonographe', 'Manomètre', 'Hygromètre', 'Anémomètre', 'Sismographe',
        'Microscope', 'Télescope', 'Kaléidoscope', 'Stroboscope', 'Tourne-disque',
        'Magnétoscope', 'Photocopieuse', 'Pèse-personne', 'Décapsuleur',
        'Tire-bouchon', 'Casse-noix', 'Presse-agrumes', 'Plumeau', 'Soufflet',
        'Burin', 'Pioche', 'Compas'
      ]
    }
  },

  sports: {
    label: 'Sports',
    emoji: '⚽',
    color: '#14b8a6',
    words: {
      facile: [
        'Football', 'Tennis', 'Basket', 'Rugby', 'Natation', 'Cyclisme',
        'Course', 'Boxe', 'Judo', 'Karaté', 'Golf', 'Ski', 'Snowboard', 'Surf',
        'Volley', 'Handball', 'Ping-pong', 'Badminton', 'Échecs', 'Pétanque',
        'Bowling', 'Gymnastique', 'Danse', 'Yoga', 'Athlétisme', 'Marathon',
        'Sprint', 'Saut en hauteur', 'Plongeon', 'Voile', 'Équitation', 'Pêche',
        'Patinage', 'Hockey', 'Baseball'
      ],
      moyen: [
        'Escalade', 'Parapente', 'Deltaplane', 'Parachutisme',
        'Saut à l\'élastique', 'Tir à l\'arc', 'Escrime', 'Aïkido', 'Taekwondo',
        'Sumo', 'Lutte', 'Haltérophilie', 'Crossfit', 'Triathlon', 'Pentathlon',
        'Décathlon', 'Bobsleigh', 'Luge', 'Patinage artistique',
        'Hockey sur glace', 'Water-polo', 'Aviron', 'Canoë', 'Kayak',
        'Planche à voile', 'Kitesurf', 'Wakeboard', 'Skateboard', 'Roller',
        'BMX', 'VTT', 'Motocross', 'Karting', 'Squash', 'Beach-volley'
      ],
      difficile: [
        'Curling', 'Pelote basque', 'Cricket', 'Polo', 'Croquet', 'Hurling',
        'Kabaddi', 'Sépak takraw', 'Lacrosse', 'Pesäpallo', 'Bandy',
        'Hockey subaquatique', 'Ultimate frisbee', 'Quidditch', 'Footgolf',
        'Footvolley', 'Buzkachi', 'Joute nautique', 'Soule',
        'Course d\'orientation', 'Biathlon', 'Skeleton', 'Slopestyle',
        'Skicross', 'Halfpipe', 'Wushu', 'Pencak silat', 'Capoeira',
        'Krav maga', 'Kendo', 'Iaido', 'Naginata', 'Spéléologie'
      ]
    }
  },

  pays: {
    label: 'Pays',
    emoji: '🌍',
    color: '#06b6d4',
    words: {
      facile: [
        'France', 'Espagne', 'Italie', 'Allemagne', 'Belgique', 'Suisse',
        'Royaume-Uni', 'Portugal', 'Pays-Bas', 'Grèce', 'États-Unis', 'Canada',
        'Mexique', 'Brésil', 'Argentine', 'Chine', 'Japon', 'Corée du Sud',
        'Inde', 'Russie', 'Australie', 'Égypte', 'Maroc', 'Algérie', 'Tunisie',
        'Sénégal', 'Afrique du Sud', 'Turquie', 'Suède', 'Norvège', 'Danemark',
        'Finlande', 'Irlande', 'Pologne', 'Autriche'
      ],
      moyen: [
        'Pérou', 'Chili', 'Colombie', 'Venezuela', 'Cuba',
        'République dominicaine', 'Jamaïque', 'Thaïlande', 'Vietnam',
        'Indonésie', 'Philippines', 'Malaisie', 'Singapour', 'Pakistan',
        'Bangladesh', 'Iran', 'Irak', 'Arabie Saoudite', 'Israël', 'Liban',
        'Syrie', 'Jordanie', 'Émirats arabes unis', 'Kenya', 'Nigeria',
        'Éthiopie', 'Madagascar', 'Islande', 'Croatie', 'Hongrie', 'Roumanie',
        'Bulgarie', 'Tchéquie', 'Slovaquie', 'Ukraine'
      ],
      difficile: [
        'Bhoutan', 'Népal', 'Mongolie', 'Kazakhstan', 'Ouzbékistan',
        'Turkménistan', 'Tadjikistan', 'Kirghizistan', 'Géorgie', 'Arménie',
        'Azerbaïdjan', 'Albanie', 'Macédoine', 'Monténégro', 'Lettonie',
        'Lituanie', 'Estonie', 'Bélarus', 'Moldavie', 'Andorre', 'Saint-Marin',
        'Liechtenstein', 'Monaco', 'Malte', 'Chypre', 'Brunei',
        'Timor oriental', 'Papouasie', 'Fidji', 'Samoa', 'Vanuatu', 'Érythrée',
        'Djibouti', 'Burkina Faso'
      ]
    }
  },

  dessins: {
    label: 'Dessins animés',
    emoji: '🎨',
    color: '#f43f5e',
    words: {
      facile: [
        'Mickey', 'Minnie', 'Donald', 'Pluto', 'Dingo', 'Bugs Bunny', 'Daffy Duck',
        'Tom et Jerry', 'Titi et Grosminet', 'Bip Bip', 'Coyote', 'Schtroumpfs',
        'Astérix', 'Obélix', 'Idéfix', 'Tintin', 'Milou', 'Lucky Luke',
        'Garfield', 'Snoopy', 'Spongebob', 'Bart Simpson', 'Homer Simpson',
        'Pikachu', 'Stitch', 'Buzz l\'Éclair', 'Woody', 'Nemo', 'Dory',
        'Shrek', 'Fiona', 'Simba', 'Mufasa', 'Elsa', 'Olaf'
      ],
      moyen: [
        'Anna', 'Raiponce', 'Mulan', 'Ariel', 'Pocahontas', 'Aladdin', 'Jasmine',
        'Belle', 'La Bête', 'Cendrillon', 'Aurore', 'Blanche-Neige', 'Peter Pan',
        'Clochette', 'Capitaine Crochet', 'Bambi', 'Dumbo', 'Pongo', 'Cruella',
        'Maléfique', 'Ursula', 'Jafar', 'Scar', 'Hadès', 'Hercule', 'Tarzan',
        'Jane', 'Wall-E', 'Eve', 'Carl', 'Russell', 'Vaiana', 'Maui', 'Mowgli',
        'Patrick l\'étoile'
      ],
      difficile: [
        'Goku', 'Vegeta', 'Naruto', 'Sasuke', 'Luffy', 'Zoro', 'Sailor Moon',
        'Totoro', 'Chihiro', 'Howl', 'Ponyo', 'Mononoké', 'Kiki', 'Porco Rosso',
        'Astro Boy', 'Cobra', 'Albator', 'Goldorak', 'Candy', 'Lady Oscar',
        'Heidi', 'Bouba', 'Pollyanna', 'Maya l\'abeille', 'Hé Arnold',
        'Daria', 'Beavis', 'Ren et Stimpy', 'Cowboy Bebop', 'Lupin III',
        'Détective Conan', 'Doraemon', 'Inspecteur Gadget', 'Bibifoc',
        'Olive et Tom'
      ]
    }
  },

  marques: {
    label: 'Marques',
    emoji: '🏷️',
    color: '#facc15',
    words: {
      facile: [
        'Apple', 'Google', 'Microsoft', 'Samsung', 'Nike', 'Adidas', 'Puma',
        'Coca-Cola', 'Pepsi', 'McDonald\'s', 'Burger King', 'KFC', 'Subway',
        'Starbucks', 'Nutella', 'Oreo', 'Kinder', 'Lego', 'Disney', 'Netflix',
        'YouTube', 'Facebook', 'Instagram', 'TikTok', 'Twitter', 'WhatsApp',
        'Snapchat', 'Amazon', 'eBay', 'PayPal', 'Visa', 'Mastercard', 'Sony',
        'Nintendo', 'PlayStation'
      ],
      moyen: [
        'Renault', 'Peugeot', 'Citroën', 'Volkswagen', 'BMW', 'Mercedes',
        'Audi', 'Toyota', 'Ferrari', 'Lamborghini', 'Porsche', 'IKEA',
        'H&M', 'Zara', 'Decathlon', 'Carrefour', 'Auchan', 'Leclerc',
        'Monoprix', 'Picard', 'Lidl', 'Danone', 'Yoplait', 'Nestlé',
        'L\'Oréal', 'Chanel', 'Dior', 'Hermès', 'Louis Vuitton', 'Gucci',
        'Prada', 'Rolex', 'Swatch', 'Bic', 'Petit Bateau'
      ],
      difficile: [
        'Patagonia', 'Comme des Garçons', 'Maison Margiela', 'Issey Miyake',
        'Loewe', 'Balenciaga', 'Bottega Veneta', 'Saint Laurent', 'Givenchy',
        'Lanvin', 'Berluti', 'Goyard', 'Tiffany', 'Cartier', 'Bulgari',
        'Van Cleef', 'Patek Philippe', 'Audemars Piguet', 'Vacheron Constantin',
        'Bang & Olufsen', 'Leica', 'Hasselblad', 'Bose', 'Sennheiser',
        'Le Creuset', 'Staub', 'Opinel', 'Laguiole', 'Petzl', 'Salomon',
        'Millet', 'Lacoste', 'Aigle'
      ]
    }
  },

  musique: {
    label: 'Musique',
    emoji: '🎵',
    color: '#6366f1',
    words: {
      facile: [
        'Guitare', 'Piano', 'Batterie', 'Violon', 'Flûte', 'Trompette',
        'Saxophone', 'Harmonica', 'Tambour', 'Cymbales', 'Maracas', 'Triangle',
        'Xylophone', 'Beatles', 'Queen', 'Rolling Stones', 'ABBA', 'Madonna',
        'Michael Jackson', 'Elvis Presley', 'Beyoncé', 'Rihanna', 'Lady Gaga',
        'Eminem', 'Drake', 'Adele', 'Ed Sheeran', 'Taylor Swift', 'Billie Eilish',
        'BTS', 'Daft Punk', 'Stromae', 'Indila', 'Aya Nakamura', 'Angèle'
      ],
      moyen: [
        'Accordéon', 'Mandoline', 'Banjo', 'Ukulélé', 'Contrebasse', 'Violoncelle',
        'Alto', 'Clarinette', 'Hautbois', 'Basson', 'Tuba', 'Trombone', 'Cor',
        'Orgue', 'Synthétiseur', 'Harpe', 'Clavecin', 'Nirvana', 'Pink Floyd',
        'Led Zeppelin', 'AC/DC', 'Metallica', 'Coldplay', 'Radiohead', 'Muse',
        'Air', 'Phoenix', 'Justice', 'Jean-Jacques Goldman', 'Francis Cabrel',
        'Eddy Mitchell', 'Bigflo et Oli', 'Maître Gims', 'Soprano', 'Orelsan'
      ],
      difficile: [
        'Theremin', 'Bandonéon', 'Vielle à roue', 'Cithare', 'Sitar', 'Tabla',
        'Didgeridoo', 'Cornemuse', 'Bombarde', 'Vibraphone', 'Marimba',
        'Célesta', 'Glockenspiel', 'Ondes Martenot', 'Hang drum', 'Erhu',
        'Pipa', 'Shamisen', 'Kora', 'Balafon', 'Djembé', 'Bouzouki',
        'Charango', 'Quena', 'Flûte de pan', 'Théorbe', 'Luth', 'Cromorne',
        'Ophicléide', 'Sacqueboute', 'Clavicorde', 'Épinette', 'Chalumeau',
        'Galoubet'
      ]
    }
  },

  actions: {
    label: 'Actions',
    emoji: '🏃',
    color: '#84cc16',
    words: {
      facile: [
        'Courir', 'Marcher', 'Sauter', 'Nager', 'Voler', 'Manger', 'Boire',
        'Dormir', 'Rire', 'Pleurer', 'Crier', 'Chanter', 'Danser', 'Lire',
        'Écrire', 'Dessiner', 'Peindre', 'Conduire', 'Cuisiner', 'Laver',
        'Balayer', 'Coudre', 'Tricoter', 'Jouer', 'Travailler', 'Étudier',
        'Aimer', 'Embrasser', 'Câliner', 'Se battre', 'Tomber', 'Glisser',
        'Grimper', 'Plonger', 'Bâiller'
      ],
      moyen: [
        'Jongler', 'Galoper', 'Trottiner', 'Ramper', 'Sautiller', 'Patiner',
        'Skier', 'Surfer', 'Pédaler', 'Souder', 'Bricoler', 'Jardiner',
        'Méditer', 'Éternuer', 'Tousser', 'Ronfler', 'Siffler', 'Mâcher',
        'Saliver', 'Frémir', 'Trembler', 'Vibrer', 'Hurler', 'Murmurer',
        'Chuchoter', 'Bégayer', 'Râler', 'Soupirer', 'Bouder', 'Grimacer',
        'Cligner', 'Loucher', 'Bafouiller', 'Esquiver', 'Renifler'
      ],
      difficile: [
        'Pirouetter', 'Cabrioler', 'Gambader', 'Trémousser', 'Frétiller',
        'Tortiller', 'Vrombir', 'Pétarader', 'Crépiter', 'Trépigner',
        'Piétiner', 'Trébucher', 'Vaciller', 'Chanceler', 'Tituber',
        'Zigzaguer', 'Tergiverser', 'Atermoyer', 'Soliloquer', 'Pérorer',
        'Discourir', 'Palabrer', 'Pavoiser', 'Triompher', 'Jubiler',
        'Exulter', 'Sangloter', 'Geindre', 'Gémir', 'Maugréer', 'Glapir',
        'Caqueter', 'Bredouiller'
      ]
    }
  },

  formule1: {
    label: 'Formule 1',
    emoji: '🏎️',
    color: '#f97316',
    words: {
      facile: [
        'Lewis Hamilton', 'Max Verstappen', 'Michael Schumacher', 'Ayrton Senna',
        'Fernando Alonso', 'Sebastian Vettel', 'Charles Leclerc', 'Alain Prost',
        'Lando Norris', 'Carlos Sainz', 'George Russell', 'Kimi Räikkönen',
        'Nico Rosberg', 'Jenson Button', 'Niki Lauda', 'Pierre Gasly',
        'Esteban Ocon', 'Oscar Piastri', 'Sergio Pérez', 'Daniel Ricciardo',
        'Monaco', 'Monza', 'Silverstone', 'Spa-Francorchamps', 'Suzuka',
        'Interlagos', 'Nürburgring', 'Paul Ricard', 'Barcelone', 'Abu Dhabi',
        'Ferrari', 'Mercedes', 'Red Bull', 'McLaren', 'Alpine'
      ],
      moyen: [
        'Mika Häkkinen', 'Jacques Villeneuve', 'Damon Hill', 'Nigel Mansell',
        'Nelson Piquet', 'Jackie Stewart', 'Jim Clark', 'Juan Manuel Fangio',
        'Emerson Fittipaldi', 'Mario Andretti', 'Gilles Villeneuve',
        'Rubens Barrichello', 'Felipe Massa', 'Mark Webber', 'Valtteri Bottas',
        'Romain Grosjean', 'Jean Alesi', 'Olivier Panis',
        'Hungaroring', 'Zandvoort', 'Imola', 'Bakou', 'Marina Bay',
        'Austin', 'Albert Park', 'Circuit Gilles-Villeneuve', 'Red Bull Ring',
        'Jeddah', 'Las Vegas', 'Miami', 'Losail', 'Shanghai', 'Sakhir',
        'Toto Wolff', 'Christian Horner', 'Frédéric Vasseur', 'Zak Brown',
        'Andrea Stella', 'Guenther Steiner', 'Ron Dennis', 'Flavio Briatore',
        'Jean Todt', 'Ross Brawn',
        'Williams', 'Aston Martin', 'Haas', 'Sauber', 'Renault F1', 'Lotus',
        'Brabham', 'Benetton', 'Toro Rosso'
      ],
      difficile: [
        'Alberto Ascari', 'Giuseppe Farina', 'Mike Hawthorn', 'Phil Hill',
        'Jack Brabham', 'Graham Hill', 'John Surtees', 'Denny Hulme',
        'Jochen Rindt', 'Jody Scheckter', 'Alan Jones', 'Keke Rosberg',
        'Didier Pironi', 'Jacques Laffite', 'Patrick Depailler',
        'Jean-Pierre Beltoise', 'François Cevert', 'Jo Siffert',
        'Clay Regazzoni', 'Ronnie Peterson', 'René Arnoux',
        'Jean-Pierre Jabouille',
        'Watkins Glen', 'Kyalami', 'Jarama', 'Zolder', 'Estoril', 'Adelaide',
        'Magny-Cours', 'Dijon-Prenois', 'Long Beach', 'Sepang', 'Istanbul Park',
        'Portimão', 'Mugello', 'Brands Hatch', 'Österreichring',
        'Colin Chapman', 'Enzo Ferrari', 'Ken Tyrrell', 'Frank Williams',
        'Peter Sauber', 'Eddie Jordan', 'Guy Ligier', 'Mattia Binotto',
        'Otmar Szafnauer', 'Franz Tost', 'Cyril Abiteboul',
        'Maurizio Arrivabene',
        'Tyrrell', 'Ligier', 'Jordan', 'Minardi', 'Arrows', 'Prost GP',
        'BAR', 'Jaguar Racing', 'Stewart GP', 'Force India', 'Racing Point',
        'Caterham', 'Marussia', 'Super Aguri'
      ]
    }
  },

  circuits: {
    label: 'Circuits F1',
    emoji: '🏁',
    color: '#f1f5f9',
    render: 'circuit',
    mono: true,
    unit: 'tracés',
    words: {
      facile: [
        'Monaco', 'Monza', 'Silverstone', 'Spa-Francorchamps', 'Suzuka',
        'Interlagos', 'Abu Dhabi', 'Circuit Gilles-Villeneuve', 'Bakou'
      ],
      moyen: [
        'Barcelone', 'Shanghai', 'Zandvoort', 'Hungaroring', 'Imola',
        'Marina Bay', 'Austin', 'Red Bull Ring'
      ],
      difficile: [
        'Sakhir', 'Albert Park', 'Jeddah', 'Las Vegas', 'Miami', 'Losail',
        'Mexico', 'Madrid'
      ]
    }
  }
};
