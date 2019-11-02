import React from 'react'
import ViewContent from 'components/ViewContent/ViewContent'

import './AlphaBanner.scss'

function AlphaBanner() {
    return (
        <section className="AlphaBanner">
            <ViewContent squish>
                <small>
                    <b>Alpha:</b>{' '}
                    <a href="mailto:feedback@seanmcp.com?subject=PWC">
                        Issues or suggestions?
                    </a>
                </small>
            </ViewContent>
        </section>
    )
}

export default AlphaBanner
