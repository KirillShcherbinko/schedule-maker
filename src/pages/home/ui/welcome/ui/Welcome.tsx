import { BASE_NAMESPACE, WELCOME_LINK } from '../../../config/consts';
import CaldarGuyImage from '@/shared/assets/calendar-guy-image.png';
import { useTranslation } from 'react-i18next';

export const Welcome = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-row items-center mt-20 pr-5 pt-8 pb-8 gap-5 sm:gap-10 lg:gap-20 xl:gap-25 bg-block-primary rounded-3xl">
      <img className="min-w-[120px] w-2xs sm:w-xs md:w-sm lg:w-md xl:w-lg" src={CaldarGuyImage} alt="Calendar Guy" />
      <div className="flex flex-col justify-center items-start gap-5">
        <p className="font-bold max-[480px]:text-xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          {t(`${WELCOME_LINK}.title`, BASE_NAMESPACE)}
        </p>
        <p className="font-regular max-[480px]:text-sm text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-400">
          {t(`${WELCOME_LINK}.subtitle`, BASE_NAMESPACE)}
        </p>
      </div>
    </section>
  );
};
