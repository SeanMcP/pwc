/* global getPropsFactory */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SortListRadio, { OPTIONS } from './SortListRadio'

const mockSetValue = jest.fn()

const getProps = getPropsFactory({ state: ['test-value', mockSetValue] })

beforeEach(() => {
    jest.clearAllMocks()
})

test('On click, calls `setValue`', () => {
    const { getByLabelText } = render(<SortListRadio {...getProps()} />)

    OPTIONS.forEach(({ label, value }) => {
        fireEvent.click(getByLabelText(label))
        expect(mockSetValue).toHaveBeenCalledWith(value)
    })
})
