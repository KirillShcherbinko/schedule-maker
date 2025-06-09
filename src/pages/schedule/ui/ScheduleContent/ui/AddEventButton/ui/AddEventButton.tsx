import { Button } from '@/shared/ui/Button';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ADD_EVENT_BUTTON_LINK, BREAKING_WIDTH } from '../model/consts';
import { BASE_NAMESPACE } from '../../../config/const';
import { useWindowWidth } from '@/shared/lib/hooks/useWindowWidth';
import { Link, useLocation, useParams } from 'react-router-dom';

export const AddEventButton = () => {
  const width = useWindowWidth();
  const { t } = useTranslation();

  const { scheduleId } = useParams<{ scheduleId: string }>();

  const location = useLocation();

  return (
    <Link to={`/schedule/${scheduleId}/event/create`} state={{ backgroundLocation: location }}>
      <Button
        className="rounded-full md:rounded-2xl p-0 flex items-center justify-center h-10 w-10 md:h-10 md:w-auto"
        aria-label="Add event"
      >
        {width > BREAKING_WIDTH && (
          <p className="font-medium text-lg m-0">{t(`${ADD_EVENT_BUTTON_LINK}.title`, BASE_NAMESPACE)}</p>
        )}
        <Plus className="size-6 p-0" />
      </Button>
    </Link>
  );
};
