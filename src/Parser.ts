import { Player } from "./Player";

export class Parser {
  parse(input: string): Player[] {
    //Black: 1 2 3 4  White: 2 3 4 5
    const sections = input.split("  ");
    const player1 = Parser.getPlayer(sections[0]);
    const player2 = Parser.getPlayer(sections[1]);

    return [player1, player2];
  }

  private static getPlayer(section: string) {
    const player1Name = section.split(": ")[0];
    const player1Dices = section.split(": ")[1].split(" ");
    return new Player(player1Name, player1Dices);
  }
}
