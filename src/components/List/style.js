import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  margin-bottom: 10px;
  width: 800px;
  height: 60px;
  background-color: #f0f0f0;
  justify-content: space-between;
  align-items: center;
  border-left: 2px solid #5de65d;
`;

export const Content = styled.div`
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  color: #a0a0a0;
`;

export const StatusOn = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: #5de65d;
`;

export const StatusOff = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: #ff0000;
`;
