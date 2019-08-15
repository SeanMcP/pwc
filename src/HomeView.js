import React from 'react'
import Recommendations from './Recommendations'
import { Link } from '@reach/router'
import ROUTES from './constants/routes'

function HomeView(props) {
    return (
        <div className="HomeView">
            <Recommendations />
            <Link to={ROUTES.all}>View all</Link>
        </div>
    )
}

export default HomeView
