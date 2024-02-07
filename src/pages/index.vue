<script setup lang="ts">
import { ref } from "vue";
import LazyComponent from "~/components/LazyComponent.vue";
import { useHomeDataStore } from "../stores/homeData";

const socials = [
	{
		link: "https://github.com/Rafhael1",
		icon: "github",
		title: "",
	},
	{
		link: "https://www.linkedin.com/in/rafhael-marques-de-lima-freitas/",
		icon: "linkedin",
		title: "",
	},
];

const homeDataStore = useHomeDataStore();
const workExperienceDisplayed: Ref<any> = ref(0);
const form = ref({
	subject: "",
	name: "",
	email: "",
	message: "",
});
const isSubmiting = ref(false);


watchEffect(async () => {
	await homeDataStore.getHomeData();
	const homeData = homeDataStore.homeData;
	if(homeData){
		changeWorkExperienceDisplayed(homeData.workExperience[0]?.id);
	}
});

const handleSubmit = async () => {
	isSubmiting.value = true;
	await useFetch("/api/email", {
		method: "POST",
		body: form.value,
	});
	isSubmiting.value = false;
	form.value = {
		subject: "",
		name: "",
		email: "",
		message: "",
	};
};
const changeWorkExperienceDisplayed = (companyId: number) => {
	workExperienceDisplayed.value = companyId;
};
const formatWorkExperienceAsHtml = (text: string) => {
	return text?.replace(/\n/g, "<br />");
};

