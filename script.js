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

// Add the companions
leo.addCompanion(frank);
robin.companion = leo;

// Test the game
console.log(robin.name, "has", robin.health, "health and the following items in their inventory:", robin.inventory);
console.log(robin.companion.name, "is a", robin.companion.type, "and has the following item(s):", robin.companion.companion.inventory);

robin.roll(2);
robin.companion.roll();
robin.companion.companion.roll(-1);

// Part 3: Class Features

// class Adventurer extends Character {
//     constructor(name, role) {
//         super(name);
//         // Adventurers have specialized roles.
//         this.role = role;
//         // Every adventurer starts with a bed and 50 gold coins.
//         this.inventory.push("bedroll", "50 gold coins");
//     }
//     // Adventurers have the ability to scout ahead of them.
//     scout() {
//         console.log(`${this.name} is scouting ahead...`);
//         super.roll();
//     }
// }

class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
        this.skillPoints = 10; // Adventurers have a pool of skill points to distribute
        this.skills = {
            combat: 5, // Adventurers start with some basic combat skills
            stealth: 5,
            arcana: 0, // Skills may vary depending on role
            healing: 0
        };
    }

    // Adventurers can improve their skills
    improveSkill(skillName, points) {
        if (this.skillPoints >= points && this.skills[skillName] !== undefined) {
            this.skills[skillName] += points;
            this.skillPoints -= points;
            console.log(`${this.name} has improved their ${skillName} skill by ${points} points.`);
        } else {
            console.log("Insufficient skill points or invalid skill name.");
        }
    }

    // Adventurers can use their skills in various situations
    useSkill(skillName) {
        if (this.skills[skillName] > 0) {
            console.log(`${this.name} uses their ${skillName} skill.`);
            // Perform skill-specific actions here
        } else {
            console.log(`${this.name} does not have any ${skillName} skill.`);
        }
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}