import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { orderBy } from 'lodash'
import api from '../../api.js'
// import deviceMockData from '../../mock-data.json'

/* child components */
import DeviceListItem from './DeviceListItem'

/* styled components */
const ListWrapper = styled.ul`
    width: 800px;
    margin: 5vh auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
`
const HTTPError = styled.div`
    background-color: red;
    padding: 2rem;
    color: white;
    text-align: center;
`

const DeviceList = () => {
    const [devices, setDevices] = useState([])
    const [hasHttpError, setHttpError] = useState(false)

    async function fetchData() {
        try {
            const { data } = await api.get('/device/')
            setDevices(data)
            // setDevices(deviceMockData)
        } catch (error) {
            setHttpError(true)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    if (hasHttpError) {
        return <HTTPError>Sorry, something broke here. 😥</HTTPError>
    } else {
        return (
            <ListWrapper>
                {orderBy(devices, ['deviceId'], ['asc']).map(device => (
                    <DeviceListItem
                        key={device.deviceId}
                        props={device}
                    ></DeviceListItem>
                ))}
            </ListWrapper>
        )
    }
}

export default DeviceList
