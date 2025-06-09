import { useTranslation } from 'react-i18next';
import { BASE_NAMESPACE } from '../config/consts';
import { editMode, TAG_FORM_LINK } from '../model/consts';
import { FormField } from '@/shared/ui/FormField';
import type { TMode } from '../model/types';
import { Controller, useFormContext, type ControllerRenderProps } from 'react-hook-form';
import { Button } from '@/shared/ui/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useTagStore } from '@/entities/Tag/model/store';
import { useTagSubmit } from '../lib/hooks/useSubmitTag';
import type { TTagFormData } from '@/entities/Tag/model/schema';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/Popover';
import { ChevronDownIcon } from 'lucide-react';
import { colors } from '@/entities/Tag/model/consts';
import { Badge } from '@/shared/ui/Badge';
import type { TBadgeColor } from '@/shared/ui/Badge/model/types';

type EventFormProps = {
  mode: TMode;
};

export const TagForm = ({ mode }: EventFormProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleTagSubmit = useTagSubmit();

  const { scheduleId } = useParams<{ scheduleId: string }>();
  const editedTag = useTagStore((state) => state.editedTag);

  const { handleSubmit, formState, reset, control } = useFormContext<TTagFormData>();
  const { dirtyFields } = formState;

  const onSubmit = (formValues: TTagFormData) => {
    const isSuccess = handleTagSubmit(mode, formValues, dirtyFields, editedTag, scheduleId);

    if (isSuccess) {
      if (mode === editMode) useTagStore.setState({ editedTag: undefined });
      reset();
      navigate(-1);
    }
  };

  const handleColorClick = (field: ControllerRenderProps<TTagFormData, 'color'>, color: string) => {
    field.onChange(color);
  };

  return (
    <form id="event-modal-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4" aria-labelledby="dialog-title">
      <FormField name="title" label={t(`${TAG_FORM_LINK}.title`, BASE_NAMESPACE)} />
      <Popover modal={true}>
        <Controller
          control={control}
          name="color"
          render={({ field }) => {
            const selectedColor = field.value;
            const selectedIndex = colors.indexOf(selectedColor);
            const selectedLabel =
              selectedIndex !== -1
                ? t(`${TAG_FORM_LINK}.colors.${selectedIndex}`, BASE_NAMESPACE)
                : t(`${TAG_FORM_LINK}.color`, BASE_NAMESPACE);

            return (
              <>
                <PopoverTrigger asChild className="rounded-2xl border border-input hover:bg-accent/50">
                  <Button
                    variant="ghost"
                    className="flex w-full justify-between items-center gap-2 p-5 [&[data-state=open]>svg]:rotate-180"
                  >
                    <div className="flex items-center gap-2">
                      {selectedColor && (
                        <Badge className="size-4 rounded-none" variant={selectedColor as TBadgeColor} />
                      )}
                      <span className="text-sm font-medium">{selectedLabel}</span>
                    </div>
                    <ChevronDownIcon className="text-foreground pointer-events-none size-6 md:size-8 shrink-0 transition-transform duration-300" />
                  </Button>
                </PopoverTrigger>

                <PopoverContent
                  className="w-full min-w-[var(--radix-popover-trigger-width)] max-w-[var(--radix-popover-trigger-width)] max-h-[250px] overflow-auto p-2 border-0 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500"
                  align="start"
                >
                  <div className="flex flex-col gap-2 max-w-full">
                    {colors.map((color, index) => (
                      <Button
                        key={color}
                        variant="ghost"
                        className="flex flex-row justify-start items-center w-full"
                        onClick={() => handleColorClick(field, color)}
                      >
                        <Badge className="size-4 rounded-none" variant={color as TBadgeColor} />
                        <p>{t(`${TAG_FORM_LINK}.colors.${index}`, BASE_NAMESPACE)}</p>
                      </Button>
                    ))}
                  </div>
                </PopoverContent>
              </>
            );
          }}
        />
      </Popover>
      <Button type="submit">{t(`${TAG_FORM_LINK}.${mode}.submitButtonText`, BASE_NAMESPACE)}</Button>
    </form>
  );
};
