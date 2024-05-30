import React, { useState } from 'react';
import SaleOrderList from '../components/SaleOrderList';

const CompletedOrdersPage = () => {
  const [completedOrders, setCompletedOrders] = useState([
    // Sample completed orders for demonstration
    { id: '1', customer: 'Product A', price: 599, status: 'Completed', modified: new Date().toISOString()},
    { id: '2', customer: 'Product B', price: 799, status: 'Completed', modified: new Date().toISOString() }
  ]);

  return (
    <div>
      <h2>Completed Sale Orders</h2>
      <SaleOrderList orders={completedOrders} readOnly />
    </div>
  );
};

export default CompletedOrdersPage;
