import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import DeviceListItem from '../components/Devices/DeviceListItem'

describe('Device', () => {
    let mockDevice

    beforeEach(() => {
        mockDevice = {
            name: 'Device 1',
            powerStatus: 'ON',
        }
    })

    test('renders as react component properly', () => {
        const { getByTestId } = render(<DeviceListItem props={mockDevice} />)
        const deviceStatus = getByTestId('list-element')
        expect(deviceStatus).toBeInTheDocument()
    })

    /* test powerStatus is 'ON' */
    test('status text contains on', () => {
        const { getByTestId } = render(<DeviceListItem props={mockDevice} />)
        const deviceStatus = getByTestId('status-text')
        expect(deviceStatus).toHaveTextContent(/on/i)
    })

    /* test powerStatus is 'OFF' */
    test('shows off status in className', () => {
        mockDevice.powerStatus = 'OFF'

        const { getByTestId } = render(<DeviceListItem props={mockDevice} />)
        const deviceStatus = getByTestId('status-element')
        expect(deviceStatus).toHaveClass('off')
    })

    test('status text contains off', () => {
        mockDevice.powerStatus = 'OFF'

        const { getByTestId } = render(<DeviceListItem props={mockDevice} />)
        const deviceStatus = getByTestId('status-text')
        expect(deviceStatus).toHaveTextContent(/off/i)
    })
})
