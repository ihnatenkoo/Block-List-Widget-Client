import clsx from 'clsx';
import { UiSpinner } from './ui-spinner';

export const UiPageSpinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-slate-100',
        className
      )}
    >
      <UiSpinner className="text-teal-600 w-24 h-24" />{' '}
    </div>
  );
};
