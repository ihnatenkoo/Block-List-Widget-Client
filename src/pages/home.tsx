import { UiHeader } from '@/shared/ui/ui-header';
import { ToggleBlockingButton } from '@/features/toggle-blocking';
import { Profile } from '@/widgets/profile';

export const HomePage = () => {
  return (
    <div className={'min-h-screen flex flex-col'}>
      <UiHeader right={<Profile />} />

      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5 pt-10">
          <ToggleBlockingButton />
        </aside>
        <main>...</main>
      </div>
    </div>
  );
};
