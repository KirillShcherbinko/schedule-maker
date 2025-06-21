import SchedulingGuy from '@/shared/assets/scheduling-guy.png';
import { useTranslation } from 'react-i18next';
import { HOME_NAMESPACE, HOME_NAMESPACE_WITH_RETURN, INSTRUCTION_LINK } from '../../../model/consts';
import { AccordionBadge } from './accordion-badge';
import { Accordion } from '@/shared/ui/accordion';
import type { TAccrodionBadge } from './accordion-badge';
import { COLORS } from '../model/consts';

export const Instruction = () => {
  const { t } = useTranslation();
  const steps = t(`${INSTRUCTION_LINK}.steps`, HOME_NAMESPACE_WITH_RETURN) as unknown as TAccrodionBadge[];

  return (
    <section className="flex flex-col justify-center items-center bg-block-primary p-8 rounded-3xl w-full">
      <h2 className="font-bold text-3xl text-center">{t(`${INSTRUCTION_LINK}.title`, HOME_NAMESPACE)}</h2>
      <div className="flex flex-col items-center lg:flex-row gap-2 w-full">
        <img className="w-lg" src={SchedulingGuy} alt="scheduling-guy" />
        <Accordion type="multiple" className="flex flex-col gap-5 justify-center w-full">
          {steps.map((step, index) => (
            <AccordionBadge key={index} title={step.title} color={COLORS[index]} content={step.text} />
          ))}
        </Accordion>
      </div>
    </section>
  );
};
