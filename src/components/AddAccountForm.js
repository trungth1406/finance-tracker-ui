import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {BaseRequest} from "../services/baseService";
import {CreateNewRelatedAccount} from "../services/resourceservices";
import {GetRelatedAccountsRequest, GetResourceDetailRequest} from "../services/accountservices";

//TODO: After add new Account, refetch the data for account
//TODO: After submit form, remove the form and refetch the resource's accounts data ( or pass it to state)


export const AddAccountForm = function (props) {
    const [index, setIndex] = useState(props.currentIndex);
    const {register, handleSubmit, errors} = useForm();
    const removeForm = props.onRemoveForm
    console.log(props)
    const submitForm = {
        reloadAccounts: props.onFormSubmit.reloadAccounts,
        reloadResource: props.onFormSubmit.reloadResource
    }


    const onSubmitAccountForm = function (data) {
        const formData = Object.assign({}, data, {resourceId: props.resourceId})
        CreateNewRelatedAccount.call(BaseRequest, props.resourceId, formData, undefined)
            .createNewAccount().then(() => {
            onRemoveForm();
        }).then(() => {
                GetRelatedAccountsRequest.call(BaseRequest, props.resourceId).sendGetAccountRequest().then((data) => {
                    submitForm.reloadAccounts((prevState) => {
                        prevState.length = 0;
                        return data;
                    })
                });
            }
        ).then(() => {
            GetResourceDetailRequest.call(BaseRequest, props.resourceId).sendGetRequest().then((data) => {
                submitForm.reloadResource(data)
            });
        });
    }

    const onRemoveForm = function () {
        removeForm(index)
    }

    return (<div className="column">
            <div id={props.index} className={`tile is-child `}>
                <div className="card">
                    <header className="card-header has-text-centered">
                        <span className="card-header-title">
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="text" placeholder="Account name..."
                                       name="account_name"
                                       ref={register({required: true})}/>
                                {errors.account_name &&
                                <span className="has-text-danger">Account name is required</span>}
                                <span className="icon is-medium is-left"><i className="fas fa-piggy-bank"/></span>
                            </div>
                        </span>
                        <a className="card-header-icon" aria-label="more options" onClick={() => onRemoveForm()}>
                        <span className="icon">
                            <i className="delete is-medium" aria-hidden="true"/>
                        </span>
                        </a>
                    </header>

                    <div className="card-content">
                        <div className=" content ">
                            <nav className="level">
                                <div className="level-item  has-text-centered">
                                    <div>
                                        <p className="heading has-text-success">Initial Amount</p>
                                        <div className="control has-icons-left has-icons-right">
                                            <input className="input" type="text" placeholder="Enter amount..."
                                                   name="account_amount"
                                                   ref={register({required: true})}/>
                                            {errors.account_amount &&
                                            <span className="has-text-danger">Initial amount  is required</span>}
                                            <span className="icon is-medium is-left"><i
                                                className="fas fa-cash-register"/></span>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <footer className="card-footer" onClick={handleSubmit(onSubmitAccountForm)}>
                        <span className="card-footer-item has-text-primary ">
                            <span className="has-icons-left">
                                <p className="control is-left is-large">
                                    <i className="fas fa-folder-plus"/>
                                </p>

                            </span>
                        </span>
                    </footer>
                </div>
            </div>
        </div>
    )
}


