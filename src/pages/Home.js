import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Home Feed</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold">Post Title</h2>
        <p className="text-gray-700 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          consequat felis vitae erat dapibus, ut lacinia lorem posuere.
        </p>
      </div>
      {/* Repeat for multiple posts */}
    </div>
  );
};

export default Home;
