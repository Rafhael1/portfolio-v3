import supabaseAuth from '~~/src/config/supabase';

export default defineEventHandler(async(event) => {
	try {
		const body = await readBody(event);
		const { data, error } = await supabaseAuth.auth.signInWithPassword({
			email: body.email,
			password: body.password
		});
		if (error) throw error;
  
		return data;
	} catch (error) {
		return error;
	}
});