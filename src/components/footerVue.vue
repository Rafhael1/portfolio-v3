<script setup lang="ts">
import { FooterState } from "../types/footer.types";

const getYear = () => {
	return new Date().getFullYear();
};

const state = reactive<FooterState>({
	socials: [
		{
			link: "https://github.com/Rafhael1",
			icon: "github",
			title: "linkedin"
		},
		{
			link: "https://www.linkedin.com/in/rafhael-marques/",
			icon: "linkedin",
			title: "linkedin"
		}
	]
});

</script>
<template>
  <footer class="m-8 align-middle h-20 bg-transparent inline">
    <ul class="text-lg flex flex-wrap justify-center text-primary-text-light dark:text-white sm:mt-0">
      <li
        v-for="social in state.socials"
        class="mr-4"
      >
        <NuxtLink
          :to="social.link"
          target="_blank"
        >
          <font-awesome-icon
            :aria-label="social.link"
            :alt="social.title"
            size="lg"
            :icon="['fab', `${social.icon}`]"
          />
        </NuxtLink>
      </li>
    </ul>
    <p class="mt-4 justify-center text-sm text-primary-text-light text-center dark:text-gray-400">
      © {{ getYear() }} 
      <a
        href="https://rafhaelmarques.me/"
        class="hover:underline"
      > 
        - Rafhael Marques
      </a>
    </p>
  </footer>
</template>