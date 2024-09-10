import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="app-header">
            <div className="overlay">
                <h1>Welcome to Expense Tracker</h1>
                <p>Track your income and expenses with ease</p>
            </div>
        </header>
    );
};

export default Header;
