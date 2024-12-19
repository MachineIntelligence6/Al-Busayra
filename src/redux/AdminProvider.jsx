"use client";
import { Provider } from "react-redux";
import store from "./store";
import { AdminProtectedRoute } from "@/middleware/ProtectedRoute";

const AdminProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <AdminProtectedRoute>{children}</AdminProtectedRoute>
    </Provider>
  );
};

export default AdminProviders;
