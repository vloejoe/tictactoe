# tictactoe — un morpion en React

Un jeu de morpion avec historique des coups (retour en arrière possible), message de statut, animation de la victoire et bouton « nouvelle partie ».

## Pourquoi ce projet
Mon premier jeu complet en React (juillet 2023) : après un premier essai abandonné, je le reprends et je le mène jusqu'au déploiement.

## Ce que j'ai appris
- Garder l'état d'une partie avec `useState`, et en dériver l'affichage (`App.jsx`).
- Stocker l'historique des coups sans modifier les états passés (`map`, `slice`, `concat`).
- Calculer le gagnant à partir des huit lignes gagnantes (`src/component/winner.js`).
- Découper l'interface en composants : `Board`, `Square`, `History`, `StatusMessage`.
- Écrire le style avec Sass, puis déployer un site statique.

## Stack
React 18, Vite 4, Sass, ESLint, Prettier.

## Lancer en local
```bash
npm install
npm run dev      # serveur de développement (Vite)
npm run build    # version de production dans dist/
```

## Démo
Le script `npm run deploy` publie `dist/` sur Surge à l'adresse configurée dans `package.json` (`ajamvane-tictactoe.surge.sh`). Je n'ai pas revérifié que le site est toujours en ligne.

## Crédits et transparence
Projet d'apprentissage personnel.
Code d'origine : 2023, exercice personnel. Novembre 2026 : README, charte de code et mise à jour des dépendances réalisés avec Claude Code (voir l'historique Git).

## État du projet
Entretien minimal (voir `AGENTS.md`). `npm run lint` signale 19 erreurs (surtout `react/prop-types`) : à traiter dans une issue dédiée.
