import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/DropdownMenu';
import { Button } from '@/shared/ui/Button';
import type { TTag } from '@/shared/model/types';
import { useEffect, useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';

type FilterByTagProps<T> = {
  data: T[];
  tags: TTag[];
  onFilterChange: (filteredData: T[]) => void;
};

export function FilterByTag<T extends { tags: TTag[] }>({ data, tags, onFilterChange }: FilterByTagProps<T>) {
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  const handleTagToggle = (tagId: number, checked: boolean) => {
    setSelectedTags((prev) => (checked ? [...prev, tagId] : prev.filter((id) => id !== tagId)));
  };

  useEffect(() => {
    if (selectedTags.length === 0) {
      onFilterChange(data);
    } else {
      const filteredData = data.filter((item) => item.tags.some((tag) => selectedTags.includes(tag.id)));
      onFilterChange(filteredData);
    }
  }, [selectedTags, data, onFilterChange]);

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
            onCheckedChange={(checked: boolean) => {
              handleTagToggle(tag.id, checked);
            }}
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
}
