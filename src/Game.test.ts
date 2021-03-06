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
    // same sum, tie
    resultShouldBe("Black: 4 1 4 2  White: 1 2 5 5", "Tie.");

    // two pair with winner
    resultShouldBe(
      "Black: 1 6 1 6  White: 3 3 5 5",
      "Black win. - with normal point: 6 over 6"
    );

    // two pairs tie
    resultShouldBe("Black: 4 1 4 1  White: 4 4 1 1", "Tie.");
  });

  test("normal point v.s. normal point", () => {
    // bigger sum
    resultShouldBe(
      "Black: 5 3 5 4  White: 2 6 2 3",
      "White win. - with normal point: 6 over 3"
    );

    // bigger dice
    resultShouldBe(
      "Black: 4 1 4 6  White: 3 4 5 5",
      "Black win. - with normal point: 6 over 1"
    );

    // two pair v.s. two pair
    resultShouldBe(
      "Black: 3 3 5 5  White: 6 6 2 2",
      "White win. - with normal point: 6 over 6"
    );

    // tie
    resultShouldBe("Black: 3 6 5 5  White: 4 4 3 6", "Tie.");
  });

  test("all of a kind win normal point", () => {
    resultShouldBe(
      "Black: 5 5 5 5  White: 5 6 5 4",
      "Black win. - with all of a kind: 5"
    );

    resultShouldBe(
      "Black: 5 3 2 5  White: 1 1 1 1",
      "White win. - with all of a kind: 1"
    );
  });
  test("all of a kind v.s. all of a kind", () => {
    // // special order
    resultShouldBe(
      "Black: 1 1 1 1  White: 4 4 4 4",
      "Black win. - with all of a kind: 1"
    );
    resultShouldBe(
      "Black: 6 6 6 6  White: 4 4 4 4",
      "White win. - with all of a kind: 4"
    );
    resultShouldBe(
      "Black: 5 5 5 5  White: 6 6 6 6",
      "White win. - with all of a kind: 6"
    );
    resultShouldBe("Black: 5 5 5 5  White: 5 5 5 5", "Tie.");
  });
});
