import React, {useState} from 'react'
import {GetRelatedAccountRequest} from "../services/accountservices";
import {Account} from "./Account";
import {BaseRequest} from "../services/baseService";
import {AccountDividerUtils} from "../utils/columnUtils";


export const AccountResource = function (props) {
    const [resourceInfo, setResourceInfo] = useState(props.accountResource)
    const [accounts, setAccounts] = useState([]);
    const [isAccountHidden, setAccountHidden] = useState(false);
    const accountRequest = GetRelatedAccountRequest.call(BaseRequest, props.accountResource.id);

    const reactAccounts = [];
    accounts.forEach(account => {
        const accountInfo = Object.assign({}, account, {resourceId: props.accountResource.id})
        reactAccounts.push(<Account key={account.id} accountInfo={accountInfo} setAccounts={setAccounts}
                                    setResourceInfo={setResourceInfo()}/>)
    })
    const dividedAccounts = AccountDividerUtils.divide(reactAccounts, true);

    return (
        <div>
            <div id={resourceInfo.id} className="card is-parent box ">
                <div className="columns">
                    <article className="card is-child notification is-primary column"
                             onClick={() => toggleAccounts(setAccountHidden, setAccounts, isAccountHidden, accountRequest)}>
                        <div className="level">
                            <div className="level-item level-left has-text-centered">
                                <p className="title">{resourceInfo.name}</p>
                            </div>
                            <nav className="level-left">
                                <div className="level-item  has-text-centered">
                                    <div>
                                        <p className="heading ">Total amount</p>
                                        <p className="title is-4">{resourceInfo.total_amount}</p>
                                    </div>
                                </div>
                                <div className="level-item  has-text-centered">
                                    <div>
                                        <p className="heading ">Remain amount</p>
                                        <p className="title is-4">{resourceInfo.remain_amount}</p>
                                    </div>
                                </div>
                                <div className="level-item  has-text-centered">
                                    <div>
                                        <p className="heading">Total accounts</p>
                                        <p className="title is-4 ">{resourceInfo.total_accounts}</p>
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
        accountHandler.sendGetAccountRequest().then(response => fnSetAccounts(response));
    }
    fnToggle(!currentState)
}