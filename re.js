import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Blogs from "./pages/Layout";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import './index.css';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='blogs' element={<Blogs/>}/>
          <Route path='conatct' element={<Contact/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));
