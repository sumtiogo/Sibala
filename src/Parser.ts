import { Player } from "./Player";

export class Parser {
  parse(input: string): Player[] {
    //Black: 1 2 3 4  White: 2 3 4 5
    const sections = input.split("  ");
    const player1Name = sections[0].split(": ")[0];
    const player2Name = sections[1].split(": ")[0];
    return [new Player(player1Name), new Player(player2Name)];
  }
}
