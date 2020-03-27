import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DeviceList from './components/DeviceList';
import LoadingIndicator from './components/LoadingIndicator';
import deviceService from './services/deviceService';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: center;
`;

const states = {
  IDLE: 'IDLE',
  LOADING: 'LOADING',
  FAILED: 'FAILED'
};

function App() {
  const [devices, setDevices] = useState([]);
  const [state, setState] = useState(states.LOADING);

  useEffect(() => {
    let ignoreResponse = false;
    deviceService
      .getDevices()
      .then(data => {
        if (!ignoreResponse) {
          setDevices(data.sort((a, b) => a.deviceId - b.deviceId));
          setState(states.IDLE);
        }
      })
      .catch(() => {
        if (!ignoreResponse) {
          setState(states.FAILED);
        }
      });

    return () => {
      ignoreResponse = true;
    };
  }, []);

  return (
    <AppContainer>
      <Content>
        {state === states.LOADING ? (
          <LoadingIndicator />
        ) : state === states.FAILED ? (
          'Failed to retrieve devices.'
        ) : devices.length ? (
          <DeviceList devices={devices} />
        ) : (
          `It doesn't seem that you have any devices.`
        )}
      </Content>
    </AppContainer>
  );
}

export default App;
