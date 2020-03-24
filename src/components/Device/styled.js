import styled, { keyframes, css } from "styled-components";

const getColor = status =>
  status === "ON" ? "rgba(0, 190, 106, 0.4)" : "rgba(255, 0, 0, 0.4)";
const animation = props => css`
  ${pulse(props.status)} 1s infinite;
`;
const pulse = status => keyframes`
  0% {
    box-shadow: -1px -1px 6px 0 ${getColor(status)};
  }
  50% {
    box-shadow: -1px -1px 6px 3px ${getColor(status)};
  }
  100% {
    box-shadow: -1px -1px 6px 0 ${getColor(status)};
  }
`;

export const Container = styled.div`
  align-items: center;
  background-color: #eeeeee;
  border-left: 2px solid
    ${props => (props.status === "ON" ? "#00be6a" : "#ff0000")};
  color: #6e6b6b;
  display: flex;
  justify-content: space-between;
  padding: 16px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const DeviceType = styled.small`
  color: #999999;
  font-style: italic;
`;

export const Status = styled.div`
  align-items: center;
  display: flex;
  min-width: 50px;

  &:before {
    animation: ${animation};
    background-color: ${props =>
      props.status === "ON" ? "#00be6a" : "#ff0000"};
    border-radius: 50%;
    content: "";
    display: block;
    height: 16px;
    margin-right: 4px;
    width: 16px;
  }
`;
