import React from 'react'
import { navigate } from '@reach/router'
import useToggle from 'react-use-toggle'
import ROUTES from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'
import Emoji from 'a11y-react-emoji'

function IndividualView(props) {
    const [, { get, recordPrayer, remove }, DEV] = useIndividuals()
    const [editing, toggleEditing] = useToggle(false)
    const disabled = !editing
    const data = get(props.id)
    function handleDelete() {
        remove(props.id)
        navigate(ROUTES.all)
    }
    function formatBirthday() {
        const date = new Date(data.birthday)
        return date.getMonth() + 1 + '/' + date.getDate()
    }
    function formatLastPrayed() {
        const date = new Date(data.lastPrayed)
        return (
            date.getMonth() +
            1 +
            '/' +
            date.getDate() +
            '/' +
            date.getFullYear()
        )
    }
    return (
        <div className="IndividualView">
            <form>
                <header>
                    <label>
                        <input
                            type="checkbox"
                            checked={editing}
                            onChange={toggleEditing}
                        />{' '}
                        Edit
                    </label>
                    <h1>
                        {editing && <label htmlFor="name">Name</label>}
                        <input
                            id="name"
                            name="name"
                            defaultValue={data.name}
                            disabled={disabled}
                        />
                    </h1>
                    <section>
                        <div>
                            <Emoji symbol="🙏" />
                            <span>{formatLastPrayed()}</span>
                        </div>
                        <div>
                            <Emoji symbol="🎂" />
                            <span>{formatBirthday()}</span>
                        </div>
                    </section>
                </header>
                <label htmlFor="notes">Notes</label>
                <textarea
                    id="notes"
                    defaultValue={data.notes}
                    disabled={disabled}
                />
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </form>
            {editing && <button onClick={handleDelete}>Delete</button>}
            {editing && process.env.NODE_ENV === 'development' && (
                <button onClick={() => DEV.___DEV___setBirthday(props.id)}>
                    Set birthday to today
                </button>
            )}
            {disabled && (
                <button onClick={() => recordPrayer(props.id)}>
                    Record prayer
                </button>
            )}
        </div>
    )
}

export default IndividualView
