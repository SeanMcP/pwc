const debugSearch = 'debug=true'

export function isDebugMode() {
    return window.location.search.includes(debugSearch)
}
