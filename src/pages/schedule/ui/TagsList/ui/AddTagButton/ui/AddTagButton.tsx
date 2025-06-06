import { Button } from '@/shared/ui/Button';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ADD_TAG_BUTTON_LINK } from '../model/consts';
import { BASE_NAMESPACE } from '@/pages/schedule/config/const';

export const AddTagButton = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-1">
      <p className="text-lg">{t(`${ADD_TAG_BUTTON_LINK}.title`, BASE_NAMESPACE)}</p>
      <Button variant="ghost" size="icon" className="w-8 h-8">
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
};
