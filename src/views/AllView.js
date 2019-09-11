import React from 'react'
import IndividualsList from 'IndividualsList'
import ROUTES from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'
import ViewContainer from 'ViewContainer'
import AppButtonLink from 'AppButtonLink'
import MockSearchbar from 'MockSearchbar'

function AllView() {
    const [individuals] = useIndividuals()
    return (
        <ViewContainer title="All">
            <MockSearchbar />
            <IndividualsList individuals={individuals} />
            <AppButtonLink to={ROUTES.add} iconBefore="add">
                Add
            </AppButtonLink>
        </ViewContainer>
    )
}

export default AllView
