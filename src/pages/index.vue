<script setup>
import Logo from '../assets/icons/logo.svg';
import tabs from '../components/tabs/tabs.vue';
import tabsContent from '../components/tabs/tabs-content.vue';

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
  </div>
</template>