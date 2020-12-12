import React, {useEffect, useState} from 'react';
import {AddAccountForm} from "./AddAccountForm";
import {AccountDividerUtils} from "../utils/columnUtils";

export const AddAccount = function (props) {

    const [accountForms, setAccountForms] = useState([])
    const submitForm = {
        reloadAccounts: props.onFormSubmit.reloadAccounts,
        reloadResource: props.onFormSubmit.reloadResource
    }

    const removeForm = function (index) {
        let remainForms = accountForms.filter((value, i) => i !== index)
        setAccountForms([...remainForms])
    }

    const addFormEvent = function () {
        setAccountForms([...accountForms,
            <AddAccountForm key={accountForms.length} currentIndex={accountForms.length}
                            resourceId={props.resourceId}
                            onFormSubmit={submitForm}
                            onRemoveForm={removeForm}/>])
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