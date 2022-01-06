export class Player {
  private countMap = {} as Record<string, number>;
  public readonly category: Category;
  public readonly normalPoints: number = 0;
  public readonly pointDices: number[] = [];
  constructor(public name: string, public dices: string[]) {
    this.dices.forEach((d) => {
      this.countMap[d] = d in this.countMap ? this.countMap[d] + 1 : 1;
    });

    this.category = Object.values(this.countMap).some((v) => v === 4)
      ? new Category(CategoryType.AllOfAKind, "all of a kind")
      : Object.values(this.countMap).some((v) => v === 2)
      ? new Category(CategoryType.NormalPoint, "normal point")
      : new Category(CategoryType.NoPoint, "");

    if (this.category.type == CategoryType.NormalPoint) {
      const normalPointInfo = this.getNormalPointInfo();
      this.normalPoints = normalPointInfo.points;
      this.pointDices = normalPointInfo.pointDices;
    }
  }

  private getNormalPointInfo() {
    const entries = Object.entries(this.countMap);
    const pairs = entries
      .filter(([_, c]) => c == 2)
      .sort(([d1], [d2]) => Number(d1) - Number(d2))
      .reverse();
    const pointDices =
      pairs.length == 1
        ? entries
            .filter(([_, c]) => c != 2)
            .map(([k]) => Number(k))
            .sort()
            .reverse()
        : [Number(pairs[0][0]), Number(pairs[0][0])];
    const points = pointDices.reduce((a, b) => a + b);
    return { points, pointDices };
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
