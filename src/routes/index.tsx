import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../../src/pages/Home'
import About from '../../src/pages/About'
import Blog from '../../src/pages/Blog'

import { Container, Content } from './styles'

import SideBar from '../components/SideBar'

export default function Routes() {
  return (
    <Container>
      <BrowserRouter>
        <SideBar />
        <Content>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </Content>
      </BrowserRouter>
    </Container>
  )
}
