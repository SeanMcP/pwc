import React from 'react'
import NeighborsList from 'NeighborsList'
import { Link } from '@reach/router'
import ROUTES from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'

function AllView() {
    const [individuals] = useIndividuals()
    return (
        <div className="AllView">
            <NeighborsList neighbors={individuals} />
            <Link to={ROUTES.add}>Add</Link>
        </div>
    )
}

export default AllView
