<script setup lang="ts">
import { ref, Ref } from 'vue';
import { HomePage } from '../models/homePageObject';
import LazyComponent from '../components/lazy-component.vue';
import container from '../components/container/container.vue';
import cardVue from '../components/card/card.vue';
import cardList from '../components/cardList/cardList.vue';
import { buttonVue, card } from '../components';

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
	<container id="summary" class="mb-6 relative w-full justify-between flex mobile:flex-none mobile:m-auto">
		<span class="relative left-20 mobile:left-0 mt-28 mobile:mt-8">
			<div class="w-[23rem] mobile:w-[22rem]">
				<h3 id="summary-title" class="text-sm mobile:text-xs text-section-title-color" style="letter-spacing: 7.5px; font-weight: 500;">
					- MY NAME IS
				</h3>
				<div id="summary-subtitle" class="mobile:w-64 m-2 leading-none animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-purple text-bold text-primary-text-light mobile:text-[32px] text-[44px]">
					Rafhael
					<span class="text-violet-600">
						Marques.
					</span>
				</div>
			</div>
			<div id="summary-text" class="w-3/4 leading-8 mobile:leading-6 mt-4 mobile:w-full">
				{{ homeData.value?.summary?.info }}
			</div>
		</span>
		<div class="mobile:hidden ml-10 mt-16 w-full" id="summary-image">
			<img class="m-auto" loading="eagle" src="../assets/images/programmer.svg" alt="programmer-svg" />
		</div>
	</container>
	<!-- <container class="p-16" darkContainer>
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
									Standard designing, building, and implementing your applications with documentation.
								</p>
							</div>
						</cardVue>
					</div>					
				</div>
			</div>
		</LazyComponent>
	</container> -->
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
						<span class="flex items-center justify-center w-5 h-5 rounded-full bg-transparent border-[6px] border-violet-400 shrink-0" />
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
	<container class="p-16" darkContainer>
		<LazyComponent>
			<div class="w-22">
				<h3 id="summary-title" class="text-sm mobile:text-xs text-section-title-color" style="letter-spacing: 7.5px; font-weight: 500;">
					- SKILLS
				</h3>
				<h1 id="summary-subtitle" class="mobile:text-4xl mobile:mt-2 text-bold text-primary-text-light dark:text-primary-text-dark" style="font-size: 44px;">
					Technologies			
				</h1>
			</div>
			<div>
				<div class="grid grid-cols-4 mt-8">
					<div class="m-auto">
						<img class="w-24" loading="eagle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="development-svg" />
					</div>
					<div class="m-auto">
						<img class="w-24" loading="eagle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="development-svg" />
					</div>
					<div class="m-auto">
						<img class="w-24" loading="eagle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="development-svg" />
					</div>
					<div class="m-auto">
						<img class="w-24" loading="eagle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="development-svg" />
					</div>
				</div>
			</div>
		</LazyComponent>
	</container>
	<container class="p-16">
		<LazyComponent>
			<div class="w-22">
				<h3 id="summary-title" class="text-sm mobile:text-xs text-section-title-color" style="letter-spacing: 7.5px; font-weight: 500;">
					- MY WORK
				</h3>
				<h1 id="summary-subtitle" class="mobile:text-4xl mobile:mt-2 text-bold text-primary-text-light dark:text-primary-text-dark" style="font-size: 44px;">
					Featured Projects			
				</h1>
			</div>
			<div>
				<div class="grid grid-rows-1">
					<div class="flex-none items-center space-x-4 overflow-x-auto">		
						<cardList :items="[1, 2, 3, 4, 5, 6, 7, 8, 9]" />								
					</div>					
				</div>
			</div>
		</LazyComponent>
	</container>
	<container class="p-16" darkContainer>
		<LazyComponent>
			<div class="w-22">
				<!-- <h3 id="summary-title" class="text-sm mobile:text-xs text-section-title-color" style="letter-spacing: 7.5px; font-weight: 500;">
					- MY WORK
				</h3> -->
				<h1 id="summary-subtitle" class="mobile:text-4xl mobile:mt-2 text-bold text-primary-text-light dark:text-primary-text-dark" style="font-size: 44px;">
					Contact			
				</h1>
			</div>
			<div class="mt-6 flex w-full">
				<div class="inline w-full gap-2">
					<div class="mb-2">
            <label for="name" class="block mb-1 text-md font-medium text-gray-900 dark:text-white">Opportunity</label>
            <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-400 block mobile:w-full w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:ring-violet-400" placeholder="Rafhael" required />
        	</div>
					<div class="mb-2">
            <label for="email" class="block mb-1 text-md font-medium text-gray-900 dark:text-white">Email</label>
            <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-400 block mobile:w-full w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:ring-violet-400" placeholder="rafamlf.2011@protonmail.com" required />
        	</div>
					<div class="mb-4">
            <label for="message" class="block mb-1 text-md font-medium text-gray-900 dark:text-white">Message</label>
            <textarea rows="6" type="text" id="message" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:border-violet-400 block mobile:w-full w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:ring-violet-400" placeholder="Hello, I wish to..." required />
        	</div>
					<div>
						<buttonVue class="mobile:w-full w-3/4">Send</buttonVue>
					</div>
				</div>				
				<div class="w-2/4 mobile:hidden">
					<img class="w-[28rem]" loading="eagle" src="../assets/images/mail.svg" alt="mail-svg" />
				</div>
			</div>
		</LazyComponent>
	</container>
</template>