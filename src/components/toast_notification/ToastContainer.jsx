import React from "react";
// Import your custom hook
import { useToast } from "./ToastProvider";

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div aria-live="polite" className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast">
          <p>{toast.message}</p>
          <button onClick={() => removeToast(toast.id)}>X</button>
        </div>
      ))}
    </div>
  );
}
