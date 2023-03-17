/*
Sub-classes: Legendary items, basic items, conjured items, special items

Basic items: Degrade quality at normal rate (x) based on sellIn time

Legendary items: Quality doesn't degrade and no sellIn time needed 

Conjured items: Degrade quality at double normal rate (2x) based on sellIn time

Special items: Have unique rules based on what they are
*/
export class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }

    dailyUpdate(){};
}

// Subclass of Item that handles Legendary items (such as "Sulfuras, Hand of Ragnaros")
export class Legendary extends Item {
    // Altered constructor to always set sellIn to zero, as a Legendary item "never has to be sold"
    constructor(name, sellIn, quality){
        super(name, sellIn, quality);
    }

    dailyUpdate(){};

}

// Subclass of Item that handles all items that do not have any special rules for sellIn or quality
export class Basic extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    dailyUpdate(){
        // Decrements the sellIn property by 1 automatically when called
        this.sellIn--;
        // If sellIn is less than zero, will decrement quality by 2
        if (this.sellIn < 0){
            this.quality -= 2;
        // Otherwise decrements by 1
        } else {
            this.quality--;
        }
        // Checks if quality dropped below zero and resets to zero if it has
        if (this.quality < 0) {
            this.quality = 0;
        }
    }
}

// Subclass of Item that handles the new "Conjured" items that degrade in quality twice as fast as "Basic" items
export class Conjured extends Item {
    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
    }

    dailyUpdate(){
        // Decrements the sellIn property by 1 automatically when called
        this.sellIn -= 1;
        // If sellIn is less than zero, will decrement quality by 4
        if (this.sellIn < 0){
            this.quality -= 4;
        // Otherwise decrements by 2
        } else {
            this.quality -= 2;
        }
        // Checks if quality dropped below zero and resets to zero if it has
        if (this.quality < 0) {
            this.quality = 0;
        }
    }    
}

// Subclass of Item that handles any "Ticket" items that have special for item degrading
export class Tickets extends Item {
    constructor(name, sellIn, quality){
        super(name, sellIn, quality);
    }

    dailyUpdate(){
        // Decrements the sellIn property by 1 automatically when called
        this.sellIn--;
        // Checks sellIn and adjusts teh quality accordingly
        if (this.sellIn < 0) {
            this.quality = 0;
        } else if (this.sellIn <= 5) {
            this.quality += 3;
        } else if (this.sellIn <= 10) {
            this.quality += 2;
        } else {
            this.quality++;
        }
        // Checks if quality rises above 50 and resets to 50 if it has
        if (this.quality > 50) {
            this.quality = 50;
        }
    }
}
// Subclass of Item that handles any "Cheese" items that increments as the sellIn decreases
export class Cheeses extends Item {
    constructor(name, sellIn, quality){
        super(name, sellIn, quality);
    }

    dailyUpdate(){
        // Decrements the sellIn property by 1 automatically when called
        this.sellIn--;
        this.quality++;
        // Checks if quality rises above 50 and resets to 50 if it has
        if (this.quality > 50) {
            this.quality = 50;
        }
    }
}