import React from 'react'

const StatusBadge = ({ color, text }) => {
    return (
        <>
            <p className={`bg-${color}-300/60 text-center px-2 mx-1 py-1 items-center flex cursor-pointer rounded-2xl text-xs text-${color}-800`}>
                <span className={`p-0.5 border border-${color}-800 mr-1 rounded-full`}></span>
                {text}
            </p>
        </>
    )
}

export default StatusBadge