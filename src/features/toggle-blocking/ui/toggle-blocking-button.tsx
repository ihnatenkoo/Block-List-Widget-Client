import { UiButton } from '@/shared/ui/ui-button';
import { useToggleBlocking } from '../model/use-toggle-blocking';

export const ToggleBlockingButton = () => {
  const { isBlockingEnabled, isPending, isReady, toggleBlocking } =
    useToggleBlocking();

  if (!isReady) {
    return null;
  }

  return (
    <UiButton
      disabled={isPending}
      onClick={toggleBlocking}
      variant={!isBlockingEnabled ? 'primary' : 'secondary'}
    >
      {isBlockingEnabled ? 'Disable Blocking' : 'Enable Blocking'}
    </UiButton>
  );
};
