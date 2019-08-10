import React from 'react'

function NeighborsList({ neighbors, sortBy = 'name' }) {
    const sortByMap = {
        name: (a, b) => {
            if (a.name > b.name) {
                return +1
            } else if (a.name < b.name) {
                return -1
            } else {
                return 0
            }
        }
    }
    const orderedList = Object.keys(neighbors).sort((a, b) =>
        sortByMap[sortBy](neighbors[a], neighbors[b])
    )
    return (
        <ul className="NeighborsList">
            {orderedList.map(id => {
                const neighbor = neighbors[id]
                return <li key={id}>{neighbor.name}</li>
            })}
        </ul>
    )
}

export default NeighborsList
