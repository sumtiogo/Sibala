import { Parser } from "./Parser";
import { CategoryType, Player } from "./Player";

export class Game {
  showResult(input: string): string {
    const [player1, player2] = new Parser().parse(input);
    if (player1.category != player2.category) {
      const winner = player1.category > player2.category ? player1 : player2;

      if (winner.category === CategoryType.AllOfAKind) {
        return `${winner.name} win. - with all of a kind: ${winner.dices[0]}`;
      }

      return `${winner.name} win. - with normal point: ${winner.normalPoints}`;
    } else if (player1.category === CategoryType.NormalPoint) {
      const { winnerOutput, winnerName, compareResult } =
        Game.normalPointCompare(player1, player2);
      if (compareResult != 0)
        return `${winnerName} win. - with normal point: ${winnerOutput}`;
    } else if (player1.category === CategoryType.AllOfAKind) {
      const order = ["1", "4", "6", "5", "3", "2"].reverse();
      const compareResult =
        order.indexOf(player1.dices[0]) - order.indexOf(player2.dices[0]);
      if (compareResult != 0) {
        const winner = compareResult > 0 ? player1 : player2;
        return `${winner.name} win. - with all of a kind: ${winner.dices[0]}`;
      }
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
