import Dexie from 'dexie'

const db = new Dexie('pwoc')

db.version(1).stores({
    items: 'id++, name, type, specialDate, lastPrayed, notes',
})

export default db
