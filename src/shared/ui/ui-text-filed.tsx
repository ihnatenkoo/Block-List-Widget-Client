import { FC, InputHTMLAttributes, PropsWithRef, useId } from 'react';
import clsx from 'clsx';

type UiTextFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

export const UiTextField: FC<UiTextFieldProps> = ({
  className,
  label,
  error,
  inputProps,
}) => {
  const id = useId();

  return (
    <div className={clsx(className, 'flex flex-col gap-1')}>
      {label && (
        <label className="block" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        {...inputProps}
        id={id}
        className={clsx(
          inputProps?.className,
          'rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none'
        )}
      />
      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
};
