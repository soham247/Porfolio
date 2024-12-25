import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Lazy-loaded components
const Home = React.lazy(() => import('./components/Home.jsx'));
const Aboutme = React.lazy(() => import('./components/Aboutme.jsx'));
const Skills = React.lazy(() => import('./components/skills/Skills.jsx'));
const Projects = React.lazy(() => import('./components/projects/Projects.jsx'));
const Contacts = React.lazy(() => import('./components/Contacts.jsx'));
const NotFound = React.lazy(() => import('./components/Errors/NotFound.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <Aboutme /> },
      { path: 'skills', element: <Skills /> },
      { path: 'projects', element: <Projects /> },
      { path: 'contact', element: <Contacts /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
