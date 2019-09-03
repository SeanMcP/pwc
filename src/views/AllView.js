import React from 'react'
import IndividualsList from 'IndividualsList'
import { Link } from '@reach/router'
import ROUTES from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'
import { Icon, minorScale, Pane } from 'evergreen-ui'
import ViewContainer from 'ViewContainer'

function AllView() {
    const [individuals] = useIndividuals()
    return (
        <ViewContainer title="All">
            <IndividualsList individuals={individuals} />
            <Link to={ROUTES.add}>
                <Pane display="inline-flex" alignItems="center">
                    <Icon icon="add" marginRight={minorScale(1)} />
                    Add
                </Pane>
            </Link>
        </ViewContainer>
    )
}

export default AllView
