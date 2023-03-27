import supabaseAuth from '~~/src/config/supabase';

export default defineEventHandler(async() => {
	try {
		let { data, error } = await supabaseAuth.auth.signInWithPassword({
			email: 'rafhaelmarques@protonmail.com',
			password: 'test123@'
		})
		
		if (error) error;
  
		return data;
	} catch (error) {
		return error;
	}
});