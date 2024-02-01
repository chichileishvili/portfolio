import React, { useContext } from 'react'

import Projects from '../Projects/Projects.component'
import { HomeContainer, ContentContainer, Text, Button } from './Home.styles'

import { SwitchContext } from '../../contexts/switch.context'

const Home = () => {
  const { isThemeDark } = useContext(SwitchContext)
  return (
    <section id='home'>
      <HomeContainer>
        <ContentContainer>
          <Text isThemeDark={isThemeDark}>
            I'm <span>Giorgi Tchitchileishvili</span>, web developer, concentrated on building web
            apps, with equal focus on design and functionality
          </Text>
          <Button isThemeDark={isThemeDark} href='#projects'>
            View My Work
          </Button>
        </ContentContainer>
      </HomeContainer>
      <Projects />
    </section>
  )
}

export default Home
