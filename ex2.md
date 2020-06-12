# Pour vendredi prochain

## Finir le parsing du CSV

## Sortir les statistiques suivantes
### Moyenne d'age
- Globale
- Par sexe
- Par classe (de ticket)

### Survivants (nombre)
- Par sexe
- Par classe

### Le prix moyen de ticket par classe

### Bonus pour le fun
Entrainer un NN simple pour prédire la survie d'un passager en fonction de tous les autres paramètres, vous pouvez utiliser : https://github.com/BrainJS/brain.js


#### Question algorithmique
Soit 2 variables:
- Un vecteur d'entiers positifs (listOfNumbers)
- Une valeur (sum)

Déterminer si il existe dans listOfNumbers au moins un sous ensemble qui permet, une fois les nombres de ce sous ensemble additionés, d'obtenir sum.

Par exemple :
listOfNumbers = [2,5,7,9], sum = 12 -> true ([5, 7])
listOfNumbers = [2,5,7,9], sum = 4 -> false