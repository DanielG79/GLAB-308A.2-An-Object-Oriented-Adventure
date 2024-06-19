// Part 1: Humble Beginnings
// Let’s model a simple adventurer with basic properties such as health and an inventory. 
// We will call the adventurer “Robin.”
// const adventurer = {
// name: "Robin",
// health: 10,
// inventory: ["sword", "potion", "artifact"]
// }

// From the adventurer object, we can access Robin’s inventory using a combination of dot notation and square bracket syntax. For example, we could find a sword at adventurer.inventory[0].
// As an additional practice exercise, create a loop that logs each item in Robin’s inventory.
// Nested arrays are useful, but so are nested objects. Let’s give Robin a companion to travel with – a furry friend they call “Leo.”
// const adventurer = {
// name: "Robin",
// health: 10,
// inventory: ["sword", "potion", "artifact"],
// companion: {
//     name: "Leo",
//     type: "Cat"
// }
// }
// Give Robin the following method:
// const adventurer = {
// name: "Robin",
// health: 10,
// inventory: ["sword", "potion", "artifact"],
// companion: ...
// roll (mod = 0) {
// const result = Math.floor(Math.random() * 20) + 1 + mod;
// console.log(`${this.name} rolled a ${result}.`)
// }
// }

// Character class
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}

// Companion class that extends Character
class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
        this.companion = null;
    }

    addCompanion(companion) {
        this.companion = companion;
    }
}

// Create the adventurer
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];

// Create the companions
const leo = new Companion("Leo", "Cat");
const frank = new Companion("Frank", "Flea");
frank.inventory = ["small hat", "sunglasses"];