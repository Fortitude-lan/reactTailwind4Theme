
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//Method 1: Use next-themes
import { ThemeProvider } from "next-themes";
//Method 2: Use ThemeProvider.tsx
// import { ThemeProvider } from './ThemeProvider.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Method 1: Use next-themes */}
    <ThemeProvider attribute="class" defaultTheme='dark' >
      {/* Method 2: Use ThemeProvider.tsx */}
      {/* <ThemeProvider > */}
      
      <App />
    </ThemeProvider>
  </StrictMode>,
)
