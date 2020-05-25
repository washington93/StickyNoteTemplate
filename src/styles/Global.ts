import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Roboto', sans-serif;
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
}
`
