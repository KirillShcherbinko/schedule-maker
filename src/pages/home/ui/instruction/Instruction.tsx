import { useTranslation } from 'react-i18next';
import { BASE_NAMESPACE } from '../../model/consts';
import type { TBadgeColor } from '@/shared/ui/Badge/model/types';
import { BadgeWithTooltip } from './ui/badge-with-tooltip';

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
    <section className="flex flex-col justify-center items-center gap-10 bg-block-primary p-8 rounded-3xl">
      <h2 className="font-bold text-3xl text-center">{t(`${BASE_LINK}.title`, BASE_NAMESPACE)}</h2>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {steps.map((step, index) => (
          <BadgeWithTooltip badge={{ title: step.title, color: colors[index] }} content={step.text} />
        ))}
      </div>
    </section>
  );
};
