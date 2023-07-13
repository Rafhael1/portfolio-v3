import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
		fallbackLocale: 'en',
    messages: {
      en: {
				// Section Titles and Subtitles
        sectionOneTitle: 'MY NAME IS',
				sectionTwoTitle: 'CAREER PATH',
				sectionTwoSubTitle: 'Work Experience',
				sectionThreeTitle: 'MY SKILLS',
				sectionThreeSubTitle: 'Technologies',
				sectionFourTitle: 'MY WORK',
				sectionFiveTitle: 'Featured Projects',
				sectionSixTitle: 'Contact',
      },
			// pt: {
			// 	// Section Titles and Subtitles
			// 	sectionOneTitle: 'MEU NOME É',
			// 	sectionTwoTitle: 'CARREIRA',
			// 	sectionTwoSubTitle: 'Experiência Profissional',
			// 	sectionThreeTitle: 'HABILIDADES',
			// 	sectionThreeSubTitle: 'Tecnologias',
			// 	sectionFourTitle: 'TRABALHOS',
			// 	sectionFiveTitle: 'Projetos Destacados',
			// 	sectionSixTitle: 'Contato',
			// }
    }
  })

  vueApp.use(i18n)
})