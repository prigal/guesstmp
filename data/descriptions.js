import { DESC_animaux } from './descriptions/animaux.js';
import { DESC_films } from './descriptions/films.js';
import { DESC_metiers } from './descriptions/metiers.js';
import { DESC_celebrites } from './descriptions/celebrites.js';
import { DESC_nourriture } from './descriptions/nourriture.js';
import { DESC_objets } from './descriptions/objets.js';
import { DESC_sports } from './descriptions/sports.js';
import { DESC_pays } from './descriptions/pays.js';
import { DESC_dessins } from './descriptions/dessins.js';
import { DESC_marques } from './descriptions/marques.js';
import { DESC_musique } from './descriptions/musique.js';
import { DESC_actions } from './descriptions/actions.js';
import { DESC_formule1 } from './descriptions/formule1.js';

// Flat word → description map. Words that appear in several categories
// (e.g. "Ferrari", "Daft Punk", "Shrek") share one entry; later imports win.
export const DESCRIPTIONS = {
  ...DESC_animaux,
  ...DESC_films,
  ...DESC_metiers,
  ...DESC_celebrites,
  ...DESC_nourriture,
  ...DESC_objets,
  ...DESC_sports,
  ...DESC_pays,
  ...DESC_dessins,
  ...DESC_marques,
  ...DESC_musique,
  ...DESC_actions,
  ...DESC_formule1,
};
