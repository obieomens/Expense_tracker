import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions, onDelete }) => {
    return (
        <div className="transaction-list">
            <h3>History</h3>
            <ul>
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;

