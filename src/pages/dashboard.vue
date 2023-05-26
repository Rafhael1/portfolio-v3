<script setup lang="ts">
import { tabs, tabsContent, textareaVue, textfieldVue, selectVue, buttonVue, checkboxVue, datepickerVue } from '../components'

import { useAutoAnimate } from '@formkit/auto-animate/vue'
import { DashboardForm } from '../types/dashboard';
import { iconsList } from '../utils/iconsList';

const [parent] = useAutoAnimate();

definePageMeta({
  middleware: ["auth"]
})

onMounted(() => {
	console.log("mounted");
	// Autofill form
	form.summary = "Hello world";
});

const form = reactive<DashboardForm>({
	summary: '',
	socials: [{
		name: '',
		link: '',
		icon: ''
	}],
	specialized: [{
		title: '',
		description: '',
		icon: ''
	}],
	workExperience: [{
		title: '',
		description: '',
		company: '',
		location: '',
		startDate: '',
		endDate: '',
		present: false,
		technologies: [{
			name: '',
			icon: ''
		}]
	}],
	education: [{
		courseTitle: '',
		school: '',
		startDate: '',
		endDate: '',
		present: false,
	}],
	skills: [{
		name: '',
		icon: ''
	}],
	featuredProjects: [{
		title: '',
		description: '',
		link: '',
		thumbnail: '',
		technologies: [{
			name: '',
			icon: ''
		}]
	}],
});


const addObjectToSocial = () => {
	form.socials?.push({ name: '', link: '', icon: '' });
}

const addIbjectToSpecialized = () => {
	form.specialized?.push({ title: '', description: '', icon: '' });
}

const handleSubmit = async() => {
	await useFetch('/api/dashboard/insert', {
		method: 'POST',
		body: JSON.stringify(form)
	});
}

</script>
<template>
	<div class="mt-6 mb-6">
		<h1 class="text-3xl font-bold mb-4">Dashboard</h1>
		<form @submit.prevent="handleSubmit">
		<tabs>
			<tabsContent id="tab1" title="Summary">
				<div>
					<textareaVue placeholder="Summary" v-model="form.summary" />
				</div>
			</tabsContent>
			<tabsContent id="tab2" title="Socials">
				<div>
					<ul ref="parent">
						<li class="flex space-x-4" v-for="(social, index) in form.socials" :key="index">
							<textfieldVue placeholder="Name" v-model="social.name" />
							<textfieldVue 
								placeholder="Link" 
								aria-label="link input" 
								v-model="social.link"
							/>
							<selectVue placeholder="Select Icon" :options="iconsList" v-model="social.icon" />
						</li>
					</ul>
					<buttonVue size="md" @click="addObjectToSocial">
						Add More
					</buttonVue>
				</div>
			</tabsContent>
			<tabsContent id="tab3" title="Specialized In">
				<div ref="parent">
				<div class="border border-gray-200 p-4 rounded mb-4" v-for="field in form.specialized">
					<div class="flex space-x-4">
						<textfieldVue placeholder="Title" v-model="field.title" />
						<selectVue placeholder="Select Icon" :options="iconsList" v-model="field.icon" />
					</div>
					<textareaVue placeholder="Description" v-model="field.description" />
				</div>
				</div>
				<buttonVue size="md" @click="addIbjectToSpecialized">
					Add More
				</buttonVue>
			</tabsContent>
			<tabsContent id="tab4" title="Work Experience">
				<div class="border border-gray-200 p-4 rounded mb-4" v-for="we in form.workExperience">
					<div class="flex space-x-4">
						<textfieldVue placeholder="Title" v-model="we.title" />
						<textfieldVue placeholder="Company" v-model="we.company" />
						<textfieldVue placeholder="Location" v-model="we.location" />
					</div>
					<div class="flex space-x-4">
						<textfieldVue placeholder="Start Date" v-model="we.startDate" />
						<textfieldVue placeholder="End Date" v-model="we.endDate" />
						<checkboxVue class="mb-6" id="present" label="Present" v-model="we.present" />
					</div>
				</div>
			</tabsContent>
			<tabsContent id="tab5" title="Education">
				<div v-for="item in form.education">
					<textfieldVue placeholder="Course Title" v-model="item.courseTitle" />
					<textfieldVue placeholder="School" v-model="item.school" />
				</div>
			</tabsContent>
			<tabsContent id="tab6" title="Skills">
				<div v-for="item in form.skills">
					<textfieldVue placeholder="Tech Name" v-model="item.name" />
					<selectVue placeholder="Select Icon" :options="iconsList" v-model="item.icon" />
				</div>
			</tabsContent>
			<tabsContent id="tab7" title="Featured Projects">
				<div v-for="item in form.featuredProjects">
					<textfieldVue placeholder="Title" v-model="item.title" />
					<textfieldVue placeholder="Link" v-model="item.link" />
					<textfieldVue placeholder="Thumbnail" v-model="item.thumbnail" />
					<div v-for="tech in item.technologies">
						<textfieldVue placeholder="Tech Name" v-model="tech.name" />
						<selectVue placeholder="Select Icon" :options="iconsList" v-model="tech.icon" />
					</div>
				</div>
			</tabsContent>
		</tabs>
		<buttonVue type="submit" size="md" class="mt-4 float-right">
			Save Changes
		</buttonVue>
		</form>
	</div>
</template>