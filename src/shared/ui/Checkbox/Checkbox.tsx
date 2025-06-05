import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/shared/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const checkboxVariants = cva(
  'peer h-4 w-4 shrink-0 bg-transparent disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
  {
    variants: {
      variant: {
        sky: 'border-2 border-[var(--border-sky)] data-[state=checked]:bg-badge-sky data-[state=checked]:text-white',
        grass:
          'border-2 border-[var(--border-grass)] data-[state=checked]:bg-badge-grass data-[state=checked]:text-white',
        lemon:
          'border-2 border-[var(--border-lemon)] data-[state=checked]:bg-badge-lemon data-[state=checked]:text-white',
        peach:
          'border-2 border-[var(--border-peach)] data-[state=checked]:bg-badge-peach data-[state=checked]:text-white',
        lavender:
          'border-2 border-[var(--border-lavender)] data-[state=checked]:bg-badge-lavender data-[state=checked]:text-white',
        mint: 'border-2 border-[var(--border-mint)] data-[state=checked]:bg-badge-mint data-[state=checked]:text-white',
        rose: 'border-2 border-[var(--border-rose)] data-[state=checked]:bg-badge-rose data-[state=checked]:text-white',
        sand: 'border-2 border-[var(--border-sand)] data-[state=checked]:bg-badge-sand data-[state=checked]:text-white',
        ice: 'border-2 border-[var(--border-ice)] data-[state=checked]:bg-badge-ice data-[state=checked]:text-white',
        plum: 'border-2 border-[var(--border-plum)] data-[state=checked]:bg-badge-plum data-[state=checked]:text-white',
        ocean:
          'border-2 border-[var(--border-ocean)] data-[state=checked]:bg-badge-ocean data-[state=checked]:text-white',
        moss: 'border-2 border-[var(--border-moss)] data-[state=checked]:bg-badge-moss data-[state=checked]:text-white',
        amber:
          'border-2 border-[var(--border-amber)] data-[state=checked]:bg-badge-amber data-[state=checked]:text-white',
        coral:
          'border-2 border-[var(--border-coral)] data-[state=checked]:bg-badge-coral data-[state=checked]:text-white',
        jade: 'border-2 border-[var(--border-jade)] data-[state=checked]:bg-badge-jade data-[state=checked]:text-white',
        blush:
          'border-2 border-[var(--border-blush)] data-[state=checked]:bg-badge-blush data-[state=checked]:text-white',
      },
    },
    defaultVariants: {
      variant: 'sky',
    },
  },
);

function Checkbox({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & VariantProps<typeof checkboxVariants>) {
  return (
    <CheckboxPrimitive.Root data-slot="checkbox" className={cn(checkboxVariants({ variant }), className)} {...props}>
      <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
        <CheckIcon className="stroke-3 w-3.5 h-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
