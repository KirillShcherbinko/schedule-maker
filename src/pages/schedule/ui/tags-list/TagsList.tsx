import { Plus } from 'lucide-react';
import { Button } from '@/shared/ui/Button';
import { Label } from '@/shared/ui/Label';
import { FilterByTag } from '@/features/filter-by-tag';
import { useEventsStore, useTagStore } from '../../model/store';
import { useShallow } from 'zustand/react/shallow';
import { useWindowWidth } from '@/shared/lib/hooks/useWindowWidth';

export const TagsList = () => {
  const width = useWindowWidth();
  
  const { tags } = useTagStore(useShallow((state) => ({ tags: state.tags })));
  const { events, setFilteredEvents } = useEventsStore(
    useShallow((state) => ({
      events: state.events,
      setFilteredEvents: state.setFilteredEvents,
    })),
  );

  return (
    <div className="flex flex-row items-center justify-between pt-2 pb-2 pr-5 pl-5 border-b-2 border-gray-300">
      <Label className="text-lg font-medium">Tags</Label>
      <div className="flex gap-2">
        <Button className="gap-2">
          {width > 425 && 'Add tag'}
          <Plus className="h-4 w-4" />
        </Button>
        <FilterByTag data={events} tags={tags} onFilterChange={setFilteredEvents} />
      </div>
    </div>
  );
};
