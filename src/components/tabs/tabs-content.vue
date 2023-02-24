<script setup lang="ts">
const props = defineProps<{ id: string }>();

const activeTab = inject('activeTab');

</script>
<template>
  <div v-show="activeTab === props.id" class="animate-fade-in-right p-4 bg-gray-50 rounded" :id="props.id" role="tabpanel" aria-labelledby="profile-tab">
		<slot></slot>
	</div>
</template>