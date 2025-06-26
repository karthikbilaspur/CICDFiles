import React, { useState } from 'react';
import axios from 'axios';

function Payment() {
  const [amount, setAmount] = useState(0);

  const handlePayment = async () => {
    try {
      const response = await axios.post('/api/payment', {
        amount,
      });
      // Handle payment response
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Payment</h1>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
}

export default Payment;