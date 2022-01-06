export class Player {
  private countMap = {} as Record<string, number>;
  public readonly category: CategoryType;
  public readonly normalPoints: number;
  public readonly pointDices: number[];
  constructor(public name: string, public dices: string[]) {
    this.dices.forEach((d) => {
      this.countMap[d] = d in this.countMap ? this.countMap[d] + 1 : 1;
    });

    this.category = Object.values(this.countMap).some((v) => v === 4)
      ? CategoryType.AllOfAKind
      : Object.values(this.countMap).some((v) => v === 2)
      ? CategoryType.NormalPoint
      : CategoryType.NoPoint;

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

export enum CategoryType {
  NoPoint = 0,
  NormalPoint = 1,
  AllOfAKind = 2,
}
