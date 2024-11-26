export const TEMPLATES = {
    User: [
      { name: 'id', type: 'number', constraints: { min: 1, max: 1000 } },
      { name: 'name', type: 'string' },
      { name: 'email', type: 'string' },
    ],
    Product: [
      { name: 'id', type: 'number' },
      { name: 'name', type: 'string' },
      { name: 'price', type: 'number', constraints: { min: 1, max: 100 } },
    ],
  };
  