</script>
<template>
  <containerVue
    id="summary"
    class="relative mb-6 flex w-full justify-between mobile:m-auto mobile:flex-none"
  >
    <span
      class="relative left-0 mt-28 mobile:left-0 mobile:mt-8 desktop:min-w-[616px]"
    >
      <div class="w-[23rem] mobile:w-[22rem]">
        <h3
          id="summary-title"
          class="text-sm text-section-title-color mobile:text-xs"
          style="letter-spacing: 7.5px; font-weight: 500"
        >
          - {{ $t("sectionOneTitle") }}
        </h3>
        <div
          id="summary-subtitle"
          class="border-r-purple text-bold m-2 overflow-hidden whitespace-nowrap border-r-4 text-[44px] leading-none text-primary-text-light mobile:w-64 mobile:text-[32px] animate-typing"
        >
          Rafhael
          <span class="text-violet-600"> Freitas. </span>
        </div>
      </div>
      <div
        id="summary-text"
        class="mt-4 h-auto w-3/4 leading-8 mobile:w-3/4 mobile:leading-6"
      >
        {{ homeDataStore.homeData?.summary?.info }}
      </div>
      <div class="mt-12 mobile:hidden">
        <NuxtLink
          v-for="social in socials"
          :key="social.link"
          :to="social.link"
          target="_blank"
          class="mr-4"
        >
          <font-awesome-icon
            :aria-label="social.link"
            :alt="social.title"
            size="lg"
            :icon="['fab', `${social.icon}`]"
          />
        </NuxtLink>
      </div>
    </span>
    <div
      id="summary-image"
      class="ml-0 mt-16 w-full min-w-[340px] mobile:hidden"
    >
      <img
        class="m-auto w-[400px] tablet:w-[300px]"
        width="400"
        height="400"
        src="/img/programmer.svg"
        alt="programmer"
      >
    </div>
  </containerVue>
  <!-- <containerVue class="p-16">
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
	</containerVue> -->
  <containerVue class="p-16">
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
      <span class="mt-10 flex mobile:inline">
        <div
          class="scrollbar-hide overflow-x-auto mobile:mt-6 mobile:mb-6 mobile:flex desktop:w-[60%] tablet:w-[80%]"
        >
          <div
            v-for="(item, index) in homeDataStore.homeData?.workExperience"
            :key="index"
          >
            <buttonVue
              color="secondary"
              class="m-2 min-w-[200px] mobile:min-w-[150px]"
              @click="() => changeWorkExperienceDisplayed(item?.id)"
            >
              {{ item?.info4 }}
            </buttonVue>
          </div>
        </div>
        <template 
          v-for="item in homeDataStore.homeData?.workExperience"
        >
          <div
            v-if="item?.id === workExperienceDisplayed"									
            class="animate-fade-in-right justify-start"
          >
            <h3 class="text-lg font-medium">{{ item?.info }}</h3>
            <h5 class="text-sm">{{ item?.location }}</h5>
            <h6 class="font-semibold">{{ item?.info3 }}</h6>
            <hr class="my-4 border-b border-gray-50">
            <div
              class="text-sm"
              v-html="formatWorkExperienceAsHtml(item?.info2)"
            />
          </div>
        </template>
      </span>
    </LazyComponent>
  </containerVue>
  <containerVue class="p-16 mobile:p-2">
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
        <div class="mt-8 grid grid-cols-4 gap-8">
          <div
            v-for="item in homeDataStore.homeData?.skills"
            class="m-auto"
          >
            <img
              class="grayscale-[60%] transition-all hover:grayscale-0 desktop:hover:scale-[1.1]"
              width="100"
              height="100"
              loading="lazy"
              draggable="false"
              :src="item?.image"
              :alt="item?.info"
            >
          </div>
        </div>
      </div>
    </LazyComponent>
  </containerVue>
  <containerVue class="p-16 mobile:p-8">
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
            <cardList :items="homeDataStore.homeData?.featuredProjects" />
          </div>
        </div>
      </div>
    </LazyComponent>
  </containerVue>
  <containerVue class="p-16 mobile:p-6">
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
        <li
          v-for="item in homeDataStore.homeData?.education"
          class="flex w-full"
        >
          <div
            class="w-42 items-center text-violet-400 after:relative after:left-[0.43rem] after:bottom-1 after:inline-block after:h-32 after:w-[4px] after:border-[3px] after:border-b after:border-violet-400 after:content-['']"
          >
            <span
              class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[6px] border-violet-400 bg-transparent"
            />
          </div>
          <div class="ml-6">
            <h3 class="mb-2 font-medium leading-tight">
              {{ item?.info }}
            </h3>
            <p class="text-sm font-light">
              {{ item?.info2 }}
            </p>
            <h4 class="mt-4 font-medium leading-tight">
              {{ item?.info3 }}
            </h4>
          </div>
        </li>
      </ol>
    </LazyComponent>
  </containerVue>
  <containerVue class="p-16 mobile:p-2">
		<LazyComponent>
			<div class="w-22">
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
								for="subject"
								class="text-md mb-1 block font-medium text-gray-900 dark:text-white"
								>Subject *</label
							>
							<input
								id="subject"
								type="text"
								class="text-md block w-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-violet-400 focus:ring-violet-400 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 mobile:w-full"
								placeholder="Opportunity"
								required
								v-model="form.subject"
							/>
						</div>
						<div class="mb-2">
							<label
								for="subject"
								class="text-md mb-1 block font-medium text-gray-900 dark:text-white"
								>Your Name *</label
							>
							<input
								id="subject"
								type="text"
								class="text-md block w-3/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-violet-400 focus:ring-violet-400 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 mobile:w-full"
								placeholder="Opportunity"
								required
								v-model="form.name"
							/>
						</div>
						<div class="mb-2">
							<label
								for="email"
								class="text-md mb-1 block font-medium text-gray-900"
								>Your Email *</label
							>
							<input
								v-model="form.email"
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
								v-model="form.message"
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
								{{ isSubmiting ? "Sending..." : "Send" }}
								<font-awesome-icon
									size="md"
									:icon="['fas', 'fa-paper-plane']"
									:shake="isSubmiting"
								/>
							</buttonVue>
						</div>
					</form>
				</div>
				<div class="w-2/4 mobile:hidden">
					<img
						class="h-[400px] w-[400px]"
						loading="lazy"
						src="/img/mail.svg"
						alt="mail"
					/>
				</div>
			</div>
		</LazyComponent>
	</containerVue>
</template>
<style scoped>
.scrollbar-hide::-webkit-scrollbar {
	display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}
</style>
