import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header";
import {Account} from "./components/Account";
import {AddTransactionForm} from "./components/AddTransactionForm";
import './index.css'
import {AccountHandler, AccountResourceHandler, BaseHandler} from './services/accountservices'
import {AccountResource} from "./components/AccountResource";

export const App = function () {
    const [accounts, setAccounts] = useState([]);
    const [resources, setResources] = useState([]);
    // const accountHandler = AccountHandler.call(BaseHandler, setAccounts);
    // const resourceHandler = AccountResourceHandler.call(BaseHandler, setResources);
    // useEffect
    // (() => {
    //     // accountHandler.getAccount(setAccounts)
    // }, [])


    const dividedAccounts = accountDivider(accounts);
    return (
        <div>
            <Header/>
            <section className="section">
                <div className="resources container">
                    {resources.map((item, index) => {
                        return <AccountResource accountResource={item}/>;
                    })};

                </div>
                <div className="container">
                    {dividedAccounts}
                    <section className="section">
                        <AddTransactionForm/>
                    </section>
                </div>
            </section>
        </div>
    );
}


function accountDivider(accounts) {
    const jsxAccount = []
    let start = 0, end = 3;
    while (accounts.length >= end && start !== end) {
        const eachRow = accounts.slice(start, end);
        jsxAccount.push(<div className="tile is-ancestor">
                {eachRow.map((account, id) => {
                    return <Account account={account}/>
                })};
            </div>
        )
        start = end;
        end = end + 3 > accounts.length ? accounts.length : accounts.length - end + 2;
    }
    return jsxAccount;
}

