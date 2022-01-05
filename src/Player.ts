export class Player {
  constructor(public name: string, public dices: string[]) {}
  public getCategory() {
    const countMap1 = {} as Record<string, number>;
    this.dices.forEach((d) => {
      countMap1[d] = d in countMap1 ? countMap1[d] + 1 : 1;
    });
    return Object.values(countMap1).some((v) => v === 2)
      ? Category.NormalPoint
      : Category.NoPoint;
  }
}

export enum Category {
  NoPoint = 0,
  NormalPoint = 1,
}
