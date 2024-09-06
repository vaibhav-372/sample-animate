import React, { useState, useEffect } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate fade-in effect by setting visibility after component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div
        className={`max-w-sm mx-auto p-6 bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
          ${isVisible ? 'opacity-100' : 'opacity-0'} ease-in-out`}
      >
        <img
          className="w-full rounded-lg"
          src="https://imgs.search.brave.com/-BzzlJEua6NyQZ30Ax0NVQgHNBhNaEdMpudfUs5ZbMo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYW1v/LmdpdGh1YnVzZXJj/b250ZW50LmNvbS9j/MmZkMmY5NGFhNTU1/NDQzMjdmYzhlZDg5/MDFhZWRiMmVlYzhl/MzUzNTI0MzQ1MmI0/MzY0NmViODA4NmVm/ZTFhLzY4NzQ3NDcw/NzMzYTJmMmY3OTYx/NzY3NTdhNjM2NTZj/Njk2YjY1NzIyZTY3/Njk3NDY4NzU2MjJl/Njk2ZjJmNzM2MTZk/NzA2YzY1MmQ2OTZk/NjE2NzY1NzMyZjY5/NmQ2MTY3NjUyZDM0/MzQyZTZhNzA2Nw.jpeg"
          alt="Card Image"
        />
        <div className="mt-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Animated Responsive Caaard
          </h1>
          <p className="mt-2 text-gray-600">
            This card includes multiple animations and color transitions using
            Tailwind CSS.
          </p>
          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full hover:bg-gradient-to-l hover:from-blue-500 hover:to-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-500">
            Hover Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
