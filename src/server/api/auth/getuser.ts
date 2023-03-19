import supabaseAuth from '~~/src/config/auth';

export default defineEventHandler(async(event) => {
	try {
		const { data: { user }, error } = await supabaseAuth.auth.getUser()

		if (error) error;
  
		return user;
	} catch (error) {
		return error;
	}
});