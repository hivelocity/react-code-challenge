import React from 'react';
import DeviceList from './components/DeviceList/DeviceList';
import PageContainer from './components/PageContainer/PageContainer';

function App() {
  return (
    <div className="App">
      <PageContainer>
        <p>Hello from Hivelocity</p>
        <DeviceList />
      </PageContainer>
    </div>
  );
}

export default App;
