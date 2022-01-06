import { CategoryType, Player } from "./Player";

describe("Player", () => {
  test("no point, no pair", () => {
    const p = new Player("", ["1", "2", "3", "4"]);
    expect(p.category.type).toBe(CategoryType.NoPoint);
  });
  test("no point, three of a kind", () => {
    const p = new Player("", ["1", "1", "1", "4"]);
    expect(p.category.type).toBe(CategoryType.NoPoint);
  });

  test("normal point", () => {
    const p = new Player("", ["1", "1", "3", "4"]);
    expect(p.category.type).toBe(CategoryType.NormalPoint);
    expect(p.normalPoints).toEqual(7);
    expect(p.pointDices).toEqual([4, 3]);
  });

  test("normal point with two pair", () => {
    const p = new Player("", ["1", "1", "4", "4"]);
    expect(p.category.type).toBe(CategoryType.NormalPoint);
    expect(p.normalPoints).toEqual(8);
    expect(p.pointDices).toEqual([4, 4]);
  });

  test("all of a kind", () => {
    const p = new Player("", ["1", "1", "1", "1"]);
    expect(p.category.type).toBe(CategoryType.AllOfAKind);
  });
});
