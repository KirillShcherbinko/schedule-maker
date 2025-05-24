import SchedulingGuy from './assets/scheduling-guy.png';
import { useTranslation } from 'react-i18next';
import { BASE_NAMESPACE } from '../../model/consts';
import type { TBadgeColor } from '@/shared/ui/Badge/model/types';
import { AccordionBadge } from './ui/accordion-badge';
import { Accordion } from '@/shared/ui/Accordion';

type TBadgeWithTooltip = {
  title: string;
  text: string;
};

const BASE_LINK = 'home.instruction';
const colors: TBadgeColor[] = ['rose', 'sand', 'lavender'];

export const Instruction = () => {
  const { t } = useTranslation();
  const steps = t(`${BASE_LINK}.steps`, { returnObjects: true, ns: 'home' }) as TBadgeWithTooltip[];

  return (
    <section className="flex flex-col justify-center items-center bg-block-primary p-8 rounded-3xl w-full">
      <h2 className="font-bold text-3xl text-center">{t(`${BASE_LINK}.title`, BASE_NAMESPACE)}</h2>
      <div className="flex flex-col items-center lg:flex-row gap-2 w-full">
        <img className="w-lg" src={SchedulingGuy} alt="scheduling-guy" />
        <Accordion type="multiple" className="flex flex-col gap-5 justify-center w-full">
          {steps.map((step, index) => (
            <AccordionBadge badge={{ title: step.title, color: colors[index] }} content={step.text} />
          ))}
        </Accordion>
      </div>
    </section>
  );
};
