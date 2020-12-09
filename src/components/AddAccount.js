import React, {Component, useState} from 'react';
import {IncomeExpense} from "./IncomeExpense";
import {AddAccountForm} from "./AddAccountForm";
import {useDispatch, useSelector} from 'react-redux';
import {AccountFormAction} from '../redux/actions/formAction';
import {AccountDividerUtils} from "../utils/columnUtils";

export const AddAccount = function (props) {
    // const accountForms = useSelector((state)=> state.accountFormReducer)
    const [accountForms, setAccountForms] = useState([])


    const removeForm = function (index) {
        setAccountForms(accountForms.filter(value => value !== accountForms[index]))
    }
    const addFormEvent = function () {
        setAccountForms([...accountForms,
            <AddAccountForm index={accountForms.length + 1} resourceId={props.resourceId}
                            removeFormAction={removeForm}/>])
    }

    const divideAccountForm = AccountDividerUtils.divide(accountForms, false)
    return (<>
        <div className="column">
            {divideAccountForm}
        </div>
        <div className="column is-child is-desktop"
             onClick={() => addFormEvent()}>
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