import { expect, describe, it } from "vitest";
import { items, updateQuality } from "./gilded-rose.js";
import { Item, Legendary, Basic, Conjured, Cheeses, Tickets } from "./classes.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const basicItem = new Basic("basic", 5, 3);
    items.push(basicItem);

    updateQuality();

    expect(basicItem.quality).toBe(2);
    expect(basicItem.sellIn).toBe(4);
  });
});
