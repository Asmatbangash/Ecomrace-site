import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home.jsx';
import About from './component/About.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from './component/Products.jsx';
import Contect from './component/Contect.jsx';

const router = createBrowserRouter([
  {path:"/", element: <App />, children:[
    {path:'/', element: <Home />},
    {path:'/about', element:<About/>},
    {path: '/products', element:<Products />},
    {path: '/contect-us', element:<Contect />}
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
