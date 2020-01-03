import React from 'react'
import clb from 'class-list-builder'

import ContentContainer from 'components/ContentContainer/ContentContainer'
import useSettings from 'store/useSettings'
import { FIELDS } from 'schemas/settings'

import './SortListRadio.scss'

export const OPTIONS = [
    { label: 'All', value: 'All' },
    { label: 'Type', value: 'ByType' },
]

function SortListRadio({ state }) {
    const [value, setValue] = state
    const [, { setValue: setSettingsValue }] = useSettings()

    function handleChange(e) {
        setSettingsValue(FIELDS.listView, e.target.value)
        setValue(e.target.value)
    }

    return (
        <fieldset className="SortListRadio">
            <ContentContainer>
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
                                    className={clb(
                                        'SortListRadio__label',
                                        isChecked &&
                                            'SortListRadio__label--checked'
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
            </ContentContainer>
        </fieldset>
    )
}

export default SortListRadio
