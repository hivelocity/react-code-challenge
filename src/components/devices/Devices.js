import React, { useState, useEffect } from 'react';
import { api } from 'api/api';
import { Container } from './styles';
import DevicesList from './DevicesList';

export default function Devices() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get('/device/')
      .then(response => {
        setDevices(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return <Container>{loading ? <span>Loading...</span> : <DevicesList devices={devices} />}</Container>;
}
