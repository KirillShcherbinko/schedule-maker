import type { TTag } from '@/shared/model/types';
import { Checkbox } from '@/shared/ui/Checkbox';
import { EditButtonGroup } from '@/shared/ui/EditButtonGroup';

type TagRecordProps = {
  tag: TTag;
  isChecked: boolean;
  handleTagToggle: (isChecked: boolean) => void;
};

export const TagRecord = ({ tag, isChecked, handleTagToggle }: TagRecordProps) => {
  return (
    <div className="hover:bg-accent/50 focus:bg-accent/50 flex flex-row justify-between items-center p-2 rounded-lg">
      <div className="flex items-center gap-3">
        <Checkbox
          className="w-5 h-5 text-lg"
          variant={tag.color}
          id={String(tag.id)}
          checked={isChecked}
          onCheckedChange={handleTagToggle}
        />
        <p className="cursor-pointer">{tag.title}</p>
      </div>
      <EditButtonGroup item={tag} />
    </div>
  );
};
