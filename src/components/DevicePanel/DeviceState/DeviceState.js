import React from 'react';
import StateLight from './StateLight';
import styled from 'styled-components';

const StateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-right: 10px;
`;

const ItemsContainer = styled.div`
  margin: 1px;
  display: flex;
  justify-content: center;
`;

const TextContainer = styled.h5`
  color: gray;
  font-size: 16px;
`;

export default function DeviceState({
  isOn = false,
}) {
  return (
    <StateContainer>
      <ItemsContainer>
        <StateLight isOn={isOn}/>
      </ItemsContainer>
      
      <ItemsContainer>
        <TextContainer>
          {isOn === true ? "ON" : "OFF"}
        </TextContainer>
      </ItemsContainer>
    </StateContainer>
  )
}


