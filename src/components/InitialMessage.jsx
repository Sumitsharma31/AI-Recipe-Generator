import React from "react";

const InitialMessage = () => (
  <div
    className="relative text-center py-20 px-6 bg-slate-700 rounded-2xl shadow-lg overflow-hidden"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Content */}
    <div className="relative z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-16 w-16 text-white/80"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.121 14.121L19 19M4.929 4.929L9.879 9.879"
        />
      </svg>
      <h3 className="mt-4 text-3xl font-bold text-white">
        Your culinary adventure awaits!
      </h3>
      <p className="mt-2 text-lg text-white/90">
        Enter your ingredients above to get started.
      </p>
    </div>
  </div>
);

export default InitialMessage;
