import type { ReactNode } from 'react';
import type { TTag } from '../model/types';
import { Checkbox } from '@/shared/ui/checkbox';

type TagProps = {
  tag: TTag;
  isChecked: boolean;
  handleTagToggle: (isChecked: boolean) => void;
  children?: ReactNode;
};

export const Tag = ({ tag, isChecked, handleTagToggle, children }: TagProps) => {
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
      {children}
    </div>
  );
};
