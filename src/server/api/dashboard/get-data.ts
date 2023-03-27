import supabase from '~~/src/config/supabase';

export default defineEventHandler(async(event) => {
	try {
		const { data, error } = await supabase.from('HOME_PAGE').select('*');
		if (error) throw error;
		
		return data;
	} catch (error) {
		throw error;
	}
});