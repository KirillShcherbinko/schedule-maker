import { Controller, type Control, type ControllerRenderProps } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { EVENT_FORM_LINK } from '../../../model/consts';
import { BASE_NAMESPACE } from '@/pages/schedule/config/const';
import { useTagStore } from '@/entities/Tag/model/store';
import { Checkbox } from '@/shared/ui/Checkbox';
import type { CheckedState } from '@radix-ui/react-checkbox';
import type { EventFormData } from '@/entities/Event/model/schema';

type TagControllerProps = {
  control: Control<EventFormData>
}

export const TagController = ({ control }: TagControllerProps) => {
  const { t } = useTranslation();
  const tags = useTagStore((state) => state.tags);

  const handleTagToggle = (
    field: ControllerRenderProps<EventFormData, 'tagIds'>,
    tagId: number,
    checked: CheckedState,
  ) => {
    const currentValue = field.value || [];
    const newValue = checked 
      ? [...currentValue, tagId] 
      : currentValue.filter((value: number) => value !== tagId);
    field.onChange(newValue);
  };

  return (
    <div>
      <label>{t(`${EVENT_FORM_LINK}.tags`, BASE_NAMESPACE)}</label>
      <Controller
        control={control}
        name="tagIds"
        render={({ field }) => (
          <div className="flex flex-col gap-2">
            {tags.map((tag) => (
              <div key={tag.id} className="flex items-center gap-3 min-w-0">
                <Checkbox
                  className="w-5 h-5 text-lg shrink-0"
                  variant={tag.color}
                  id={String(tag.id)}
                  checked={field.value?.includes(tag.id)}
                  onCheckedChange={(checked) => handleTagToggle(field, tag.id, checked)}
                />
                <p className="truncate whitespace-normal break-words min-w-0">{tag.title}</p>
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
};
