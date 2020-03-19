import React  from 'react';

export default class Device extends React.Component{
  render(){
    const {name, powerStatus} = this.props;
    return (<li>{name} - {powerStatus}</li>);
  };
}