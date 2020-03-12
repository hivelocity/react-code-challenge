import React, { useState, useCallback, useEffect } from "react";
import List from "./components/List";
import { fetch } from "./util/requests";

function App() {
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState(null);

  const fetchDevices = useCallback(async () => {
    try {
      const response = await fetch({ method: "GET", url: "/device/" });
      setDevices(response);
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);

  return (
    <>
      {devices.length > 0 &&
        devices.map(device => (
          <List
            key={device.deviceId}
            name={device.name}
            status={device.status === "active" ? true : false}
          />
        ))}

      {error && <h4>{error}</h4>}
    </>
  );
}

export default App;
