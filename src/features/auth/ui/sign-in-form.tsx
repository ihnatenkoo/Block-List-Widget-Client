import { UiButton } from '@/shared/ui/ui-button';
import { UiTextField } from '@/shared/ui/ui-text-filed';
import { ROUTES } from '@/shared/constants/routes';
import { UiLink } from '@/shared/ui/ui-link';
import { useSignInForm } from '../model/use-sign-in-form';

export const SignInForm = () => {
  const { register, handleSubmit, isPending, errorMessage } = useSignInForm();

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
        Sign In
      </UiButton>

      <UiLink href={ROUTES.SIGN_UP} className="text-center">
        Sign Up
      </UiLink>

      {errorMessage && (
        <div className="text-rose-500 text-center">{errorMessage}</div>
      )}
    </form>
  );
};
