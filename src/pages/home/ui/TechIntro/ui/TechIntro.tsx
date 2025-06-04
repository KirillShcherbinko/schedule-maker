import { Card } from '@/shared/ui/Card';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { TBadge } from '@/shared/ui/Badge/model/types';
import { BadgeList } from '@/widgets/BadgeList';
import { BASE_NAMESPACE, TECH_INTRO_LINK } from '../../../config/consts';

export const TechIntro = () => {
  const { t } = useTranslation();

  const badges: TBadge[] = [
    { title: t(`${TECH_INTRO_LINK}.footer.tag1`, BASE_NAMESPACE), color: 'lavender' },
    { title: t(`${TECH_INTRO_LINK}.footer.tag2`, BASE_NAMESPACE), color: 'peach' },
    { title: t(`${TECH_INTRO_LINK}.footer.tag3`, BASE_NAMESPACE), color: 'grass' },
  ];

  const MotionCard = motion.create(Card);

  return (
    <MotionCard
      className="flex flex-col justify-center p-5 md:p-10 w-full"
      whileHover={{ translateY: -8 }}
      whileTap={{ translateY: -8 }}
      transition={{ duration: 0.2 }}
    >
      <h1 className="font-bold text-3xl lg:text-4xl">{t(`${TECH_INTRO_LINK}.heading`, BASE_NAMESPACE)}</h1>
      <p className="font-regular text-md md:text-lg lg:text-xl xl:text-2xl">
        {t(`${TECH_INTRO_LINK}.body`, BASE_NAMESPACE)}
      </p>
      <BadgeList
        badges={badges}
        className="gap-5"
        badgeClassName="font-regular text-sm md:text-md rounded-[16px] p-2"
      />
    </MotionCard>
  );
};
