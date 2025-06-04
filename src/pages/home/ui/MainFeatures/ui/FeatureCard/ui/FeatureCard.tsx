import { Card } from '@/shared/ui/Card';
import { motion } from 'framer-motion';

type FeatureCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
};

export const FeatureCard = ({ imageSrc, imageAlt, title, text }: FeatureCardProps) => {
  const MotionCard = motion.create(Card);

  return (
    <MotionCard
      className="flex flex-col p-4 h-full gap-5 max-w-[400px]"
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.2 }}
    >
      <img className="w-sm" src={imageSrc} alt={imageAlt} />
      <div className="flex flex-col gap-2 text-center">
        <h3 className="font-bold text-xl">{title}</h3>
        <p>{text}</p>
      </div>
    </MotionCard>
  );
};
