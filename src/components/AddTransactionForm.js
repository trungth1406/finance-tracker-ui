import React, { useState } from 'react'
import { FormHandler } from '../services/formservices'


export const AddTransactionForm = () => {
    const [transaction, setTransaction] = useState('');
    const [amount, setAmount] = useState(0);

    const formHandler = Object.create(FormHandler);
    setTransaction.bind(formHandler);
    console.log(formHandler.changeText());

    return (
        <div>
            <h3 className="title">Add new transaction</h3>
            <form id="form">
                <div className="field">
                    <label className="label">Label</label>
                    <div className="control is-6">
                        <input className="input is-6" type="text" placeholder="Name" onChange={formHandler.setText} />
                    </div>

                    <div className="control is-6">
                        <input className="input is-6" type="text" placeholder="Amount" onChange={formHandler.changeAmount} />
                    </div>
                    <button className="button" formHandler={FormHandler.submit}>Add</button>
                </div>
            </form>
        </div>
    )
}


