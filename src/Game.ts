import { Parser } from "./Parser";
import { Category } from "./Player";

export class Game {
  showResult(input: string): string {
    const players = new Parser().parse(input);
    const player1Category = players[0].category;
    const player2Category = players[1].category;

    let winnerName: string;
    let winnerOutput: string;
    if (player1Category != player2Category) {
      if (player2Category > player1Category) {
        winnerName = players[1].name;
        winnerOutput = players[1].normalPoints.toString();
      } else {
        winnerName = players[0].name;
        winnerOutput = players[0].normalPoints.toString();
      }
      return `${winnerName} win. - with normal point: ${winnerOutput}`;
    } else if (player1Category === Category.NormalPoint) {
      let compareResult = players[0].normalPoints - players[1].normalPoints;
      if (compareResult != 0) {
        const winnerPointDices =
          compareResult > 0 ? players[0].pointDices : players[1].pointDices;
        winnerName = compareResult > 0 ? players[0].name : players[1].name;
        return `${winnerName} win. - with normal point: ${winnerPointDices[0]} over ${winnerPointDices[1]}`;
      } else {
        compareResult = players[0].pointDices[0] - players[1].pointDices[0];
        const winnerPointDices =
          compareResult > 0 ? players[0].pointDices : players[1].pointDices;
        winnerName = compareResult > 0 ? players[0].name : players[1].name;
        return `${winnerName} win. - with normal point: ${winnerPointDices[0]} over ${winnerPointDices[1]}`;
      }
    }
    return "Tie.";
  }
}
