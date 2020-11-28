import React, {createContext, useState} from 'react';
import {TransactionList} from "./TransactionList";


export const IncomeExpense = function (props) {
    const [selectToggler, setSelect] = useState(false);
    const [currentAccount, setAccount] = useState('');

    const ActionHandler = {
        changeAccount: function (event) {
            setSelect(!selectToggler);
            setAccount(event.target);
        }
    }
    return (<>
        <div className={`is-parent box  `} onClick={ActionHandler.changeAccount}>
            <h4 className="title">{props.account.name}</h4>
            <article className={`tile is-parent notification ${selectToggler === true ? 'is-warning' : ''}`}>
                <div className="tile is-parent is-6">
                    <div className="is-child is-success">
                        <article className="message is-success">
                            <div className="message-header ">
                                <p className="subtitle is-4">REMAIN</p>
                            </div>
                            <div className="message-body">
                                <p>+ {props.account.current_amount} </p>
                            </div>
                        </article>
                    </div>
                </div>
                <div className=" tile is-parent is-6 ">
                    <div className=" is-child is-danger ">
                        <article className="message is-danger">
                            <div className="message-header is-danger">
                                <p className="subtitle  is-4 ">SPENT</p>
                            </div>
                            <div className="message-body">
                                <p>{props.account.remain_amount}</p>
                            </div>
                        </article>
                    </div>
                </div>
            </article>
            <TransactionList/>
        </div>
    </>);

}


export const AccountContext = createContext({
    accountInfo: null
})