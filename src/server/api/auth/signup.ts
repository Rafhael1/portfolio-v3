import supabaseAuth from '~~/src/config/supabase';

export default defineEventHandler(async() => {
	try {
		const { data, error } = await supabaseAuth.auth.signUp({
			email: 'rafhaelmarques@protonmail.com',
			password: 'test123@',
			options: {
				data: {
					name: 'Rafhael Freitas',
					age: 30,
				}
			}
		});

		if (error) {
			return error;
		}
  
		return data;
	} catch (error) {
		return error;
	}
});