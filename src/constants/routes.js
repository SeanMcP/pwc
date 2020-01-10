const ROUTES = {
    home: '/',
    add: '/add',
    addItem: '/add/:type',
    list: '/list',
    login: '/login',
    item: '/i/:id',
    edit: '/e/:id',
    settings: '/settings',
    signUp: '/sign-up',
}

export const buildRoute = {
    addItem(type) {
        return ROUTES.addItem.replace(/:type/, type)
    },
    edit(id) {
        return ROUTES.edit.replace(/:id/, id)
    },
    item(id) {
        return ROUTES.item.replace(/:id/, id)
    },
}

export default ROUTES
