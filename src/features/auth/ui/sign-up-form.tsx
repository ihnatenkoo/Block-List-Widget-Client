import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { UiButton } from '@/shared/ui/ui-button';
import { UiTextField } from '@/shared/ui/ui-text-filed';
import { authControllerSignUp } from '@/shared/api/generated';
import { ROUTES } from '@/shared/constants/routes';

export const SignUpForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
  });

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={handleSubmit((data) => signUpMutation.mutate(data))}
    >
      <UiTextField
        label="Email"
        inputProps={{
          type: 'email',
          ...register('email', { required: true }),
        }}
      />
      <UiTextField
        label="Password"
        inputProps={{
          type: 'password',
          ...register('password', { required: true }),
        }}
      />
      <UiButton disabled={signUpMutation.isPending} variant="primary">
        Sign Up
      </UiButton>
    </form>
  );
};
