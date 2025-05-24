import { Header } from '@/widgets/header/Header';
import { Welcome } from './welcome';
import { TechIntro } from './tech-intro';

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-8 w-full relative">
      <Header />
      <Welcome />
      <TechIntro />
    </div>
  );
};
