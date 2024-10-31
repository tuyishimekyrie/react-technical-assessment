import '@testing-library/jest-dom';
import 'whatwg-fetch';

// src/setupTests.ts
Object.defineProperty(global, 'import', {
  value: {
    meta: {
      env: {
        VITE_API_URL: 'https://dummyjson.com',
      },
    },
  },
});
