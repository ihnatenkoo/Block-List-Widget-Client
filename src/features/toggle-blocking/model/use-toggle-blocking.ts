import { useAccountQuery, useUpdateAccountMutation } from '@/entities/account';

export const useToggleBlocking = () => {
  const accountQuery = useAccountQuery();

  const updateAccountMutation = useUpdateAccountMutation();

  const toggleBlocking = async () => {
    if (accountQuery.data) {
      updateAccountMutation.mutate({
        isBlockingEnabled: !accountQuery.data?.isBlockingEnabled,
      });
    }
  };

  return {
    toggleBlocking,
    isBlockingEnabled: accountQuery.data?.isBlockingEnabled ?? false,
    isPending: accountQuery.isPending || updateAccountMutation.isPending,
    isReady: accountQuery.isSuccess,
  };
};
