import React, { useState } from 'react';
import TransactionItem from './TransactionItem'; // Import TransactionItem

export const TransactionList = ({ transactions, onDelete }) => {
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
          <TransactionItem 
            key={transaction.id} 
            transaction={transaction} 
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
};
