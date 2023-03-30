import {Item} from "@/item";

export class BackstagePass extends Item {

    constructor(sellIn, quality) {
        super("Backstage passes to a TAFKAL80ETC concert", sellIn, quality);
    }


    updateQuality() {
        if (this.quality < 50) {
            this.quality = this.quality + 1
            if (this.sellIn < 11) {
                if (this.quality < 50) {
                    this.quality = this.quality + 1
                }
            }
            if (this.sellIn < 6) {
                if (this.quality < 50) {
                    this.quality = this.quality + 1
                }
            }
        }
        this.sellIn = this.sellIn - 1;
        if (this.sellIn < 0) {
            this.quality = this.quality - this.quality
        }
    }
}