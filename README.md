# RHDP Breaking News - Web TV

Ce projet est un site web pour RHDP Breaking News, une Web TV axée sur l'actualité politique, économique et culturelle de la Côte d'Ivoire.

## Technologies utilisées

- [Astro](https://astro.build) - Framework web avec un focus sur la performance
- [Decap CMS](https://decapcms.org) - Système de gestion de contenu headless
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS utilitaire
- [Astro-Pagefind](https://pagefind.app) - Moteur de recherche pour le site

## Fonctionnalités

- Site web responsive et optimisé pour les performances
- Système de gestion de contenu (CMS) intégré pour gérer les articles et vidéos
- Galerie de vidéos YouTube intégrée
- Formulaire de contact fonctionnel via Netlify Forms
- Moteur de recherche intégré
- Optimisé pour le SEO

## Installation

### Prérequis

- Node.js (v18.14.1 ou supérieur)
- npm ou yarn
- Git

### Étapes d'installation

1. Cloner le dépôt GitHub
```bash
git clone https://github.com/votre-nom/rhdp-breaking-news.git
cd astro-citrus
```

2. Installer les dépendances
```bash
npm install
```

3. Démarrer le serveur de développement
```bash
npm run dev
```

Le site sera accessible à l'adresse http://localhost:4321

## Déploiement

Ce site est configuré pour être déployé facilement sur Netlify. Il suffit de connecter votre dépôt GitHub à Netlify et le déploiement se fera automatiquement à chaque push.

### Configuration Netlify

Le fichier `netlify.toml` contient déjà la configuration nécessaire pour le déploiement. 

Pour activer Netlify CMS :
1. Accédez aux paramètres de votre site sur Netlify
2. Activez l'authentification Git Gateway
3. Configurez les utilisateurs autorisés à accéder au CMS

### Configuration du DNS

Pour utiliser votre propre nom de domaine :
1. Accédez à la section "Domain Management" dans Netlify
2. Cliquez sur "Add custom domain"
3. Suivez les instructions pour configurer les enregistrements DNS

## Structure du projet

- `src/pages/` - Contient toutes les pages du site
- `src/content/` - Contient les collections pour le CMS (actualités et vidéos)
- `src/components/` - Composants réutilisables
- `src/layouts/` - Layouts pour les différentes pages
- `public/` - Fichiers statiques et images
- `public/admin/` - Configuration de Decap CMS

## Gestion du contenu

Le contenu peut être géré via l'interface d'administration accessible à `/admin`. Vous pouvez y créer :

- Des articles d'actualité avec titre, auteur, catégorie, image et contenu
- Des vidéos avec titre, description et lien YouTube

### Ajout d'articles d'actualité

1. Connectez-vous à l'interface d'administration à `/admin`
2. Naviguez vers la collection "Actualités"
3. Cliquez sur "Créer une nouvelle entrée"
4. Remplissez tous les champs requis (titre, slug, auteur, date, image principale, extrait, contenu)
5. Utilisez l'éditeur de texte riche pour formater votre contenu
6. Cliquez sur "Publier" pour rendre l'article accessible

### Ajout de vidéos

1. Connectez-vous à l'interface d'administration
2. Naviguez vers la collection "Vidéos"
3. Cliquez sur "Créer une nouvelle entrée"
4. Ajoutez le titre, la description et l'identifiant YouTube de la vidéo
5. Publiez la vidéo

## Maintenance

### Mise à jour des dépendances

Pour maintenir le site à jour et sécurisé, exécutez régulièrement :

```bash
npm update
```

### Sauvegarde

Assurez-vous de sauvegarder régulièrement :
- Le code source sur GitHub
- Les fichiers de contenu dans `src/content/`
- Les images et médias dans `public/uploads/`

## Licence

Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus de détails.

## Contact

Pour toute question sur ce projet, contactez :
- Sangaré "Doub" Lacina - contact@rhdp-breaking-news.ci
- Site web : www.rhdp-breaking-news.ci
