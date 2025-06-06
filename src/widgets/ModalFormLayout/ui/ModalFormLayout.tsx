import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/shared/ui/Dialog';
import { FormProvider, type FieldValues, type UseFormReturn } from 'react-hook-form';
import { Button } from '@/shared/ui/Button';
import type { ReactNode } from 'react';

type ModalFormLayoutProps<T extends FieldValues> = {
  title: string;
  formMethods: UseFormReturn<T>;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: () => void;
  children: ReactNode;
  submitText?: string;
};

export const ModalFormLayout = <T extends FieldValues>({
  title,
  formMethods,
  open,
  onOpenChange,
  onSubmit,
  children,
  submitText = 'Submit',
}: ModalFormLayoutProps<T>) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <FormProvider {...formMethods}>
          <form id="modal-form" onSubmit={onSubmit} className="space-y-4">
            {children}
            <Button type="submit">{submitText}</Button>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
