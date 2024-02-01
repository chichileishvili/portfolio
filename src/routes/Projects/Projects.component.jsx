import React, { useContext } from 'react'

import Project from '../../components/Project/Project.component'
import { Section, ProjectsContainer, ProjectsHeader } from './Projects.styles'

import { SwitchContext } from '../../contexts/switch.context'

const PROJECTS = [
  {
    title: 'Jobify',
    github: 'https://github.com/chichileishvili/jobify-app',
    web: 'https://jobify-app-41eq.onrender.com/',
    imageUrl: '/images/jobify-screenshot.png',
    technologies: ['React', 'Node.js', 'Express', 'MONGODB'],
  },
  {
    title: 'Native Clothing',
    github: 'https://github.com/chichileishvili/native-clothing',
    web: 'https://native-clothing.netlify.app/',
    imageUrl: '/images/crwn-clothing.PNG',
    technologies: ['React', 'Redux', 'TYPESCRIPT', 'FIREBASE', 'STRIPE'],
  },
  {
    title: 'The Dojo',
    github: 'https://github.com/chichileishvili/the-dojo',
    web: 'https://dojo-b7414.web.app/create',
    imageUrl: '/images/the-dojo.PNG',
    technologies: ['React', 'FIREBASE'],
  },
  {
    title: 'Money Prducts',
    github: 'https://github.com/chichileishvili/my-money',
    web: 'https://money-products.netlify.app/',
    imageUrl: '/images/finance-tracker.PNG',
    technologies: ['React', 'FIREBASE'],
  },

  {
    title: 'Chat App(Sasaubro App)',
    github: 'https://github.com/chichileishvili/chat-app',
    web: 'https://visaubrot-app-818c8500ffc7.herokuapp.com/',
    imageUrl: '/images/chat-app.PNG',
    technologies: ['Node.js', 'SOCKET.IO'],
  },
  {
    title: 'Weather App',
    github: 'https://github.com/chichileishvili/weather-app',
    web: 'https://amindi-app-c19db985e81e.herokuapp.com/',
    imageUrl: '/images/weather-app.PNG',
    technologies: ['Node.js'],
  },
]

const Projects = () => {
  const { isThemeDark } = useContext(SwitchContext)
  return (
    <Section id='projects'>
      <ProjectsHeader isThemeDark={isThemeDark}>Projects Created By Me</ProjectsHeader>
      <ProjectsContainer>
        {PROJECTS.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </ProjectsContainer>
    </Section>
  )
}

export default Projects
