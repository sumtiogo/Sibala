import { Parser } from "./Parser";

export class Game {
  showResult(input: string): string {
    const players = new Parser().parse(input);
    const player1Category = players[0].category;
    const player2Category = players[1].category;

    if (player1Category != player2Category) {
      let winnerName: string;
      let winnerOutput: string;
      if (player2Category > player1Category) {
        winnerName = players[1].name;
        winnerOutput = players[1].normalPoints.toString();
      } else {
        winnerName = players[0].name;
        winnerOutput = players[0].normalPoints.toString();
      }
      return `${winnerName} win. - with normal point: ${winnerOutput}`;
    }
    return "Tie.";
  }
}
