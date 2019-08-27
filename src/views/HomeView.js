import React from 'react'
import Recommendations from 'Recommendations'
import { Link } from '@reach/router'
import ROUTES from 'constants/routes'

function HomeView() {
    return (
        <div className="HomeView">
            <Link to={ROUTES.search}>Search</Link>
            <Recommendations />
            <Link to={ROUTES.all}>View all</Link>
        </div>
    )
}

export default HomeView
