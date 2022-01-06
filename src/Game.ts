import { Parser } from "./Parser";
import { CategoryType, Player } from "./Player";

export class Game {
  static sameTypeComparator = {
    [CategoryType.NormalPoint]: Game.normalPointCompare,
    [CategoryType.AllOfAKind]: Game.allOfAKindCompare,
  };

  showResult(input: string): string {
    const [player1, player2] = new Parser().parse(input);
    if (player1.category.type != player2.category.type) {
      const winner =
        player1.category.type > player2.category.type ? player1 : player2;

      if (winner.category.type === CategoryType.AllOfAKind) {
        return `${winner.name} win. - with ${winner.category.output}: ${winner.dices[0]}`;
      }
      return `${winner.name} win. - with ${winner.category.output}: ${winner.normalPoints}`;
    } else if (player1.category.type != CategoryType.NoPoint) {
      const compare = Game.sameTypeComparator[player1.category.type];
      const { output, winner, result } = compare(player1, player2);
      if (result != 0)
        return `${winner.name} win. - with ${winner.category.output}: ${output}`;
    }
    return "Tie.";
  }

  private static allOfAKindCompare(player1: Player, player2: Player) {
    const order = ["1", "4", "6", "5", "3", "2"].reverse();
    const result =
      order.indexOf(player1.dices[0]) - order.indexOf(player2.dices[0]);
    const winner = result > 0 ? player1 : player2;
    const output = winner.dices[0];
    return { result, winner, output };
  }

  private static normalPointCompare(player1: Player, player2: Player) {
    const result =
      player1.normalPoints - player2.normalPoints != 0
        ? player1.normalPoints - player2.normalPoints
        : player1.pointDices[0] - player2.pointDices[0];
    const winnerPointDices =
      result > 0 ? player1.pointDices : player2.pointDices;
    const output = `${winnerPointDices[0]} over ${winnerPointDices[1]}`;
    const winner = result > 0 ? player1 : player2;
    return { output, winner, result };
  }
}
