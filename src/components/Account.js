import React, {createContext} from 'react';
import {IncomeExpense} from "./IncomeExpense";
import {TransactionList} from './TransactionList';
import {AccountContext} from "./account-context";

export const Account = function () {

    return (<>
        <div className="tile is-ancestor">
            <h4 className="tile is-parent is-vertical">Your balance</h4>
            <div className="tile is-child is-vertical">
                <h1 id="balance" className="subtitle">VND 0.00</h1>
            </div>
        </div>
        <IncomeExpense/>
        <TransactionList/>
    </>)
}
