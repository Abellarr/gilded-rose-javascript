

import { Item, Legendary, Basic, Conjured, Cheeses, Tickets } from "./classes.js";

export let items = [];

items.push(new Basic("+5 Dexterity Vest", 10, 20));
items.push(new Cheeses("Aged Brie", 2, 0));
items.push(new Basic("Elixir of the Mongoose", 5, 7));
items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Tickets("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    item.dailyUpdate();
    

    // if (
    //   item.name != "Aged Brie" &&
    //   item.name != "Backstage passes to a TAFKAL80ETC concert"
    // ) {
    //   if (item.quality > 0) {
    //     if (item.name != "Sulfuras, Hand of Ragnaros") {
    //       item.quality = item.quality - 1;
    //     }
    //   }
    // } else {
    //   if (item.quality < 50) {
    //     item.quality = item.quality + 1;
    //     if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
    //       if (item.sellIn < 11) {
    //         if (item.quality < 50) {
    //           item.quality = item.quality + 1;
    //         }
    //       }
    //       if (item.sellIn < 6) {
    //         if (item.quality < 50) {
    //           item.quality = item.quality + 1;
    //         }
    //       }
    //     }
    //   }
    // }
    // if (item.name != "Sulfuras, Hand of Ragnaros") {
    //   item.sellIn = item.sellIn - 1;
    // }
    // if (item.sellIn < 0) {
    //   if (item.name != "Aged Brie") {
    //     if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
    //       if (item.quality > 0) {
    //         if (item.name != "Sulfuras, Hand of Ragnaros") {
    //           item.quality = item.quality - 1;
    //         }
    //       }
    //     } else {
    //       item.quality = item.quality - item.quality;
    //     }
    //   } else {
    //     if (item.quality < 50) {
    //       item.quality = item.quality + 1;
    //     }
    //   }
    // }
  }
};
