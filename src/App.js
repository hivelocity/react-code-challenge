import React from "react";
import Swagger from "swagger-client";
import Device from "./components/Device/Device";
import {Title, ErrorMessage} from "./styles"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceList: [],
      hasFetchError: false
    };
  }

  componentDidMount() {
    Swagger.http({
      method: "GET",
      mode: "cors",
      credentials: "include",
      url: process.env.REACT_APP_API_URL,
      headers: new Headers({
        "X-API-KEY": process.env.REACT_APP_X_API_KEY
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
    const { deviceList, hasFetchError } = this.state;
    return (
      <div className="App">
        <Title>Hivelocity - Device Status</Title>
        {deviceList.map(device => {
          return <Device {...device} />;
        })}
        {hasFetchError && <ErrorMessage>Coudn't fetch any device data.</ErrorMessage>}
      </div>
    );
  }
}
