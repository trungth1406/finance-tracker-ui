import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {CreateResource} from '../services/resourceservices'
import {BaseHandler} from "../services/accountservices";
import {addNewResource} from "../redux/actions/resourceAction";
import {useDispatch, useSelector} from "react-redux";
import {ResourceFormAction} from "../redux/actions/formAction";


export const AddResourceForm = function (props) {
    const {register, handleSubmit, errors} = useForm();

    const dispatch = useDispatch()
    const onSubmit = function (data) {
        CreateResource.call(BaseHandler, data).sendPost().then(res => {
            dispatch(addNewResource(res))
            dispatch(ResourceFormAction.removeForm(props.index))
        })
    }

    const onRemoveForm = function (event, index) {
        event.preventDefault()
        dispatch(ResourceFormAction.removeForm(index))
    }
    return (
        <article className="card is-child notification is-primary">
            <form>
                <div className="level">
                    <nav className="level-item">
                        <div className="field">
                            <div className="control has-icons-left">
                                <input name="name" className="input is-primary is-focused" type="text"
                                       placeholder="Resource name"
                                       ref={register({required: true})}/>
                                {errors.name &&
                                <span className="has-text-danger">Resource name is required</span>}
                                <span className="icon is-small is-left">
                                <i className="fas fa-file-invoice-dollar"/>
                            </span>
                            </div>
                        </div>
                    </nav>
                    <nav className="level-item">
                        <div className="field">
                            <div className="control has-icons-left">
                                <input name="total_amount" className="input is-primary is-focused" type="tel"
                                       placeholder="Resource amount"
                                       ref={register({required: true})}/>
                                {errors.total_amount &&
                                <span className="has-text-danger">Resource amount is required</span>}
                                <span className="icon is-small is-left">
                                <i className="fas fa-donate"/>
                            </span>
                            </div>
                        </div>
                    </nav>
                    <nav className="level-right">
                        <div className="buttons">
                            <button className="button is-primary is-inverted is-outlined" type="submit"
                                    onClick={handleSubmit(onSubmit)}>
                                <i className="fas fa-check"/>
                            </button>
                            <button className="button is-danger is-inverted is-outlined"
                                    onClick={(event) => onRemoveForm(event, props.index)}>
                                <i className="fa fa-trash"/>
                            </button>
                        </div>
                    </nav>
                </div>
            </form>
        </article>)
}


