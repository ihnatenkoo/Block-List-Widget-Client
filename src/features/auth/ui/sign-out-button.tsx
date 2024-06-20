import { UiButton } from '@/shared/ui/ui-button';
import { useSignOut } from '../model/use-sign-out';

export const SignOutButton = () => {
  const { signOut, isPending } = useSignOut();
  return (
    <UiButton
      disabled={isPending}
      variant="outlined"
      onClick={() => signOut({})}
    >
      Sign Out
    </UiButton>
  );
};
