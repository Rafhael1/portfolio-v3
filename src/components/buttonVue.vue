<script setup lang="ts">
import { ButtonProps } from '../types/button.types';
const props = defineProps<ButtonProps>();

const getSize = () => {
	switch (props.size) {
	case 'sm':
		return 'p-2 text-sm';
	case 'md':
		return 'p-3';
	case 'lg':
		return 'p-4 text-lg';
	default:
		return 'p-3 text-md';
	}
};

const getColor = () => {
	switch(props.color){
	case 'primary':
		return 'bg-primary-500 hover:bg-primary-600 text-gray-50';
	case 'secondary':
		return 'text-purple-600 hover:text-purple-700 bg-purple-100 hover:bg-purple-200';
	case 'danger':
		return 'bg-danger-500 hover:bg-danger-600 text-gray-50';
	default:
		return 'bg-purple-500 hover:bg-purple-600 text-gray-50';
	}
};

</script>
<template>
  <button :class="`${getSize()}  ${getColor()} ${props.fullWidth ? 'w-full' : ''} items-center transition-colors rounded text-center`">		
    <slot />
  </button>
</template>