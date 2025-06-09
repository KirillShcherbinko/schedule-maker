import { useEventStore } from '@/entities/Event/model/store';
import { useTagStore } from '@/entities/Tag/model/store';
import type { TTag } from '@/entities/Tag/model/types';
import { Checkbox } from '@/shared/ui/Checkbox';
import { EditButtonGroup } from '@/shared/ui/EditButtonGroup';
import { useLocation, useNavigate } from 'react-router-dom';

type TagRecordProps = {
  tag: TTag;
  editLink: string;
  isChecked: boolean;
  handleTagToggle: (isChecked: boolean) => void;
};

export const TagRecord = ({ tag, editLink, isChecked, handleTagToggle }: TagRecordProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const events = useEventStore((state) => state.events);

  const onDelete = useTagStore((state) => state.removeTag);
  const onUpdate = useEventStore((state) => state.updateEvent);

  const handleDelete = (tagToRemove: TTag) => {
    onDelete(tagToRemove);
    for (const eventsForDate in events) {
      for (const event of events[eventsForDate]) {
        if (event.tags.some((tag) => tag.id === tagToRemove.id)) {
          onUpdate(event, { tags: event.tags.filter((tag) => tag.id !== tagToRemove.id) });
        }
      }
    }
  };

  const onEdit = () => {
    useTagStore.setState({ editedTag: tag });
    navigate(editLink, { state: { backgroundLocation: location } });
  };

  return (
    <div className="hover:bg-accent/50 focus:bg-accent/50 flex flex-row justify-between items-center p-2 rounded-lg">
      <div className="flex items-center gap-3 min-w-0">
        <Checkbox
          className="w-5 h-5 text-lg shrink-0"
          variant={tag.color}
          id={String(tag.id)}
          checked={isChecked}
          onCheckedChange={handleTagToggle}
        />
        <p className="truncate whitespace-normal break-words min-w-0">{tag.title}</p>
      </div>
      <EditButtonGroup item={tag} onDelete={handleDelete} onEdit={onEdit} />
    </div>
  );
};
