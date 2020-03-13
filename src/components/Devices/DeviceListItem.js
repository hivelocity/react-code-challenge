import React from 'react'
import styled from 'styled-components'

const ListItem = styled.li`
    width: 100%;
    height: 40px;
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

const DeviceListItem = ({ props }) => {
    const deviceStatus = props.powerStatus.toLowerCase() === 'on' ? 'on' : 'off'

    return (
        <ListItem className={deviceStatus} data-testid="list-element">
            <ItemName>{props.name}</ItemName>
            <ItemStatus data-testid="status-text">
                <ItemStatusIndicator
                    className={deviceStatus}
                    data-testid="status-element"
                />
                {props.powerStatus}
            </ItemStatus>
        </ListItem>
    )
}

export default DeviceListItem
