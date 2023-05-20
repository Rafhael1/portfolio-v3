import supabase from '~~/src/config/supabase';
import { DashboardForm } from '~~/src/types/dashboard';
import { HomePageObject } from '~~/src/models/homePageObject';

export default defineEventHandler(async(event) => {
	try {
		const body: DashboardForm = await readBody(event);

		if (!body || !body.education || !body.skills || !body.socials || !body.workExperience) {
			throw new Error('No body');
		}

		// Clear all existing data
		await supabase.from('HOME_PAGE').delete();

		// Save Summary
		const newSummary = new HomePageObject('summary', 'summary', body.summary)
		const summary = await supabase.from('HOME_PAGE').insert([newSummary]);

		// Format and Save Socials
		const socials = Promise.all(body.socials.map((social) => {
			const newSocial = new HomePageObject('social', 'social', social.name);
			newSocial.url = social.link;
			newSocial.image = social.icon;
	
			return supabase.from('HOME_PAGE').insert(newSocial);
		}));

		// Save education
		const education = Promise.all(body.education.map((education) => {
			const newEducation = new HomePageObject('education', 'education', education.courseTitle);
			newEducation.info2 = education.school;
			newEducation.info3 = `${education.startDate} - ${education.endDate || 'Present'}`;
	
			return supabase.from('HOME_PAGE').insert(newEducation);
		}));

		// Save work experience
		const workExperience = Promise.all(body.workExperience.map((workExperience) => {
			const newWorkExperience = new HomePageObject('workExperience', 'workExperience', workExperience.title);
			newWorkExperience.info2 = workExperience.company;
			newWorkExperience.info3 = `${workExperience.startDate} - ${workExperience.endDate || 'Present'}`;
			newWorkExperience.info4 = workExperience.description;
		}));

		// Save skills
		const skills = Promise.all(body.skills.map((skill) => {
			const newSkill = new HomePageObject('skill', 'skill', skill.name);
			newSkill.image = skill.icon;
		}));

		// Save featured projects
		
		
		await Promise.all([summary, socials, education, workExperience, skills]);
	
		return 'success';
	} catch (error) {
		throw error;
	}
});