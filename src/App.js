import React from "react";
import Device from './components/Device/Device'

const deviceList = [
  {
    deviceId: 19401,
    deviceType: "Employee Servers",
    hostname: "",
    ipAddresses: [],
    ipmiEnabled: false,
    location: {
      cage_id: 28,
      facility: "LAX2",
      position: "",
      qr_code: "",
      rack: "Rack 27",
      row_name: "Cage 2"
    },
    name: "Device 3",
    powerStatus: "ON",
    selfProvisioning: null,
    serviceMonitors: [],
    servicePlan: null,
    status: "active",
    tags: []
  },
  {
    deviceId: 19400,
    deviceType: "Employee Servers",
    hostname: "",
    ipAddresses: [],
    ipmiEnabled: false,
    location: {
      cage_id: 44,
      facility: "DAL1",
      position: "",
      qr_code: "",
      rack: "Rack 01",
      row_name: "Row1"
    },
    name: "Device 2",
    powerStatus: "ON",
    selfProvisioning: null,
    serviceMonitors: [],
    servicePlan: null,
    status: "active",
    tags: []
  },
  {
    deviceId: 19399,
    deviceType: "Employee Servers",
    hostname: "",
    ipAddresses: [],
    ipmiEnabled: false,
    location: {
      cage_id: 12,
      facility: "TPA1",
      position: "",
      qr_code: "",
      rack: "Rack 1",
      row_name: "All Racks"
    },
    name: "Device 1",
    powerStatus: "ON",
    selfProvisioning: null,
    serviceMonitors: [],
    servicePlan: null,
    status: "active",
    tags: []
  }
];

function App() {
  return (
    <div className="App">
      <h1>Hello from Hivelocity</h1>
      
        {deviceList.map(device => {
          return <Device {...device} />;
        })}
      
    </div>
  );
}

export default App;
