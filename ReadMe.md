#Projet "LeCook"
Qu'est-ce que c'est ?

    LeCook est une webApp de recettes de cuisine. 
    Elle permet donc à son utilisateur de consulter et rechercher des recettes.

    Une partie de la webApp est consacré à la gestion du frigo (des ingrédients) et permettra à l'utilisateur
    de consulter les recettes appropriées à ce qu'il a dans son frigo.
    Nous essayerons de gérer des attributs comme la date de péremption pour le confort de l'utilisateur. 

##Maquette de base
![accueil](http://img11.hostingpics.net/pics/118836MaquetteHome.png)
![Recettes](url)
![Frigo](url)

Ces maquettes ont été faites à l'aide de ![Cacoo](url)

Elles représente une partie des fonctionnalités que nous proposons. Le design ne doit pas être regardé, ces maquettes sont ici uniquement pour comprendre et voir les fonctionnalités disponibles.
Le design du site quant à lui à évoluer au fur et à mesure.

##Architecture de l'application
* image architecture

##APIs utilisées
* ![angularjs](https://angularjs.org/): au coeur du projet, permet de faire une webApp en ![SPA](https://en.wikipedia.org/wiki/Single-page_application) en utilisant une architecture ![MVC](https://openclassrooms.com/courses/apprenez-a-programmer-en-java/mieux-structurer-son-code-le-pattern-mvc).
* ![Food - Nutrition - Recipe API](https://market.mashape.com/spoonacular/recipe-food-nutrition): notre base de données, nous fournit également tout un tas de méthodes liés aux recettes et à leurs ingrédients ! (Clef académique obtenu via une demande sur https://market.mashape.com)
* ![Bootstrap](http://www.w3schools.com/bootstrap/): framework permettant de rendre son site responsive (fait que l'application correspondent à la taille de l'écran de l'utilisateur) en faisant des appels spécicifiques à ses scripts css.
* ![Bootswatch](https://bootswatch.com/): thèmes gratuits pour Bootstrap. (slate???)
* ![Firebase](https://firebase.google.com/docs/auth/): Pour la partie persistence des données / authentification.


##Conclusion

###Qu'est ce qui marche ?
* Architecture: MVC permet de soigner son architecture, angularJS est un outil puissant et la maintenance de la webApp n'en sera que plus facile.
* Food API: Avec un peu de chance et une présentation impeccable nous avons pû obtenir une clef académique pour l'API de spoonacular, ntore projet les intéressant et ils nous proposent de mettre la webApp sur leur page d'API une fois qu'elle sera terminé.
* //Barre de recherche: il a fallut du temps pour trouver comment la faire comme on le voulait mais on a réussi.
* //Authentification FireBase:
* //Gestion ingrédients: 

###Qu'est ce qui ne marche pas ?
* Beaucoup de temps passé sur la Food API, un mal nécessaire pour l'accomplissement du projet.
* Conséquence: nous ne pouvons combiner notre idée de base qui était de gérer le frigo par notification whatsapp (Attention, cet ingrédient périme demain, voici tel ou tel recette).
* 
* ??
*
*


###Perspectives
* Notification utilisateur par whatsapp 
* Gestion des recettes par événements / saison
* Impression de recettes et/ou liste de courses.
* ??
* Intégration sur frigo IP.

###Conclusion personnelles
Fadi: 
J'ai appris le pattern MVC en apprenant Java, c'est marrant de le revoir en web, finalement c'est vraiment pratique ! Comme on s'y attendait, énormément de haut et de bas en utilisant angularjs.
(Comme montré sur les slides d'angularJS Zero-to-Hero part1). J'ai été frustré par le rapport avancement du projet / temps. 
En effet, nous avons passé presque 2 jours de suite à travailler en avançant trop peu (ON regardait beaucoup la documentation avant de vraiment comprendre l'architecture que nous devions utilisé). 
Par contre travailler avec angularjs (MVC web, séparation des couches en module, composants/vues) devient de plus en plus intéressant au fil du temps, c'est un outil que je réutiliserais volontiers.