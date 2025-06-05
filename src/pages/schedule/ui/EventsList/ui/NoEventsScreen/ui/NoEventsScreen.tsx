import NoEventsScreenImage from '@/shared/assets/no-events-screen.png';
import { useTranslation } from 'react-i18next';
import { NO_EVENTS_SCREEN_LINK } from '../model/consts';
import { BASE_NAMESPACE } from '../../../../../config/const';

export const NoEventsScreen = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center">
      <img className="w-md" src={NoEventsScreenImage} alt="No events screen" />
      <h3 className="font-bold text-4xl text-center">{t(`${NO_EVENTS_SCREEN_LINK}.title`, BASE_NAMESPACE)}</h3>
    </div>
  );
};
