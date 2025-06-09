import { Button } from '@/shared/ui/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/Popover';
import { ChevronDownIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { AddTagButton } from '../../AddTagButton/ui/AddTagButton';

type MobileLayoutProps = {
  children: ReactNode;
};

export const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <div className="w-full">
      <Popover>
        <PopoverTrigger asChild className="rounded-2xl hover:bg-accent/50">
          <Button variant="ghost" className="flex w-full justify-between [&[data-state=open]>svg]:rotate-180 p-5">
            <AddTagButton />
            <ChevronDownIcon className="text-foreground pointer-events-none size-6 md:size-8 shrink-0 transition-transform duration-300" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="max-w-[300px] sm:max-w-[420px] md:max-w-[392px] max-h-[400px] overflow-auto p-2 border-0 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
          {children}
        </PopoverContent>
      </Popover>
    </div>
  );
};
