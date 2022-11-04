import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
    return (
        <div style={{
            padding: '10rem',
            gap: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <FontAwesomeIcon icon={faSpinner} size="8x" spin />
        </div>
    )
}