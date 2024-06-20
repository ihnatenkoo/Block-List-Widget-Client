import { useQuery } from '@tanstack/react-query';
import { authControllerGetSessionInfo } from '@/shared/api/generated';
import { UiButton } from '@/shared/ui/ui-button';
import { UiTextField } from '@/shared/ui/ui-text-filed';
import { UiSelectField } from '@/shared/ui/ui-select-field';
import { UiLink } from '@/shared/ui/ui-link';
import { UiSpinner } from '@/shared/ui/ui-spinner';
import UiHeader from '@/shared/ui/ui-header';

export const HomePage = () => {
  const { data } = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <main className={'min-h-screen'}>
      <UiHeader right={<div>{data?.email}</div>} />

      <UiButton variant="primary">Button</UiButton>
      <UiButton variant="secondary">Button</UiButton>
      <UiButton variant="outlined">Button</UiButton>
      <UiButton disabled variant="primary">
        Button
      </UiButton>

      <UiTextField label="Email" inputProps={{ placeholder: 'Enter email' }} />
      <UiTextField
        label="Email"
        error="Wrong email"
        inputProps={{ placeholder: 'Enter email' }}
      />

      <UiSelectField
        options={[
          { label: 'Kyiv', value: 'Kyiv' },
          { label: 'Odessa', value: 'Odessa' },
        ]}
      />

      <UiLink href="/about">About</UiLink>

      <UiSpinner className="text-teal-600 w-20 h-20" />
    </main>
  );
};
