import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

type UiButtonVariant = 'primary' | 'secondary' | 'outlined';

export type UiButtonProps = {
  variant: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const UiButton: FC<UiButtonProps> = ({
  className,
  variant,
  ...props
}) => (
  <button
    {...props}
    className={clsx(
      className,
      'px-4 h-10 rounded cursor-pointer flex gap-2 items-center justify-center',
      {
        primary:
          'text-white bg-teal-500 shadow shadow-teal-500/30 hover:bg-teal-600 disabled:bg-teal-300 disabled:opacity-50',
        secondary:
          'text-white bg-rose-500 shadow shadow-rose-500/30 hover:bg-rose-600 disabled:bg-teal-300 disabled:opacity-50',
        outlined:
          'border border-slate-400 hover:border-slate-500 disabled:opacity-50',
      }[variant]
    )}
  />
);
