import React from "react";
import Swagger from "swagger-client";

import Device from "./components/Device/Device";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceList: [],
      hasFetchError: false
    };
  }

  componentDidMount() {
    Swagger.http.withCredentials = true;
    Swagger.http({
      method: "GET",
      mode: "cors",
      credentials: "include",
      url: process.env.REACT_APP_API_URL,
      headers: new Headers({
        "X-API-KEY": process.env.REACT_APP_X_API_KEY,
      })
    })
      .then(res => {
        this.setState({ deviceList: res.body });
      })
      .catch(err => {
        this.setState({ hasFetchError: true });
        console.log("err", JSON.stringify(err));
      });
  }
  render() {
    const { deviceList,hasFetchError } = this.state;
    return (
      <div className="App">
        <h1>Hivelocity - Device Status</h1>
        {deviceList.map(device => {
          return <Device {...device} />;
        })}
        {hasFetchError && (
          <h2>Error</h2> 
        )}
      </div>
    );
  }
}
