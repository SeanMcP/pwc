import React from 'react'
import ViewContent from 'components/ViewContent/ViewContent'

import { name } from '../../../package.json'

import './ReleaseBanner.scss'

function ReleaseBanner({ release = 'beta' }) {
    const releaseCaps = release[0].toUpperCase() + release.slice(1)
    return (
        <section className="ReleaseBanner" aria-label="Notification">
            <ViewContent squish>
                <small>
                    <b>{releaseCaps}:</b>{' '}
                    <a href={`mailto:feedback@seanmcp.com?subject=${name.toUpperCase()} (${releaseCaps})`}>
                        Issues or suggestions?
                    </a>
                </small>
            </ViewContent>
        </section>
    )
}

export default ReleaseBanner
