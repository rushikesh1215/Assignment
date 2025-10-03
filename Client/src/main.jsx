import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import "./App.css"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-svh h-svh  flex justify-center '> <App /></div>
   
  </StrictMode>,
)
