import React, {useContext, useState} from 'react'
import {FormHandler} from '../services/formservices'
import {AccountContext} from "./IncomeExpense";


export const AddTransactionForm = (props) => {
    const [transaction, setTransaction] = useState('');
    const [amount, setAmount] = useState(0);
    const [accountType, setAccountType] = useState(0);
    // const context = useContext(AccountContext.accountInfo);
    // console.log(context)
    // setAccountType(context.accountInfo);
    return (
        <div>
            <h3 className="title is-4">Add new transaction</h3>
            <div className="tile box">
                <div className="field column is-parent is-6">
                    <div className="control">
                        <input className="input is-6" type="text" placeholder="Name"
                               onChange={(e)=> setTransaction(e.target.value)}/>
                    </div>
                </div>
                <div className="field column is-parent is-6">
                    <div className="control">
                        <input className="input" type="text" placeholder="Amount"
                               onChange={(e)=> setAmount(e.target.value)}/>
                    </div>

                </div>

            </div>
            <div className="field column is-parent is-6 ">
                <button className="button is-primary" onClick={FormHandler.submit}>Add</button>
            </div>

        </div>
    )
}


