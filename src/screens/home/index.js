import React, { Fragment, useEffect, useState } from "react";
import DeviceList from "../../components/device-list";
import PageLoader from "../../components/page-loader";
import api, { STATUS } from "../../api";

const Home = () => {
  const [devices, setDevices] = useState([]);
  const [requestStatus, setRequestStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    const getDevices = async () => {
      try {
        setRequestStatus(STATUS.LOADING);
        const response = await api.getDevices();
        setDevices(response);
        setRequestStatus(STATUS.IDLE);
      } catch (error) {
        console.error("error", error);
        setRequestStatus(STATUS.ERROR);
      }
    };

    getDevices();
  }, []);

  if (requestStatus === STATUS.LOADING) {
    return <PageLoader />;
  }

  return (
    <Fragment>
      <h1>Devices</h1>
      {requestStatus === STATUS.ERROR && (
        <div>Oops, something went wrong while loading devices</div>
      )}
      {requestStatus === STATUS.IDLE && <DeviceList devices={devices} />}
    </Fragment>
  );
};

export default Home;
