import { defineStore } from "pinia";

interface HomeDataStoreState {
	homeData: any;
}

export const useHomeDataStore = defineStore("home", {
	state: (): HomeDataStoreState => ({
		homeData: []
	}),
	actions: {
		async getHomeData(){
			const getHomeData = (await useFetch("/api/home"))?.data?.value;

			if(getHomeData) {
				this.homeData = getHomeData;
			}
		}
	}
});
