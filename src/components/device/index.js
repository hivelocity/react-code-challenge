import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

const Device = ({ name, status }) => {
  return (
    <S.Device status={status}>
      <div>{name}</div>
      <S.Status data-testid={`${name}-status`} status={status}>
        {status}
      </S.Status>
    </S.Device>
  );
};

Device.propTypes = propTypes;

export default Device;
