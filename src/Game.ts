import { Parser } from "./Parser";

export class Game {
  showResult(input: string): string {
    // "Black: 3 4 5 6  White: 4 1 4 2",
    // "White win. - with normal point: 3"
    const players = new Parser().parse(input);
    const countMap1 = {} as Record<string, number>;
    players[0].dices.forEach((d) => {
      countMap1[d] = d in countMap1 ? countMap1[d] + 1 : 1;
    });
    const player1Category = Object.values(countMap1).some((v) => v === 2)
      ? Category.NormalPoint
      : Category.NoPoint;
    const countMap2 = {} as Record<string, number>;
    players[1].dices.forEach((d) => {
      countMap2[d] = d in countMap2 ? countMap2[d] + 1 : 1;
    });
    const player2Category = Object.values(countMap2).some((v) => v === 2)
      ? Category.NormalPoint
      : Category.NoPoint;

    if (player2Category > player1Category) {
      return "White win. - with normal point: 3";
    }
    return "Tie.";
  }
}

enum Category {
  NoPoint = 0,
  NormalPoint = 1,
}
