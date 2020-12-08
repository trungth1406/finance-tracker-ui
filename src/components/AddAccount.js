import React, {Component, useState} from 'react';
import {IncomeExpense} from "./IncomeExpense";
import {AddAccountForm} from "./AddAccountForm";
import { useDispatch, useSelector } from 'react-redux';
import { AccountFormAction } from '../redux/actions/formAction';

export const AddAccount = function (props) {
    const accountForms = useSelector((state)=> state.accountFormReducer)
    const formDispatch = useDispatch()
    const addFormEvent = function(){
        formDispatch(AccountFormAction.addForm(<AddAccountForm index= {accountForms.length} resourceId = {props.resourceId}/>))
    }
    return (<>
        {accountForms}
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