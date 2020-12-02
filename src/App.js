import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header";
import './index.css'
import {AccountResource} from "./components/AccountResource";
import {AddResource} from "./components/AddResource";
import {useStore} from 'react-redux'

export const App = function () {
    const store = useStore()
    return (
        <div>
            <Header/>
            <div className="resources container">
                <div className="control is-ancestor">
                    <AddResource/>
                    {store.getState()['sourceReducer'].map((item, index) => {
                        return <AccountResource accountResource={item}/>
                    })}
                </div>
            </div>
        </div>
    );
}



