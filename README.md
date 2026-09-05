# Devine Tête 🧠

Clone web mobile du jeu **Devine Tête** (Heads Up!) en français. Tiens le téléphone sur ton front, les autres te donnent des indices, tilte vers le bas pour valider ou vers le haut pour passer.

## ✨ Fonctionnalités

- 6 catégories en français (Animaux, Films, Métiers, Célébrités, Nourriture, Objets)
- Durée configurable : 30 s / 60 s / 90 s
- Détection de l'inclinaison via le vecteur gravité (`devicemotion`) — robuste au gimbal lock
- Sons synthétisés en Web Audio (correct, pass, tick, fin)
- Plein écran + verrouillage paysage + wake lock pendant la partie
- Fallback boutons tactiles si l'inclinaison n'est pas disponible (desktop ou permission refusée)
- Option « inverser les commandes » si le sens d'inclinaison ne correspond pas à ton téléphone
- Récapitulatif final avec liste des mots trouvés/passés
- **PWA installable** : icônes, manifest, service worker pour fonctionner hors-ligne
- **Explication du mot raté** : après une passe, une carte « Raté ! » explique le mot en 2-3 lignes (chrono en pause)
- **Mode Circuits F1** 🏁 : à la place d'un mot, le tracé noir et blanc d'un circuit du calendrier récent (saisons 2024-2026) vu d'en haut, généré depuis sa géométrie GPS réelle — à faire deviner à partir de sa forme

## 🚀 Lancer en local

L'app utilise les modules ES, il faut donc la servir via HTTP (pas `file://`).

```bash
# Python (présent partout)
python3 -m http.server 8000
```

Puis ouvre `http://localhost:8000` sur ton navigateur.

> 💡 Sur desktop, l'inclinaison n'est pas disponible — les boutons tactiles fallback apparaissent automatiquement.

## 📱 Tester sur mobile

L'API `DeviceOrientationEvent` exige **HTTPS** sur iOS. Quelques options :

- Déploie en statique : GitHub Pages, Netlify Drop, Vercel, Cloudflare Pages…
- Tunnel local : `ngrok http 8000` (HTTPS gratuit)

Sur iPhone, le tap « Commencer » déclenche la demande d'autorisation pour les capteurs de mouvement.

## 🎮 Comment jouer

1. Choisis une catégorie et une durée.
2. Tiens le téléphone sur ton front, écran face aux autres.
3. Tap « Commencer », attends le décompte 3-2-1.
4. Les autres te donnent des indices sans dire le mot.
5. Tilte vers le bas ⬇ pour valider, vers le haut ⬆ pour passer.
6. Récap à la fin du chrono.

## 🛠 Stack

Vanilla HTML/CSS/JavaScript (modules ES), aucun build, aucune dépendance.

```
index.html
style.css
js/
  app.js          ← bootstrap + machine d'états des écrans
  game.js         ← deck mélangé, timer, score, historique
  orientation.js  ← détection inclinaison + calibration + debounce
  audio.js        ← oscillateurs Web Audio
  fullscreen.js   ← fullscreen + wake lock + orientation lock
  ui.js           ← rendu DOM + flash vert/rouge
data/
  categories.js   ← listes de mots par catégorie
```

## 📲 Installer comme PWA

- **Android (Chrome)** : un bouton « Installer l'app » apparaît sur l'écran d'accueil quand le navigateur détecte l'installabilité. Sinon, menu ⋮ → « Installer l'application ».
- **iOS (Safari)** : icône Partager → « Sur l'écran d'accueil ».
- **Desktop (Chrome/Edge)** : icône d'installation dans la barre d'URL, ou bouton sur l'accueil.

Une fois installée, l'app fonctionne en plein écran, et le service worker la rend jouable hors connexion après la première visite.

## 🐛 Si ça ne marche pas

- **Le téléphone ne réagit pas à l'inclinaison** → coche « Inverser les commandes » dans l'écran de sélection, ou utilise les zones tactiles gauche/droite qui apparaissent automatiquement si l'orientation n'est pas détectée.
- **L'écran s'éteint pendant la partie** → l'API Wake Lock n'est pas supportée sur ton appareil. Sur iOS, garde le téléphone branché ou augmente le délai de mise en veille.
- **L'app ne se met pas en paysage** → tourne le téléphone manuellement, un overlay t'invitera à le faire si tu es en portrait.

## 🙏 Crédits

Les tracés de circuits sont générés à partir des données GeoJSON de [bacinger/f1-circuits](https://github.com/bacinger/f1-circuits) (MIT, © Tomislav Bacinger).

## 📄 Licence

MIT — fais ce que tu veux.
