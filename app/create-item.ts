import {Item} from "@/item";
import {AgedBrie} from "@/aged-brie";
import {BackstagePass} from "@/backstage-pass";
import {Sulfurus} from "@/sulfurus";

export const createItem = (name: string, sellIn: number, quality: number): Item => {
    switch (name) {
        case 'Aged Brie':
            return new AgedBrie(sellIn, quality);
        case 'Backstage passes to a TAFKAL80ETC concert':
            return new BackstagePass(sellIn, quality)
        case 'Sulfuras, Hand of Ragnaros':
            return new Sulfurus(sellIn, quality);
        default:
            return new Item(name, sellIn, quality);
    }
}