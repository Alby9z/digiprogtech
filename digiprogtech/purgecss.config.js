module.exports = {
  content: ["./index.html", "./**/*.js"], // Chemins des fichiers HTML et JS où PurgeCSS doit rechercher les classes utilisées
  css: ["./css/style.css"], // Chemin vers votre fichier CSS principal à analyser
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [], // Extracteur par défaut pour trouver les classes utilisées
};
