import React from 'react'
import db from 'data/db'

function useItems() {
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        getItems()
    }, [])

    function getItems() {
        db.table('items')
            .toArray()
            .then(setItems)
    }

    function addItem({
        favorite = false,
        name,
        notes = null,
        prayerRecord = [],
        specialDate = null,
        type,
    }) {
        db.table('items')
            .add({
                favorite,
                name,
                notes,
                prayerRecord,
                specialDate,
                type,
            })
            .then(getItems)
    }

    function recordPrayerForId(id) {
        db.items
            .where('id')
            .equals(id)
            .modify((item) => {
                const now = new Date().getTime()
                if (item.prayerRecord) {
                    item.prayerRecord.unshift(now)
                } else {
                    item.prayerRecord = [now]
                }
            })
            .then(getItems)
    }

    function editById(id, updates) {
        db.items
            .where('id')
            .equals(id)
            .modify((item) => {
                for (const key in updates) {
                    item[key] = updates[key]
                }
            })
            .then(getItems)
    }

    return [items, { add: addItem, editById, recordPrayerForId }]
}

export default useItems
