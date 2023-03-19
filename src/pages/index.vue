<script setup lang="ts">
import selectVue from '../components/inputs/select.vue';
import textfieldVue from '../components/inputs/textfield.vue';

const form = reactive({
	test: ''
});

watch(form, (value) => {
	console.log(value);
}, { deep: true });

</script>
<template>
  <div>
		
  </div>
</template>