import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Layout from "./components/layout/Layout";
import ProductDetail from "./pages/productDetail.jsx/ProductDetail";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/product/:id"
        element={
          <Layout>
            <ProductDetail />
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <Cart />
          </Layout>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
