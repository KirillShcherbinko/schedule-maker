import { Header } from '@/widgets/header/Header';
import { Welcome } from './welcome/Welcome';

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-full relative">
      <Header />
      <Welcome />
    </div>
  );
};
