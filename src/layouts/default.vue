<script setup lang="ts">
import footerVue from '../components/footer/footer.vue';
import headerVue from '../components/header/header.vue';

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
	<span class="flex flex-col min-h-screen justify-between">
		<headerVue :headerLinks="headerLinks">
		</headerVue>
		<span class="mb-auto ml-10 mr-10">
			<slot></slot>
		</span>
		<footerVue />
	</span>
</template>