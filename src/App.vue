<template>
  <FlagProvider :config="config">
    <router-view />
  </FlagProvider>
</template>

<script setup lang="ts">
import { FlagProvider } from '@unleash/proxy-client-vue';

const config = {
  url: 'https://unleash-proxy.nunogois.com/proxy',
  clientKey: 'ng-unleash-secret',
  refreshInterval: 2,
  appName: 'unleash-test',
  environment: 'dev',
};
</script>
