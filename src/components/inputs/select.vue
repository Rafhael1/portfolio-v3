<script setup lang="ts">
import { InputProps } from "./inputs.types";

const props = defineProps<InputProps>();
</script>
<template>
	<!-- <label
		for="select"
		class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
	>
		{{ props.label }}
	</label> -->
	<select
		:value="modelValue" 
    @input="($event) => $emit('update:modelValue', ($event.target as HTMLInputElement).value)"
		id="select"
		class="bg-white border border-primary-border-color text-primary-text-light mb-6 text-md 
		rounded focus:ring-violet-500 focus:border-violet-500 block w-full p-2 
	 dark:placeholder-gray-400 dark:text-white
		dark:focus:ring-violet-500 dark:focus:border-violet-500"
	>	
		<option selected disabled value="">{{ props.placeholder }}</option>
		<option v-for="option in props.options" :value="option.value">{{ option.label }}</option>
	</select>
</template>
