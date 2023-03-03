<script setup lang="ts">
	import { ButtonProps } from './button.types';
	const props = defineProps<ButtonProps>();

	const getSize = () => {
		switch (props.size) {
			case 'sm':
				return 'p-2 text-sm';
			case 'md':
				return 'p-3 text-base';
			case 'lg':
				return 'p-4 text-lg';
			default:
				return 'p-3 text-base';
		}
	}

</script>
<template>
	<button :class="`${getSize()} ${props.fullWidth ? 'w-full' : ''} transition-colors	rounded bg-purple-500 hover:bg-purple-600 text-gray-50`" >
		<span class="flex justify-center gap-3 items-center">
			<slot name="start-icon"></slot>
			<slot></slot>
			<slot name="end-icon"></slot>
		</span>
	</button>
</template>