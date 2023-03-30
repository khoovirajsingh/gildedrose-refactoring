import {GildedRose} from '@/gilded-rose';
import 'jest-extended-snapshot';
import {Item} from "@/item";
import {createItem} from "@/create-item";

describe('Gilded Rose', () => {
  it('should update quality', () => {
    const doUpdateQuality = (name: string, sellIn: number, quality: number) => {
      const gildedRose = new GildedRose([createItem(name, sellIn, quality)]);
      const items = gildedRose.updateQuality();
      return items;
    };

    expect(doUpdateQuality).toVerifyAllCombinations(
        [
          "foo",
          "Aged Brie",
          "Sulfuras, Hand of Ragnaros",
          "Backstage passes to a TAFKAL80ETC concert",
        ],
        [-1, 0, 1, 5, 6, 10, 11],
        [0, 1, 49, 50]
    );
  });
});
