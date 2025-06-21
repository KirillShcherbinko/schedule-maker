import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-regular w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        sky: 'bg-badge-sky text-foreground',
        grass: 'bg-badge-grass text-foreground',
        lemon: 'bg-badge-lemon text-foreground',
        peach: 'bg-badge-peach text-foreground',
        lavender: 'bg-badge-lavender text-foreground',
        mint: 'bg-badge-mint text-foreground',
        rose: 'bg-badge-rose text-foreground',
        sand: 'bg-badge-sand text-foreground',
        ice: 'bg-badge-ice text-foreground',
        plum: 'bg-badge-plum text-foreground',
        ocean: 'bg-badge-ocean text-foreground',
        moss: 'bg-badge-moss text-foreground',
        amber: 'bg-badge-amber text-foreground',
        coral: 'bg-badge-coral text-foreground',
        jade: 'bg-badge-jade text-foreground',
        blush: 'bg-badge-blush text-foreground',
      },
    },
    defaultVariants: {
      variant: 'sky',
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
