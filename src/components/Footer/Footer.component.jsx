import React, { useContext } from 'react'

import { ContentContainer, FooterContainer, Text, Link } from './Footer.styles'

import { SwitchContext } from '../../contexts/switch.context'

const Footer = () => {
  const { isThemeDark } = useContext(SwitchContext)
  return (
    <FooterContainer>
      <ContentContainer>
        <Text isThemeDark={isThemeDark}>
          © 2024 Created By <span>Giorgi Tchitchileishvili</span>
        </Text>
        <div>
          <Link
            isThemeDark={isThemeDark}
            href='mailto:giochichileishvili20@gmail.com'
            rel='noopener noreferrer'
            target='_blank'>
            EMAIL
          </Link>
          <Link
            isThemeDark={isThemeDark}
            href='https://github.com/chichileishvili'
            rel='noopener noreferrer'
            target='_blank'>
            GITHUB
          </Link>
          <Link
            isThemeDark={isThemeDark}
            href='https://www.linkedin.com/in/giorgi-chichileishvili-2a0770249/'
            rel='noopener noreferrer'
            target='_blank'>
            LINKEDIN
          </Link>
        </div>
      </ContentContainer>
    </FooterContainer>
  )
}

export default Footer
