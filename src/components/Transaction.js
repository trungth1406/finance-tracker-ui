import React from 'react';


export const Transaction = function (props) {
    const detail = props.detail
    return (
        <tr>
            <th>{detail.id}</th>
            <td>{detail.description}</td>
            <td>{detail.date_of_execution}</td>
        </tr>
    )
}