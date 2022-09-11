<script setup lang="ts">
import Contract from './Contract.vue';
import { useAccount, useBalance, useEnsName } from 'vagmi';
import { watchEffect } from 'vue';

const { address } = useAccount();
const { data: balance } = useBalance({ addressOrName: address });
const { data: ensNameData } = useEnsName({ address });

watchEffect(() => {
  console.log('Address', address.value);
  console.log('Balance', balance.value);
});
</script>

<template>
  <div>
    {{ ensNameData ?? address }}
    {{ ensNameData ? ` (${address})` : null }}
  </div>
  <Contract />
</template>
