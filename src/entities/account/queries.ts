import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  accountControllerGetAccount,
  accountControllerUpdateAccount,
} from '@/shared/api/generated';

const accountKey = ['account'];

export const useAccountQuery = () => {
  return useQuery({
    queryKey: accountKey,
    queryFn: accountControllerGetAccount,
  });
};

export const useUpdateAccountMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: accountControllerUpdateAccount,
    async onSettled() {
      await queryClient.invalidateQueries(accountKey as InvalidateQueryFilters);
    },
  });
};
