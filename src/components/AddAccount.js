import React, {Component, useState} from 'react';
import {IncomeExpense} from "./IncomeExpense";
import {AddAccountForm} from "./AddAccountForm";

export const AddAccount = function () {
    let initialForm = []
    const [accountForm, setAccountForm] = useState(initialForm)
    return (<>
        {accountForm}
        <div className="column is-child is-desktop"
             onClick={() => setAccountForm((initialForm) => [...initialForm, <AddAccountForm formArr={initialForm}/>])}>
            <div className="tile is-child ">
                <div className="card">
                    <div className="card-content">
                        <p className="is-4 title has-text-centered">Add new Account</p>
                    </div>
                </div>
            </div>
        </div>
    </>);
}