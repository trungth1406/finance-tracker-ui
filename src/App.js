import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header";
import './index.css'
import {AccountResourceHandler, BaseHandler} from './services/accountservices'
import {AccountResource} from "./components/AccountResource";
import {AddResource} from "./components/AddResource";

export const App = function () {
    const [resources, setResources] = useState([]);
    const resourceHandler = AccountResourceHandler.call(BaseHandler, setResources);
    // console.log(resourceHandler.req())
    useEffect
    (() => {
        resourceHandler.dispatchRequest()
    }, [])

    return (
        <div>
            <Header/>
            <div className="resources container">
                <div className="control is-ancestor">
                    <AddResource/>
                    {resources.map((item, index) => {
                        return <AccountResource accountResource={item}/>
                    })}
                </div>
            </div>
        </div>
    );
}



