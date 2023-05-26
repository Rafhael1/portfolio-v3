<script setup lang="ts">
const props = defineProps<{
	darkContainer: boolean;
}>();

</script>
<template>
	<section :class="`${darkContainer ? 'bg-section-secondary-background' : ''} pb-auto pl-64 pr-64 mobile:pr-10 mobile:pl-10`">
			<slot></slot>
	</section>
</template>