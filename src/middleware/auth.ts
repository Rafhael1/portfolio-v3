export default defineNuxtRouteMiddleware((to, from) => {
	// const { data: { user } } = await supabase.auth.getUser()
	// const user = useSupabaseUser();

  // if (!user.value) {
  //   return navigateTo('/login');
  // }
	if(process.client){
		const user = localStorage?.getItem('accessToken')
		if (!user) {
    	return navigateTo('/login')
  	}
	}
})