import { Button } from '@/shared/ui/Button';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ADD_TAG_BUTTON_LINK } from '../model/consts';
import { BASE_NAMESPACE } from '../../../../../config/const';
import { Link, useLocation, useParams } from 'react-router-dom';

export const AddTagButton = () => {
  const { t } = useTranslation();

  const { scheduleId } = useParams<{ scheduleId: string }>();

  const location = useLocation();

  return (
    <div className="flex items-center gap-1">
      <p className="text-lg">{t(`${ADD_TAG_BUTTON_LINK}.title`, BASE_NAMESPACE)}</p>
      <Link to={`/schedule/${scheduleId}/tag/create`} state={{ backgroundLocation: location }}>
        <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
          <Plus className="w-4 h-4" />
        </Button>
      </Link>
    </div>
  );
};
