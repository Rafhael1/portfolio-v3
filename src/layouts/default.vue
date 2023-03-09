<script setup lang="ts">
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
	<div>
		<headerVue :headerLinks="headerLinks">
		</headerVue>
		<slot></slot>
	</div>
</template>