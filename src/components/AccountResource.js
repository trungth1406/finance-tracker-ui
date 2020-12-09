import React, {useState} from 'react'
import {GetRelatedAccountRequest} from "../services/accountservices";
import {Account} from "./Account";
import {AddAccount} from "./AddAccount";
import {BaseRequest} from "../services/baseService";
import Provider from "react-redux";
import {accountStore} from "../redux/stores/resourceStore";
import {IncomeExpense} from "./IncomeExpense";
import {AccountDividerUtils} from "../utils/columnUtils";


export const AccountResource = function (props) {
    const [accounts, setAccounts] = useState([]);
    const [isAccountHidden, setAccountHidden] = useState(false);
    const accountHandler = GetRelatedAccountRequest.call(BaseRequest, setAccounts, props.accountResource.id);

    const reactAccounts = [];
    accounts.forEach(account => {
        reactAccounts.push(<Account account={account} resourceId={props.accountResource.id}/>)
    })
    const dividedAccounts = AccountDividerUtils.divide(reactAccounts, true);
    return (
        <div>
            <div id={props.accountResource.id} className="card is-parent box ">
                <div className="columns">
                    <article className="card is-child notification is-primary column"
                             onClick={() => toggleAccounts(setAccountHidden, setAccounts, isAccountHidden, accountHandler)}>
                        <div className="level">
                            <div className="level-item level-left has-text-centered">
                                <p className="title">{props.accountResource.name}</p>
                            </div>
                            <nav className="level-left">
                                <div className="level-item  has-text-centered">
                                    <div>
                                        <p className="heading ">Total amount</p>
                                        <p className="title is-4">{props.accountResource.total_amount}</p>
                                    </div>
                                </div>
                                <div className="level-item  has-text-centered">
                                    <div>
                                        <p className="heading ">Remain amount</p>
                                        <p className="title is-4">{props.accountResource.remain_amount}</p>
                                    </div>
                                </div>
                                <div className="level-item  has-text-centered">
                                    <div>
                                        <p className="heading">Total accounts</p>
                                        <p className="title is-4 ">{props.accountResource.total_accounts}</p>
                                    </div>
                                </div>
                            </nav>
                        </div>

                    </article>
                </div>
                {dividedAccounts}
                {props.children}
            </div>

        </div>
    );
}

function accountDivider(accounts) {
    const jsxAccount = []
    let start = 0, end = 2;
    while (start < end) {
        const eachRow = accounts.slice(start, end);
        jsxAccount.push(<div className="tile is-ancestor columns">
                {eachRow.map((account, id) => {
                    return <Account account={account}>
                    </Account>

                })}
            </div>
        )
        start = end;
        end = end + 2 >= accounts.length ? accounts.length : end + 2;
    }
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