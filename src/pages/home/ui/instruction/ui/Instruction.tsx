import SchedulingGuy from '@/shared/assets/scheduling-guy.png';
import { useTranslation } from 'react-i18next';
import { BASE_NAMESPACE, BASE_NAMESPACE_WITH_RETURN, INSTRUCTION_LINK } from '../../../config/consts';
import { AccordionBadge } from './AccordionBadge';
import { Accordion } from '@/shared/ui/Accordion';
import type { TAccrodionBadge } from './AccordionBadge/model/types';
import { COLORS } from '../model/consts';

export const Instruction = () => {
  const { t } = useTranslation();
  const steps = t(`${INSTRUCTION_LINK}.steps`, BASE_NAMESPACE_WITH_RETURN) as unknown as TAccrodionBadge[];

  return (
    <section className="flex flex-col justify-center items-center bg-block-primary p-8 rounded-3xl w-full">
      <h2 className="font-bold text-3xl text-center">{t(`${INSTRUCTION_LINK}.title`, BASE_NAMESPACE)}</h2>
      <div className="flex flex-col items-center lg:flex-row gap-2 w-full">
        <img className="w-lg" src={SchedulingGuy} alt="scheduling-guy" />
        <Accordion type="multiple" className="flex flex-col gap-5 justify-center w-full">
          {steps.map((step, index) => (
            <AccordionBadge key={index} badge={{ title: step.title, color: COLORS[index] }} content={step.text} />
          ))}
        </Accordion>
      </div>
    </section>
  );
};
