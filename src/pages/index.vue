<script setup lang="ts">
import { ref, Ref } from "vue";
import { HomePage } from "../models/homePageObject";
import LazyComponent from "../components/lazy-component.vue";
import container from "../components/container/container.vue";
import cardList from "../components/cardList/cardList.vue";
import { buttonVue } from "../components";
import Programmer from "../assets/programmer.svg?url";
import Mail from "../assets/mail.svg?url";

interface HomeData {
	[key: string]: {
		[key: string]: HomePage;
	};
}

const homeData: Ref<HomeData> = ref({});
const workExperienceDisplayed: Ref<string> = ref("");

onBeforeMount(async () => {
	const home: any = (
		await useFetch("/api/home", {
			// method: 'GET',
		})
	)?.data;

	return (homeData.value = home);
});

const changeWorkExperienceDisplayed = (companyName: string) => {
	workExperienceDisplayed.value = companyName;
};

const handleSubmit = async () => {
	// await useFetch('/api/home/insert', {
	// 	method: 'POST',
	// 	body: JSON.stringify(homeData.value)
	// });
	console.log("submit");
};
</script>
<template>
	<container
		id="summary"
		class="relative mb-6 flex w-full justify-between mobile:m-auto mobile:flex-none"
	>
		<span class="relative left-20 mt-28 mobile:left-0 mobile:mt-8">
			<div class="w-[23rem] mobile:w-[22rem]">
				<h3
					id="summary-title"
					class="text-sm text-section-title-color mobile:text-xs"
					style="letter-spacing: 7.5px; font-weight: 500"
				>
					- MY NAME IS
				</h3>
				<div
					id="summary-subtitle"
					class="border-r-purple text-bold m-2 animate-typing overflow-hidden whitespace-nowrap border-r-4 text-[44px] leading-none text-primary-text-light mobile:w-64 mobile:text-[32px]"
				>
					Rafhael
					<span class="text-violet-600"> Marques. </span>
				</div>
			</div>
			<div
				id="summary-text"
				class="mt-4 w-3/4 leading-8 mobile:w-full mobile:leading-6"
			>
				{{ homeData.value?.summary?.info }}
			</div>
		</span>
		<div
			id="summary-image"
			class="ml-10 mt-16 w-full mobile:hidden tablet:hidden"
		>
			<img
				class="m-auto w-[400px]"
				loading="eagle"
				:src="Programmer"
				alt="programmer"
			/>
		</div>
	</container>
	<!-- <container class="p-16">
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
				<h3
					id="summary-title"
					class="text-sm text-section-title-color mobile:text-xs"
					style="letter-spacing: 7.5px; font-weight: 500"
				>
					- CAREER PATH
				</h3>
				<h1
					id="summary-subtitle"
					class="text-bold text-primary-text-light dark:text-primary-text-dark mobile:mt-2 mobile:text-4xl"
					style="font-size: 44px"
				>
					Work Experience
				</h1>
			</div>
			<span class="mt-10 flex">
				<div class="w-[60%]">
					<ul>
						<li>
							<buttonVue
								color="secondary"
								class="min-w-[200px] text-left"
								@click="() => changeWorkExperienceDisplayed('apple')"
							>
								Apple
								<template #end-icon>
									<font-awesome-icon
										class="ml-44 justify-end text-right"
										size="lg"
										:icon="`fa-solid fa-angle-right`"
									/>
								</template>
							</buttonVue>
						</li>
					</ul>
				</div>
				<div
					v-if="workExperienceDisplayed === 'apple'"
					class="animate-fade-in-right justify-start"
				>
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
				<h3
					id="summary-title"
					class="text-sm text-section-title-color mobile:text-xs"
					style="letter-spacing: 7.5px; font-weight: 500"
				>
					- SKILLS
				</h3>
				<h1
					id="summary-subtitle"
					class="text-bold text-primary-text-light dark:text-primary-text-dark mobile:mt-2 mobile:text-4xl"
					style="font-size: 44px"
				>
					Technologies
				</h1>
			</div>
			<div>
				<div class="mt-8 grid grid-cols-4">
					<div class="m-auto">
						<img
							class="w-24"
							loading="eagle"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
							alt="development-svg"
						/>
					</div>
					<div class="m-auto">
						<img
							class="w-24"
							loading="eagle"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
							alt="development-svg"
						/>
					</div>
					<div class="m-auto">
						<img
							class="w-24"
							loading="eagle"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
							alt="development-svg"
						/>
					</div>
					<div class="m-auto">
						<img
							class="w-24"
							loading="eagle"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
							alt="development-svg"
						/>
					</div>
				</div>
			</div>
		</LazyComponent>
	</container>
	<container class="p-16">
		<LazyComponent>
			<div class="w-22">
				<h3
					id="summary-title"
					class="text-sm text-section-title-color mobile:text-xs"
					style="letter-spacing: 7.5px; font-weight: 500"
				>
					- MY WORK
				</h3>
				<h1
					id="summary-subtitle"
					class="text-bold text-primary-text-light dark:text-primary-text-dark mobile:mt-2 mobile:text-4xl"
					style="font-size: 44px"
				>
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
	<container class="p-16">
		<LazyComponent>
			<div class="w-22">
				<h3
					id="summary-title"
					class="text-sm text-section-title-color mobile:text-xs"
					style="letter-spacing: 7.5px; font-weight: 500"
				>
					- LEARNING PATH
				</h3>
				<h1
					id="summary-subtitle"
					class="text-bold text-primary-text-light dark:text-primary-text-dark mobile:mt-2 mobile:text-4xl"
					style="font-size: 44px"
				>
					Education
				</h1>
			</div>
			<ol class="mt-10 w-full items-center">
				<li class="flex w-full">
					<div
						class="w-42 items-center text-violet-400 after:relative after:left-[0.43rem] after:bottom-1 after:inline-block after:h-32 after:w-[4px] after:border-[3px] after:border-b after:border-violet-400 after:content-['']"
					>
						<span
							class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[6px] border-violet-400 bg-transparent"
						/>
					</div>
					<div class="ml-6">
						<h3 class="mb-2 font-medium leading-tight">Uninter - College</h3>
						<p class="text-sm font-light">
							Systems development and analisys (Currently remote)
						</p>
						<h4 class="mt-4 font-medium leading-tight">2022 - 2024</h4>
					</div>
				</li>
			</ol>
		</LazyComponent>
	</container>
	<container class="p-16">
		<LazyComponent>
			<div class="w-22">
				<!-- <h3 id="summary-title" class="text-sm mobile:text-xs text-section-title-color" style="letter-spacing: 7.5px; font-weight: 500;">
					- MY WORK
				</h3> -->
				<h1
					id="summary-subtitle"
					class="text-bold text-primary-text-light dark:text-primary-text-dark mobile:mt-2 mobile:text-4xl"
					style="font-size: 44px"
				>
					Contact
				</h1>
			</div>
			<div class="mt-6 flex w-full">
				<div class="inline w-full gap-2">
					<form @submit.prevent="handleSubmit">
						<div class="mb-2">
							<label
								for="name"
								class="text-md mb-1 block font-medium text-gray-900 dark:text-white"
								>Subject *</label
							>
							<input
								id="name"
								type="text"
								class="text-md block w-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-violet-400 focus:ring-violet-400 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 mobile:w-full"
								placeholder="Opportunity"
								required
							/>
						</div>
						<div class="mb-2">
							<label
								for="email"
								class="text-md mb-1 block font-medium text-gray-900"
								>Email *</label
							>
							<input
								id="email"
								type="text"
								class="text-md block w-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-violet-400 focus:ring-violet-400 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 mobile:w-full"
								placeholder="rafamlf.2011@protonmail.com"
								required
							/>
						</div>
						<div class="mb-4">
							<label
								for="message"
								class="text-md mb-1 block font-medium text-gray-900 dark:text-white"
								>Message *</label
							>
							<textarea
								id="message"
								rows="6"
								type="text"
								class="text-md block w-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-violet-400 focus:ring-violet-400 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 mobile:w-full"
								placeholder="Hello, I wish to..."
								required
							/>
						</div>
						<div>
							<buttonVue class="w-3/4 mobile:w-full">
								Send
								<font-awesome-icon size="md" icon="fa-solid fa-paper-plane" />
							</buttonVue>
						</div>
					</form>
				</div>
				<div class="w-2/4 mobile:hidden">
					<img
						class="h-[400px] w-[400px]"
						loading="eagle"
						:src="Mail"
						alt="mail"
					/>
				</div>
			</div>
		</LazyComponent>
	</container>
</template>
