import React from 'react'
import { navigate } from '@reach/router'
import clb from 'class-list-builder'
import Grid from 'components/Grid/Grid'
import LinkButton from 'components/LinkButton/LinkButton'
import ViewContent from 'components/ViewContent/ViewContent'
import APP_NAME from 'constants/appName'
import useCount from 'hooks/useCount'

import './ViewHeader.scss'

function ViewHeader({ actionButtons = [], backTo = '/', title }) {
    const [count, countUp] = useCount()
    React.useEffect(() => {
        if (count === 10) {
            navigate('?debug=true')
        }
    }, [count])
    const shouldRenderBackButton = window.location.pathname !== '/'

    const heading = (
        // A11Y NOTE:
        // The following onclick handler is for debug purposes only.
        // There is no app functionality that is inaccessible to
        // non-mouse users.
        <h1
            className={clb(
                'ViewHeader__heading',
                !shouldRenderBackButton && 'ViewHeader__heading--centered'
            )}
            onClick={countUp}
        >
            {title || APP_NAME}
        </h1>
    )

    return (
        <header className="ViewHeader">
            <ViewContent>
                {shouldRenderBackButton ? (
                    <div className="ViewHeader__container">
                        <LinkButton
                            aria-label="Navigate back"
                            className="ViewHeader__link"
                            icon="ArrowLeft"
                            to={backTo}
                        />
                        {heading}
                        {actionButtons.length > 0 && (
                            <Grid columns={actionButtons.length}>
                                {actionButtons.map((element, index) =>
                                    React.cloneElement(element, { key: index })
                                )}
                            </Grid>
                        )}
                    </div>
                ) : (
                    heading
                )}
            </ViewContent>
        </header>
    )
}

export default ViewHeader
