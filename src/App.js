import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header";
import './sass/index.scss'
import {AccountResource} from "./components/AccountResource";
import {AddResource} from "./components/AddResource";
import {useSelector} from 'react-redux'
import {AddAccount} from "./components/AddAccount";
import {AccountModal} from "./components/Transactitons";

export const App = function (props) {
    let resourceList = []

    const [isModalActive, setModalActive] = useState(false)
    const accountResources = useSelector((state) => state.sourceReducer)
    accountResources.forEach((resource, index) => resourceList.push(
        <AccountResource key={index + 1} accountResource={resource} setModalActive={setModalActive}>
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



