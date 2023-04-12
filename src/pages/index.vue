<script setup lang="ts">
import type { Ref } from 'vue';
import { HomePage } from '../models/homePageObject';

interface HomeData {
	[key: string]: {
		[key: string]: HomePage;
	};
}

const homeData: Ref<HomeData> = ref({});

onBeforeMount(async() => {
	const home: any = (await useFetch('/api/home', {
		// method: 'GET',
	}))?.data;

	return homeData.value = home;
});

</script>
<template>
  <section id="summary" class="w-full justify-around flex">
		<span class="d-flex mt-44">
			<div class="w-22">
				<h3 id="summary-title" class="text-sm text-section-title-color" style="letter-spacing: 7.5px; font-weight: 500;">
					- MY NAME IS
				</h3>
				<h1 id="summary-subtitle" class="text-bold text-primary-text-light dark:text-primary-text-dark" style="font-size: 44px;">
					Rafhael
					<span class="text-violet-600">
						Marques.
					</span>
				</h1>
			</div>
			<div id="summary-text" class="w-3/4 leading-8 mt-4">
				{{ homeData.value?.summary?.info }}
			</div>
		</span>
		<div class="mobile:hidden mt-24" id="summary-image">
			<img loading="eagle" src="../assets/images/programmer.svg" alt="programmer-svg" />
		</div>
  </section>
</template>