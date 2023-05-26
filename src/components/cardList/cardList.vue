<script setup lang="ts">
import { ref } from 'vue';

const cardContainer = ref<HTMLElement | null>(null);

interface Props {
	items: Array<any>;
}
const props = defineProps<Props>();

const scrollToLeft = ref(() => {
	if (cardContainer.value) {
		cardContainer.value.scrollBy({
			left: 700,
			behavior: 'smooth'
		});
	}
});

const scrollToRight = ref(() => {
	if (cardContainer.value) {
		cardContainer.value.scrollBy({
			left: -700,
			behavior: 'smooth'
		});
	}
});

</script>
<template>
	<span class="flex w-full p-2">
		<button class="mobile:hidden rounded-full focus:border-purple-500 shadow-sm shadow-violet-100 p-2 pr-4 pl-4 mr-2 h-fit relative mt-[174px]" @click="scrollToRight">
			<font-awesome-icon class="text-purple-600 " icon="fa-solid fa-chevron-left" />
		</button>		
		<div class="rounded flex mobile:overflow-auto m-auto w-full overflow-x-hidden gap-24" ref="cardContainer">
			<div class="flex-none w-64 p-4" v-for="item, index in props.items">
				<div :key="index" class="rounded bg-gray-50 h-[300px] w-[300px]">
					<div class="flex flex-col items-center justify-center">
						<img class="w-full h-[180px] grayscale-0 p-0 rounded-t object-cover" loading="eagle" src="https://img.freepik.com/premium-vector/autumn-mountains-landscape-with-tree-silhouettes-river-sunset_148087-293.jpg?w=2000" alt="development-svg" />
						<div class="p-[24px] h-[120px] w-full rounded-b  border">
							<div class="flex align-middle gap-2 mb-2">
								<h3 class="text-primary-text-light text-lg font-medium justify-start">To-do App</h3>
								<span class="flex gap-2">
									<a class="text-violet-600 rounded pr-2 pl-2 bg-violet-100 border border-violet-500 gap-1 flex cursor-pointer mb-auto mt-auto" href="http://github.com/Rafhael1" target="_blank">
										Site
										<font-awesome-icon class="mt-auto mb-auto" icon="fa-solid fa-link" />
									</a>
									<a class="text-violet-600 rounded pr-2 pl-2 bg-violet-100 border border-violet-500 gap-1 flex cursor-pointer mb-auto mt-auto" href="http://github.com/Rafhael1" target="_blank">
										Code
										<font-awesome-icon class="mt-auto mb-auto" icon="fa-solid fa-code" />
									</a>
								</span>
							</div>
							<div>
								<div class="text-primary-text-light border w-fit pl-2 pr-2 pt-1 pb-1 rounded">
									{{item}}
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
		<button class="mobile:hidden rounded-full focus:border-purple-500 shadow-sm shadow-violet-100 p-2 ml-2 pr-4 pl-4 h-fit relative mt-[174px]" @click="scrollToLeft">
			<font-awesome-icon class="text-purple-600 " icon="fa-solid fa-chevron-right" />
		</button>	
	</span>
</template>