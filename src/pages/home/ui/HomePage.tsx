import { Header } from '@/widgets/Header';
import { Welcome } from './Welcome';
import { TechIntro } from './TechIntro';
import { MainFeatures } from './MainFeatures';
import { Instruction } from './Instruction';
import { StartNow } from './StartNow';
import { Footer } from '@/widgets/Footer';

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
