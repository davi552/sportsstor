import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styled.css'
import { register } from 'swiper/element/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Produto from './pages/contato';

register();


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/produto",
        element: <Produto/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
