import { SignOutButton } from '@/features/auth';
import { authControllerGetSessionInfo } from '@/shared/api/generated';
import { useQuery } from '@tanstack/react-query';

export const Profile = () => {
  const { data: session } = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSessionInfo(),
  });

  if (!session) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      {session?.email} <SignOutButton />
    </div>
  );
};
