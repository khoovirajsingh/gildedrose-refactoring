import {Item} from "@/item";

export class AgedBrie extends Item {

    constructor(sellIn, quality) {
        super("Aged Brie", sellIn, quality);
    }


    updateQuality() {
        if (this.quality < 50) {
            this.quality = this.quality + 1

        }
        this.sellIn = this.sellIn - 1;
        if (this.sellIn < 0) {
            if (this.quality < 50) {
                this.quality = this.quality + 1
            }
        }
    }
}