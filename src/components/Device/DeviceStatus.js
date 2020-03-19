import React from "react";
import { DeviceStatusCircle } from "./styles";

export default class DeviceStatus extends React.Component {
  render() {
    return (
      <div>
        <DeviceStatusCircle status={this.props.status} />
        {this.props.children}
      </div>
    );
  }
}
