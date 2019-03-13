import React from 'react'
import { red } from 'ansi-colors';

export default function Buttons({ handleDelete }) {
    return (
        <button
            type="button"
            style={{
                background: 'red',
                color: 'white',
                fontSize: '2rem'
            }}
            onClick={handleDelete}
        >
            Delete me
    </button>
    )
}
