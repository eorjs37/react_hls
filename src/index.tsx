import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/reset.css'
import './styles/styles.css'
import { HashRouter as Router } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Router>
    <App />
  </Router>,
)
