import React, {createContext, useState} from 'react';


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
            <div className={`tile is-child `} onClick={ActionHandler.changeAccount}>
                <div className="card">
                    <header className="card-header has-text-centered">
                        <p className="card-header-title ">
                            {props.account.name.toUpperCase()}
                        </p>
                        <a className="card-header-icon" aria-label="more options">
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
                                        <p className="title is-4 ">{props.account.remain_amount}</p>
                                    </div>
                                </div>
                                <div className="level-item  has-text-centered">
                                    <div>
                                        <p className="heading has-text-danger">Spent</p>
                                        <p className="title is-4 ">{props.account.current_amount}</p>
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
        </>
    )

}
