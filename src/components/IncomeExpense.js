import React, {createContext, useState} from 'react';


export const IncomeExpense = function (props) {
    const [selectToggler, setSelect] = useState(false);
    const [currentAccount, setAccount] = useState('');

    const ActionHandler = {
        changeAccount: function (event) {
            setSelect(!selectToggler);
            setAccount(event.target);
            AccountContext.accountInfo = currentAccount;
            console.log(AccountContext.accountInfo)
        }
    }
    return (<>
        <div className={`tile box`} onClick={ActionHandler.changeAccount}>
            <article className={`tile is-parent notification ${selectToggler === true ? 'is-warning' : ''}`}>
                <div className="column is-parent is-6">
                    <div className="column  is-success">
                        <article className="message is-success">
                            <div className="message-header ">
                                <p className="title  is-4 ">IN</p>
                            </div>
                            <div className="message-body">
                            </div>
                        </article>
                    </div>
                </div>
                <div className=" column is-parent is-6 ">
                    <div className=" column  is-danger ">
                        <article className="message is-danger">
                            <div className="message-header is-danger">
                                <p className="title  is-4 "><strong>OUT</strong></p>
                            </div>
                            <div className="message-body">
                            </div>
                        </article>
                    </div>
                </div>
            </article>
        </div>
    </>);

}


export const AccountContext = createContext({
    accountInfo: null
})