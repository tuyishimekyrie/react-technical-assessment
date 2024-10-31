import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import ThemeProvider from './components/ThemeProvider.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './routes/route.tsx';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
      ,
    </QueryClientProvider>
  </ThemeProvider>,
);
