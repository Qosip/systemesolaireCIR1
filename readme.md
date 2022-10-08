Projet de fin d'annee CIR1 (groupe 12 - Francois DAVID)
=======

Taille de l'archive : 52,4mo

### Arbre de fichier dans le .zip :
systemesolaireCIR1
* Code_C
    * calcul.c
    * calcul.h
    * CMakeLists.txt
    * energie.c
    * energie.h
    * Init.c
    * Init.h
    * main.c
    * vecteur.c
    * vecteur.h
* Web 
    * fleche.png
    * fleche2.png
    * fond.jpg
    * index.html
    * script.js
    * stylesheet.css
* readme.md

**Pour tester le projet :** 
- 
* Utilisez le fichier json créé en compilant directement le code C (aucun argument n'est attendu)
* Ouvrez le fichier "index.html"
* Cliquez sur le bouton "Browse" et cliquez sur votre fichier json fraichement créé ou bien celui de l'archive
* Le fichier est chargé, il ne reste plus qu'à utiliser les commandes décrites sur la page pour visualiser les planètes et les différentes méthodes de calculs

-------------
⚠️ Si voulez charger votre propre fichier json -> vous ne pouvez pas!! 
Ceci car le fichier doit avoir toutes les planètes requises présentent à l'intérieur

Vous pouvez seulement régler le nombre de point pour reduire la taille du fichier si jamais la page n'arrive pas à charger.
Pour ceci :
* Allez dans le fichier calcul.h rentrez le nombre de points voulu dans le #define NBPOINT
* Ensuite allez dans le fichier script.js ligne 83 et mettez le meme nombre voulu - 4
* Créez votre nouveau fichier json en compilant le code
* Rechargez la page web et entrez votre fichier, le nouveau nombre de point est affiché
-------------

Le delta choisis entre chaque valeur est de 1 journée soit 86400s

* Site développé avec : WebSorm
* Code écrit avec : CLion
* Test fait dans : Firefox

Les commandes (il faut appuyer sur les touches de son clavier) : 

* "<-" : Lance la visualisation d'euler
* "a" : Lance la visualisation d'euler asymétrique
* "z" : Lance la visualisation de Runge Kuta d'ordre 2
* "e" : Lance toutes les visualisations
* "r" : reset la visualisation
* "espace" : Pause les visualisations

"zoom - +", "inclinaison - +" et "vitesse - +" sont des boutons cliquables

-------------
⚠️ erreur connue : dans les logs de la page, l'erreur "planet is undefined" reviendra tout le temps (problème curieux)
