import { defineStore } from "pinia";

interface IState {
	isLoading: boolean;
	auth?: any;
}

export const useAuthStore = defineStore("auth", {	
	state: (): IState  => ({
		isLoading: false,
		auth: null
	}),
	actions: {
		async login(form: { email: string; password: string }) {
			const router = useRouter();
			
			this.isLoading = true;
			const login: any = await useFetch("/api/auth/login", {
				method: "POST",
				body: form
			});


			const accessToken: string = login.data.value?.session?.access_token;

			if (accessToken) {
				localStorage.setItem("accessToken", accessToken);
				// redirect to home 
				this.isLoading = false;
				router.push("/dashboard");
				return true;				
			}
			
			this.isLoading = false;
			return false;
			
		},
		async isAuth() {
			const accessToken = localStorage.getItem("accessToken");
			if (accessToken) {
				const isAuth: any = await useFetch("/api/auth/is-auth", {
					method: "POST",
					body: {
						accessToken
					}
				});
				if(isAuth.data.value !== null){
					if (isAuth.data.value) {
						return navigateTo("/dashboard");
					}
					return navigateTo("/login");
				}
			} else {
				return navigateTo("/login");
			}
		}
	}
});