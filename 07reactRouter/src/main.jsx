import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//react router
import { 
        createBrowserRouter,
        createRoutesFromElements,
        Route,
        RouterProvider
        } from 'react-router-dom';
//Components
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx'
import About from  './components/About/About.jsx'
import User from './components/User/User.jsx';
//import loader function
import Github, {githubInfoLoader} from './components/Github/Github.jsx';

//create new instance of router
const router = createBrowserRouter(
  //Routes From Components
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      {/* Outlet serves as the place holder for this nested routes. */}
      <Route path='' element={<Home />} />
      <Route path='about' element={<About/>} />
      <Route path='user/' element={<User/>}> 
          {/*
            :userId a dynamic segment
          */}
          <Route path=":userid" element={<User/>} />
      </Route>
      <Route 
      //Specify our loader function, invoked when this route is accessed
      loader={githubInfoLoader}
      path="github" 
      element={<Github 
      />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
