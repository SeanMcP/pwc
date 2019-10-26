import React from 'react'
import ViewContainer from 'components/ViewContainer/ViewContainer'
import ButtonLink from 'components/ButtonLink/ButtonLink'
import { buildRoute } from 'constants/routes'
import ITEMS from 'constants/items'

function SelectTypeToAddView() {
    return (
        <ViewContainer title="Add">
            {ITEMS.order.map(type => (
                <ButtonLink key={type} to={buildRoute.addItem(type)}>
                    {ITEMS.types[type].display}
                </ButtonLink>
            ))}
        </ViewContainer>
    )
}

export default SelectTypeToAddView
