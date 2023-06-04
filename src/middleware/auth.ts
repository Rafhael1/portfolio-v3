export default defineNuxtRouteMiddleware((to, from) => {
	// const { data: { user } } = await supabase.auth.getUser()
	console.log('test auth middleware');
});