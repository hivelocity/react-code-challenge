import React, { useState, useEffect } from 'react';
import { api } from 'api/api';
import { Container } from './styles';
import DevicesList from './DevicesList';
import { responseMock } from './responseMock';

export default function Devices() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/device/')
      .then(response => {
        setDevices(response.data);
      })
      .catch(() => {
        setDevices(responseMock);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <Container>{loading ? <span>Loading...</span> : <DevicesList devices={devices} />}</Container>;
}
