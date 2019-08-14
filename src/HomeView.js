import React from 'react'
import Recommendations from './Recommendations'
import { Link } from '@reach/router'

function HomeView(props) {
    return (
        <div className="HomeView">
            <Recommendations />
            <Link to="/neighbors">View all neighbors</Link>
        </div>
    )
}

export default HomeView
