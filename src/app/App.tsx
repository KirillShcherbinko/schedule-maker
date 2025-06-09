import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { AppRouter } from './routers/router';
import { ThemeProvider } from '@/entities/Theme/ui/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
