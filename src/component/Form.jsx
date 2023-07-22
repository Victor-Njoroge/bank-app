import React, { useState } from 'react';

function Form() {
  const [formSubmission, setFormSubmission] = useState({
    date: "Date of Transaction",
    description: "Transaction Description",
    category: "Category",
    amount: 0.00,
  });
  const [formData, setFormData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    
    setFormData([...formData, formSubmission]);

      fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formSubmission),
      });
   

  }

  const submission = formData.map((data) => (
    <div className="table-row" key={data.id}>
      <div className="table-cell">
        <p>{data.date}</p>
      </div>
      <div className="table-cell">
        <p>{data.description}</p>
      </div>
      <div className="table-cell">
        <p>{data.category}</p>
      </div>
      <div className="table-cell">
        <p>{data.amount}</p>
      </div>
    </div>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={formSubmission.date}
          onChange={(e) =>
            setFormSubmission({ ...formSubmission, date: e.target.value })
          }
        />
        <input
          type="text"
          value={formSubmission.description}
          onChange={(e) =>
            setFormSubmission({ ...formSubmission, description: e.target.value })
          }
        />
        <input
          type="text"
          value={formSubmission.category}
          onChange={(e) =>
            setFormSubmission({ ...formSubmission, category: e.target.value })
          }
        />
        <input
          type="number"
          value={formSubmission.amount}
          onChange={(e) =>
            setFormSubmission({ ...formSubmission, amount: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
     
    </div>
  );
}

export default Form;
