import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { Container } from  './App.styles'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Container>
    <App />
    </Container>
  </React.StrictMode>
)
