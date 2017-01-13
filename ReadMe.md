#Projet "LeCook"
Qu'est-ce que c'est ?

LeCook est une webApp de recettes de cuisine. 
Elle permet donc à son utilisateur de consulter et rechercher des recettes.

Une partie de la webApp est consacré à la gestion du frigo (des ingrédients) et permettra à l'utilisateur
de consulter les recettes appropriées à ce qu'il a dans son frigo.
  
##Maquette de base
![index](http://img15.hostingpics.net/pics/567147indexHtml.png)
![myFridge](http://img15.hostingpics.net/pics/959436myFridge.png)
![RecipeInfo](http://img15.hostingpics.net/pics/495703RecipeInfo.png)
![LogoCacoo](http://img11.hostingpics.net/pics/118836MaquetteHome.png)

Elles représente une partie des fonctionnalités que nous proposons. Le design ne doit pas être regardé, ces maquettes sont ici uniquement pour comprendre et voir les fonctionnalités disponibles.
Le design du site quant à lui à évoluer au fur et à mesure.

##Architecture de l'application
![Architecture](http://img15.hostingpics.net/pics/755644Architecture.png)

##APIs utilisées
* [angularjs](https://angularjs.org/): au coeur du projet, permet de faire une webApp en [SPA](https://en.wikipedia.org/wiki/Single-page_application) en utilisant une architecture [MVC](https://openclassrooms.com/courses/apprenez-a-programmer-en-java/mieux-structurer-son-code-le-pattern-mvc).
* [Food - Nutrition - Recipe API](https://market.mashape.com/spoonacular/recipe-food-nutrition): notre base de données, nous fournit également tout un tas de méthodes liés aux recettes et à leurs ingrédients ! (Clef académique obtenu via une demande sur https://market.mashape.com)
* [Bootstrap](http://www.w3schools.com/bootstrap/): framework permettant de rendre son site responsive (fait que l'application correspondent à la taille de l'écran de l'utilisateur) en faisant des appels spécicifiques à ses scripts css.
* [Bootswatch](https://bootswatch.com/): thèmes gratuits pour Bootstrap
* [bower](https://bower.io/): webManager.


##Conclusion

###Qu'est ce qui marche ?
* Architecture: MVC permet de soigner son architecture, angularJS est un outil puissant et la maintenance de la webApp n'en sera que plus facile.
* Food API: Avec un peu de chance et une présentation impeccable nous avons pû obtenir une clef académique pour l'API de spoonacular, ntore projet les intéressant et ils nous proposent de mettre la webApp sur leur page d'API une fois qu'elle sera terminé.
* Barre de recherche (Recettes + Ingrédients): il a fallut du temps pour trouver comment la faire comme on le voulait mais on a réussi.
* Gestion des ingrédients (en localStorage): Isolé dans le composant myFridge idéeal pour les perspectives futures.

###Qu'est ce qui ne marche pas ?
* Beaucoup de temps passé sur la Food API, un mal nécessaire pour l'accomplissement du projet.
* Conséquence: nous ne pouvons combiner notre idée de base qui était de gérer le frigo par notification whatsapp (Exemple de notif: Attention, cet ingrédient périme demain, voici tel ou tel recette).
* Deployement: Beaucoup de problème à regler, nous n'avons deployé qu'environ une semaine avant la présentation.
* architecture: avoir une architecture simple et cohérente ne nous a pas facilité la vie au début, mais nous a récompensé par après.

###Perspectives
* Notification utilisateur par whatsapp (alerte date de péremption /  Alerte daily recipe)
* Gestion des recettes par événements / saison
* Impression de recettes et/ou liste de courses.
* Intégration sur frigo IP.
* Ajout des ingrédients via scan de la liste de course

###Conclusions personnelles
Fadi: <br/> J'ai appris le pattern MVC en apprenant Java, c'est marrant de le revoir en web, finalement c'est vraiment pratique ! Comme on s'y attendait, énormément de haut et de bas en utilisant angularjs.
(Comme montré sur les slides d'angularJS Zero-to-Hero part1). J'ai été frustré par le rapport avancement du projet / temps. 
En effet, nous avons passé presque 2 jours de suite à travailler en avançant trop peu (ON regardait beaucoup la documentation avant de vraiment comprendre l'architecture que nous devions utilisé). 
Par contre travailler avec angularjs (MVC web, séparation des couches en module, composants/vues) devient de plus en plus intéressant au fil du temps, c'est un outil que je réutiliserais volontiers.
<br/> Jean: <br/> Je pense avoir beaucoup appris lors de ce projet. Au tout début, c'était très abstrait pour moi mais à un certain moment, il y a eu un déclick et j'approuve le fait qu'Angular est un excellent framework.
Le fait d'avoir communiqué avec les fondateurs de l'API que nous utilisons a aussi été un moyen de me forcer à rendre un résultat présentable. A la suite de ce projet, je m'intéresse bien plus au web qu'avant. Je dirais même que c'est le domaine dans lequel je me sens le plus libre.
La courbe de progression de notre projet ressemblait à celle vue en classe. Des hauts, des bas, mais au final nous somme satisfaits.
