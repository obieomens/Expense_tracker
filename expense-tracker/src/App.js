import React, { useState, useEffect } from 'react';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpense';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import {TransactionItem} from './Components/TransactionItem';
import './styles/App.css';

function App() {
  const [transactions, setTransactions] = useState(() => {
    // Load saved transactions from local storage
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  useEffect(() => {
    // Save transactions to local storage whenever the transaction list changes
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = transaction => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };


  

  return (
    <div>
      <Header />
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpenses transactions={transactions} />
        <TransactionList transactions={transactions} onDelete={deleteTransaction} />
        <AddTransaction addTransaction={addTransaction} />
      </div>
    </div>
  );
}

export default App;
