# 🎶 Band'à Training

Jeu web pour s'entraîner à la **lecture de notes** et aux **positions / doigtés** sur son instrument, pensé pour les membres de la BAJ.

## Fonctionnalités

- **Instruments** : trombone, trompette, sousaphone, saxophone, et un mode libre (débloqué au niveau 4).
- **Deux types d'exercices** :
  - *Lecture de notes* : donner le nom de la note affichée sur la portée.
  - *Lecture de positions* : donner la position ou le doigté de la note (pas disponible pour le saxophone).
- **Mode Entraînement** : sans chronomètre, avec une plage de notes réglable, des altérations activables, et un algorithme qui fait revenir plus souvent les notes ratées.
- **Mode Classé** (débloqué au niveau 3) : contre la montre, avec des combos et un classement général.
- **Progression** : XP, niveaux, contours de photo de profil à débloquer, statistiques personnelles.
- **Communauté** : comptes joueurs, demandes d'amis, profils des autres joueurs.

> Les notes sont écrites **dans la tonalité de l'instrument** (notation transpositrice), pas en sons réels.

## Stack

- HTML / CSS / JavaScript, sans framework ni étape de build
- [VexFlow](https://www.vexflow.com/) 3.0.9 pour dessiner les portées
- [Firebase](https://firebase.google.com/) 10 (Authentication + Cloud Firestore), chargé depuis le CDN de Google

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Page unique : interface, fenêtres modales, règles du jeu |
| `script.js` | Logique du jeu, XP, classement, amis, profil |
| `database.js` | Initialisation de Firebase, expose `db`, `auth` et les fonctions Firestore/Auth sur `window` |
| `style.css` | Styles |
| `logo.png`, `logo_large.png` | Logos |

Les données des joueurs sont stockées dans la collection Firestore `joueurs`.

## Lancer en local

`database.js` est un module ES : la page doit être servie en HTTP. Elle ne marche pas si on ouvre `index.html` directement en `file://`.

```bash
# Au choix :
npx serve .
# ou
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000` (ou l'adresse affichée par la commande). L'extension **Live Server** de VS Code fonctionne aussi.

## À propos de la clé Firebase

La configuration Firebase dans `database.js` (dont `apiKey`) est **publique par nature** : elle est envoyée au navigateur de chaque visiteur et ne sert qu'à identifier le projet. La sécurité repose sur :

- les **règles de sécurité Firestore** (console Firebase → Firestore → Rules) ;
- les **restrictions de la clé** dans Google Cloud (referrers HTTP autorisés et API Firebase uniquement).

Si tu ajoutes un nouveau domaine d'hébergement, pense à l'autoriser dans les restrictions de la clé **et** dans Firebase Authentication → Settings → Authorized domains.

**Ne jamais commiter de vrais secrets** (clés serveur, comptes de service `*.json`, fichiers `.env`). Le `.gitignore` les exclut déjà.
