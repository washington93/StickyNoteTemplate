import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
`
export const Description = styled.div`
  color: white;
  position: absolute;
  background: rgba(0, 0, 0, 0.65);
  width: 100%;
  text-align: left;
  padding: 16px;
  height: 128px;
  bottom: 0;
  transition: transform 0.2s;
  h3 {
    margin-bottom: 8px;
  }
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`
