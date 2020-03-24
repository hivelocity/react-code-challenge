import React from "react";
import Loading from "./index";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<Loading />", () => {
  it("should load correctly", () => {
    const { getByTestId } = render(
      <Loading />
    );

    expect(getByTestId('loader')).toBeInTheDocument();
  });
});
