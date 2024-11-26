import React, { useState } from 'react';

const FIELD_TYPES = ['string', 'number', 'boolean', 'date', 'array', 'object'];
const RELATION_TYPES = ['none', 'one-to-one', 'one-to-many'];

const SchemaEditor = ({ schema, onSchemaChange }) => {
  const [fields, setFields] = useState(schema || []);

  const addField = () => {
    const newField = {
      name: '',
      type: 'string',
      constraints: {},
      relation: { type: 'none', relatedTo: '' },
    };
    setFields([...fields, newField]);
  };

  const updateField = (index, updatedField) => {
    const updatedFields = [...fields];
    updatedFields[index] = updatedField;
    setFields(updatedFields);
    onSchemaChange(updatedFields); 
  };

  const removeField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
    onSchemaChange(updatedFields); 
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow">
      <h2 className="text-lg font-semibold mb-4">Schema Editor</h2>

      {fields.map((field, index) => (
        <div key={index} className="mb-6 border p-4 rounded bg-white">
          <div className="flex items-center space-x-4 mb-2">
            <input
              type="text"
              placeholder="Field Name"
              value={field.name}
              onChange={(e) => updateField(index, { ...field, name: e.target.value })}
              className="border border-gray-300 rounded p-2 flex-1"
            />

            <select
              value={field.type}
              onChange={(e) => updateField(index, { ...field, type: e.target.value })}
              className="border border-gray-300 rounded p-2"
            >
              {FIELD_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <button
              onClick={() => removeField(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>

          {field.type === 'number' && (
            <div className="flex space-x-4 mt-2">
              <input
                type="number"
                placeholder="Min"
                value={field.constraints.min || ''}
                onChange={(e) =>
                  updateField(index, {
                    ...field,
                    constraints: { ...field.constraints, min: Number(e.target.value) },
                  })
                }
                className="border border-gray-300 rounded p-2"
              />
              <input
                type="number"
                placeholder="Max"
                value={field.constraints.max || ''}
                onChange={(e) =>
                  updateField(index, {
                    ...field,
                    constraints: { ...field.constraints, max: Number(e.target.value) },
                  })
                }
                className="border border-gray-300 rounded p-2"
              />
            </div>
          )}

          {field.type === 'string' && (
            <div className="flex space-x-4 mt-2">
              <input
                type="number"
                placeholder="Max Length"
                value={field.constraints.maxLength || ''}
                onChange={(e) =>
                  updateField(index, {
                    ...field,
                    constraints: { ...field.constraints, maxLength: Number(e.target.value) },
                  })
                }
                className="border border-gray-300 rounded p-2"
              />
            </div>
          )}

          <div className="mt-4">
            <label className="block text-sm font-medium mb-2">Relationship</label>
            <div className="flex items-center space-x-4">
              <select
                value={field.relation.type}
                onChange={(e) =>
                  updateField(index, {
                    ...field,
                    relation: { ...field.relation, type: e.target.value },
                  })
                }
                className="border border-gray-300 rounded p-2 flex-1"
              >
                {RELATION_TYPES.map((relation) => (
                  <option key={relation} value={relation}>
                    {relation}
                  </option>
                ))}
              </select>

              {field.relation.type !== 'none' && (
                <select
                  value={field.relation.relatedTo}
                  onChange={(e) =>
                    updateField(index, {
                      ...field,
                      relation: { ...field.relation, relatedTo: e.target.value },
                    })
                  }
                  className="border border-gray-300 rounded p-2 flex-1"
                >
                  <option value="">Select Field</option>
                  {fields
                    .filter((_, i) => i !== index)
                    .map((f, i) => (
                      <option key={i} value={f.name}>
                        {f.name}
                      </option>
                    ))}
                </select>
              )}
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addField}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
      >
        Add Field
      </button>
    </div>
  );
};

export default SchemaEditor;
