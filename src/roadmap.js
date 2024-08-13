import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const RoadmapItem = ({ icon, title, description, progress }) => (
  <div className="relative flex items-start p-6 bg-gray-800 dark:bg-gray-700 rounded-xl border border-gray-600 hover:border-blue-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
    <div className="flex-shrink-0">
      <div className="h-16 w-16 text-blue-500 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
        {icon}
      </div>
    </div>
    <div className="ml-6">
      <h3 className="text-xl font-bold text-white dark:text-blue-100">{title}</h3>
      <p className="mt-3 text-gray-400 dark:text-gray-300">{description}</p>
      <div className="mt-4 flex items-center">
        <div className="w-full bg-gray-600 dark:bg-gray-500 h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-500 h-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="ml-3 text-sm text-gray-300 dark:text-gray-200">{progress}% Complete</span>
      </div>
    </div>
  </div>
);

const Roadmap = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <section className={`py-16 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-semibold text-center flex-grow">Roadmap</h2>
            <button
              onClick={toggleDarkMode}
              className={`ml-4 p-2 rounded-full focus:outline-none transition-colors duration-300 ${
                darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-yellow-400 text-gray-800 hover:bg-yellow-300'
              }`}
            >
              {darkMode ? (
                <i className="fas fa-sun text-xl"></i>
              ) : (
                <i className="fas fa-moon text-xl"></i>
              )}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <RoadmapItem
              icon={<i className="fas fa-user-circle text-4xl"></i>}
              title="Advanced Character Development"
              description="Develop deep, complex characters with our AI-powered tools. Enhance their personalities, backgrounds, and arcs to create more engaging stories."
              progress={60}
            />
            <RoadmapItem
              icon={<i className="fas fa-book-open text-4xl"></i>}
              title="E-book Platform Integration"
              description="Easily publish your works to popular e-book platforms. Our integration streamlines the process of getting your content to readers."
              progress={40}
            />
            <RoadmapItem
              icon={<i className="fas fa-users text-4xl"></i>}
              title="Collaborative Writing"
              description="Work together with other authors or AI assistants to co-create stories. Enhance your writing process with real-time collaboration."
              progress={30}
            />
            <RoadmapItem
              icon={<i className="fas fa-paint-brush text-4xl"></i>}
              title="AI Cover Art Generation"
              description="Generate stunning book covers with our AI-powered design tools. Create eye-catching visuals that captivate readers and enhance your book's appeal."
              progress={70}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
