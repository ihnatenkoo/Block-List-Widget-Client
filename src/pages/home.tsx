import { Inter } from 'next/font/google';
import { useQuery } from '@tanstack/react-query';
import { authControllerGetSessionInfo } from '@/shared/api/generated';
import { UiButton } from '@/shared/ui/ui-button';

const inter = Inter({ subsets: ['latin'] });

export const HomePage = () => {
  const { data } = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {data?.email}

      <UiButton variant="primary">Button</UiButton>
      <UiButton variant="secondary">Button</UiButton>
      <UiButton variant="outlined">Button</UiButton>
      <UiButton disabled variant="primary">
        Button
      </UiButton>
    </main>
  );
};
