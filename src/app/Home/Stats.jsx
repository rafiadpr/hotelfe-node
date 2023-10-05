// src/StatsLayout.js
import React from 'react';

const Stats = () => {
  return (
    <div className="bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-2">Total Guest</h2>
              <p className="text-4xl font-bold text-blue-500">1000+</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-2">Rooms</h2>
              <p className="text-4xl font-bold text-green-500">30+</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold mb-2">Room Type</h2>
              <p className="text-4xl font-bold text-purple-500">3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
