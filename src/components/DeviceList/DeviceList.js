import React from 'react';
import DevicePanel from '../DevicePanel/DevicePanel';
import DeviceMocked from './mockedDevices.json';
import { getDevices } from '../../services/device';
import { orderBy } from 'lodash';

/// I had some problems to do the request using swagger-client, fetch and axios, I let with a
/// mocked list, that I got from https://api-docs.hivelocity.net/openapi
export default function DeviceList() {

  const [devices, setDevices] = React.useState([]);

  React.useEffect(() => {
    const loadDevices = async () => {
      const devicesRequest = await getDevices();
      if (devicesRequest) setDevices(devicesRequest);
    }
    
    loadDevices();
  }, []);

  return (
    orderBy(DeviceMocked, ['deviceId'], ['asc']).map(device => (
      <DevicePanel key={device.deviceId} device={device} />
    ))
  )
}
