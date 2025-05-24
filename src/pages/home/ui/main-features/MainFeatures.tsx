import Style from'./MainFeatures.module.scss';

import CalendarImage from './assets/calendar.png';
import TagImage from './assets/tag.png';
import EditImage from './assets/edit.png';
import UserImage from './assets/user.png';

import { FeatureCard } from './ui/feature-card';
import { useTranslation } from 'react-i18next';

const BASE_LINK = 'home.mainFeatures';
const images = [CalendarImage, TagImage, EditImage, UserImage];

type TFeature = {
  title: string;
  icon: string;
  text: string;
};

export const MainFeatures = () => {
  const { t } = useTranslation();
  const mainFeatures = t(BASE_LINK, { returnObjects: true, ns: 'home' }) as TFeature[];

  return (
    <div className={Style.MainFeatures}>
      {mainFeatures.map((feature, index) => (
        <div key={feature.title}>
          <FeatureCard imageSrc={images[index]} imageAlt={feature.icon} title={feature.title} text={feature.text} />
        </div>
      ))}
    </div>
  );
};
