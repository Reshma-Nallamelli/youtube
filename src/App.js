import './App.css';
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import Search from './components/Search';
import boostrap from './css/boostrap.css'
import logo from './components/youtube.jpeg';
import "./css/boostrap.css";
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from "./components/Home";
import Shorts from "./components/Shorts";
import { createContext, useState } from 'react';
export const store=createContext();
 export function App() {
  let StudentData=[
    {
      name:"Tester",
      roll:"123456",
      branch:"CSE"
    },
    {
      name:"Tester",
      roll:"123456",
      branch:"EEE"
    }
  ]
  const[data,setData]=useState(StudentData)
  return (
    <>
    <BrowserRouter >
    <store.Provider value={[data,setData]}>
     <div className='container-fluid'>
      <div className='row'>
           <Sidebar/>
         <div className='col-md-8'>
          <Searchbar data={StudentData}/>
          <Search/>
          <Home/>
          <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Shorts' element={<Shorts/>}/>
          </Routes>
         </div> 
       </div> 
     </div> 
     </store.Provider>
    </BrowserRouter>
    </>
  );
}
export default App;
