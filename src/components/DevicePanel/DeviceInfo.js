import React from 'react'
import styles from 'styled-components';
import { isObject } from 'lodash';

const InfoContainer = styles.div`
  display: flex;
  flex-direction: column;
  flex-direction: flex-start;
`;

const DeviceValue = styles.div`
  display: flex;
  flex-direction: row;
  flex-direction: flex-start;
  margin-left: 10px;
  margin-bottom: 5px;
`

export default function DeviceInfo({ device }) {
  const renderValue = (k, value) => 
    ( 
      <DeviceValue key={k}>
        <strong>{k}:</strong>
        {isObject(value)
          ? <InfoContainer>{Object.keys(value).map(k => renderValue(k, value[k]))}</InfoContainer>
          : `${value}`
        }
      </DeviceValue>
    )

  return (
  <InfoContainer>
    {Object.keys(device).map(k => (renderValue(k, device[k])))}
  </InfoContainer>
  )
}
