import React from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <>
      <div className="error-section flex h-screen flex-col gap-y-10 section justify-center items-center bg-slate-100">
        <p className="text-5xl text-black">Error : 404 Page Not Found.☹️</p>
        <button
          className="bg-purple-500 text-black px-6 py-3 text-2xl rounded-md hover:bg-purple-700 hover:text-white transition-all duration-300"
          onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    </>
  );
}

export default Error;
