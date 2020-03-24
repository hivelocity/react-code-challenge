import React, { useEffect, useState } from "react";
import { api } from "services";
import Device from "components/Device";
import Loading from "components/Loading";
import { List, Error } from "./styled";

const DeviceList = () => {
  const [devices, setDevices] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDevices = async () => {
      const { status, body } = await api();
      if (status === 200) {
        const sortedDevices = body.sort((a, b) => a.deviceId > b.deviceId);
        setDevices(sortedDevices);
      }
      setLoading(false);
    };

    getDevices();
  });

  if (loading) return <Loading />;

  return (
    (!devices && (
      <Error>
        Houston, we have a problem! <br /> ¯\_(ツ)_/¯
      </Error>
    )) || (
      <List>
        {devices.map(device => (
          <Device
            key={device.deviceId}
            name={device.name}
            type={device.deviceType}
            status={device.powerStatus}
          />
        ))}
      </List>
    )
  );
};

export default DeviceList;
