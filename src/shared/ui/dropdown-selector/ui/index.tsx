import React from 'react';
import {
  DropdownMenuCheckboxItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '../../dropdown-menu';

type TOption<T extends string> = {
  label: string;
  value: T;
  isSelected?: boolean;
};

interface DropdownSelectorProps<T extends string> {
  currentLabel: string;
  options: TOption<T>[];
  onChange: (value: T) => void;
}

export const DropdownSelector = <T extends string>({ currentLabel, options, onChange }: DropdownSelectorProps<T>) => {
  const [selectedValue, setSelectedValue] = React.useState<T | null>(
    () => options.find((opt) => opt.isSelected)?.value ?? null,
  );

  const handleSelect = (value: T) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>{currentLabel}</DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {options.map((opt) => (
            <DropdownMenuCheckboxItem
              key={opt.value}
              onSelect={(evt: Event) => {
                evt.preventDefault();
                handleSelect(opt.value);
              }}
              checked={selectedValue === opt.value}
            >
              {opt.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};
