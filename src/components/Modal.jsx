import React, { useEffect, useRef } from "react";

export default function Modal({ isOpen, onClose, title, children }) {
  const coatCheckRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      coatCheckRef.current = document.activeElement;
    } else {
      if (coatCheckRef.current) {
        coatCheckRef.current.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === tab) {
        const modal = modalRef.current;
        if (!modal) return;
        const focusableElements = modal.querySelectorAll("button, input");
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div ref={modalRef} className="bg-black text-white p-10 fixed inset-0">
      <h2>{title}</h2>
      <input type="text" placeholder="Type here..." />
      <button onClick={onClose}>Close</button>
      <button onClick={onClose}>Confirm</button>
    </div>
  );
}
