import styled from "styled-components";

export const Container = styled.div`
  border-left: 3px solid #00be6a;
  margin: 16px;
  padding: 8px 16px;
  height: 48px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  color: #646060;
`;

export const DeviceName = styled.div`
  flex-grow: 1;
`;

export const DeviceStatusCircle = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 4px;
  border-radius: 50%;
  background-color: ${props => props.status.toLowerCase() === 'on' ? '#00BE6A;' : '#be1900'} ;
  float: left;
`;