import { useSetAtom } from 'jotai';
import { isFormOpenAtom } from '../../../model/atoms';
import { Button } from '@/shared/ui/Button';
import { Plus } from 'lucide-react';

export const AddEventButton = () => {
  const setOpen = useSetAtom(isFormOpenAtom);

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[1300px]">
      <div className="relative w-full">
        <Button
          onClick={() => setOpen(true)}
          className="absolute right-0 rounded-full w-14 h-14 p-0 flex items-center justify-center shadow-md"
          aria-label="Add event"
        >
          <Plus size={24} />
        </Button>
      </div>
    </div>
  );
};
