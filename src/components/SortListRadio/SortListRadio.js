import React from 'react'
import classList from '@seanmcp/class-list'

import './SortListRadio.scss'

export const OPTIONS = [
    { label: 'All', value: 'All' },
    { label: 'Type', value: 'ByType' },
]

function SortListRadio({ state }) {
    const [value, setValue] = state
    function handleChange(e) {
        setValue(e.target.value)
    }
    return (
        <fieldset className="SortListRadio">
            <legend className="SortListRadio__legend">Sort List By</legend>
            <ul className="SortListRadio__list reset">
                {OPTIONS.map((option) => {
                    const isChecked = value === option.value
                    return (
                        <li
                            className="SortListRadio__option"
                            key={option.value}
                        >
                            <label
                                className={classList(
                                    'SortListRadio__label',
                                    isChecked && 'SortListRadio__label--checked'
                                )}
                                htmlFor={option.value}
                            >
                                <input
                                    checked={isChecked}
                                    className="SortListRadio__input"
                                    id={option.value}
                                    name="sort"
                                    onChange={handleChange}
                                    type="radio"
                                    value={option.value}
                                />
                                {option.label}
                            </label>
                        </li>
                    )
                })}
            </ul>
        </fieldset>
    )
}

export default SortListRadio
