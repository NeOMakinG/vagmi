import { erc20ABI } from '@wagmi/core';
import { describe, expect, it } from 'vitest';
import { ref } from 'vue';

import { getProvider, renderComposable } from '../../../test';
import type { SignerOrProvider, UseContractConfig } from './useContract';
import { useContract } from './useContract';

const uniContractAddress = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984';

describe('useContract', () => {
  it('mounts', async () => {
    const { result } = renderComposable(() =>
      useContract({
        addressOrName: uniContractAddress,
        contractInterface: erc20ABI,
      }),
    );
    expect(result).toBeDefined();
    expect(result.value.balanceOf).toBeDefined();
  });

  describe('behavior', () => {
    it('changes config with ref', async () => {
      const signerOrProvider = ref<SignerOrProvider>();

      const { result } = renderComposable(() =>
        useContract({
          addressOrName: uniContractAddress,
          contractInterface: erc20ABI,
          signerOrProvider,
        }),
      );
      expect(result.value.provider).toBeNull();

      signerOrProvider.value = getProvider();
      expect(result.value.provider).not.toBeNull();
    });

    it('config without ref', async () => {
      let signerOrProvider: UseContractConfig['signerOrProvider'];

      const { result } = renderComposable(() =>
        useContract({
          addressOrName: uniContractAddress,
          contractInterface: erc20ABI,
          signerOrProvider,
        }),
      );
      expect(result.value.provider).toBeNull();

      signerOrProvider = getProvider();

      const { result: secondResult } = renderComposable(() =>
        useContract({
          addressOrName: uniContractAddress,
          contractInterface: erc20ABI,
          signerOrProvider,
        }),
      );

      expect(secondResult.value.provider).not.toBeNull();
    });
  });
});
