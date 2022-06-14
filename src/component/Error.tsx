import React from "react";

function Error() {
  return (
    <div className="flex justify-center items-center py-8 px-3 md:w-1/2 w-full dark:bg-100 bg-200 rounded-2xl transition-theme">
      <span className="text-3xl dark:text-white text-slate-800 text-center transition-theme">
        This place is not available
      </span>
    </div>
  );
}

export default Error;
