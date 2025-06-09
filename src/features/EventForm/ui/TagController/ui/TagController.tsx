import { Controller, useFormContext, type ControllerRenderProps } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { EVENT_FORM_LINK } from '../../../model/consts';
import { BASE_NAMESPACE } from '../../../config/consts';
import { useTagStore } from '@/entities/Tag/model/store';
import { Checkbox } from '@/shared/ui/Checkbox';
import type { CheckedState } from '@radix-ui/react-checkbox';
import type { EventFormData } from '@/entities/Event/model/schema';
import { Button } from '@/shared/ui/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/Popover';
import { ChevronDownIcon } from 'lucide-react';

export const TagController = () => {
  const { t } = useTranslation();
  const tags = useTagStore((state) => state.tags);
  const { control } = useFormContext<EventFormData>();

  const handleTagToggle = (
    field: ControllerRenderProps<EventFormData, 'tagIds'>,
    tagId: number,
    checked: CheckedState,
  ) => {
    const currentValue = field.value || [];
    const newValue = checked ? [...currentValue, tagId] : currentValue.filter((value: number) => value !== tagId);
    field.onChange(newValue);
  };

  return (
    <Popover>
      <Controller
        control={control}
        name="tagIds"
        render={({ field }) => (
          <>
            <PopoverTrigger asChild className="rounded-2xl border border-input hover:bg-accent/50">
              <Button variant="ghost" className="flex w-full justify-between [&[data-state=open]>svg]:rotate-180 p-5">
                <label className="block text-sm font-medium">{t(`${EVENT_FORM_LINK}.tags`, BASE_NAMESPACE)}</label>
                <ChevronDownIcon className="text-foreground pointer-events-none size-6 md:size-8 shrink-0 transition-transform duration-300" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-full min-w-[var(--radix-popover-trigger-width)] max-w-[var(--radix-popover-trigger-width)] max-h-[400px] overflow-auto p-2 border-0 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500"
              align="start"
            >
              <div className="flex flex-col gap-2 max-w-full">
                {tags.map((tag) => (
                  <div key={tag.id} className="flex items-center gap-3 min-w-0 w-full">
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
            </PopoverContent>
          </>
        )}
      />
    </Popover>
  );
};
