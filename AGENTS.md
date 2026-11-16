# AGENTS.md — charte de code de `tictactoe`

Ce fichier est lu par l'IA (et par moi) avant toute modification. Il décrit la façon dont ce dépôt est écrit.

## Statut
Exercice d'apprentissage, **entretien minimal** : on garde le projet en ligne et à jour, on ne le transforme pas.

## Structure
- `src/App.jsx` : état de la partie et assemblage.
- `src/component/` : un composant par fichier (`Board`, `Square`, `History`, `StatusMessage`) et la logique pure `winner.js`.
- `src/style.scss` : styles du jeu.
Un fichier, un rôle.

## Écriture du code
- Nouveau code : noms de variables, de fonctions et de composants en anglais.
- Commentaires en français, qui expliquent le *pourquoi* plutôt que le *quoi*.
- Ne pas réécrire l'exercice : on corrige ou on étend, on ne remplace pas la logique d'origine.

## Git
- Une idée = une branche = une pull request. Jamais de commit direct sur `main`.
- Commits courts, une notion par commit, préfixés d'un gitmoji.
- Tout commit écrit avec l'IA porte la mention `Co-Authored-By`.

## Qualité
- `npm run build` doit passer avant toute pull request.
- `npm run lint` signale aujourd'hui 19 erreurs connues (`react/prop-types`, un point-virgule en trop) : ne pas en ajouter de nouvelles.
- Prettier est configuré (`.prettierrc`).

## Dépendances
- Mises à jour compatibles (`npm update`) : autorisées, avec build vérifié.
- Changement de version majeure (React, Vite, Tailwind, Redux...) : seulement sur une issue dédiée.

## Secrets
- Aucun fichier `.env` versionné. Si une clé devient nécessaire : un `.env.example` sans valeur.
