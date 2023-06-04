<script setup lang="ts">
import { InputProps } from "./inputs.types";

const props = defineProps<InputProps>();
</script>
<template>
  <div class="flex items-center">
    <input
      :id="props.id"
      :value="modelValue"
      type="checkbox"
      class="w-4 h-4 ease-soft ml-2 rounded-1.4 checked:bg-violet-600 checked:border-transparent focus:ring-violet-500 border border-gray-100"
      @input="($event) => $emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    >
    <label
      :for="props.id"
      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {{ props.label }}
    </label>
  </div>
</template>