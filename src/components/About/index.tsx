/* eslint-disable @next/next/no-img-element */
import { DownloadSimple, User } from 'phosphor-react'
import { Container, Title } from '../../styles/styles'
import { ButtonPrimary } from '../../styles/styles'
import { AboutContainer } from './styles'
import { ThemeProvider } from 'styled-components';

export function About() {
  return (
    <Container id="about">
      <Title>
        Sobre
        <span>
          <User /> About
        </span>
      </Title>
      <AboutContainer>
        <div className="AboutImg">
          <img
            className="AboutImg"
            src="/matheus.jpeg"
            alt="Imagem de perfil Matheus"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <p>
              Olá, me chamo Matheus Almeida, sou um desenvolvedor Full-Stack atualmente vivo
              em Mesquita-RJ, estou cursando Ciências da Computacão e indo para o 2º Semestre.
            </p>
            <p>
              Meu primeiro interesse e contato com a programacão se deu no inicio
              de 2022, com a criação de um site feito em Html e Css. Com o tempo
              se passando fui evoluindo para Javascript, React, Node.
            </p>
            <p>
              Atualmente estou estudando e desenvolvendo o máximo de projetos que
              posso, com o intuito de ampliar meus conhecimentos e ganhar experiência
              e estar cada vez mais preparado para o ambiente de mercado profissional.
            </p>
          </div>
          <a href="/pdf/Matheus-CV.pdf" download>
            <ButtonPrimary>
              <b>Download CV</b> <DownloadSimple weight="bold" />
            </ButtonPrimary>
          </a>
        </div>
      </AboutContainer>
    </Container>
  )
}
