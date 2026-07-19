import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './components/layout/MainLayout.jsx';
import Details from './components/Details.jsx';
import UpdateUser from './components/UpdateUser.jsx';


const fetchData = ({params})=>fetch(`http://localhost:3000/users/${params.id}`)

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: App },
      { 
        path: "users/:id", 
        Component:Details  ,
        loader:fetchData
      },
      {
        path:'/update/:id',
        Component:UpdateUser,
        loader:fetchData
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />,
  </StrictMode>,
)
