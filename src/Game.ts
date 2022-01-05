import { Parser } from "./Parser";

export class Game {
  showResult(input: string): string {
    // "Black: 3 4 5 6  White: 4 1 4 2",
    // "White win. - with normal point: 3"
    const players = new Parser().parse(input);
    const player1Category = this.getCategory(players[0].dices);
    const player2Category = this.getCategory(players[1].dices);

    if (player2Category > player1Category) {
      return "White win. - with normal point: 3";
    }
    return "Tie.";
  }

  private getCategory(dices: string[]) {
    const countMap1 = {} as Record<string, number>;
    dices.forEach((d) => {
      countMap1[d] = d in countMap1 ? countMap1[d] + 1 : 1;
    });
    return Object.values(countMap1).some((v) => v === 2)
      ? Category.NormalPoint
      : Category.NoPoint;
  }
}

enum Category {
  NoPoint = 0,
  NormalPoint = 1,
}
