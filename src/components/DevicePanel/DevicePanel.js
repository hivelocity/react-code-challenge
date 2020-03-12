import React from 'react';
import DeviceContainer from './DeviceContainer';
import DeviceState from './DeviceState/DeviceState';
import DeviceLabel from './DeviceLabel';
import DeviceStatusContainer from './DeviceStatusContainer';
import DeviceInfo from './DeviceInfo';

function DevicePanel({
  device
}) {
  const [open, setOpen] = React.useState(false);
  const { name, powerStatus } = device;
  
  const handleOpenInfo = () => setOpen(!open);

  return (
    <div>
    <DeviceContainer onClick={handleOpenInfo}>
      <DeviceLabel> 
        { name }
      </DeviceLabel>
      <DeviceStatusContainer>
        <DeviceState isOn={powerStatus === "ON"}/>
      </DeviceStatusContainer>
      
    </DeviceContainer>
    {open === true ? (
        <DeviceInfo device={device} />
      ) : null}
    </div>
  );
}

export default DevicePanel;
