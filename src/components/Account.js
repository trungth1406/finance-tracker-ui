import React, {createContext} from 'react';
import {IncomeExpense} from "./IncomeExpense";
import {TransactionList} from './TransactionList';
import {AccountContext} from "./account-context";

export const Account = function (props) {

    return (<div className="column is-child is-desktop">
        <IncomeExpense account={props.account}/>
    </div>)
}
