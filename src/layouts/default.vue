<script setup lang="ts">
// import footerVue from '../components/footer/footer.vue';
// import headerVue from '../components/header/header.vue';

const headerLinks = [
	{
		title: 'Home',
		url: '/',
		target: '_self',
	},
	{
		title: 'About',
		url: '/about',
		target: '_self',
	},
	{
		title: 'Contact',
		url: '/contact',
		target: '_self',
	},
];

</script>
<template>
  <span class="flex flex-col min-h-screen max-w-screen overflow-x-hidden">
    <headerVue :header-links="headerLinks" />
    <main>
      <slot />
    </main>
    <footerVue />
  </span>
</template>