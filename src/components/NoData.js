import { faFileCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function NoData() {
    return (
        <div style={{
            padding: '3rem',
            gap: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
        }}>
            <FontAwesomeIcon icon={faFileCircleXmark} size="10x" />
            <h3>Movies not found</h3>
        </div>
    )
}