import { Game } from "./Game";

describe("Game", () => {
  const game = new Game();

  function resultShouldBe(input: string, expected: string) {
    expect(game.showResult(input)).toEqual(expected);
  }

  test("no point tie no point", () => {
    resultShouldBe("Black: 1 2 3 4  White: 2 3 4 5", "Tie.");
    resultShouldBe("Black: 2 2 2 4  White: 3 3 3 5", "Tie.");
  });

  test("normal point wins no point", () => {
    resultShouldBe(
      "Black: 3 4 5 6  White: 4 1 4 2",
      "White win. - with normal point: 3"
    );
    resultShouldBe(
      "Black: 4 3 4 2  White: 3 5 5 5",
      "Black win. - with normal point: 5"
    );
  });
});
