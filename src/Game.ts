import { Parser } from "./Parser";
import { Category, Player } from "./Player";

export class Game {
  showResult(input: string): string {
    const [player1, player2] = new Parser().parse(input);

    if (player1.category != player2.category) {
      const winnerName =
        player1.category > player2.category ? player1.name : player2.name;
      const winnerOutput =
        player1.category > player2.category
          ? player1.normalPoints.toString()
          : player2.normalPoints.toString();
      return `${winnerName} win. - with normal point: ${winnerOutput}`;
    } else if (player1.category === Category.NormalPoint) {
      const { winnerOutput, winnerName, compareResult } =
        Game.normalPointCompare(player1, player2);
      if (compareResult != 0)
        return `${winnerName} win. - with normal point: ${winnerOutput}`;
    }
    return "Tie.";
  }

  private static normalPointCompare(player1: Player, player2: Player) {
    const compareResult =
      player1.normalPoints - player2.normalPoints != 0
        ? player1.normalPoints - player2.normalPoints
        : player1.pointDices[0] - player2.pointDices[0];
    const winnerPointDices =
      compareResult > 0 ? player1.pointDices : player2.pointDices;
    const winnerOutput = `${winnerPointDices[0]} over ${winnerPointDices[1]}`;
    const winnerName = compareResult > 0 ? player1.name : player2.name;
    return { winnerOutput, winnerName, compareResult };
  }
}
