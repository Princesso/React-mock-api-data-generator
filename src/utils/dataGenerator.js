export const generateFieldData = (field) => {
    switch (field.type) {
      case 'string':
        const maxLength = field.constraints?.maxLength || 10;
        return Array.from({ length: maxLength }, () => 
          String.fromCharCode(97 + Math.floor(Math.random() * 26))
        ).join('');
      case 'number':
        const min = field.constraints?.min || 0;
        const max = field.constraints?.max || 100;
        return Math.floor(Math.random() * (max - min + 1)) + min;
      case 'boolean':
        return Math.random() > 0.5;
      case 'date':
        return new Date().toISOString();
      case 'array':
        return Array.from({ length: 3 }, () => generateFieldData({ type: 'string' }));
      case 'object':
        return { key: 'value' };
      default:
        return null;
    }
  };
  