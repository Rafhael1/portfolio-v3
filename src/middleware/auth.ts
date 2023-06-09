export default defineNuxtRouteMiddleware((to, from) => {
	// const { data: { user } } = await supabase.auth.getUser()
	if(process.client){
		const user = localStorage?.getItem('accessToken')
		if (!user) {
    	return navigateTo('/login')
  	}
	}
})