# GLAB-308A.2-An-Object-Oriented-Adventure

https://github.com/DanielG79/GLAB-308A.2-An-Object-Oriented-Adventure.git


Explanation:

We define a Character class that has a constructor that takes a name parameter and initializes the health, inventory, and roll method.
We then define a Companion class that extends the Character class. The Companion class has an additional type property and a companion property that can hold another Companion instance.
We create the main adventurer robin as a Character instance and give it an inventory.
We create the companions leo and frank as Companion instances, with frank having some items in its inventory.
We add frank as a companion to leo, and then add leo as the companion to robin.
Finally, we test the game by logging the properties of robin, leo, and frank, and then calling the roll method on each of them.