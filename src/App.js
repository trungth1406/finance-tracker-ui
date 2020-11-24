import React from 'react';
import {Header} from "./components/Header";
import {Account} from "./components/Account";
import {AddTransactionForm} from "./components/AddTransactionForm";
import './index.css'
import {AccountContext} from "./components/account-context";
import {IncomeExpense} from "./components/IncomeExpense";

export default function App() {
    return (
        <div>
            <Header/>
            <section className="section">
                <div className="container">
                    <Account/>
                    <section className="section">
                        <AddTransactionForm/>
                    </section>
                </div>
            </section>
        </div>
    );
}

