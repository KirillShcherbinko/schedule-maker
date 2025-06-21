import { Button } from '@/shared/ui/button';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ADD_TAG_BUTTON_NAMESPACE, ADD_TAG_BUTTON_TITLE_LINK } from '../model/consts';
import { useLocation, useNavigate } from 'react-router-dom';
import type { MouseEvent } from 'react';

export const AddTagButton = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  const onClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    navigate('tag/create', { state: { backgroundLocation: location } });
  };

  return (
    <div className="flex items-center gap-1">
      <p className="text-lg">{t(ADD_TAG_BUTTON_TITLE_LINK, ADD_TAG_BUTTON_NAMESPACE)}</p>
      <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full" onClick={(evt) => onClick(evt)}>
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
};
