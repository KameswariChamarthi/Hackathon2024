// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import { useState } from 'react';
import NewsPortal from './components/newsportal/newsportal';
import News  from './components/comment/comment';
//import ViewList from './components/viewlist/viewlist';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Column from './components/column/column';
import Navigation from './components/navigation/navigation';
import Back from './components/back/back';
//import React, { useState } from "react";
//import Calendar from "react-calendar";
//import "components/react-calendar/dist/Calendar.css";
import "./App.css";
//import Calender from './components/calender/calender';


function App() {

  const [taskList,setTaskList] = useState([])
  
  return (
    <>
    <Header/>
    <Navigation/>
    <Column/>     
    <NewsPortal setTaskList={setTaskList} />
    {taskList.length > 0 && taskList.map((task,index)=>{
      return(
        <News task={task} key={index}/>
        
      )
    })}
      <Footer/>
    </> 
  );
}	

export default App;


