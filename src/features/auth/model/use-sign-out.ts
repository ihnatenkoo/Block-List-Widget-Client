import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { authControllerSignOut } from '@/shared/api/generated';
import { ROUTES } from '@/shared/constants/routes';

export const useSignOut = () => {
  const router = useRouter();

  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess() {
      router.push(ROUTES.SIGN_IN);
    },
  });

  return {
    isPending: signOutMutation.isPending,
    signOut: signOutMutation.mutate,
  };
};
