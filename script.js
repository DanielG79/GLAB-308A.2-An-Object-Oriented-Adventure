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

class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type; // Companions can be of various types, e.g., pet, familiar, mount
        this.loyalty = 100; // Companions start with full loyalty
    }

    // Companions can accompany their adventurer owner
    accompany(adventurer) {
        console.log(`${this.name} is accompanying ${adventurer.name}.`);
    }

    // Companions can provide assistance to their adventurer owner
    assist(adventurer) {
        if (this.loyalty > 50) {
            console.log(`${this.name} assists ${adventurer.name}.`);
            // Perform assistance-specific actions here
        } else {
            console.log(`${this.name} is not loyal enough to assist ${adventurer.name}.`);
        }
    }

    // Companions can become distressed if their loyalty decreases
    becomeDistressed() {
        console.log(`${this.name} is becoming distressed!`);
    }
}

const robin = new Adventurer("Robin", "Healer");
const dog = new Companion("Barkley", "Pet");
const horse = new Companion("Shadowmane", "Mount");

robin.companions.push(dog, horse);
dog.accompany(robin);
horse.accompany(robin);

// Part 4: Class Uniforms

// Adding static properties and methods to the Character and Adventurer classes

class Character {
    static MAX_HEALTH = 100;

    constructor(name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }

    roll() {
        const rollValue = Math.floor(Math.random() * 20) + 1;
        console.log(`${this.name} rolls a ${rollValue}.`);
        return rollValue;
    }
}

class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];

    constructor(name, role) {
        super(name);
        if (Adventurer.ROLES.includes(role)) {
            this.role = role;
        } else {
            throw new Error(`Invalid role: ${role}`);
        }
        this.inventory.push("bedroll", "50 gold coins");
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

// Part 5: Gather your Party
// An AdventurerFactory class that can be used to generate and manage adventurers of a specific role

class AdventurerFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }

    generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
        return newAdventurer;
    }

    findByIndex(index) {
        return this.adventurers[index];
    }

    findByName(name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

const healerFactory = new AdventurerFactory("Healer");
const robin = healerFactory.generate("Robin");

// Part 6: Developing Skills
// implementation of the duel() method for the Adventurer class

class Adventurer extends Character {
    // ... previous Adventurer class code ...

    duel(opponent) {
        console.log(`${this.name} is dueling ${opponent.name}.`);

        let round = 1;
        while (this.health > 50 && opponent.health > 50) {
            console.log(`Round ${round}:`);

            const myRoll = this.roll();
            const opponentRoll = opponent.roll();
            console.log(`${this.name} rolls a ${myRoll}, ${opponent.name} rolls a ${opponentRoll}.`);

            if (myRoll < opponentRoll) {
                this.health -= 1;
                console.log(`${this.name} takes 1 damage. Their health is now ${this.health}.`);
            } else {
                opponent.health -= 1;
                console.log(`${opponent.name} takes 1 damage. Their health is now ${opponent.health}.`);
            }

            round++;
        }

        if (this.health > 50) {
            console.log(`${this.name} wins the duel!`);
        } else {
            console.log(`${opponent.name} wins the duel!`);
        }
    }
}

// Part 7: Adventure Forth
// generate a group of adventurers and companions, and have them interact:

// Generate some adventurers
const fighterFactory = new AdventurerFactory("Fighter");
const heilerFactory = new AdventurerFactory("Healer");
const wizardFactory = new AdventurerFactory("Wizard");

const fighter1 = fighterFactory.generate("Krom");
const healer1 = heilerFactory.generate("Asha");
const wizard1 = wizardFactory.generate("Zara");

// Generate some companions
const dog = new Companion("Barkley", "Pet");
const horse = new Companion("Shadowmane", "Mount");
const owl =
