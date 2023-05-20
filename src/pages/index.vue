<script setup lang="ts">
import type { Ref } from 'vue';
import { HomePage } from '../models/homePageObject';
import LazyComponent from '../components/lazy-component.vue';
import container from '../components/container/container.vue';
import cardVue from '../components/card/card.vue';
import { buttonVue } from '../components';

interface HomeData {
	[key: string]: {
		[key: string]: HomePage;
	};
}

const homeData: Ref<HomeData> = ref({});
const workExperienceDisplayed: Ref<string> = ref('');

onBeforeMount(async() => {
	const home: any = (await useFetch('/api/home', {
		// method: 'GET',
	}))?.data;

	return homeData.value = home;
});

const changeWorkExperienceDisplayed = (companyName: string) => {
	workExperienceDisplayed.value = companyName;
}

</script>
<template>	
	<container id="summary" class="relative w-full justify-between flex mobile:flex-none mobile:m-auto">
		<span class="relative left-20 mobile:left-0 mt-28 mobile:mt-8">
			<div class="w-[23rem] mobile:w-[22rem]">
				<h3 id="summary-title" class="text-sm mobile:text-xs text-section-title-color" style="letter-spacing: 7.5px; font-weight: 500;">
					- MY NAME IS
				</h3>
				<h1 id="summary-subtitle" class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-purple text-bold text-primary-text-light dark:text-primary-text-dark" style="font-size: 44px;">
					Rafhael
					<span class="text-violet-600">
						Marques.
					</span>
				</h1>
			</div>
			<div id="summary-text" class="w-3/4 leading-8 mobile:leading-6 mt-4 mobile:w-full">
				{{ homeData.value?.summary?.info }}
			</div>
		</span>
		<div class="mobile:hidden ml-10 mt-16 w-full" id="summary-image">
			<img class="m-auto" loading="eagle" src="../assets/images/programmer.svg" alt="programmer-svg" />
		</div>
	</container>
	<container class="bg-section-secondary-background p-16">
		<LazyComponent>
			<div class="w-full ml-[35%] mobile:ml-10">
				<h3 id="summary-title" class="text-sm mobile:text-xs text-section-title-color" style="letter-spacing: 7.5px; font-weight: 500;">
					- SERVICES
				</h3>
				<h1 id="summary-subtitle" class="mobile:text-4xl mobile:mt-2 text-bold text-primary-text-light dark:text-primary-text-dark" style="font-size: 44px;">
					Specialized in			
				</h1>
			</div>
			<div>
				<div class="w-full mt-8 overflow-x-auto">
					<div class="flex gap-4">
						<cardVue class="w-3/3 text-center">
							<div class="flex flex-col items-center">
								<div class="bg-violet-100 rounded-xl p-2">
									<img class="w-12" loading="eagle" src="../assets/icons/application.svg" alt="development-svg" />
								</div>
								<h3 class="text-no-wrap text-primary-text-light font-semibold mt-4">
									Application Development
								</h3>
								<p class=" text-primary-text-light mt-2">
									<!-- {{ homeData.value?.specialized }} -->
									Standard designing, building, and implementing your applications with documentation.
								</p>
							</div>
						</cardVue>
						<cardVue class="w-3/3 text-center">
							<div class="flex flex-col items-center">
								<div class="bg-violet-100 rounded-xl p-2">
									<img class="w-12" loading="eagle" src="../assets/icons/application.svg" alt="development-svg" />
								</div>
								<h3 class="text-no-wrap text-primary-text-light font-semibold mt-4">
									Application Development
								</h3>
								<p class=" text-primary-text-light mt-2">
									<!-- {{ homeData.value?.specialized }} -->
									Standard designing, building, and implementing your applications with documentation.
								</p>
							</div>
						</cardVue>
						<cardVue class="w-3/3 text-center">
							<div class="flex flex-col items-center">
								<div class="bg-violet-100 rounded-xl p-2">
									<img class="w-12" loading="eagle" src="../assets/icons/application.svg" alt="development-svg" />
								</div>
								<h3 class="text-no-wrap text-primary-text-light font-semibold mt-4">
									Application Development
								</h3>
								<p class=" text-primary-text-light mt-2">
									<!-- {{ homeData.value?.specialized }} -->
									Standard designing, building, and implementing your applications with documentation.
								</p>
							</div>
						</cardVue>
					</div>					
				</div>
			</div>
		</LazyComponent>
	</container>
	<container class="p-16">
		<LazyComponent>
			<div class="w-42">
				<h3 id="summary-title" class="text-sm mobile:text-xs text-section-title-color" style="letter-spacing: 7.5px; font-weight: 500;">
					- CAREER PATH
				</h3>
				<h1 id="summary-subtitle" class="mobile:text-4xl mobile:mt-2 text-bold text-primary-text-light dark:text-primary-text-dark" style="font-size: 44px;">
					Work Experience	
				</h1>
			</div>
			<span class="flex mt-10">
				<div class="w-[60%]">
					<ul>
						<li>
							<buttonVue @click="() => changeWorkExperienceDisplayed('apple')" color="secondary" class="min-w-[200px] text-left">
								Apple
							<template #end-icon>
								<font-awesome-icon class="ml-44 justify-end text-right" size="lg" :icon="`fa-solid fa-angle-right`" />
							</template>
							</buttonVue>
						</li>
					</ul>
				</div>
				<div class="justify-start animate-fade-in-right" v-if="workExperienceDisplayed === 'apple'">
					<h3 class="text-lg font-medium">Front-end</h3>
					<h5 class="text-sm">California, United States</h5>
					<h6 class="font-semibold">Nov 2020 - Present - Full-time</h6>
					<hr class="my-4 border-b border-gray-50" />
				</div>
			</span>
		</LazyComponent>
	</container>
	<container class="p-16">
		<LazyComponent>
			<div class="w-22">
				<h3 id="summary-title" class="text-sm mobile:text-xs text-section-title-color" style="letter-spacing: 7.5px; font-weight: 500;">
					- LEARNING PATH
				</h3>
				<h1 id="summary-subtitle" class="mobile:text-4xl mobile:mt-2 text-bold text-primary-text-light dark:text-primary-text-dark" style="font-size: 44px;">
					Education			
				</h1>
			</div>
			<ol class="items-center w-full mt-10">
				<li class="flex w-full" >
					<div class="w-42 items-center text-violet-400 after:content-[''] after:w-[4px] after:h-32 after:left-[0.43rem] after:bottom-1 after:relative after:border-b after:border-[3px] after:inline-block after:border-violet-400">
						<span class="flex items-center justify-center w-5 h-5 rounded-full bg-violet-400 shrink-0">
						</span>
					</div>
					<div class="ml-6">
						<h3 class="font-medium leading-tight mb-2">Uninter - College</h3>
						<p class="text-sm font-light">Systems development and analisys (Currently remote)</p>
						<h4 class="font-medium leading-tight mt-4">2022 - 2024</h4>
					</div>
				</li>				
			</ol>
		</LazyComponent>
	</container>
	<container class="p-16">
		<LazyComponent>
			<div class="w-22">
				<h3 id="summary-title" class="text-sm mobile:text-xs text-section-title-color" style="letter-spacing: 7.5px; font-weight: 500;">
					- SKILLS
				</h3>
				<h1 id="summary-subtitle" class="mobile:text-4xl mobile:mt-2 text-bold text-primary-text-light dark:text-primary-text-dark" style="font-size: 44px;">
					Technologies			
				</h1>
			</div>
		</LazyComponent>
	</container>
</template>