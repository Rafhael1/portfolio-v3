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
		<selectVue label="Country" placeholder="Select" v-model="form.test" :options="[
			{
				label: 'Brazil',
				value: 'brazil'
			},
			{
				label: 'United States',
				value: 'united-states'
			}
		]" />
		<textfieldVue placeholder="Name" v-model="form.test" />
  </div>
</template>