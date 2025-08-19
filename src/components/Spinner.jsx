import React from "react";

const Spinner = () => (
  <div className="text-center py-12">
    <div
      role="status"
      className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-emerald-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
    <p className="mt-4 text-lg text-slate-600">
      Finding delicious recipes for you...
    </p>
  </div>
);

export default Spinner;
