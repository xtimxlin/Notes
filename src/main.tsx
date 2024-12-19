import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { BrowserRouter, Routers, Route } from "react-router-dom"
// import { BrowserRouter, Routes, Route  } from 'react-router-dom';
//
// import App from './App.tsx'
// import NotesPage from "./notes/NotesPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <h1>hello</h1>
      {/*<BrowserRouter basename="/Notes/">*/}
      {/*    <Routes>*/}
      {/*        <Route path="*" element={<App/>} />*/}
      {/*    </Routes>*/}

      {/*</BrowserRouter>*/}

      {/*<App />*/}
      {/*<NotesPage />*/}
  </StrictMode>,
)
