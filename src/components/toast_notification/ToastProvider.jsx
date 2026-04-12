/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from "react";

const ToastContext = createContext();
export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const addToast = (message, type) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }].slice(-3));

    setTimeout(() => {
      removeToast(id);
    }, 3000);
  };
  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}
