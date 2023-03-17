import { expect, describe, it } from "vitest";
import { items, updateQuality } from "./gilded-rose.js";
import { Item, Legendary, Basic, Conjured, Cheeses, Tickets } from "./classes.js";

describe("updateQuality", () => {
  it("Basic Item 1: reduces quality by 1 and sellIn by 1", () => {
    const basicItem1 = new Basic("basic", 5, 3);
    items.push(basicItem1);

    updateQuality();

    expect(basicItem1.quality).toBe(2);
    expect(basicItem1.sellIn).toBe(4);
  });

  it("Basic Item 2: reduces quality by 2 when sellIn is below 0", () => {
    const basicItem2 = new Basic("basic", 0, 3);
    items.push(basicItem2);

    updateQuality();

    expect(basicItem2.quality).toBe(1);
    expect(basicItem2.sellIn).toBe(-1);
  });

  it("Basic Item 3: doesn't reduce quality below 0", () => {
    const basicItem3 = new Basic("basic", 5, 0);
    items.push(basicItem3);

    updateQuality();

    expect(basicItem3.quality).toBe(0);
    expect(basicItem3.sellIn).toBe(4);
  });

  it("Conjured Item 1: reduces quality by 2 and sellIn by 1", () => {
    const conItem1 = new Conjured("conjured", 5, 3);
    items.push(conItem1);

    updateQuality();

    expect(conItem1.quality).toBe(1);
    expect(conItem1.sellIn).toBe(4);
  });

  it("Conjured Item 2: reduces quality by 4 when sellIn is below 0", () => {
    const conItem2 = new Conjured("conjured", 0, 6);
    items.push(conItem2);

    updateQuality();

    expect(conItem2.quality).toBe(2);
    expect(conItem2.sellIn).toBe(-1);
  });

  it("Conjured Item 3: doesn't reduce quality below 0", () => {
    const conItem3 = new Conjured("conjured", 5, 0);
    items.push(conItem3);

    updateQuality();

    expect(conItem3.quality).toBe(0);
    expect(conItem3.sellIn).toBe(4);
  });
  
  it("Legendary Item: doesn't adjust quality or sellIn", () => {
    const legendaryItem = new Legendary("legendary", 0, 80);
    items.push(legendaryItem);

    updateQuality();

    expect(legendaryItem.quality).toBe(80);
    expect(legendaryItem.sellIn).toBe(0);
  });

  it("Cheese Item 1: increases quality by 1 and decreases sellIn by 1", () => {
    const chzItem1 = new Cheeses("cheese", 5, 3);
    items.push(chzItem1);

    updateQuality();

    expect(chzItem1.quality).toBe(4);
    expect(chzItem1.sellIn).toBe(4);
  });

  it("Cheese Item 2: doesn't increase quality above 50", () => {
    const chzItem2 = new Cheeses("cheese", 5, 50);
    items.push(chzItem2);

    updateQuality();

    expect(chzItem2.quality).toBe(50);
    expect(chzItem2.sellIn).toBe(4);
  });

  it("Ticket Item 1: increases quality by 1 and decreases sellIn by 1 when more than 10 days left", () => {
    const tktItem1 = new Tickets("tickets", 12, 3);
    items.push(tktItem1);

    updateQuality();

    expect(tktItem1.quality).toBe(4);
    expect(tktItem1.sellIn).toBe(11);
  });

  it("Ticket Item 2: increases quality by 2 and decreases sellIn by 1 when between 6 and 10 days left", () => {
    const tktItem2 = new Tickets("tickets", 11, 3);
    items.push(tktItem2);

    updateQuality();

    expect(tktItem2.quality).toBe(5);
    expect(tktItem2.sellIn).toBe(10);
  });

  it("Ticket Item 3: increases quality by 3 and decreases sellIn by 1 when between 0 and 5 days left", () => {
    const tktItem3 = new Tickets("tickets", 6, 3);
    items.push(tktItem3);

    updateQuality();

    expect(tktItem3.quality).toBe(6);
    expect(tktItem3.sellIn).toBe(5);
  });

  it("Ticket Item 4: sets quality to 0 when date of concert has passed", () => {
    const tktItem4 = new Tickets("tickets", 0, 28);
    items.push(tktItem4);

    updateQuality();

    expect(tktItem4.quality).toBe(0);
    expect(tktItem4.sellIn).toBe(-1);
  });

  it("Ticket Item 5: doesn't increase quality above 50", () => {
    const tktItem5 = new Tickets("tickets", 5, 50);
    items.push(tktItem5);

    updateQuality();

    expect(tktItem5.quality).toBe(50);
    expect(tktItem5.sellIn).toBe(4);
  });

})
