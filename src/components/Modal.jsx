import React, { useEffect, useRef } from "react";

export default function Modal({ isOpen, onClose, title, children }) {
  const elementRef = useRef(null);
  const refButtons = useRef(null);

  useEffect(() => {
    if (isOpen) {
      elementRef.current = document.activeElement;
    } else {
      if (elementRef.current) {
        elementRef.current.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }

      if (e.key === "Tab") {
        const buttonElement = refButtons.current;
        if (!buttonElement) return;

        const buttons = buttonElement.querySelectorAll("button");
        const firstButton = buttons[0];
        const lastButton = buttons[buttons.length - 1];

        if (document.activeElement === lastButton) {
          e.preventDefault();
          firstButton.focus();
        }

        if (e.shiftKey) {
          if (document.activeElement === firstButton) {
            e.preventDefault();
            lastButton.focus();
          }
        } else {
          if (document.activeElement === lastButton) {
            e.preventDefault();
            firstButton.focus();
          }
        }
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
    }

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        ref={refButtons}
        role="dialog"
        aria-modal="true"
        className="bg-gray-900 border border-gray-700 p-6 rounded-xl w-full max-w-md text-white shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        <div className="mb-8 text-gray-300">{children}</div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 font-bold rounded outline-none focus:ring-2 focus:ring-red-500"
          >
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  );
}
