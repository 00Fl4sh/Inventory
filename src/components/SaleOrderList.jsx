import React from "react";

const SaleOrderList = ({ orders, onEdit, readOnly }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Customer Name</th>
        <th>Price</th>
        <th>Last Modified</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order) => (
        <tr key={order.id}>
          <td>{order.id}</td>
          <td>{order.customer}</td>
          <td>{order.price}</td>
          <td>{new Date(order.modified).toLocaleString()}</td>
          <td>
            {readOnly ? null : (
              <button onClick={() => onEdit(order)}>...</button>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default SaleOrderList;
