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

const disabledChipClass = ref("mb-auto mt-1 flex gap-1 rounded border border-gray-300 pr-2 pl-2 bg-gray-100 text-gray-400 cursor-not-allowed disabled");
const enabledChipClass = ref("hover:shadow-md mb-auto mt-1 flex cursor-pointer gap-1 rounded border border-violet-500 bg-violet-100 pr-2 pl-2 text-violet-600 ");
</script>
<template>
  <span class="flex w-full p-2">
    <button
      class="relative mr-2 mt-[174px] h-fit rounded-full p-2 pr-4 pl-4 shadow-sm shadow-violet-100 focus:border-purple-500 mobile:hidden"
      @click="scrollToRight"
    >
      <font-awesome-icon
        class="text-purple-600"
        :icon="['fas', 'fa-chevron-left']"
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
							width="300"
							height="180"
              class="h-[180px] w-full rounded-t object-cover p-0  grayscale-[70%] hover:grayscale-0 transition-all"
              :src="item.image"
              alt="development-svg"
            >
            <div class="h-[120px] w-full rounded-b border p-[8px]">
              <div class="mb-2 inline align-middle">
                <h3
                  class="justify-start text-lg font-medium text-primary-text-light"
                >
									{{ item?.info }}
                </h3>
                <span class="flex gap-2 mb-2">
									<a
										:aria-disabled="!item.url"
										:class="!item.url ? disabledChipClass : enabledChipClass"
										:href="item.url ? item.url : null"
										target="'_blank'"
									>
										Site
										<font-awesome-icon
											class="mt-auto mb-auto"
											:icon="['fas', 'link']"
										/>
									</a>
                  <a
                    class="hover:shadow-md mb-auto mt-auto flex cursor-pointer gap-1 rounded border border-violet-500 bg-violet-100 pr-2 pl-2 text-violet-600"
                    :href="item?.info3"
                    target="_blank"
                  >
                    Code
                    <font-awesome-icon
                      class="mt-auto mb-auto"
                      :icon="['fas', 'code']"
                    />
                  </a>
                </span>
              </div>
              <div>
                <div
                  class="w-fit rounded border pl-2 pr-2 pt-1 pb-1 text-primary-text-light"
                >
                  {{ item.info2 }}
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
        :icon="['fas', 'chevron-right']"
      />
    </button>
  </span>
</template>
