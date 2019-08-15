import React from 'react'
import { Link } from '@reach/router'
import { buildRoute } from 'constants/routes'

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
                return (
                    <li key={id}>
                        <Link to={buildRoute.individual(id)}>
                            {neighbor.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NeighborsList
