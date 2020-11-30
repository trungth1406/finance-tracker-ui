import React, {useEffect, useState} from 'react'
import {AccountHandler, AccountResourceHandler, BaseHandler} from "../services/accountservices";
import {Account} from "./Account";
import {AddAccount} from "./AddAccount";


export const AccountResource = function (props) {
    const [accounts, setAccounts] = useState([]);
    const [isAccountHidden, setAccountHidden] = useState(false);
    const accountHandler = AccountHandler.call(BaseHandler, setAccounts, props.accountResource.id);
    const dividedAccounts = accountDivider(accounts);
    return (
        <>
            <div id={props.accountResource.id} className="card is-parent box">
                <article className="card is-child notification is-primary"
                         onClick={() => toggleAccounts(setAccountHidden, setAccounts, isAccountHidden, accountHandler)}>
                    <div className="level">
                        <div className="level-item level-left has-text-centered">
                            <p className="title">{props.accountResource.name}</p>
                        </div>
                        <nav className="level">
                            <div className="level-item  has-text-centered">
                                <div>
                                    <p className="heading">Total amount</p>
                                    <p className="title is-4">{props.accountResource.total_amount}</p>
                                </div>
                            </div>
                            <div className="level-item  has-text-centered">
                                <div>
                                    <p className="heading">Total accounts</p>
                                    <p className="title is-4 ">{accounts.length}</p>
                                </div>
                            </div>

                        </nav>
                    </div>

                </article>
                {dividedAccounts}

            </div>
        </>
    );
}

function accountDivider(accounts) {
    const jsxAccount = []
    let start = 0, end = 2;
    while (start < end) {
        const eachRow = accounts.slice(start, end);
        jsxAccount.push(<div className="tile is-ancestor columns">
                {eachRow.map((account, id) => {
                    return <Account account={account}/>
                })}
            </div>
        )
        start = end;
        end = end + 2 >= accounts.length ? accounts.length : end + 2;
    }
    jsxAccount.push(<div className="tile is-ancestor columns">
        <AddAccount/>
    </div>)
    return jsxAccount;
}

function toggleAccounts(fnToggle, fnSetAccounts, currentState, accountHandler) {
    if (currentState) {
        fnSetAccounts([]);
    } else {
        accountHandler.dispatchRequest();
    }
    fnToggle(!currentState)
}