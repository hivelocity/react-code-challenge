import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  flex-grow: 1;
  max-width: 54rem;
  list-style-type: none;
  margin: 0;
  padding-inline-start: 0;
  & li:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-left-width: 2px;
  border-left-style: solid;
  border-left-color: ${({ powerStatus, theme }) =>
    powerStatus === 'ON' ? theme.colors.green : 'orange'};
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: 500;
  font-size: 1.25rem;
`;

const StatusIndicator = styled.span`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  & *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const StatusLight = styled.div`
  background-color: ${({ powerStatus, theme }) =>
    powerStatus === 'ON' ? theme.colors.green : 'orange'};
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  display: inline-block;
`;

function DeviceList({ devices }) {
  return (
    <List>
      {devices.map(device => (
        <ListItem key={device.deviceId} powerStatus={device.powerStatus}>
          {device.name}
          <StatusIndicator>
            <StatusLight powerStatus={device.powerStatus} />
            <span>{device.powerStatus}</span>
          </StatusIndicator>
        </ListItem>
      ))}
    </List>
  );
}

export default DeviceList;
