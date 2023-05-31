import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-indigo-500 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Spinner;
