import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const button = cva(
  [
    'flex',
    'items-center',
    'gap-2',
    'rounded-lg',
    'text-sm',
    'leading-4',
    'font-medium',
    'select-none',
    'disabled:pointer-events-none',
    'focus-visible:outline-none',
    'focus-visible:ring',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-4',
    'focus-visible:ring-default',
  ],
  {
    variants: {
      intent: {
        default: [
          'text-default',
          'bg-default',
          'hover:bg-default-hover',
          'active:bg-default-active',
          'disabled:text-disable',
        ],
        primary: [
          'text-invert',
          'bg-accent',
          'hover:bg-accent-hover',
          'active:bg-accent-active',
        ],
        ghost: [
          'text-default',
          'bg-transparent',
          'hover:bg-default-hover',
          'active:bg-default-active',
          'disabled:text-disable',
        ],
        success: [
          'text-invert',
          'bg-success',
          'hover:bg-success-hover',
          'active:bg-success-active',
        ],
        warning: [
          'text-invert',
          'bg-warning',
          'hover:bg-warning-hover',
          'active:bg-warning-active',
        ],
        destructive: [
          'text-invert',
          'bg-destructive',
          'hover:bg-destructive-hover',
          'active:bg-destructive-active',
        ],
      },
      size: {
        small: ['px-4', 'py-2'],
        regular: ['px-6', 'py-3'],
      },
      iconAt: {
        start: '',
        end: '',
        undefined: '',
      },
      iconButton: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      intent: 'default',
      size: 'regular',
      iconAt: undefined,
      iconButton: false,
    },
    compoundVariants: [
      {
        iconAt: 'start',
        className: 'pl-4',
      },
      {
        iconAt: 'end',
        className: 'pr-4',
      },
      {
        iconButton: true,
        className: 'p-3',
      },
    ],
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  iconAt,
  iconButton,
  ...props
}) => {
  const classes = twMerge(
    button({ intent, size, iconAt, iconButton, className })
  );
  return <button className={classes} {...props} />;
};

export default Button;
