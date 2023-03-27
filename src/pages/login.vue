<script setup lang="ts">
import { card, buttonVue, textfieldVue } from '../components'

const form = reactive({
	email: '',
	password: ''
});

</script>
<template>
	<div class="w-80 align-middle justify-center m-auto mt-32">
		<card>
			<div class="w-full">
				<h1 class="text-2xl text-center mb-4">Login</h1>
			</div>
			<form>
				<textfieldVue v-model="form.email" placeholder="Email" type="email" />
				<textfieldVue v-model="form.password" placeholder="Password" type="password" />
				<buttonVue type="submit" class="w-full">Login</buttonVue>
			</form>
		</card>
	</div>
</template>