import { FC } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type UiLinkProps = Parameters<typeof Link>[0];

export const UiLink: FC<UiLinkProps> = ({ className, ...props }) => (
  <Link
    {...props}
    className={clsx(
      className,
      'p-1 text-teal-500 hover:text-teal-600 cursor-pointer'
    )}
  />
);
