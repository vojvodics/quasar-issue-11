<template>
  <q-dialog ref="dialogRef">
    <q-card class="dialog">
      <q-card-section>
        <div class="text-h6">Dialog</div>
      </q-card-section>

      <q-card-section class="text-center q-pa-lg">
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
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar';
import { defineEmits } from 'vue';
import { useFlag, useFlagsStatus, useVariant } from '@unleash/proxy-client-vue';

defineEmits(useDialogPluginComponent.emits);

const { dialogRef } = useDialogPluginComponent();
const enabled = useFlag('test-feature');
const variant = useVariant('test-feature');
const { flagsReady } = useFlagsStatus();
</script>
