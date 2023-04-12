export interface DashboardForm {
	summary?: string;
	socials?: {
		name: string;
		link: string;
		icon: string;
	}[];
	specialized?: {
		title: string;
		description: string;
		icon: string;
	}[];
	workExperience?: {
		title: string;
		company: string;
		location: string;
		startDate: string;
		endDate?: string;
		present?: boolean;
		description: string;
		technologies: {
			name: string;
			icon: string;
		}[];
	}[];
	education?: {
		courseTitle: string;
		school: string;
		startDate: string;
		endDate?: string;
		present?: boolean;
	}[];
	skills?: {
		name: string;
		icon: string;
	}[];
	featuredProjects?: {
		title: string;
		description: string;
		link: string;
		thumbnail: string;
		technologies: {
			name: string;
			icon: string;
		}[];
	}[];
}