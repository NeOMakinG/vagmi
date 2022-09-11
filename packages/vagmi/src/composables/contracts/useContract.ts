import type { Provider } from '@wagmi/core';
import { getContract } from '@wagmi/core';
import type { ContractInterface, Signer } from 'ethers';
import type { Ref } from 'vue';
import { computed, isRef } from 'vue';

export type SignerOrProvider = Signer | Provider | null | undefined;

export interface UseContractConfig {
  addressOrName: string
  contractInterface: ContractInterface
  signerOrProvider?: Readonly<Ref<SignerOrProvider>> | Readonly<SignerOrProvider>
}

export const useContract = <Contract = any>({
  addressOrName,
  contractInterface,
  signerOrProvider,
}: UseContractConfig) => {
  return computed(() => {
    return getContract<Contract>({
      addressOrName,
      contractInterface,
      signerOrProvider: isRef(signerOrProvider) ? signerOrProvider.value : signerOrProvider,
    });
  });
};
