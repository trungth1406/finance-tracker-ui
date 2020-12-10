import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {AccountFormAction} from "../redux/actions/formAction";
import {BaseRequest} from "../services/baseService";
import {CreateNewRelatedAccount} from "../services/resourceservices";

//TODO: After add new Account, refetch the data for account
//TODO: After submit form, remove the form and refetch the resource's accounts data ( or pass it to state)


export const AddAccountForm = function (props) {

    const onRemoveForm = function () {
        console.log(this)
        props.removeFormAction(props.index - 1)
    }

    const {register, handleSubmit, errors} = useForm();
    const onSubmitAccountForm = function (data) {
        const formData = Object.assign({}, data, {resourceId: props.resourceId})
        CreateNewRelatedAccount.call(BaseRequest, formData, undefined).createNewAccount()
            .then(response => {
                console.log(response)
            });

    }

    return (<div className="column">
            <div id={props.index} className={`tile is-child `}>
                <div className="card">
                    <header className="card-header has-text-centered">
                        <p className="card-header-title">
                            <div class="control has-icons-left has-icons-right">
                                <input className="input" type="text" placeholder="Account name..."
                                       name="account_name"
                                       ref={register({required: true})}/>
                                {errors.account_name &&
                                <span className="has-text-danger">Account name is required</span>}
                                <span className="icon is-medium is-left"><i class="fas fa-piggy-bank"></i></span>
                            </div>
                        </p>
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
                                        <div class="control has-icons-left has-icons-right">
                                            <input className="input" type="text" placeholder="Enter amount..."
                                                   name="account_amount"
                                                   ref={register({required: true})}/>
                                            {errors.account_amount &&
                                            <span className="has-text-danger">Initial amount  is required</span>}
                                            <span className="icon is-medium is-left"><i
                                                class="fas fa-cash-register"/></span>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <footer className="card-footer" onClick={handleSubmit(onSubmitAccountForm)}>
                        <p className="card-footer-item has-text-primary ">
                            <p className="has-icons-left">
                                <p className="control is-left is-large">
                                    <i class="fas fa-folder-plus"/>
                                </p>

                            </p>
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    )
}


