import React, { useContext } from 'react'

import { AboutContainer, AboutTextContainer, AboutText } from './About.styles'

import { SwitchContext } from '../../contexts/switch.context'

const About = () => {
  const { isThemeDark } = useContext(SwitchContext)
  return (
    <section id='about'>
      <AboutContainer>
        <AboutTextContainer>
          <AboutText isThemeDark={isThemeDark}>
            Hi, I'm Giorgi Tchitchileishvili , a web developer from Tbilisi, Georgia. I'm passionate
            about creating web apps and seek to learn more
          </AboutText>
        </AboutTextContainer>
      </AboutContainer>
    </section>
  )
}

export default About
