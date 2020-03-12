import React from 'react';
import { List, ListItem, DeviceName, DeviceStatusIcon, DeviceStatusLabel, DeviceStatusContent } from './styles';
import PropTypes from 'prop-types';

DevicesList.propTypes = {
  devices: PropTypes.array.isRequired,
};

export default function DevicesList({ devices }) {
  return (
    <List>
      {devices.map(device => (
        <ListItem key={device.deviceId} status={device.status}>
          <DeviceName>{device.name}</DeviceName>
          <DeviceStatusContent>
            <DeviceStatusIcon status={device.status} />
            <DeviceStatusLabel>{device.powerStatus}</DeviceStatusLabel>
          </DeviceStatusContent>
        </ListItem>
      ))}
    </List>
  );
}
