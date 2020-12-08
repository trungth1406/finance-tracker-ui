import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header";
import './index.sass'
import {AccountResource} from "./components/AccountResource";
import {AddResource} from "./components/AddResource";
import {useSelector} from 'react-redux'

export const App = function (props) {
    const accountResources = useSelector((state) => state.sourceReducer)
    return (
        <div>
            <Header/>
            <div className="resources container">
                <div className="control is-ancestor">
                    <AddResource/>
                    {accountResources.map((item, index) => {
                        return <AccountResource accountResource={item}/>
                    })}
                </div>
            </div>
        </div>
    );
}



