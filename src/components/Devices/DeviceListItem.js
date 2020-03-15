import React, { useState } from 'react'
import styled from 'styled-components'

const ListItem = styled.li`
    width: 100%;
    height: 40px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    background-color: #eeeeee;
    padding: 10px 20px;
    align-items: center;
    font-family: Open Sans, sans-serif;
    font-size: 1rem;
    &.on {
        border-left: 2px solid #3abe6a;
    }
    &.off {
        border-left: 2px solid #ff0000;
    }
`
const ItemName = styled.div``

const ItemStatus = styled.div`
    color: #94989a;
    text-transform: uppercase;
`

const ItemStatusIndicator = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
    &.on {
        background: #3abe6a;
    }
    &.off {
        background: #ff0000;
    }
`

const InfoBox = styled.div`
    position: absolute;
    padding: 10px;
    margin: 0;
    top: 0;
    left: 15%;
    color: #ffffff;
    background: #94989a;
    border-radius: 5px;
    z-index: 1;
    &.hide {
        display: none;
    }
    &:before {
        content: ' ';
        height: 0;
        position: absolute;
        width: 0;
        left: -20px;
        top: 20px;
        border: 10px solid transparent;
        border-right-color: #94989a;
    }
`
const InfoList = styled.ul`
    list-style: none;
    padding: 0 10px;
    line-height: 1.3;
`

const LocationList = styled.ul`
    padding: 0;
`
const LocationListItem = styled.li`
    margin: 0 20px;
`

const InfoListItem = styled.li``

const DeviceListItem = ({ props }) => {
    const deviceStatus = props.powerStatus.toLowerCase() === 'on' ? 'on' : 'off'
    const [isHovering, setHover] = useState(false)

    return (
        <ListItem
            className={deviceStatus}
            data-testid="list-element"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <ItemName>{props.name}</ItemName>
            <ItemStatus data-testid="status-text">
                <ItemStatusIndicator
                    className={deviceStatus}
                    data-testid="status-element"
                />
                {props.powerStatus}
            </ItemStatus>
            <InfoBox className={isHovering ? 'show' : 'hide'}>
                <InfoList>
                    <InfoListItem>Device Status: {props.status}</InfoListItem>
                    <InfoListItem>Device Type: {props.deviceType}</InfoListItem>
                    <LocationList>
                        Device Location:
                        <LocationListItem>
                            Cage ID: {props.location.cage_id}
                        </LocationListItem>
                        <LocationListItem>
                            Facility: {props.location.facility}
                        </LocationListItem>
                        <LocationListItem>
                            Rack: {props.location.rack}
                        </LocationListItem>
                        <LocationListItem>
                            Row: {props.location.row_name}
                        </LocationListItem>
                    </LocationList>
                </InfoList>
            </InfoBox>
        </ListItem>
    )
}

export default DeviceListItem
