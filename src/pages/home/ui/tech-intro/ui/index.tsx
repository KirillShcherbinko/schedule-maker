import { Card } from '@/shared/ui/card';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HOME_NAMESPACE, TECH_INTRO_LINK } from '../../../model/consts';
import { Badge } from '@/shared/ui/badge';
import type { TBadgeColor } from '@/shared/ui/badge/model/types';

export const TechIntro = () => {
  const { t } = useTranslation();

  const badges = [
    { title: t(`${TECH_INTRO_LINK}.footer.tag1`, HOME_NAMESPACE), color: 'lavender' },
    { title: t(`${TECH_INTRO_LINK}.footer.tag2`, HOME_NAMESPACE), color: 'peach' },
    { title: t(`${TECH_INTRO_LINK}.footer.tag3`, HOME_NAMESPACE), color: 'grass' },
  ];

  const MotionCard = motion.create(Card);

  return (
    <MotionCard
      className="flex flex-col justify-center p-5 md:p-10 w-full"
      whileHover={{ translateY: -8 }}
      whileTap={{ translateY: -8 }}
      transition={{ duration: 0.2 }}
    >
      <h1 className="font-bold text-3xl lg:text-4xl">{t(`${TECH_INTRO_LINK}.heading`, HOME_NAMESPACE)}</h1>
      <p className="font-regular text-md md:text-lg lg:text-xl xl:text-2xl">
        {t(`${TECH_INTRO_LINK}.body`, HOME_NAMESPACE)}
      </p>
      <div className="flex flex-wrap gap-5">
        {badges.map((badge, index) => (
          <Badge
            key={index}
            className="font-regular text-sm md:text-md rounded-[16px] p-2"
            variant={badge.color as TBadgeColor}
          >
            {badge.title}
          </Badge>
        ))}
      </div>
    </MotionCard>
  );
};
