import { Parser } from "./Parser";
import { CategoryType, Player } from "./Player";

type CompareFunc = (
  p1: Player,
  p2: Player
) => { winner: Player; output: string; result: number };

export class Game {
  static sameTypeComparator: Record<CategoryType, CompareFunc> = {
    [CategoryType.NormalPoint]: Game.normalPointCompare,
    [CategoryType.AllOfAKind]: Game.allOfAKindCompare,
    [CategoryType.NoPoint]: Game.noPointCompare,
  };

  showResult(input: string): string {
    const [player1, player2] = new Parser().parse(input);
    const [type1, type2] = [player1.category.type, player2.category.type];

    const compare: CompareFunc =
      type1 != type2
        ? Game.differentCategoryCompare
        : Game.sameTypeComparator[type1];

    const { output, winner, result } = compare(player1, player2);
    return result != 0
      ? `${winner.name} win. - with ${winner.category.output}: ${output}`
      : "Tie.";
  }

  private static differentCategoryCompare(player1: Player, player2: Player) {
    const result = player1.category.type - player2.category.type;
    const winner = result > 0 ? player1 : player2;

    const output =
      winner.category.type === CategoryType.AllOfAKind
        ? winner.dices[0]
        : winner.category.type === CategoryType.NormalPoint
        ? winner.normalPoints.toString()
        : "";
    return { winner, output, result };
  }

  private static noPointCompare(player1: Player, _: Player) {
    const result = 0;
    const output = "";
    const winner = player1;
    return { result, output, winner };
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
