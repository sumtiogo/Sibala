import { Parser } from "./Parser";

export class Game {
  showResult(input: string): string {
    // "Black: 3 4 5 6  White: 4 1 4 2",
    // "White win. - with normal point: 3"
    const players = new Parser().parse(input);
    const player1Category = players[0].getCategory();
    const player2Category = players[1].getCategory();

    if (player2Category > player1Category) {
      return `${players[1].name} win. - with normal point: 3`;
    }
    if (player2Category < player1Category) {
      return "Black win. - with normal point: 5";
    }
    return "Tie.";
  }
}
