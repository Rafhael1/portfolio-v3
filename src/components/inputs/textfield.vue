<script setup lang="ts">
import { InputProps } from "./inputs.types";

const props = defineProps<InputProps>();
</script>
<template>
	<input 
		:value="modelValue" 
		@input="($event) => $emit('update:modelValue', ($event.target as HTMLInputElement).value)"
		:placeholder="props.placeholder"
		:type="props.type"
		:disabled="props.disabled"
		:readonly="props.disabled"
		:class="`${props.disabled && 'bg-gray-100 block cursor-not-allowed'} bg-white border border-primary-border-color text-primary-text-light mb-6 text-md 
			rounded focus:ring-violet-500 focus:border-violet-500 block w-full p-2 
		dark:placeholder-gray-400 dark:text-white
			dark:focus:ring-violet-500 dark:focus:border-violet-500`"
	/>
</template>