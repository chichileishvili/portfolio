import React, { useContext } from 'react'

import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as WebIcon } from '../../assets/web.svg';

import { ProjectContainer, ContentContainer, ProjectInfo, ExternalLinks, Title, TechList, Image } from './Project.styles';

import { SwitchContext } from '../../contexts/switch.context';

const Project = ({ title, technologies, imageUrl, web, github }) => {
  const { isThemeDark } = useContext(SwitchContext);
  return (
    <ProjectContainer isThemeDark={isThemeDark}>
      <Image 
        src={imageUrl}
        alt={title} 
      />
      <ContentContainer>
        <ProjectInfo>
          <Title isThemeDark={isThemeDark}>{title}</Title>
          <ExternalLinks isThemeDark={isThemeDark}>
            <a target='_blank' rel='noreferrer' href={github}>
              <GithubIcon />
            </a>
            <a target='_blank' rel='noreferrer' href={web}>
              <WebIcon />
            </a>
          </ExternalLinks>
        </ProjectInfo>
        <TechList isThemeDark={isThemeDark}>
          {technologies.map((tech) => (
            <li key={tech} >
              {tech.toUpperCase()}
            </li>
          ))}
        </TechList>
      </ContentContainer>
    </ProjectContainer>
  )
}

export default Project