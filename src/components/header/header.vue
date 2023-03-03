<script setup lang="ts">
import { HeaderProps } from './header.types';

const props = defineProps<HeaderProps>();

</script>
<template>
	<div>
		<div id="logo" aria-label="logo">
			<slot name="logo" />
		</div>
		<div>
			<ul v-for="link in props.headerLinks">
				<li>
					<a :target="link.target" :href="link.url">{{ link.title }}</a>
				</li>
			</ul>
		</div>
	</div>
</template>