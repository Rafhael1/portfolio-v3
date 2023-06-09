import supabaseAuth from '~~/src/config/supabase';

export default defineEventHandler(async(event) => {
	try {
		const { data: { user }, error } = await supabaseAuth.auth.getUser();

		if (error) error;
  
		return user?.aud === 'authenticated';
	} catch (error) {
		return error;
	}
});