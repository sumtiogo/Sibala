export class Player {
  private countMap = {} as Record<string, number>;
  public readonly category: Category;
  public readonly normalPoints: number;
  constructor(public name: string, public dices: string[]) {
    this.dices.forEach((d) => {
      this.countMap[d] = d in this.countMap ? this.countMap[d] + 1 : 1;
    });

    this.category = Object.values(this.countMap).some((v) => v === 2)
      ? Category.NormalPoint
      : Category.NoPoint;

    this.normalPoints = Object.entries(this.countMap)
      .filter((k, c) => c != 2)
      .map(([k]) => Number(k))
      .reduce((a, b) => a + b);
  }
}

export enum Category {
  NoPoint = 0,
  NormalPoint = 1,
}
