import React from 'react';
import classNames from 'classnames';
import './StatusCard.css';

const StatusCard = props => {
    const { name, powerStatus } = props.devices;

    return (
        <article className={classNames('status-card', powerStatus === 'ON' ? 'on' : 'off')}>
            <h2 className="device-name">{name}</h2>
            <div className="device-status">
                <i className={classNames('fas', 'fa-circle', powerStatus === 'ON' ? 'on-icon' : 'off-icon')}></i>
                {powerStatus}
            </div>
        </article>
    )
};

export default StatusCard;
