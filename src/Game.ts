import { Parser } from "./Parser";
import { Category } from "./Player";

export class Game {
  showResult(input: string): string {
    const players = new Parser().parse(input);

    if (players[0].category != players[1].category) {
      const winnerName =
        players[0].category > players[1].category
          ? players[0].name
          : players[1].name;
      const winnerOutput =
        players[0].category > players[1].category
          ? players[0].normalPoints.toString()
          : players[1].normalPoints.toString();
      return `${winnerName} win. - with normal point: ${winnerOutput}`;
    } else if (players[0].category === Category.NormalPoint) {
      const compareResult =
        players[0].normalPoints - players[1].normalPoints != 0
          ? players[0].normalPoints - players[1].normalPoints
          : players[0].pointDices[0] - players[1].pointDices[0];
      const winnerPointDices =
        compareResult > 0 ? players[0].pointDices : players[1].pointDices;
      const winnerOutput = `${winnerPointDices[0]} over ${winnerPointDices[1]}`;
      const winnerName = compareResult > 0 ? players[0].name : players[1].name;
      return `${winnerName} win. - with normal point: ${winnerOutput}`;
    }
    return "Tie.";
  }
}
