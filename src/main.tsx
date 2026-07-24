import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { LogbookThemeProvider } from './theme/LogbookThemeProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LogbookThemeProvider>
      <App />
    </LogbookThemeProvider>
  </StrictMode>,
)
