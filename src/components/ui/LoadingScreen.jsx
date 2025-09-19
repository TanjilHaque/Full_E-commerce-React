// LoadingScreen.jsx
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[--color-BG]">
      <div className="flex flex-col items-center space-y-6">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-[--color-Button1] border-t-[--color-Button2] rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="text-lg font-semibold text-[--color-Primary2] animate-pulse">
          Loading<span className="text-[--color-Button1]">...</span>
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
