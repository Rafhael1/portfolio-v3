<script>
export default {
	components: {
		Logo,
	},
};
</script>
<script setup>
import Logo from '../assets/icons/logo.svg';
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Logo />
  </div>
</template>