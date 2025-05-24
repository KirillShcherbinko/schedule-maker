import { Header } from '@/widgets/header/Header';
import { Welcome } from './welcome';
import { TechIntro } from './tech-intro';
import { MainFeatures } from './main-features';

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-8 w-full relative">
      <Header />
      <Welcome />
      <TechIntro />
      <MainFeatures />
    </div>
  );
};
