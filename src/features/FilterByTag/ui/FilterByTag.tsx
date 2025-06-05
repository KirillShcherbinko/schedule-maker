import { Button } from '@/shared/ui/Button';
import type { TEventsList, TTag } from '@/shared/model/types';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from '@/shared/ui/Accordion';
import { TagRecord } from './TagRecord';

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
    <Accordion type="single" collapsible className="flex flex-col w-full">
      <div className="overflow-hidden">
        <AccordionItem value="filter-by-tag" className="w-full">
          <AccordionTrigger className="hover:bg-accent/50 pt-2 pb-2 pl-5 pr-5 rounded-2xl">
            <div className="flex items-center gap-1">
              <p className="text-lg">Tags</p>
              <Button variant="ghost" size="icon" className="w-8 h-8">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </AccordionTrigger>
          <AccordionContent className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
            {tags.map((tag) => (
              <TagRecord
                key={tag.id}
                tag={tag}
                isChecked={selectedTags.includes(tag.id)}
                handleTagToggle={(checked: boolean) => handleTagToggle(tag.id, checked)}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </div>
    </Accordion>
  );
};
