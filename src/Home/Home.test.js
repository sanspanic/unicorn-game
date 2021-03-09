import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

test("renders without crashing", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
});

test("matches snapshot", () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
