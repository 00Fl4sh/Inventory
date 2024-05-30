import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import ProductForm from "./components/ProductForm";

import LoginPage from "./components/LoginPage";
import ActiveOrdersPage from "./pages/ActiveOrdersPage";
import CompletedOrdersPage from "./pages/CompletedOrdersPage";
import CustomersPage from "./pages/CustomersPage";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState("active-orders");

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    document.body.className = theme;
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <div>
        {isAuthenticated && (
          <nav className="nav-bar">
            <ul>
              <ThemeToggle />

              <li>
                <Link
                  to="/active-orders"
                  className="nav-link"
                  onClick={() => handlePageChange("active-orders")}
                >
                  Active Sale Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/completed-orders"
                  className="nav-link"
                  onClick={() => handlePageChange("completed-orders")}
                >
                  Completed Sale Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/ProductForm"
                  className="nav-link"
                  onClick={() => handlePageChange("ProductForm")}
                >
                  Product Form
                </Link>
              </li>
              <li>
                <Link
                  to="/customers"
                  className="nav-link"
                  onClick={() => handlePageChange("customers")}
                >
                  Customers
                </Link>
              </li>
            </ul>
          </nav>
        )}
        <Routes>
          <Route
            path="/login"
            element={<LoginPage onLogin={() => setIsAuthenticated(true)} />}
          />
          <Route
            path="/active-orders"
            element={
              isAuthenticated ? <ActiveOrdersPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/completed-orders"
            element={
              isAuthenticated ? (
                <CompletedOrdersPage />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/customers"
            element={
              isAuthenticated ? <CustomersPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/ProductForm"
            element={
              isAuthenticated ? <ProductForm /> : <Navigate to="/login" />
            }
          />
          <Route
            path="*"
            element={
              <Navigate to={isAuthenticated ? "/active-orders" : "/login"} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
