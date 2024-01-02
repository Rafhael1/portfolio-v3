<script setup lang="ts">
import { saveAs } from "file-saver";
// import { useThemeStore } from "../../stores/theme";
// import Logo from "~/public/img/logo.svg?url";

// const themeStore = useThemeStore();

// const themeRef = ref<string>();

// onMounted(() => {
// 	themeRef.value = themeStore.getTheme();
// });

// const isMenuOpen = ref<boolean>(false);

// const toggleMenu = () => {
// 	isMenuOpen.value = !isMenuOpen.value;
// };

const isDownloadingResume = ref(false);

const downloadResume = async() => {
	isDownloadingResume.value = true;
	const resume = await useFetch("https://xzjfmgkeufgbswhwqmrn.supabase.co/storage/v1/object/public/portfolio-images/resume/cv_rafhael_marques_swe.pdf");

	const blob: any = resume?.data.value;
	const url = window?.URL.createObjectURL(blob);

	saveAs(url, "swe_rafhael_marques_cv.pdf");
	isDownloadingResume.value = false;
};

</script>
<template>
  <nav class="bg-transparent px-4 lg:px-6 py-2.5">
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
    >
      <!-- <button
			@click="() => toggleMenu()"
			data-collapse-toggle="mobile-menu-2"
			type="button"
			class="hidden inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="mobile-menu-2"
			:aria-expanded="isMenuOpen"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-6 h-6"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				></path>
			</svg>
			<svg
				class="hidden w-6 h-6"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clip-rule="evenodd"
				></path>
			</svg>
		</button> -->
      <div class="flex items-center">				
        <img
          width="35"
          height="35"
          src="/img/logo.svg"
          class="mr-3"
          loading="eagle"
          alt="Logo"
        >
        <span
          class="self-center text-xl font-semibold whitespace-nowrap text-primary-text-light"
        >&lt;Rafhael /></span>
      </div>
      <div class="flex items-center lg:order-2">
        <!-- <button
					@click="themeStore.switchTheme()"
					type="button"
					class="mr-2 "
				>
					<img
						v-if="themeRef === 'light'"
						src="../../assets/icons/moon.svg" 
						:key="`${themeRef}-light`"
						alt="Theme Switch" />
						
						<img v-else-if="themeRef === 'dark'"
						src="../../assets/icons/sun.svg" 
						:key="`${themeRef}-dark`"
						alt="Theme Switch" />

				</button> -->
        <button 
          type="button" 
          class="primary-text-light dark:primary-text-dark bg-gray-50 border border-gray-100 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-violet-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 ml-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          @click="downloadResume"
        >
          Resume
          <font-awesome-icon
            class="ml-1"
            :shake="isDownloadingResume"
            :icon="['fas', 'fa-download']"
          />
        </button>
      </div>
      <!-- <div
        id="mobile-menu-2"
        :class="`${isMenuOpen ? 'hidden' : 'hidden'}`"
        class="justify-between px-2 mobile:rounded mobile:bg-gray-50 items-center w-full lg:flex lg:w-auto lg:order-1"
      >
        <ul
					v-for="link in props.headerLinks"
					class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
				>
					<NuxtLink :to="link.url">
						<li class="w-full mobile:hover:bg-violet-700 rounded mobile:hover:text-white p-2">
							<a
							class="transition-all desktop:hover:text-violet-600 lg:hover:underline lg:underline-offset-0 hover:underline-offset-8 decoration-violet-600 mr-4 rounded"
							aria-current="page"
							>
							{{ link.title }}
						</a>
					</li>
					</NuxtLink>
				</ul>
      </div> -->
    </div>
  </nav>
</template>
