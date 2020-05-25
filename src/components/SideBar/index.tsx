import React, { useState, useCallback } from 'react'
import {
  MdHome,
  MdKeyboardArrowLeft,
  MdPerson,
  MdLaptopMac,
  MdRoomService,
} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaTelegramPlane } from 'react-icons/fa'

import logoImg from '../../assets/profileDefault.png'
import { Container, Logo, List, Footer, FloatButton } from './styles'

const SideBar: React.FC = () => {
  const state = localStorage.getItem('hideMenu') === 'true'
  const [isActived, setIsActived] = useState(!state)

  const handleFloatButton = useCallback(() => {
    localStorage.setItem('hideMenu', isActived.toString())
    setIsActived(!isActived)
  }, [isActived])

  return (
    <Container isActived={isActived}>
      <FloatButton onClick={handleFloatButton}>
        <MdKeyboardArrowLeft id="btMenu" size={28} />
      </FloatButton>
      <Logo>
        <Link to="/">
          <img src={logoImg} alt="logo" />
        </Link>
      </Logo>
      <List isActived={isActived}>
        <li>
          <Link to="/">
            <span>
              <MdHome />
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span>
              <MdPerson />
            </span>
            About
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <span>
              <MdLaptopMac />
            </span>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>
              <MdRoomService />
            </span>
            Services
          </Link>
        </li>
        <li>
          <a href="https://www.google.com.br">
            <span>
              <FaTelegramPlane />
            </span>
            Contacts
          </a>
        </li>
      </List>

      <Footer>
        <a href="mailto:washington.s@escolar.ifrn.edu.br">
          washington.s@escolar.ifrn.edu.br
        </a>
      </Footer>
    </Container>
  )
}

export default SideBar
