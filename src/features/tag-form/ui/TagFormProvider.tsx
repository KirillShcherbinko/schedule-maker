import { useTagStore } from '@/entities/tag';
import { zodResolver } from '@hookform/resolvers/zod';
import { t } from 'i18next';
import { type ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { tagFormSchema, type TTagFormData } from '@/entities/tag';

type TagFormProviderProps = {
  children: ReactNode;
};

export const TagFormProvider = ({ children }: TagFormProviderProps) => {
  const editedTag = useTagStore((state) => state.editedTag);

  const methods = useForm<TTagFormData>({
    resolver: zodResolver(tagFormSchema(t)),
    defaultValues: {
      title: editedTag?.title || '',
      color: editedTag?.color || 'sky',
    },
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
