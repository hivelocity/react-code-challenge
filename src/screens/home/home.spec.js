import React from "react";
import { render, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import theme from "../../shared-styles/theme";
import api from "../../api";
import Home from "./index";

const devices = [
  { deviceId: 0, name: "device 0", powerStatus: "ON" },
  { deviceId: 1, name: "device 1", powerStatus: "ON" }
];

describe("Home", () => {
  beforeAll(() => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(devices)
      })
    );
  });

  test("should fetch device list", async () => {
    await wait(() => {
      render(
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      );
    });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${api.baseUrl}/device/`, {
      headers: api.headers
    });
  });

  test("should render the device list with the proper status after fetching it", async () => {
    await wait(() => {
      const { getByText, getByTestId } = render(
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      );

      devices.forEach(({ name, powerStatus }) => {
        expect(getByText(name)).toBeInTheDocument();
        expect(getByTestId(`${name}-status`)).toHaveTextContent(
          new RegExp(powerStatus, "i")
        );
      });
    });
  });

  afterAll(() => {
    jest.resetAllMocks();
  });
});
