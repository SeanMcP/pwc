import React from 'react'
import DownloadLink from 'components/DownloadLink/DownloadLink'
import useSettings from 'store/useSettings'
import { useItems } from 'store/useItems'
import usePrayerRecord from 'store/usePrayerRecord'
import { isDebugMode } from 'utils/debugUtils'

import './Debug.scss'

function Debug({ children }) {
    if (isDebugMode()) return <>{children}</>
    return null
}

export function Downloader() {
    const [items] = useItems()
    const [settings] = useSettings()
    const [count] = usePrayerRecord()
    return (
        <Debug>
            <div className="DebugDownloader">
                <b>Download:</b>
                <DownloadLink data={items} fileName="items">
                    Items
                </DownloadLink>
                <DownloadLink data={settings} fileName="settings">
                    Settings
                </DownloadLink>
                <DownloadLink data={count} fileName="count">
                    Count
                </DownloadLink>
            </div>
        </Debug>
    )
}
