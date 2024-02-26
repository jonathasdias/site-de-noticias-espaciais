import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import ArticlesPage from "./pages/ArticlesPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import ReportsPage from "./pages/ReportsPage.jsx";
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/articles', element: <ArticlesPage/>},
      {path: '/blogs', element: <BlogsPage/>},
      {path: '/reports', element: <ReportsPage/>},
    ] 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)