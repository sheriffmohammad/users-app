import React from 'react'
import './Loader.scss'

type Props = {
    message: string
}

export default function Loader({ message }: Props) {
    return (
        <div>
            <div id="loading-bar-spinner" className="spinner">
                <div className="spinner-icon"></div>
            </div>
            <div className="loading-text">{message}</div>
        </div>
    )
}
