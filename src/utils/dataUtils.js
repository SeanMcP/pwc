import { dataVersion, name } from '../../package.json'

const majorVersion = dataVersion.slice(0, dataVersion.indexOf('.'))

export function buildKeyFromType(type) {
    return buildKey(name, majorVersion, type)
}

export function buildKeyFromVersionAndType(version, type) {
    return buildKey(name, version, type)
}

export function buildKey(name, version, type) {
    return `${name}@${version}-${type}`
}
