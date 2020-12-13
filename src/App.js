import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header";
import './index.sass'
import {AccountResource} from "./components/AccountResource";
import {AddResource} from "./components/AddResource";
import {useSelector} from 'react-redux'
import {AddAccount} from "./components/AddAccount";
import {AccountModal} from "./components/AccountModal";

export const App = function (props) {
    let resourceList = []

    const [isModalActive,setModalActive] = useState(false)
    const accountResources = useSelector((state) => state.sourceReducer)
    accountResources.forEach((resource, index) => resourceList.push(
        <AccountResource key={index + 1} accountResource={resource} setModalActive={setModalActive}>
        </AccountResource>))

    return (
        <div>
            <Header/>
            <div className="resources container">
                <AccountModal isActive={isModalActive}/>
                <div className="control is-ancestor">
                    <AddResource/>
                    {resourceList}
                </div>
            </div>
        </div>
    );
}



