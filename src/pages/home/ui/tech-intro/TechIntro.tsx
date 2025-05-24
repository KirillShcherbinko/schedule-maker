import { Card } from '@/shared/ui/Card';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import type { TBadge } from '@/shared/ui/Badge/model/types';
import { BadgeList } from '@/widgets/badge-list';

export const TechIntro = () => {
  const { t } = useTranslation();

  const MotionCard = motion(Card);

  const badges: TBadge[] = [
    {title: t('home.techIntro.footer.tag1', { ns: 'home' }), color: 'lavender'},
    {title: t('home.techIntro.footer.tag2', { ns: 'home' }), color: 'peach'},
    {title: t('home.techIntro.footer.tag3', { ns: 'home' }), color: 'grass'}
  ];

  return (
    <MotionCard
      className='flex flex-col justify-center p-5 md:p-10 w-full'
      whileHover={{ translateY: -8 }}
      whileTap={{ translateY: -8 }}
      transition={{ duration: 0.2 }}
    >
      <h1 className='font-bold text-3xl lg:text-4xl'>{t('home.techIntro.heading', { ns: 'home' })}</h1>
      <p className='font-regular text-md md:text-lg lg:text-xl xl:text-2xl'>{t('home.techIntro.body', { ns: 'home' })}</p>
      <BadgeList badges={badges} badgeClassName='font-regular text-sm md:text-md rounded-[16px] p-2'/>
    </MotionCard>
  );
};
