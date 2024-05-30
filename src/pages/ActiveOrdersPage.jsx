import React, { useState } from 'react';
import SaleOrderList from '../components/SaleOrderList';
import SaleOrderForm from '../components/SaleOrderForm';

const ActiveOrdersPage = () => {
  const [activeOrders, setActiveOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);

  const handleAddOrder = (order) => {
    setActiveOrders([...activeOrders, order]);
    setIsModalOpen(false);
  };

  const handleEditOrder = (updatedOrder) => {
    setActiveOrders(activeOrders.map(order => order.id === updatedOrder.id ? updatedOrder : order));
    setEditingOrder(null);
  };

  return (
    <div>
      <h2>Active Sale Orders</h2>
      <button onClick={() => setIsModalOpen(true)}>+ Sale Order</button>
      <SaleOrderList orders={activeOrders} onEdit={setEditingOrder} />
      {isModalOpen && <SaleOrderForm onSubmit={handleAddOrder} />}
      {editingOrder && <SaleOrderForm order={editingOrder} onSubmit={handleEditOrder} />}
    </div>
  );
};

export default ActiveOrdersPage;
