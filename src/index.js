import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Container from './components/Container';
import Play from './components/Play';
import Newgame from './components/Newgame';
import Quit from './components/Quit';

const router = createBrowserRouter(
 
   createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Container/>}/>
       <Route path='/play' element={<Play />} />
       <Route path='/newgame' element={<Newgame />}>
        
       </Route>
       <Route path='/newgame/popup' element={<Quit/>}></Route>
    </Route>
  )
  
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


