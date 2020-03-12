import React from "react";

import "@testing-library/jest-dom";
import { render, getByText, cleanup } from "@testing-library/react";

import List from ".";

afterEach(cleanup);

test("the render of the Info component", () => {
  const { container } = render(<List name="Device 3" status={true} />);
  expect(container).toBeTruthy();
});

test("the info of the List component", () => {
  const { container, debug } = render(<List name="Device 3" status={true} />);
  expect(container).toBeTruthy();
  debug(container);
  expect(getByText(container, /Device 3/i)).toBeInTheDocument();
  expect(getByText(container, /ON/i)).toBeInTheDocument();
});
