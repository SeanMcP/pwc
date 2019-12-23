import React from 'react'
import clb from 'class-list-builder'

function DownloadLink({ children, className, data, fileName, ...props }) {
    const dataStr =
        'data:text/json;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(data))
    return (
        <a
            className={clb('DownloadLink', className)}
            download={`${fileName}-${new Date().getTime()}.json`}
            href={dataStr}
            {...props}
        >
            {children}
        </a>
    )
}

export default DownloadLink
