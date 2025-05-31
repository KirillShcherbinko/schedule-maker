import { useSetAtom } from 'jotai';
import { eventFormOpenAtom } from '../../model/atoms';
import { Button } from '@/shared/ui/Button';

export const AddEventButton = () => {
  const setOpen = useSetAtom(eventFormOpenAtom);

  return <Button onClick={() => setOpen(true)}>Добавить событие</Button>;
};
