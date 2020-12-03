import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header";
import './index.css'
import {AccountResource} from "./components/AccountResource";
import {AddResource} from "./components/AddResource";
import {useDispatch, useSelector, useStore} from 'react-redux'
import store from "./redux/stores/resourceStore";

export const App = function (props) {
    const store = useSelector((state) => state.sourceReducer)
    return (
        <div>
            <Header/>
            <div className="resources container">
                <div className="control is-ancestor">
                    <AddResource/>
                    {store.map((item, index) => {
                        return <AccountResource accountResource={item}/>
                    })}
                </div>
            </div>
        </div>
    );
}



