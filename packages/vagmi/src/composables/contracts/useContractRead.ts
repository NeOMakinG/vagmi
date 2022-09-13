import {
  ReadContractConfig,
  ReadContractResult,
  parseContractResult,
  readContract,
} from '@wagmi/core'
import { computed, reactive, Ref } from 'vue';

import { QueryConfig, QueryFunctionArgs } from '../../types'
import { getMaybeRefValue } from '../../utils';
import { useBlockNumber } from '../network-status'
import { useChainId, useInvalidateOnBlock, useQuery } from '../utils'

type UseContractReadArgs = ReadContractConfig & {
  /** If set to `true`, the cache will depend on the block number */
  cacheOnBlock?: boolean
  /** Subscribe to changes */
  watch?: boolean
  select?: (...args: any[]) => any
}

export type UseContractReadConfig = QueryConfig<ReadContractResult, Error>

export const queryKey = ([
  { addressOrName, args, chainId, functionName, overrides },
  { blockNumber },
]: [Omit<ReadContractConfig, 'contractInterface'>, { blockNumber?: Ref<number | undefined> }]) =>
  [
    {
      entity: 'readContract',
      addressOrName,
      args,
      blockNumber,
      chainId,
      functionName,
      overrides,
    },
  ] as const

export function useContractRead({
  addressOrName,
  contractInterface,
  functionName,
  args,
  chainId: chainId_,
  overrides,
  cacheOnBlock = false,
  cacheTime,
  enabled: enabled_ = true,
  select,
  staleTime,
  suspense,
  watch,
  onError,
  onSettled,
  onSuccess,
}: UseContractReadArgs & UseContractReadConfig) {
  const chainId = useChainId({ chainId: chainId_ })
  const { data: blockNumber } = useBlockNumber({
    enabled: watch || cacheOnBlock,
    watch,
  })

  const queryKey_ = computed(() => queryKey([{          
      addressOrName: getMaybeRefValue(addressOrName),
      args: getMaybeRefValue(args),
      chainId: getMaybeRefValue(chainId),
      functionName: getMaybeRefValue(functionName),
      overrides,
    }, {blockNumber}]))

  const queryFn = ({ contractInterface }: Pick<ReadContractConfig, 'contractInterface'>) =>
    async ({
      queryKey: [{ addressOrName, args, chainId, functionName, overrides }],
    }: QueryFunctionArgs<typeof queryKey>) => {
      return (
        (await readContract({
          addressOrName,
          args,
          chainId,
          contractInterface,
          functionName,
          overrides,
        })) ?? null
      )
  }

  useInvalidateOnBlock({ enabled: watch && !cacheOnBlock, queryKey: queryKey_ })

  const options = reactive({
    queryKey: queryKey_,
    queryFn,
    cacheTime,
    enabled: computed(() => {
      let enabled = Boolean(getMaybeRefValue(enabled_) && getMaybeRefValue(addressOrName) && getMaybeRefValue(functionName))
      if (cacheOnBlock) enabled = Boolean(getMaybeRefValue(enabled) && getMaybeRefValue(blockNumber))
      return enabled;
    }),
    select: (data: any) => {
      const result = parseContractResult({
        contractInterface,
        data,
        functionName,
      })
      return select ? select(result) : result
    },
    staleTime,
    suspense,
    onError,
    onSettled,
    onSuccess,
  });


  // @ts-ignore
  return useQuery(options)
}
