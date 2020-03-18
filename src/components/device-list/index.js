import React from "react";
import PropTypes from "prop-types";
import Device from "../device";
import * as S from "./styles";

const propTypes = {
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      deviceId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      powerStatus: PropTypes.string.isRequired
    })
  )
};

const DeviceList = ({ devices }) => {
  return (
    <S.List>
      {devices.map(({ deviceId, name, powerStatus }) => {
        return (
          <Device
            key={deviceId}
            name={name}
            status={powerStatus.toLowerCase()}
          />
        );
      })}
    </S.List>
  );
};

DeviceList.propTypes = propTypes;

export default DeviceList;
