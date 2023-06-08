<script setup lang="ts">
import { tabs, tabsContent, textareaVue, textfieldVue, selectVue, buttonVue, checkboxVue } from '../components';

import { useAutoAnimate } from '@formkit/auto-animate/vue';
import { DashboardForm } from '../types/dashboard';
import { iconsList } from '../utils/iconsList';

const [parent] = useAutoAnimate();

definePageMeta({
	middleware: ["auth"]
});

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
};

const addObjectToSpecialized = () => {
	form.specialized?.push({ title: '', description: '', icon: '' });
};

const handleSubmit = async() => {
	await useFetch('/api/dashboard/insert', {
		method: 'POST',
		body: JSON.stringify(form)
	});
};

</script>
<template>
  <div class="mt-6 mb-6">
    <h1 class="text-3xl font-bold mb-4">
      Dashboard
    </h1>
    <form @submit.prevent="handleSubmit">
      <tabs>
        <tabsContent
          id="tab1"
          title="Summary"
        >
          <div>
            <textareaVue
              v-model="form.summary"
              placeholder="Summary"
            />
          </div>
        </tabsContent>
        <tabsContent
          id="tab2"
          title="Socials"
        >
          <div>
            <ul ref="parent">
              <li
                v-for="(social, index) in form.socials"
                :key="index"
                class="flex space-x-4"
              >
                <textfieldVue
                  v-model="social.name"
                  placeholder="Name"
                />
                <textfieldVue 
                  v-model="social.link" 
                  placeholder="Link" 
                  aria-label="link input"
                />
                <selectVue
                  v-model="social.icon"
                  placeholder="Select Icon"
                  :options="iconsList"
                />
              </li>
            </ul>
            <buttonVue
              size="md"
              @click="addObjectToSocial"
            >
              Add More
            </buttonVue>
          </div>
        </tabsContent>
        <tabsContent
          id="tab3"
          title="Specialized In"
        >
          <div ref="parent">
            <div
              v-for="field, index in form.specialized"
              :key="index"
              class="border border-gray-200 p-4 rounded mb-4"
            >
              <div class="flex space-x-4">
                <textfieldVue
                  v-model="field.title"
                  placeholder="Title"
                />
                <selectVue
                  v-model="field.icon"
                  placeholder="Select Icon"
                  :options="iconsList"
                />
              </div>
              <textareaVue
                v-model="field.description"
                placeholder="Description"
              />
            </div>
          </div>
          <buttonVue
            size="md"
            @click="addObjectToSpecialized"
          >
            Add More
          </buttonVue>
        </tabsContent>
        <tabsContent
          id="tab4"
          title="Work Experience"
        >
          <div
            v-for="we, index in form.workExperience"
            :key="index"
            class="border border-gray-200 p-4 rounded mb-4"
          >
            <div class="flex space-x-4">
              <textfieldVue
                v-model="we.title"
                placeholder="Title"
              />
              <textfieldVue
                v-model="we.company"
                placeholder="Company"
              />
              <textfieldVue
                v-model="we.location"
                placeholder="Location"
              />
            </div>
            <div class="flex space-x-4">
              <textfieldVue
                v-model="we.startDate"
                placeholder="Start Date"
              />
              <textfieldVue
                v-model="we.endDate"
                placeholder="End Date"
              />
              <checkboxVue
                id="present"
                v-model="we.present"
                class="mb-6"
                label="Present"
              />
            </div>
          </div>
        </tabsContent>
        <tabsContent
          id="tab5"
          title="Education"
        >
          <div
            v-for="item, index in form.education"
            :key="index"
          >
            <textfieldVue
              v-model="item.courseTitle"
              placeholder="Course Title"
            />
            <textfieldVue
              v-model="item.school"
              placeholder="School"
            />
          </div>
        </tabsContent>
        <tabsContent
          id="tab6"
          title="Skills"
        >
          <div
            v-for="item, index in form.skills"
            :key="index"
          >
            <textfieldVue
              v-model="item.name"
              placeholder="Tech Name"
            />
            <selectVue
              v-model="item.icon"
              placeholder="Select Icon"
              :options="iconsList"
            />
          </div>
        </tabsContent>
        <tabsContent
          id="tab7"
          title="Featured Projects"
        >
          <div
            v-for="item, index in form.featuredProjects"
            :key="index"
          >
            <textfieldVue
              v-model="item.title"
              placeholder="Title"
            />
            <textfieldVue
              v-model="item.link"
              placeholder="Link"
            />
            <textfieldVue
              v-model="item.thumbnail"
              placeholder="Thumbnail"
            />
            <div
              v-for="tech, index in item.technologies"
              :key="index"
            >
              <textfieldVue
                v-model="tech.name"
                placeholder="Tech Name"
              />
              <selectVue
                v-model="tech.icon"
                placeholder="Select Icon"
                :options="iconsList"
              />
            </div>
          </div>
        </tabsContent>
      </tabs>
      <buttonVue
        type="submit"
        size="md"
        class="mt-4 float-right"
      >
        Save Changes
      </buttonVue>
    </form>
  </div>
</template>