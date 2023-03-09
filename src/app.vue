<script setup lang="ts">
import { useThemeStore } from './stores/theme';

const themeStore = useThemeStore();
const theme = ref<'dark' | 'light'>();

onMounted(() => {
	theme.value = themeStore.getTheme();
})

</script>
<template>
	<span :key="theme" :class="`${theme} primary-text-light`">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</span>
</template>
<style>
</style>