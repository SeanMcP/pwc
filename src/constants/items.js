const types = {
    person: {
        id: 'person',
        display: 'Person'
    },
    place: {
        id: 'place',
        display: 'Place'
    },
    thing: {
        id: 'thing',
        display: 'Thing'
    },
    idea: {
        id: 'idea',
        display: 'Idea'
    }
}

const order = [types.person.id, types.place.id, types.thing.id, types.idea.id]

const ITEMS = {
    order,
    types
}

export default ITEMS
