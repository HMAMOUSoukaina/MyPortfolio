import React from "react";

// Styles pour les alertes
const alertStyles = {
  base: "fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-md shadow-lg w-fit max-w-lg",
  success: "bg-white border-2 border-green-500 text-green-500",
  error: "bg-white border-2 border-red-500 text-red-500",
  icon: "w-6 h-6 inline-block mr-2",
};

function Alert({ message, type }) {
  if (!message) return null;

  const icon = type === "success" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={alertStyles.icon}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={alertStyles.icon}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <div className={`${alertStyles.base} ${alertStyles[type]}`}>
      {icon}
      <span>{message}</span>
    </div>
  );
}

export default Alert;
