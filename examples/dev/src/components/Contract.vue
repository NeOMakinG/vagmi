<script setup lang="ts">
import {namehash} from '@ethersproject/hash';
import { useContract, useProvider } from 'vagmi';
import { ref } from 'vue';
import ENSRegistryABI from '../constants/ENSRegistryABI.json';
import ENSPublicResolverABI from '../constants/ENSPublicResolverABI.json';

const provider = useProvider();
const hashedName = namehash('vitalik.eth')
let ensName = ref<string>()

const registryContract = useContract({
  addressOrName: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  contractInterface: ENSRegistryABI,
  signerOrProvider: provider as any
})

;(async () => {
  const resolverAddr = await registryContract.value.functions.resolver(hashedName)

  const publicResolverContract = useContract({
    addressOrName: resolverAddr[0],
    contractInterface: ENSPublicResolverABI,
    signerOrProvider: provider as any
  })

  const ensNames = await publicResolverContract.value.functions['addr(bytes32)'](hashedName)
  ensName.value = ensNames[0]
})()

</script>

<template>
  <p v-if="ensName">vitalik.eth address: {{ensName}}</p>
  <p v-else>Searching vitalik.eth address using the ENS contract</p>
</template>
