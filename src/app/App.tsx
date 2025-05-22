import { RouterProvider } from 'react-router-dom';
import './App.scss';
import { router } from './routers/router';
import { ThemeProvider } from '@/entities/theme/ui/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
