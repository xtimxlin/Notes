import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routers, Route } from "react-router-dom"

import App from './App.tsx'
// import NotesPage from "./notes/NotesPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routers>
              <Route path="*" element={<App/>} />
          </Routers>

      </BrowserRouter>
    {/*<App />*/}
      {/*<NotesPage />*/}
  </StrictMode>,
)
