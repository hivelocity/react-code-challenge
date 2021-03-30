import React, { useState, useEffect } from 'react';
import StatusCard from './components/StatusCard';
import './index.css';

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('mockData.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
      .then((response) => response.json())
      .then(data => setData(data));
  };

  return (
    <>
      {!data ? (
        <div>Loading.....</div>
      ) : (
        <div className="card-list">
          <img className="app-logo" src="https://hivelocity.b-cdn.net/wp-content/uploads/2019/07/logo.svg" alt="Hivelocity Logo"/>
          {data
            .sort((a, b) => (a.deviceId > b.deviceId) ? 1 : ((b.deviceId > a.deviceId) ? -1 : 0))
            .map((devices) => {
              return <StatusCard devices={devices} />
            })}
        </div>
      )
      }
    </>
  )
};


export default App;
