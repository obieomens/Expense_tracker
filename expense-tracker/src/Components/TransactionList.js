import React, { useState } from 'react';

export const TransactionList = ({ transactions }) => {
  const [filterCategory, setFilterCategory] = useState('All');

  const filteredTransactions = filterCategory === 'All' ? transactions : transactions.filter(transaction => transaction.category === filterCategory);

  return (
    <>
      <h3>History</h3>
      <label htmlFor="categoryFilter">Filter by category:</label>
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Rent">Rent</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
      </select>
      <ul className="list">
        {filteredTransactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.text} <span>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span> ({transaction.category})
          </li>
        ))}
      </ul>
    </>
  );
};
