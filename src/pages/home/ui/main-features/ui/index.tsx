import { FeatureCard } from './feature-card';
import { useTranslation } from 'react-i18next';
import { HOME_NAMESPACE_WITH_RETURN, MAIN_FEATURES_LINK } from '../../../model/consts';
import { images } from '../model/consts';
import type { TFeature } from '../model/types';

export const MainFeatures = () => {
  const { t } = useTranslation();
  const mainFeatures = t(MAIN_FEATURES_LINK, HOME_NAMESPACE_WITH_RETURN) as unknown as TFeature[];

  return (
    <ul className="grid gap-[25px] p-0 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xs:px-[10px]">
      {mainFeatures.map((feature, index) => (
        <li key={feature.title} className="list-none">
          <FeatureCard
            imageSrc={images[index] ?? ''}
            imageAlt={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        </li>
      ))}
    </ul>
  );
};
