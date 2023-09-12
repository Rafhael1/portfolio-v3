import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {	
	state: ()  => ({}),
	actions: {
		getTheme() {
			return !!localStorage && localStorage.theme ? localStorage.theme : 'light';
		},
		switchTheme(){
			const theme = this.getTheme();
			if (theme === "light" || theme === "dark") {
				const newTheme = theme === "light" ? "dark" : "light";
				localStorage.setItem("theme", newTheme);
				window?.location?.reload();
				return;
			} else {
				// If the theme is not light or dark, set it to light
				localStorage.setItem("theme", "light");
				window?.location?.reload();
				return;
			}
		}
	}
});