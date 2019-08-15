const ROUTES = {
    home: '/',
    add: '/add',
    all: '/all',
    individual: '/i/:id'
}

export const buildRoute = {
    individual(id) {
        return ROUTES.individual.replace(/:id/, id)
    }
}

export default ROUTES
