import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header";
import './index.sass'
import {AccountResource} from "./components/AccountResource";
import {AddResource} from "./components/AddResource";
import {useSelector} from 'react-redux'
import {AddAccount} from "./components/AddAccount";

export const App = function (props) {
    let resourceList = []
    const accountResources = useSelector((state) => state.sourceReducer)
    accountResources.forEach(resource => resourceList.push(
    <AccountResource accountResource={resource}>
        <AddAccount resourceId={resource.id}/>
    </AccountResource>))

    return (
        <div>
            <Header/>
            <div className="resources container">
                <div className="control is-ancestor">
                    <AddResource/>
                    {resourceList}
                </div>
            </div>
        </div>
    );
}



