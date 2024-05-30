import React, { useState } from "react";
import "./CustomersPages.css"; // Import the CSS file for styling

const AddCustomerForm = ({ onAddCustomer }) => {
  const [customerData, setCustomerData] = useState({
    id: "",
    customer: "",
    name: "",
    email: "",
    pincode: "",
    location_name: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCustomer(customerData);
    // Reset only the input fields related to the customer data
    setCustomerData({
      ...customerData,
      id: "",
      customer: "",
      name: "",
      email: "",
      pincode: "",
      location_name: "",
      type: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-customer-form">
      <h2>Add Customer</h2>
      <div className="form-group inline-group">
        <div>
          <label>ID:</label>
          <input
            type="number"
            name="id"
            value={customerData.id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Customer:</label>
          <input
            type="number"
            name="customer"
            value={customerData.customer}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={customerData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={customerData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group inline-group">
        <div>
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={customerData.pincode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location_name"
            value={customerData.location_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Customer Type:</label>
          <input
            type="text"
            name="type"
            value={customerData.type}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* Add other input fields for other customer data */}
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default AddCustomerForm;
