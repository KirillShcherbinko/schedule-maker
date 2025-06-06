import NoEventsScreenImage from '@/shared/assets/no-events-screen.png';
import { useTranslation } from 'react-i18next';
import { NO_EVENTS_SCREEN_LINK } from '../model/consts';
import { BASE_NAMESPACE } from '../../../../../config/const';
import i18n from '@/app/providers/i18n';
import { selectedDateAtom } from '@/pages/schedule/model/atoms';
import { customRu } from '@/shared/model/consts';
import { enUS } from 'date-fns/locale/en-US';
import { useAtom } from 'jotai';
import { format } from 'date-fns';

export const NoEventsScreen = () => {
  const { t } = useTranslation();

  const [selectedDate] = useAtom(selectedDateAtom);

  return ( 
    <div className="flex flex-col justify-center items-center pt-2">
      <h3 className="font-bold self-center text-xl w-full max-w-[550px]">
        {format(selectedDate, 'PPP', { locale: i18n.language === 'ru' ? customRu : enUS })}
      </h3>
      <img className="w-md" src={NoEventsScreenImage} alt="No events screen" />
      <h3 className="font-bold text-4xl text-center">{t(`${NO_EVENTS_SCREEN_LINK}.title`, BASE_NAMESPACE)}</h3>
    </div>
  );
};
