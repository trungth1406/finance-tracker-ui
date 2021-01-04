import { useEffect, useState } from "react";
import { GetRelatedTransaction } from "../services/accountservices"
import { BaseRequest } from "../services/baseService"
import { Transaction } from "../components/Transaction";

export const TransactionTable = function (props) {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        GetRelatedTransaction.call(BaseRequest, props.accountId).sendGetTransactionRequest().then((res) => {
            setTransactions(res);
        });
    }, [props.accountId]);

    const trans = [];
    transactions.forEach(tr => {
        trans.push(<Transaction detail={tr} />)
    })

    return (
        <div>
            <div>
                <input type="date" />
            </div>
            <table className="table is-striped is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th><abbr title="Number">Number</abbr></th>
                        <th><abbr title="Description">Description</abbr></th>
                        <th><abbr title="Date">Date of execution</abbr></th>
                    </tr>
                </thead>
                <tbody>
                    {trans}
                </tbody>
            </table>
        </div>
    )
}