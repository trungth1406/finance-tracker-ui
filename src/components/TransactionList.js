import React from 'react'
import { Transaction } from './Transaction'

export const TransactionList = () => {
    return (
        <div className="is-parent">
            <h3 className="title is-4">Transaction history</h3>
            <div className="box">
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
            </div>
        </div>
    )
}
