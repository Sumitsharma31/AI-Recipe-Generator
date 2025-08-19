import React from "react";

const ErrorMessage = ({ message }) => (
  <div className="text-center py-12 px-6 bg-red-50 rounded-2xl border border-red-200">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-12 w-12 text-red-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <h3 className="mt-4 text-xl font-semibold text-red-800">
      Oops! Something went wrong.
    </h3>
    <p className="mt-1 text-red-600">{message}</p>
  </div>
);

export default ErrorMessage;
