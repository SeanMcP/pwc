const types = {
    person: {
        id: 'person',
        display: 'Person',
        plural: 'People'
    },
    place: {
        id: 'place',
        display: 'Place',
        plural: 'Places'
    },
    thing: {
        id: 'thing',
        display: 'Thing',
        plural: 'Things'
    },
    idea: {
        id: 'idea',
        display: 'Idea',
        plural: 'Ideas'
    }
}

const order = [types.person.id, types.place.id, types.thing.id, types.idea.id]

const ITEMS = {
    order,
    types
}

export default ITEMS
