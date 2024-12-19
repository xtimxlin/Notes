import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { BrowserRouter, Routers, Route } from "react-router-dom"
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import App from './App.tsx'
// import NotesPage from "./notes/NotesPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter basename="/Notes/">
          <Routes>
              <Route path="*" element={<App/>} />
          </Routes>

      </BrowserRouter>pm start

    {/*<App />*/}
      {/*<NotesPage />*/}
  </StrictMode>,
)
