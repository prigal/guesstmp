# Devine Tête 🧠

Clone web mobile du jeu **Devine Tête** (Heads Up!) en français. Tiens le téléphone sur ton front, les autres te donnent des indices, tilte vers le bas pour valider ou vers le haut pour passer.

## ✨ Fonctionnalités

- 6 catégories en français (Animaux, Films, Métiers, Célébrités, Nourriture, Objets)
- Durée configurable : 30 s / 60 s / 90 s
- Détection de l'inclinaison via `DeviceOrientationEvent`
- Sons synthétisés en Web Audio (correct, pass, tick, fin)
- Plein écran + verrouillage paysage + wake lock pendant la partie
- Fallback boutons tactiles si l'inclinaison n'est pas disponible (desktop ou permission refusée)
- Option « inverser les commandes » si le sens d'inclinaison ne correspond pas à ton téléphone
- Récapitulatif final avec liste des mots trouvés/passés

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

## 🐛 Si ça ne marche pas

- **Le téléphone ne réagit pas à l'inclinaison** → coche « Inverser les commandes » dans l'écran de sélection, ou utilise les zones tactiles gauche/droite qui apparaissent automatiquement si l'orientation n'est pas détectée.
- **L'écran s'éteint pendant la partie** → l'API Wake Lock n'est pas supportée sur ton appareil. Sur iOS, garde le téléphone branché ou augmente le délai de mise en veille.
- **L'app ne se met pas en paysage** → tourne le téléphone manuellement, un overlay t'invitera à le faire si tu es en portrait.

## 📄 Licence

MIT — fais ce que tu veux.
