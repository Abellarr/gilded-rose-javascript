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
}

export class Legendary extends Item {
    constructor(name, quality){
        super(name, quality);
        this.sellIn = 0;
    }
}

export class Basic extends Item {
    dailyUpdate(){
        this.sellIn -= 1;
        if (this.sellIn < 0){
            this.quality -= 2;
        } else {
            this.quality -= 1;
        }
        if (this.quality <= 0) {
            this.quality = 0;
        }
    }
}

export class Conjured extends Item {
    dailyUpdate(){
        this.sellIn -= 1;
        if (this.sellIn < 0){
            this.quality -= 4;
        } else {
            this.quality -= 2;
        }
        if (this.quality <= 0) {
            this.quality = 0;
        }
    }    
}

export class Special extends Item {
    tickets(){
        this.sellIn -= 1
        if (this.sellIn < 0) {
            this.quality = 0
        } else if (this.sellIn <= 5) {
            this.quality += 3;
        } else if (this.sellIn <= 10) {
            this.quality += 2
        } else {
            this.quality += 1
        }

        if (this.quality > 50) {
            this.quality = 50;
        }
    }
    agedBrie(){
        this.sellIn -= 1;
        this.quality += 1;

        if (this.quality > 50) {
            this.quality = 50;
        }
    }
}