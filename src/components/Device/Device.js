import React from "react";
import { Container, DeviceName } from "./styles";
import DeviceStatus from './DeviceStatus';

export default class Device extends React.Component {
  render() {
    const { name, powerStatus } = this.props;
    return (
      <Container>
        <DeviceName>{name}</DeviceName>
        <DeviceStatus status={powerStatus}>{powerStatus}</DeviceStatus>
      </Container>
    );
  }
}
