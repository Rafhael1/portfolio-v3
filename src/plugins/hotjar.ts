import VueHotjar from "vue-hotjar-next";

export default defineNuxtPlugin(({ vueApp }) => {
	vueApp.use(VueHotjar, {		
		id: 3649822,
		isProduction: process.env.NODE_ENV !== "development",
		snippetVersion: 6
	});
});