import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  height: 100vh;

  * {
    margin: 0;
    padding: 0;
    overflow-y: hidden;
  }

  @media (max-width: 712px) {
    div,
    * {
      flex-direction: column;
      width: 100%;
      height: auto;
    }
  }
`
export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
`

export const FirstSection = styled.div`
  width: 60%;
  height: 100%;
  @media (max-width: 712px) {
    width: 100%;
  }
`
export const SecondSection = styled.div`
  width: 40%;
  height: 100%;
  @media (max-width: 712px) {
    width: 100%;
  }
  div img {
    height: 100%;
    width: auto;
  }
  @media (max-width: 712px) {
    div img {
      width: 100%;
      height: auto;
    }
  }
`
export const ThirdSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  * {
    max-width: 100%;
    height: auto;
  }
`

export const FourthSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
export const FifthSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  border: 1px solid black;
  @media (max-width: 712px) {
    width: 100%;
  }
`
export const SixthSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`
export const SeventhSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  @media (max-width: 712px) {
    width: 100%;
  }
`
export const EighthSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  border: 1px solid black;
  * {
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 712px) {
    width: 100%;
  }

  div img {
    height: 100%;
    width: auto;
  }
`

export const NinthSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 128px;
`

export const TenthSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 75%;
  border: 1px solid black;
  * {
    max-height: 100%;
    height: auto;
  }
  @media (max-width: 712px) {
    width: 100%;
  }
`

export const EleventhSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 25%;
  min-height: 128px;
  @media (max-width: 712px) {
    width: 100%;
  }
`

export const TwelfthSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  border: 1px solid black;
  @media (max-width: 712px) {
    width: 100%;
  }
`

export const ThirteenthSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  border: 1px solid black;
  @media (max-width: 712px) {
    width: 100%;
  }
`
