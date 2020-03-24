import React from "react";
import Device from "./index";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<Device />", () => {
  const devices = [
    { name: "Device 1", type: "Employee Servers", status: "ON"},
    { name: "Device 2", type: "Employee Servers", status: "OFF"}
  ];

  it("should load correctly", () => {
    const { getByText } = render(
      <Device name={devices[0].name} type={devices[0].type} status={devices[0].status} />
    );

    expect(getByText(devices[0].name)).toBeInTheDocument();
    expect(getByText(devices[0].type)).toBeInTheDocument();
    expect(getByText(devices[0].status)).toBeInTheDocument();
  });

  describe("Device Status", () => {
    it("should render with 'ON' status", () => {
      const { getByTestId } = render(
        <Device name={devices[0].name} type={devices[0].type} status={devices[0].status} />
      );

      expect(getByTestId('device')).toHaveTextContent('ON');
    });

    it("should render with 'OFF' status", () => {
      const { getByTestId } = render(
        <Device name={devices[1].name} type={devices[1].type} status={devices[1].status} />
      );

      expect(getByTestId('device')).toHaveTextContent('OFF');
    });
  });
});
