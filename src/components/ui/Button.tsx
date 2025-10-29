import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button';
    
        return (
          <Comp
            className={cn(
              'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm',
              {
                'bg-primary text-white hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 focus-visible:ring-primary': variant === 'primary',
                'bg-card text-foreground border border-border hover:bg-secondary hover:shadow-md focus-visible:ring-primary': variant === 'secondary',
                'border border-border bg-transparent hover:bg-secondary hover:border-primary/50 focus-visible:ring-primary': variant === 'outline',
                'hover:bg-secondary focus-visible:ring-primary': variant === 'ghost',
              },
              {
                'h-8 px-3 text-sm': size === 'sm',
                'h-10 px-4 py-2': size === 'md',
                'h-12 px-6 py-3 text-lg': size === 'lg',
              },
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </Comp>
        );
  }
);
Button.displayName = 'Button';

export { Button };
