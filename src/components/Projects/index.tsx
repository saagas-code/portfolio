/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import projects from './projects'
import { ProjectsContainer, ProjectsContent } from './styles'
import { Container, Title } from '../../styles/styles'
import { AllProjects } from './Github'
import { Briefcase } from 'phosphor-react'

interface Projects {
  url: string
  title: string
  img: string
}

export function Projects() {
  return (
    <Container id="projects">
      <Title>
        Projetos
        <span><Briefcase /> Projects</span>
      </Title>
      <ProjectsContainer>
        {projects.map(project => {
          return (
            <Link href={`${project.url}`} key={project.id}>
              <a>
                <ProjectsContent>
                  <img src={project.img} alt={project.title} />
                  <div className="title">
                    <h2>{project.title}</h2>
                  </div>
                </ProjectsContent>
              </a>
            </Link>
          )
        })}
      </ProjectsContainer>
      <AllProjects />
    </Container>
  )
}
