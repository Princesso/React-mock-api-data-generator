import React, { useState } from 'react';
import SchemaEditor from './components/SchemaEditor';
import MockDataGenerator from './components/MockDataGenerator';

const App = () => {
  const [schema, setSchema] = useState([]);

  const handleSchemaChange = (updatedSchema) => {
    setSchema(updatedSchema);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Mock API Data Generator</h1>
          <nav>
            <a
              href="#"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md"
            >
              About
            </a>
          </nav>
        </div>
      </header>

      
      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        
        <section className="lg:w-1/2 bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Schema Editor</h2>
          <p className="text-sm text-gray-600 mb-4">
            Define your data structure and relationships here.
          </p>
          <SchemaEditor schema={schema} onSchemaChange={handleSchemaChange} />
        </section>

        <section className="lg:w-1/2 bg-white shadow-md rounded-lg p-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Mock Data Preview</h2>
          <p className="text-sm text-gray-600 mb-4">
            Preview the mock data generated from your schema.
          </p>
          <MockDataGenerator schema={schema} />
        </section>
      </main>

     
      <footer className="bg-gray-800 text-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Mock API Data Generator Oluebube Princess Egbuna. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;





