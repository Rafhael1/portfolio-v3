<script setup lang="ts">
const props = defineProps<{ id: string }>();

const activeTab = inject('activeTab');

</script>
<template>
  <div
    v-show="activeTab === props.id"
    :id="props.id"
    class="animate-fade-in-right p-4 bg-gray-50 rounded"
    role="tabpanel"
    aria-labelledby="profile-tab"
  >
    <slot />
  </div>
</template>