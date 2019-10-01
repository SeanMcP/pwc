import React from 'react'
import ViewContent from 'components/ViewContent/ViewContent'

import './AlphaBanner.scss'

function AlphaBanner() {
    return (
        <section className="AlphaBanner">
            <ViewContent squish>
                <small>
                    This app is in <b>alpha</b>. Issues or suggestions? Email{' '}
                    <a href="mailto:feedback@seanmcp.com?subject=PWC">
                        feeback@seanmcp.com
                    </a>
                </small>
            </ViewContent>
        </section>
    )
}

export default AlphaBanner
