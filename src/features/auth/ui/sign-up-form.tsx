import { UiButton } from '@/shared/ui/ui-button';
import { UiTextField } from '@/shared/ui/ui-text-filed';
import { ROUTES } from '@/shared/constants/routes';
import { UiLink } from '@/shared/ui/ui-link';
import { useSignUpForm } from '../model/use-sign-up-form';

export const SignUpForm = () => {
  const { register, handleSubmit, isPending, errorMessage } = useSignUpForm();

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
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

      <UiButton disabled={isPending} variant="primary">
        Sign Up
      </UiButton>

      <UiLink href={ROUTES.SIGN_IN} className="text-center">
        Sign In
      </UiLink>

      {errorMessage && (
        <div className="text-rose-500 text-center">{errorMessage}</div>
      )}
    </form>
  );
};
