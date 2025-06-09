import { Pencil, Trash2 } from 'lucide-react';
import { Button } from '../../Button';

type EditButtonGroupProps<T> = {
  item: T;
  onDelete: (item: T) => void;
  onEdit?: (item: T) => void;
};

export const EditButtonGroup = <T extends object>({ item, onDelete, onEdit }: EditButtonGroupProps<T>) => {
  return (
    <div className="flex gap-1">
      <Button variant="ghost" size="icon" onClick={() => onEdit?.(item)} className="h-8 w-8 rounded-full">
        <Pencil className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(item)}
        className="h-8 w-8 text-destructive hover:text-destructive rounded-full"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};
