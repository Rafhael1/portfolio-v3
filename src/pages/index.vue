<script setup>
import Logo from '../assets/icons/logo.svg';
import tabs from '../components/tabs/tabs.vue';
import tabsContent from '../components/tabs/tabs-content.vue';
import buttonVue from '../components/button/button.vue';

</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Logo />
    <tabs>
			<tabsContent title="Profile" id="profile">
				Test 1
			</tabsContent>
			<tabsContent title="Settings" id="settings">
				Test 2
			</tabsContent>
		</tabs>
		<div :style="{
			width: '200px',
		}">
			<buttonVue fullWidth size="md">
				<Logo #icon />
				Click me
			</buttonVue>
		</div>
		<font-awesome-icon icon="fa-brands fa-twitter-square" />
  </div>
</template>