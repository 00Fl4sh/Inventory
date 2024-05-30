import React, { useState, useEffect } from "react";
import AddCustomerForm from "./../components/AddCustomerForm"; // Import the AddCustomerForm component

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [nextCustomerId, setNextCustomerId] = useState(null);

  useEffect(() => {
    fetchCustomers();
    fetchNextCustomerId();
  }, []);

  const fetchCustomers = async () => {
    // Mocking the response
    const mockCustomers = [
      {
        id: 9,
        customer: 11908,
        id: 11908,
        name: "Ram",
        color: [182, 73, 99],
        email: "jesus_christ@church.com",
        pincode: 42001,
        location_name: "Mumbai, Maharashtra, India",
        type: "regular",
        profile_pic: null,
        gst: "",
      },

      // Add more mock data if needed
    ];

    setCustomers(mockCustomers);
  };

  const fetchNextCustomerId = async () => {
    // Mocking the response
    setNextCustomerId(1001); // Example value for the next customer ID
  };

  const handleAddCustomer = async (newCustomer) => {
    // Mocking the addition of customer
    setCustomers([...customers, newCustomer]);
    setNextCustomerId(nextCustomerId + 1); // Increment nextCustomerId for future use
  };

  const handleDeleteCustomer = async (id) => {
    setCustomers(
      customers.filter((customer) => customer && customer.id !== id)
    );
  };
  return (
    <div>
      {/* Pass handleAddCustomer function as a prop to AddCustomerForm */}
      <AddCustomerForm onAddCustomer={handleAddCustomer} />
      {/* Render customer table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Name</th>
            <th>Email</th>
            <th>Pincode</th>
            <th>Location</th>
            <th>Customer Type</th>
            {/* Add more headers for other customer data */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.customer}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.pincode}</td>
              <td>{customer.location_name}</td>
              <td>{customer.type}</td>
              {/* Add more columns for other customer data */}
              <td>
                <button onClick={() => handleDeleteCustomer(customer.id)}>
                  Delete
                </button>
                {/* Implement Update Functionality */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersPage;
