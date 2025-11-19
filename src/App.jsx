import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center">
      {/* الشعار */}
      <div className="flex items-center justify-center w-32 h-32 rounded-full bg-blue-500 text-white text-3xl font-bold shadow-lg mb-6">
        HDM
      </div>

      {/* العنوان */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-2">
        Welcome to HDM Platform
      </h1>

      {/* المالك */}
      <p className="text-gray-600 text-lg mb-4">
        Owner: Mohammad Jarwan
      </p>

      {/* زر تجريبي */}
      <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Get Started
      </button>
    </div>
  );
}

export default App;
