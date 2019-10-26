const ROUTES = {
    home: '/',
    add: '/add',
    addItem: '/add/:type',
    all: '/all',
    individual: '/i/:id',
    edit: '/e/:id',
    settings: '/settings'
}

export const buildRoute = {
    addItem(type) {
        return ROUTES.addItem.replace(/:type/, type)
    },
    individual(id) {
        return ROUTES.individual.replace(/:id/, id)
    },
    edit(id) {
        return ROUTES.edit.replace(/:id/, id)
    }
}

export default ROUTES
