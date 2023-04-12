import supabase from "~~/src/config/supabase";
import { DashboardForm } from "~~/src/types/dashboard";
import { HomePage } from "~~/src/models/homePageObject";

export default defineEventHandler(async() => {
	console.log('Home page data is being cached...')
	try {	
		const { data, error } = await supabase.from('HOME_PAGE').select('*');
		if (error) throw error;
			
		const formattedData: DashboardForm = {
			summary: data?.find((item: HomePage) => item.info_type === 'summary') || '',
			socials: data?.filter((item: HomePage) => item.info_type === 'social') || [],
			specialized: data?.filter((item: HomePage) => item.info_type === 'specialized') || [],
			workExperience: data?.filter((item: HomePage) => item.info_type === 'work') || [],
			education: data?.filter((item: HomePage) => item.info_type === 'education') || [],
			skills: data?.filter((item: HomePage) => item.info_type === 'skill') || [],
			featuredProjects: data?.filter((item: HomePage) => item.info_type === 'featured') || [],
		};
		
		return formattedData;
	} catch (error) {
		throw error;
	}
});