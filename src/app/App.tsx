import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { AppRouter } from './routers/router';
import { ThemeProvider } from '@/entities/theme';

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
