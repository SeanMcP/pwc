import React from 'react'
import IndividualsList from 'IndividualsList'
import ROUTES from 'constants/routes'
import { useIndividuals } from 'store/useIndividuals'
import ViewContainer from 'ViewContainer'
import MockSearchbar from 'MockSearchbar'
import ButtonLink from 'ButtonLink'

function AllView() {
    const [individuals] = useIndividuals()
    return (
        <ViewContainer title="All">
            <MockSearchbar />
            <IndividualsList individuals={individuals} />
            <ButtonLink to={ROUTES.add} iconBefore="add">
                Add
            </ButtonLink>
        </ViewContainer>
    )
}

export default AllView
