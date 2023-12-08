import React from 'react'

const customertablerow = (props) => {
    const { id, name, projects } = props
    return (
        <>
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-center text-gray-900">{name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-center text-gray-900">{projects}</div>
                </td>
                
            </tr>
        </>
    )
}

export default customertablerow