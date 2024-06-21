import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { ComponentType, PropsWithChildren, ReactNode } from 'react';
import { authControllerGetSessionInfo } from '@/shared/api/generated';
import { UiPageSpinner } from '@/shared/ui/ui-page-spinner';
import { ROUTES } from '@/shared/constants/routes';

export const protectedPage = <P extends { children?: ReactNode }>(
  Component: ComponentType<P>
): ComponentType<P> => {
  return (props: PropsWithChildren<P>) => {
    const router = useRouter();

    const { isLoading, isError } = useQuery({
      queryKey: ['session'],
      queryFn: authControllerGetSessionInfo,
      retry: false,
    });

    if (isLoading) {
      return <UiPageSpinner />;
    }

    if (isError) {
      router.replace(ROUTES.SIGN_IN);
    }

    return <Component {...props} />;
  };
};
