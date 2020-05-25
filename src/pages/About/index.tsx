import React from 'react'

import {
  Container,
  Content,
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
  SeventhSection,
  EighthSection,
  NinthSection,
  TenthSection,
  EleventhSection,
  TwelfthSection,
  ThirteenthSection,
} from './styles'

import StickyNote from '../../components/StickyNote'

import typescript from '../../assets/typescript.png'
import img2 from '../../assets/profileDefault.png'
import img3 from '../../assets/node.jpg'
import study from '../../assets/study.jpg'
import react from '../../assets/react.png'
import flexbox from '../../assets/flexbox.png'

const About: React.FC = () => (
  <Container>
    <Content>
      <FirstSection>
        <ThirdSection>
          <FourthSection>
            <SixthSection>
              <SeventhSection>
                <NinthSection>
                  <TenthSection>
                    <StickyNote img={img3} title="Primeiro projeto com NodeJS">
                      Aprenda a desenvolver uma aplicação backend com NodeJS e
                      ExpressJS.
                    </StickyNote>
                  </TenthSection>
                  <EleventhSection>
                    <TwelfthSection>
                      <StickyNote img={study} title="Dicas de Estudo">
                        Aprenda a criar cronogramas e manter seu progresso salvo
                        na nuvem.
                      </StickyNote>
                    </TwelfthSection>
                    <ThirteenthSection>
                      <StickyNote img={typescript} title="TypeScript">
                        Aprenda a criar um projeto com Typescript do zero
                      </StickyNote>
                    </ThirteenthSection>
                  </EleventhSection>
                </NinthSection>
              </SeventhSection>
              <EighthSection>
                <StickyNote img={img2} title="Mercado de trabalho">
                  Dicas para desenvolvedores que procuram uma vaga no mercado.
                  Como me destacar? O que o mercado procura?
                </StickyNote>
              </EighthSection>
            </SixthSection>
          </FourthSection>
          <FifthSection>
            <StickyNote img={react} title="Guia do React">
              Aprenda a desenvolver uma aplicação web com ReactJS do zero.
            </StickyNote>
          </FifthSection>
        </ThirdSection>
      </FirstSection>
      <SecondSection>
        <StickyNote img={flexbox} title="Template responsivo">
          Desenvolva um template responsivo do zero
        </StickyNote>
      </SecondSection>
    </Content>
  </Container>
)

export default About
