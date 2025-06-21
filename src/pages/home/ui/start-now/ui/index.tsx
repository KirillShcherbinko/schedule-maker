import LikeGuy from '@/shared/assets/like-guy.png';
import { Button } from '@/shared/ui/button';
import { useTranslation } from 'react-i18next';
import { HOME_NAMESPACE, START_NOW_LINK } from '../../../model/consts';
import { useNavigate } from 'react-router-dom';

export const StartNow = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-2 bg-block-primary rounded-3xl pt-8 pb-8">
      <h2 className="font-bold text-2xl sm:text-3xl text-center">{t(`${START_NOW_LINK}.title`, HOME_NAMESPACE)}</h2>
      <div className="flex flex-col md:flex-row items-center gap-5 pl-5 md:pl-0 pr-5">
        <img className="min-w-[120px] w-2xs sm:w-xs md:w-sm lg:w-md xl:w-lg" src={LikeGuy} alt="Like Guy" />
        <div className="flex flex-col justify-center gap-3 md:gap-15 w-full md:w-2/3">
          <p className="font-medium text-lg xl:text-xl text-center">
            {t(`${START_NOW_LINK}.description`, HOME_NAMESPACE)}
          </p>
          <Button
            className="self-center-safe p-5 text-lg sm:p-8 sm:text-xl rounded-2xl"
            onClick={() => navigate('/schedule/1')}
          >
            {t(`${START_NOW_LINK}.buttonText`, HOME_NAMESPACE)}
          </Button>
        </div>
      </div>
    </section>
  );
};
