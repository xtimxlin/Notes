import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NotesPage from "./notes/NotesPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <NotesPage />
  </StrictMode>,
)
