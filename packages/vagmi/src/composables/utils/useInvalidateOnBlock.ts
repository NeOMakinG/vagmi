import { ComputedRef } from 'vue';
import { useQueryClient, QueryKey } from 'vue-query';

import { useBlockNumber } from '../network-status'

export function useInvalidateOnBlock<TQueryKey extends QueryKey = QueryKey>({
  enabled,
  queryKey,
}: {
  enabled?: boolean
  queryKey: ComputedRef<TQueryKey>
}) {
  const queryClient = useQueryClient()
  useBlockNumber({
    onSuccess: enabled
      ? () => queryClient.invalidateQueries(queryKey)
      : undefined,
  })
}
