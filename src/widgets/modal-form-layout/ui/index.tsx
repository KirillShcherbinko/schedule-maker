import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/shared/ui/dialog';
import type { ReactNode } from 'react';

type ModalFormLayoutProps = {
  title: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  description?: string;
};

export const ModalFormLayout = ({ title, open, onOpenChange, children, description }: ModalFormLayoutProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} aria-hidden={false}>
      <DialogContent
        className="max-h-[90vh] overflow-auto"
        aria-describedby={description ? 'dialog-description' : undefined}
        aria-hidden={false}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription id="dialog-description">{description}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
