import React, { useState } from 'react';
import Header from './Components/Header';
import Balance from './Components/Balance.js';
import IncomeExpense from './Components/IncomeExpense';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import './styles/App.css';

const App = () => {
    const [transactions, setTransactions] = useState([]);

    const calculateIncome = () => {
        return transactions.filter(t => t.amount > 0).reduce((acc, t) => acc + t.amount, 0);
    };

    const calculateExpense = () => {
        return transactions.filter(t => t.amount < 0).reduce((acc, t) => acc + t.amount, 0);
    };

    const handleAddTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const handleDeleteTransaction = (id) => {
        setTransactions(transactions.filter(t => t.id !== id));
    };

    const balance = calculateIncome() + calculateExpense();

    return (
        <div className="container">
            <Header />
            <Balance balance={balance} />
            <IncomeExpense income={calculateIncome()} expense={Math.abs(calculateExpense())} />
            <TransactionList transactions={transactions} onDelete={handleDeleteTransaction} />
            <AddTransaction onAdd={handleAddTransaction} />
        </div>
    );
};

export default App;
