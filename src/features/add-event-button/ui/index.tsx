import { Button } from '@/shared/ui/button';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  ADD_EVENT_BUTTON_BREAKING_WIDTH,
  ADD_EVENT_BUTTON_NAMESPACE,
  ADD_EVENT_BUTTON_TITLE_LINK,
} from '../model/consts';
import { useLocation, useNavigate } from 'react-router-dom';
import { useWindowWidth } from '@/shared/lib/hooks';

export const AddEventButton = () => {
  const width = useWindowWidth();

  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex items-center gap-1">
      <Button
        className="rounded-full md:rounded-2xl p-0 flex items-center justify-center h-10 w-10 md:h-10 md:w-auto"
        aria-label="Add event"
        onClick={() => navigate('event/create', { state: { backgroundLocation: location } })}
      >
        {width > ADD_EVENT_BUTTON_BREAKING_WIDTH && (
          <p className="font-medium text-lg m-0">{t(ADD_EVENT_BUTTON_TITLE_LINK, ADD_EVENT_BUTTON_NAMESPACE)}</p>
        )}
        <Plus className="size-6 p-0" />
      </Button>
    </div>
  );
};
