<script setup lang="ts">
import { ref } from "vue";

interface Props {
	items: Array<any>;
}
const props = defineProps<Props>();

const cardContainer = ref<HTMLElement>();
const isDragging = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);

// Button functions
const scrollToLeft = ref(() => {
	if (cardContainer.value) {
		cardContainer.value.scrollBy({
			left: 700,
			behavior: "smooth",
		});
	}
});

const scrollToRight = ref(() => {
	if (cardContainer.value) {
		cardContainer.value.scrollBy({
			left: -700,
			behavior: "smooth",
		});
	}
});

// Drag functions
const handleMouseDown = (e: MouseEvent) => {
	if (cardContainer.value) {
		isDragging.value = true;
		startX.value = e.pageX - cardContainer.value.offsetLeft;
		scrollLeft.value = cardContainer.value.scrollLeft;
	}
};

const handleMouseMove = (e: MouseEvent) => {
	if (!isDragging.value) return;
	e.preventDefault();
	if (cardContainer.value) {
		const x = e.pageX - cardContainer.value.offsetLeft;
		const walk = x - startX.value;
		cardContainer.value.scrollLeft = scrollLeft.value - walk;
	}
};

const handleMouseUp = () => {
	isDragging.value = false;
};
</script>
<template>
  <span class="flex w-full p-2">
    <button
      class="relative mr-2 mt-[174px] h-fit rounded-full p-2 pr-4 pl-4 shadow-sm shadow-violet-100 focus:border-purple-500 mobile:hidden"
      @click="scrollToRight"
    >
      <font-awesome-icon
        class="text-purple-600"
        icon="fa-solid fa-chevron-left"
      />
    </button>
    <div
      ref="cardContainer"
      class="m-auto flex w-full cursor-pointer gap-16 overflow-x-hidden rounded mobile:overflow-auto"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
      @mouseleave="handleMouseUp"
    >
      <div
        v-for="(item, index) in props.items"
        class="w-64 flex-none p-4"
      >
        <div
          :key="index"
          class="h-[300px] w-[300px] rounded bg-gray-50"
        >
          <div class="flex flex-col items-center justify-center">
            <img
              draggable="false"
              class="h-[180px] w-full rounded-t object-cover p-0 grayscale-0"
              loading="eagle"
              src="https://img.freepik.com/premium-vector/autumn-mountains-landscape-with-tree-silhouettes-river-sunset_148087-293.jpg?w=2000"
              alt="development-svg"
            >
            <div class="h-[120px] w-full rounded-b border p-[24px]">
              <div class="mb-2 flex gap-2 align-middle">
                <h3
                  class="justify-start text-lg font-medium text-primary-text-light"
                >
                  To-do App
                </h3>
                <span class="flex gap-2">
                  <a
                    class="mb-auto mt-auto flex cursor-pointer gap-1 rounded border border-violet-500 bg-violet-100 pr-2 pl-2 text-violet-600"
                    href="http://github.com/Rafhael1"
                    target="_blank"
                  >
                    Site
                    <font-awesome-icon
                      class="mt-auto mb-auto"
                      icon="fa-solid fa-link"
                    />
                  </a>
                  <a
                    class="mb-auto mt-auto flex cursor-pointer gap-1 rounded border border-violet-500 bg-violet-100 pr-2 pl-2 text-violet-600"
                    href="http://github.com/Rafhael1"
                    target="_blank"
                  >
                    Code
                    <font-awesome-icon
                      class="mt-auto mb-auto"
                      icon="fa-solid fa-code"
                    />
                  </a>
                </span>
              </div>
              <div>
                <div
                  class="w-fit rounded border pl-2 pr-2 pt-1 pb-1 text-primary-text-light"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="relative ml-2 mt-[174px] h-fit rounded-full p-2 pr-4 pl-4 shadow-sm shadow-violet-100 focus:border-purple-500 mobile:hidden"
      @click="scrollToLeft"
    >
      <font-awesome-icon
        class="text-purple-600"
        icon="fa-solid fa-chevron-right"
      />
    </button>
  </span>
</template>
