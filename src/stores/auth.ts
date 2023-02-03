import { defineStore } from 'pinia';

// interface IState {
// 	egirls?: IEgirls[];
// 	isLoadingSync?: boolean
// }

export const useEgirlsStore = defineStore('auth', {	
	state: ()  => ({}),
	actions: {
		async getEgirls() {
			// const response: IEgirls[] = (await axios.get('/nudefier/get-all'));
			// this.egirls =  response;
		},
	}
});