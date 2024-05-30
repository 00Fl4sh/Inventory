import React, { useState, useEffect } from 'react';

const SaleOrderForm = ({ order, onSubmit }) => {
  const [formState, setFormState] = useState({
    id: order ? order.id : '',
    customer: order ? order.customer : '',
    price: order ? order.quantity : '',
    modified: order ? order.modified : new Date().toISOString(),
  });

  useEffect(() => {
    if (order) {
      setFormState(order);
    }
  }, [order]);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     const updatedOrder = {
      ...formState,
      modified: new Date().toISOString(), // Update the modified date
    };
    onSubmit(formState);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label>
          Order ID:
          <input
            type="number"
            name="id"
            value={formState.id}
            onChange={handleChange}
            readOnly={order}
          />
        </label>
        <label>
          Customer Name:
          <input
            type="text"
            name="customer"
            value={formState.customer}
            onChange={handleChange}
          />
        </label>
        <label>
          Price
          <input
            type="text"
            name="price"
            value={formState.price}
            onChange={handleChange}
          />
        </label>
        <label>
          last Modified
          <input
            // type="date"
            name="modified"
            value={formState.modified}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SaleOrderForm;
