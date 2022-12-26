import Link from 'next/link'
import {
  Envelope,
  MapPin,
  TelegramLogo,
  WhatsappLogo,
} from 'phosphor-react'
import { Container, Title } from '../../styles/styles'
import { ContainerContact, ContactContent } from './styles'

export function Contact() {
  return (
    <Container id="contact">
      <ContainerContact>        
          <Title>
            Contato
            <span><Envelope /> Contact</span>
          </Title>

        <ContactContent>
          <div className="contact-content">
            <h4><WhatsappLogo size={22}  color="#00fffb" /> WhatsApp </h4>
            <Link href="https://api.whatsapp.com/send?phone=5521976748767">
              <a target="_blank">
                <span>+55 21 97674-8767</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4> <TelegramLogo size={22} color="#00fffb" /> Email </h4>
            <Link href="mailto:saagas.code@gmail.com">
              <a target="_blank">
                <span>saagas.code@gmail.com</span>
              </a>
            </Link>
          </div>

          <div className="contact-content">
            <h4><MapPin size={22} color="#00fffb" /> Localização</h4>
            <span>Mesquita - RJ</span>
          </div>
        </ContactContent>
        
      </ContainerContact>
    </Container>
  )
}
