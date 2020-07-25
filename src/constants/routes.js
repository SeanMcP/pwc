const ROUTES = {
    home: '/',
    add: '/add',
    addItem: '/add/:type',
    edit: '/e/:id',
    item: '/i/:id',
    list: '/list',
    settings: '/settings',
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
