import React, { HTMLAttributes } from 'react'

import { Container, Description } from './styles'

interface PropsStykyNote extends HTMLAttributes<HTMLDivElement> {
  img?: string
  title?: string
}

const StickyNote: React.FC<PropsStykyNote> = ({
  img = '',
  title = '',
  children,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <img src={img} alt="Title" />
      <Description>
        <h3>{title}</h3>
        {children}
      </Description>
    </Container>
  )
}

export default StickyNote
