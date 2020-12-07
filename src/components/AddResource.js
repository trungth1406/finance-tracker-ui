import React from 'react';
import {AddResourceForm} from "./AddResourceForm";
import {useDispatch, useSelector, useStore} from "react-redux";
import {ResourceFormAction} from "../redux/actions/formAction";
import sourceFormReducer from "../redux/reducer/sourceFormReducer";

export const AddResource = function () {
    const formSelector = useSelector((state) => state.sourceFormReducer)
    const dispatchForm = useDispatch()
    const onCreateForm = function () {
        dispatchForm(ResourceFormAction.addForm(<AddResourceForm index={formSelector.length}/>))
    }

    return (<>
        <div className="card is-parent box"
             onClick={() => onCreateForm()}>
            <div className="control is-parent is-info">
                <div className="">
                    <article className="has-text-centered">
                        <p className="title has-text-centered-touch has-text-info is-4">ADD NEW RESOURCE</p>
                    </article>
                </div>
            </div>
        </div>
        {formSelector}
    </>);
}