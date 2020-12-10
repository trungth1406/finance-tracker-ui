import React, {createContext, useState} from 'react';
import {useDispatch} from "react-redux";
import {BaseRequest} from "../services/baseService";
import {DeleteRelatedAccount} from "../services/resourceservices";
import {GetRelatedAccountRequest, GetResourcesRequest} from "../services/accountservices";

export const Account = function (props) {
    const deleteAccount = function () {
        DeleteRelatedAccount.call(BaseRequest, {
            resourceId: props.accountInfo.resourceId,
            accountId: props.accountInfo.id
        }).deleteAccount().then(() => {
                const resourceId = props.accountInfo.resourceId
                const reloadAccount = props.setAccounts
                GetRelatedAccountRequest.call(BaseRequest, resourceId, (data) => {
                    reloadAccount([...data])
                }).sendGetAccountRequest();

                const reloadResource = props.setResourceInfo
                GetResourcesRequest
            }
        );

    }
    return (<div className="column is-child is-desktop">
        <div className={`tile is-child `}>
            <div className="card">
                <header className="card-header has-text-centered">
                    <p className="card-header-title ">
                        {props.accountInfo.name.toUpperCase()}
                    </p>
                    <a className="card-header-icon" aria-label="more options"
                       onClick={() => deleteAccount()}>
                          <span className="icon">
                            <i className="delete is-medium" aria-hidden="true"/>
                          </span>
                    </a>
                </header>

                <div className="card-content">
                    <div className=" content ">
                        <nav className="level">
                            <div className="level-item  has-text-centered">
                                <div>
                                    <p className="heading has-text-success">Remain</p>
                                    <p className="title is-4 ">{props.accountInfo.remain_amount}</p>
                                </div>
                            </div>
                            <div className="level-item  has-text-centered">
                                <div>
                                    <p className="heading has-text-danger">Spent</p>
                                    <p className="title is-4 ">{props.accountInfo.current_amount}</p>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <footer className="card-footer">
                    <p className="card-footer-item has-text-primary ">
                                <span className="control is-left">
                                    <i className="fas fa-exchange-alt is-large"/>
                                </span>

                    </p>
                    <p className="card-footer-item has-text-info ">
                        <i className="fas fa-info is-large"/>
                    </p>
                </footer>
            </div>
        </div>
    </div>)
}
