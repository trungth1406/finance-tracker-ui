import React, {useEffect, useState} from 'react'
import {GetRelatedAccountsRequest} from "../services/accountservices";
import {Account} from "./Account";
import {BaseRequest} from "../services/baseService";
import {AccountDividerUtils} from "../utils/columnUtils";
import {AddAccount} from "./AddAccount";


export const AccountResource = function (props) {
    const [resourceInfo, setResourceInfo] = useState(props.accountResource)
    const [accounts, setAccounts] = useState([]);
    const [isAccountHidden, setAccountHidden] = useState(false);


    useEffect(() => {
        if (accounts) {
            setAccounts([...accounts])
        }

    }, [])

    const toggleAccount = function () {
        if (isAccountHidden) {
            setAccounts([]);
        } else {
            GetRelatedAccountsRequest.call(BaseRequest, props.accountResource.id)
                .sendGetAccountRequest().then(response => {
                setAccounts(response)
            });
        }
        setAccountHidden(!isAccountHidden)
    }

    const reactAccounts = [];
    accounts.forEach((account, index) => {
        const accountInfo = Object.assign({}, account, {resourceId: props.accountResource.id})
        reactAccounts.push(<Account key={index}
                                    accountInfo={accountInfo}
                                    accountStateAction={{
                                        changeAccount: setAccounts,
                                        changeResource: setResourceInfo,
                                        setModalActive: props.setModalActive
                                    }}/>)
    })
    const dividedAccounts = AccountDividerUtils.divide(reactAccounts, true);

    return (
        <div>
            <div id={resourceInfo.id} className="card is-parent box ">
                <div className="columns">
                    <article className="card is-child notification is-primary column"
                             onClick={() => toggleAccount()}>
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
                <AddAccount resourceId={props.accountResource.id}
                            onFormSubmit={{
                                reloadAccounts: setAccounts,
                                reloadResource: setResourceInfo
                            }}
                />
            </div>

        </div>
    );
}


