import React, { useContext } from 'react';
import { AppContext } from '../context/provider';
import { createBrowserHistory } from 'history';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from '../Home/Home';
import Skeleton from './Skeleton';


export const history = createBrowserHistory();

const HomeTest = () => {
  return (
    <div>This is home component</div>
  )
}

const AppRouter = () => { 
  // const [state, setState] = useContext(AppContext);
  // const role = state.login?.user?.role;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Skeleton props={<Home/>}/>}/>  
      </Routes>
    </BrowserRouter>
  )

}

export default AppRouter;