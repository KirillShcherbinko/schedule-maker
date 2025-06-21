import { Header } from '@/widgets/header';
import { Welcome } from './welcome';
import { TechIntro } from './tech-intro';
import { MainFeatures } from './main-features';
import { Instruction } from './instruction';
import { StartNow } from './start-now';
import { Footer } from '@/widgets/footer';

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-8 w-full relative">
      <Header />
      <Welcome />
      <TechIntro />
      <MainFeatures />
      <Instruction />
      <StartNow />
      <Footer />
    </div>
  );
};
