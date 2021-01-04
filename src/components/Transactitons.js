import React from 'react'
import $ from 'jquery'
import { TransactionTable } from './TransactionTable';

export const Transactions = function (props) {
    const turnOffModal = function () {
        const removeFunc = props.remove;
        removeFunc({ obj: null });
    }
    return (
        <div id={"transaction-modal-" + props.accountId} className="modal is-active" >
            <div className="modal-background" onClick={() => turnOffModal()} />
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Modal title</p>
                    <button className="delete" aria-label="close" onClick={() => turnOffModal()} />
                </header>
                <section className="modal-card-body">
                    <div className="modal-content">
                        <TransactionTable accountId={props.accountId} />
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success">Save changes</button>
                    <button className="button" onClick={() => turnOffModal()}>Cancel</button>
                </footer>
            </div>
        </div>
    )
}