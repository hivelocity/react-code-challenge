import React from "react";
import { Container, DeviceType, Status } from "./styled";

const Device = ({ name, type, status }) => {
  return (
    <Container status={status} data-testid="device">
      <div>
        <div>{name}</div>
        <DeviceType>{type}</DeviceType>
      </div>
      <Status status={status}>{status}</Status>
    </Container>
  );
};

export default Device;
