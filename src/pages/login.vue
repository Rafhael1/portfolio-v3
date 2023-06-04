<script setup lang="ts">
import { card, buttonVue, textfieldVue } from '../components';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();

const form = reactive({
	email: '',
	password: ''
});

const handleSubmit = async() => {
	return await authStore.login(form);
};

</script>
<template>
  <div class="w-80 align-middle justify-center m-auto mt-32">
    <card>
      <div class="w-full">
        <h1 class="text-2xl text-center mb-4">
          Login
        </h1>
      </div>
      <form>
        <textfieldVue
          v-model="form.email"
          placeholder="Email"
          type="email"
        />
        <textfieldVue
          v-model="form.password"
          placeholder="Password"
          type="password"
        />
        <buttonVue
          class="w-full"
          @click.prevent="handleSubmit"
        >
          Login
        </buttonVue>
      </form>
    </card>
  </div>
</template>