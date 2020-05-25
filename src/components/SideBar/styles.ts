import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface ContainerProps {
  isActived: boolean
}

interface ListProps {
  isActived: boolean
}

interface FloatButtonProps {
  isActived: boolean
}

export const Container = styled.nav<ContainerProps>`
  position: absolute;
  z-index: 999;
  display: flex;
  flex-direction: column;
  transition: width 1.5s;
  background: linear-gradient(
    0deg,
    rgba(63, 63, 63, 1) 0%,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 1) 100%
  );
  width: 270px;

  ${props =>
    !props.isActived &&
    css`
      width: 80px;
      div:last-child a {
        color: rgba(0, 0, 0, 0);
      }
    `}

  min-height: 100vh;
  text-align: center;
  ${props =>
    !props.isActived &&
    css`
      #btMenu {
        transform: rotate(180deg);
      }
    `}
  @media(max-width: 712px) {
    height: 100vh;
    display: block;
  }
`

export const FloatButton = styled.button`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 0px;
  top: 0px;
  border: none;
  border-radius: 50%;
  background: #000;

  #btMenu {
    color: white;
    transition: color 0.2s;
  }
  &:hover {
    #btMenu {
      color: ${shade('0.2', '#fff')};
    }
  }
`

export const Logo = styled.h1`
  display: block;
  overflow: hidden;
  color: #fff;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  a {
    border-radius: 50%;
    img {
      border-radius: 50%;
      width: 64px;
    }
  }
  @media (max-width: 712px) {
    padding: 8px;
    a {
      img {
        width: 32px;
      }
    }
  }
`

export const List = styled.ul<ListProps>`
  flex: 1;
  transition: 0.3s;
  li {
    display: flex;
    justify-content: center;
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 16px;
    color: #fff;
    transition: height 1s;
    &:hover {
    }
    a {
      display: flex;
      color: #fff;
      ${props =>
        !props.isActived &&
        css`
          flex-direction: column;
        `}
      text-decoration: none;
      span {
        margin-right: 15px;
        ${props =>
          !props.isActived &&
          css`
            margin-right: 0;
          `}
        display: inline-block;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
      }
      &:hover {
        color: ${shade('0.2', 'white')};
        transition: transform 0.2s;
        transform: scale(1.1);
      }
    }
    @media (max-width: 712px) {
    }
  }

  list-style: none;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  a {
    transition: color 2s;
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
  }
`
