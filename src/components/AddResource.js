import React, {Component, useState} from 'react';
import {AddResourceForm} from "./AddResourceForm";

export const AddResource = function () {
    let formArray = []
    const [forms, setForms] = useState(formArray)
    return (<>
        <div className="card is-parent box" onClick={() => setForms(formArray => [...formArray, <AddResourceForm />])}>
            <div className="control is-parent is-info">
                <div className="">
                    <article className="has-text-centered">
                        <p className="title has-text-centered-touch has-text-info is-4">ADD NEW RESOURCE</p>
                    </article>
                </div>
            </div>
        </div>
        {forms}
    </>);
}