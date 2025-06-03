import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/DropdownMenu';
import { Button } from '@/shared/ui/Button';
import type { TEventsList, TTag } from '@/shared/model/types';
import { useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';

type FilterByTagProps = {
  data: TEventsList;
  tags: TTag[];
  onFilterChange: (tags: number[]) => void;
};

export const FilterByTag = ({ data, tags, onFilterChange }: FilterByTagProps) => {
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  const handleTagToggle = (tagId: number, checked: boolean) => {
    const newTags = checked ? [...selectedTags, tagId] : selectedTags.filter((id) => id !== tagId);
    setSelectedTags(newTags);

    if (!data) return;
    onFilterChange(newTags);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Filters by tag</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuLabel>Choose tags</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {tags.map((tag) => (
          <DropdownMenuCheckboxItem
            key={tag.id}
            className="hover:bg-transparent focus:bg-transparent flex flex-row justify-between"
            checked={selectedTags.includes(tag.id)}
            onSelect={(evt: Event) => evt.preventDefault()}
            onCheckedChange={(checked: boolean) => handleTagToggle(tag.id, checked)}
          >
            {tag.title}
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
