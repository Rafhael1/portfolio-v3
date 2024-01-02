<script setup lang="ts">
const slots = useSlots();

const tabs = ref<any>([]);
const activeTab = ref(tabs?.value[0]?.id || "");

// When a tab is active, add the active class
const activeClass = "text-purple-600 hover:text-purple-700 bg-purple-100";
const inactiveClass = "text-gray-600 hover:text-gray-700 bg-gray-100";

// update active tab
const updateActiveTab = (e: Event) => {
	const tabId = (e.target as HTMLElement).id;
	
	activeTab.value = tabId;
};

provide("activeTab", activeTab);

onMounted(() => {
	// About the '!' in slots.default!()
	// https://stackoverflow.com/questions/63327783/typescript-3-9-7-optional-chaining-warning-in-vue-3-0-0-rc-5
	const initialTabs = slots.default!().map(el => {
		return {
			id: el.props?.id,
			title: el.props?.title
		};
	});	

	tabs.value = initialTabs;
	activeTab.value = initialTabs[0].id;

});


</script>
<template>
  <div class="mb-4">
    <ul
      id="myTab"
      class="flex flex-wrap -mb-px text-md font-medium text-center"
      data-tabs-toggle="#myTabContent"
      role="tablist"
    >
      <li
        v-for="tab in tabs"
        class="mr-2"
        role="presentation"
      >
        <button 
          :id="`${tab.id}`" 
          :class="`${activeTab === tab.id ? activeClass : inactiveClass} transition-colors font-semibold antialiased inline-block p-3 rounded`" 
          :data-tabs-target="`#${tab.id}`"
          type="button" 
          role="tab" 
          aria-controls="profile" 
          aria-selected="false" 
          @click="(event: Event) => updateActiveTab(event)"
        >
          {{ tab.title }}
        </button>
      </li>
    </ul>
  </div>
  <div id="myTabContent">
    <slot />
  </div>
</template>
