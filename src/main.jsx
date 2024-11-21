import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Aboutme from './components/Aboutme.jsx'
import Skills from './components/skills/Skills.jsx'
import Projects from './components/projects/Projects.jsx'
import Contacts from './components/Contacts.jsx'
import NotFound from './components/Errors/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <Aboutme />
      },
      {
        path: 'skills',
        element: <Skills />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'contact',
        element: <Contacts />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
