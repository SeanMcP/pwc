const ROUTES = {
    home: '/',
    add: '/add',
    all: '/all',
    individual: '/i/:id',
    edit: '/e/:id'
}

export const buildRoute = {
    individual(id) {
        return ROUTES.individual.replace(/:id/, id)
    },
    edit(id) {
        return ROUTES.edit.replace(/:id/, id)
    }
}

export default ROUTES
