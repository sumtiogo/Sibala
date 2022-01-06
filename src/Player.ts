export class Player {
  private countMap = {} as Record<string, number>;
  public readonly category: Category;
  public readonly normalPoints: number;
  public readonly pointDices: number[];
  constructor(public name: string, public dices: string[]) {
    this.dices.forEach((d) => {
      this.countMap[d] = d in this.countMap ? this.countMap[d] + 1 : 1;
    });

    this.category = Object.values(this.countMap).some((v) => v === 4)
      ? new Category(CategoryType.AllOfAKind, "all of a kind")
      : Object.values(this.countMap).some((v) => v === 2)
      ? new Category(CategoryType.NormalPoint, "normal point")
      : new Category(CategoryType.NoPoint, "");

    this.normalPoints = Object.entries(this.countMap)
      .filter(([_, c]) => c != 2)
      .map(([k]) => Number(k))
      .reduce((a, b) => a + b);

    this.pointDices = Object.entries(this.countMap)
      .filter(([_, c]) => c != 2)
      .map(([k, _]) => Number(k))
      .sort()
      .reverse();
  }
}

class Category {
  constructor(public type: CategoryType, public output: string) {}
}

export enum CategoryType {
  NoPoint = 0,
  NormalPoint = 1,
  AllOfAKind = 2,
}
