import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './ProductForm.css';

const products = [
  { value: 'product1', label: 'Product 1' },
  { value: 'product2', label: 'Product 2' },
  { value: 'product3', label: 'Product 3' },
  { value: 'product4', label: 'Product 4' },
  { value: 'product5', label: 'Product 5' },
];

const ProductForm = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productDetails, setProductDetails] = useState({});

  const handleProductChange = (selectedOptions) => {
    setSelectedProducts(selectedOptions);
  };

  const handleDetailChange = (index, field, value) => {
    const updatedDetails = { ...productDetails };
    if (!updatedDetails[index]) {
      updatedDetails[index] = { rate: '', quantity: '', unit: '', inventory: '', amount: '' };
    }
    updatedDetails[index][field] = value;

    // Automatically calculate amount if rate and quantity are both numbers
    if (field === 'rate' || field === 'quantity') {
      const rate = parseFloat(updatedDetails[index].rate) || 0;
      const quantity = parseFloat(updatedDetails[index].quantity) || 0;
      updatedDetails[index].amount = rate * quantity;
    }

    setProductDetails(updatedDetails);
  };

  return (
    <div className="product-form">
      <label htmlFor="products">All Products *</label>
      <Select
        id="products"
        isMulti
        options={products}
        value={selectedProducts}
        onChange={handleProductChange}
        className="product-select"
      />
      {selectedProducts.map((product, index) => (
        <div key={product.value} className="product-detail">
          <h4>{product.label}</h4>
          <div className="product-inputs">
            <div>
              <label>Selling Rate</label>
              <input
                type="text"
                value={productDetails[index]?.rate || ''}
                onChange={(e) => handleDetailChange(index, 'rate', e.target.value)}
                placeholder="Enter selling rate"
              />
            </div>
            <div>
              <label>Total Items</label>
              <input
                type="text"
                value={productDetails[index]?.quantity || ''}
                onChange={(e) => handleDetailChange(index, 'quantity', e.target.value)}
                placeholder="Enter quantity"
              />
            </div>
            <div>
              <label>Unit</label>
              <input
                type="text"
                value={productDetails[index]?.unit || ''}
                onChange={(e) => handleDetailChange(index, 'unit', e.target.value)}
                placeholder="Enter unit"
              />
            </div>
            <div>
              <label>Inventory</label>
              <input
                type="text"
                value={productDetails[index]?.inventory || ''}
                onChange={(e) => handleDetailChange(index, 'inventory', e.target.value)}
                placeholder="Quantity"
              />
            </div>
            <div>
              <label>Amount</label>
              <input
                type="text"
                value={productDetails[index]?.amount || ''}
                placeholder="Amount"
                readOnly
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductForm;
