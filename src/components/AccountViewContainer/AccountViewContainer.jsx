import React from 'react'
import ContentContainer from 'components/ContentContainer/ContentContainer'
import useDocumentTitle from 'hooks/useDocumentTitle'

import './AccountViewContainer.scss'

function AccountViewContainer({ children, title }) {
    useDocumentTitle(title)
    return (
        <ContentContainer
            className={`AccountViewContainer AccountViewContainer--${title}`}
        >
            <header>
                <img src="/icon-128.png" alt="PWOC" />
                <h1>{title}</h1>
            </header>
            <main>{children}</main>
        </ContentContainer>
    )
}

export default AccountViewContainer
