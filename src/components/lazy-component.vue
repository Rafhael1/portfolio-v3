<script setup lang="ts">

const animatedDiv = ref();
const isVisible = ref<boolean>(false);

onMounted(() => {
	const options = {
		rootMargin: '0px',
		threshold: 0.5,
	}

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				animatedDiv.value.classList.remove('opacity-0');
				animatedDiv.value.classList.add('animate-fade-in-section');
				animatedDiv.value.classList.add('opacity-100');

				isVisible.value = true;
				observer.unobserve(entry.target);
			}
		})
	}, options)

	observer.observe(animatedDiv.value)	
})

</script>
<template>
  <div ref="animatedDiv" class="opacity-0">
    <slot />
  </div>
</template>