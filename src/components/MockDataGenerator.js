import React, { useState, useEffect } from 'react';
import { generateFieldData } from '../utils/dataGenerator';

const MockDataGenerator = ({ schema }) => {

  const downloadJsonFile = (data, filename) => {
    const json = JSON.stringify(data, null, 2); // Formatting with 2 spaces for readability
    const blob = new Blob([json], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  const generateMockData = () => {
    const mockData = {};
    schema.forEach((field) => {
      mockData[field.name] = generateFieldData(field);
    });
    return mockData;
  };

  const mockData = generateMockData();
  

  useEffect(() => {
    if (schema.length > 0) generateMockData();
  }, [schema]);

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow mt-6">
      <h2 className="text-lg font-semibold mb-4">Mock Data</h2>
      <button
        onClick={generateMockData}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
      >
        Regenerate Data
      </button>
      <pre className="bg-gray-200 p-4 rounded overflow-auto max-h-64">
        {JSON.stringify(mockData, null, 2)}
      </pre>
      
      <div className="mt-4 flex justify-end">
        <button
          onClick={() => downloadJsonFile(mockData, 'mock_data.json')}
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700"
        >
          Export Data as JSON
        </button>
      </div>
    </div>
  );
};

export default MockDataGenerator;
