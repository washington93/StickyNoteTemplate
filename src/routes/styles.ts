import styled from 'styled-components'

interface PropsSection {
  sideBar?: boolean
}

export const Container = styled.div`
  display: flex;
  outline: 0;
`
export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  margin: 0;
  margin-left: 80px;
  @media (max-width: 712px) {
  }
`
