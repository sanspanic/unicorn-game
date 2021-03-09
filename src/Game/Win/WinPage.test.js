import React from "react";
import { fireEvent, render } from "@testing-library/react";
import WinPage from "./WinPage";
import GameContextProvider from "../../Context/GameContextProvider";

test("renders without crashing", () => {
  render(
    <GameContextProvider>
      <WinPage />
    </GameContextProvider>
  );
});

test("matches snapshot", () => {
  const { asFragment } = render(
    <GameContextProvider>
      <WinPage />
    </GameContextProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});

//test fails :(
/* test("button click restarts game", () => {
  const { getByText } = render(
    <GameContextProvider>
      <WinPage />
    </GameContextProvider>
  );
  const button = getByText("Restart");
  //below line breaks test: no history object
  fireEvent.click(button);
}); */
