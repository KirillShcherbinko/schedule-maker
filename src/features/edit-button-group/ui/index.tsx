import { Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import type { TItemToEdit, TItemType } from '../model/types';
import { useEditItem, useRemoveItem } from '../lib/hooks';

type EditButtonGroupProps = {
  itemType: TItemType;
  item: TItemToEdit;
  editFormPath: string;
};

export const EditButtonGroup = ({ itemType, item, editFormPath }: EditButtonGroupProps) => {
  const handleRemove = useRemoveItem(itemType, item);
  const handleEdit = useEditItem(itemType, item, editFormPath);

  return (
    <div className="flex gap-1">
      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={handleEdit}>
        <Pencil className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-destructive hover:text-destructive rounded-full"
        onClick={handleRemove}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};
