<template>
  <q-page class="row items-center justify-evenly">
    <div class="column items-center text-center">
      <h1 class="text-h3">quasar-issue-11</h1>

      <div v-if="!flagsReady">Loading...</div>
      <div
        v-else
        :style="`font-size:24px; color: ${enabled ? 'green' : 'red'}`"
      >
        {{ enabled ? 'Feature is enabled!' : 'Feature is disabled!' }}
        <div v-if="variant.enabled">
          {{ variant.name }}
        </div>
      </div>

      <q-btn class="q-mt-md" color="primary" @click="openDialog"
        >Open Dialog</q-btn
      >

      <p style="max-width: 400px; margin: auto; padding: 20px">
        Check out <a href="https://www.getunleash.io/">Unleash</a> - An
        open-source Feature Management Service that allows you to manage your
        feature roll-out like a pro.
      </p>

      <p>See <code>README.md</code> for more information.</p>

      <p>
        <a href="https://quasar.dev/" target="_blank">Quasar Docs</a>
        |
        <a href="https://vitejs.dev/guide/features.html" target="_blank">
          Vite Docs
        </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
      </p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useFlag, useFlagsStatus, useVariant } from '@unleash/proxy-client-vue';
import { useQuasar } from 'quasar';

import DialogExample from '../components/DialogExample.vue';

const enabled = useFlag('test-feature');
const variant = useVariant('test-feature');
const { flagsReady } = useFlagsStatus();

const $q = useQuasar();

const openDialog = () => {
  $q.dialog({ component: DialogExample });
};
</script>

<style lang="sass" scoped>
a
  color: #817afe

code
  background-color: #eee
  padding: 2px 4px
  border-radius: 4px
  color: #304455
</style>
