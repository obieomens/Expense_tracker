import React, {useState} from "react";

const AddTransaction = ({ onAdd }) =>{
const [text, setText] = useState ('');
const [amount, setAmount] = useState (0);

const handleSubmit = (s) =>{
    s.preventDefault();

    const newTransaction = {
        id: Math.floor(Math.random() * 1000000),
        text,
        amount: parseFloat(amount)

};
onAdd(newTransaction);
setText('');
setAmount(0);

};
return (
    <div className="add-transaction">
        <h3>Add new transaction</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(s) => setText(s.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
                <input type="number" value={amount} onChange={(s) => setAmount(s.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </div>
);
};

export default AddTransaction;

