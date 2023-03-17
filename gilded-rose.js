

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
  }
};
