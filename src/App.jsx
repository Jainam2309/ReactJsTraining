// import './App.css'

// import LudoBoard from './Component/LudoBoard'
// import TodoList from './Component/TodoList'
// import Lottery from './Component/Lottery'
// import React, { useState, useEffect } from 'react';
// import Data from './Component/Data'
// import Joker from './Component/Joker'
// import Comments from './Component/Comments'

// import Item from './Component/Item'

// import Counter from './Component/Counter'

// import City from './Component/City'
// import Practice from './Component/Practice'
// import Profile from './Component/Profile'
// import LiveCharacterCount from './Component/LiveCharacterCount'
// import Toogle from './Component/Toogle'
// import Password from './Component/Password'
// import RandomNumber from './Component/RandomNumber';
// import Router from './Component/Router/Router';
// import LeftMenu from './Component/LeftMenu/LeftMenu';











// function App() {

//   const [selectedApp, setSelectedapp] = useState("LudoBoard");
//   const options = [
//   { value: "LudoBoard" },
//   { value: "TodoList" },
//   { value: "Lottery" },
//   { value: "Counter" },
//   { value: "Data" },
//   { value: "Comments" },
//   { value: "Joker" },
//   { value: "Practice" },
//   { value: "Item" },
//   { value: "City" },
//   { value: "Profile" },
//   { value: "LiveCharacterCount" },
//   { value: "Toogle" },
//   { value: "Password" },
//   { value: "RandomNumber" },
//   { value: "Router"},
//    {value: "LeftMenu"}
// ];

//   const handleChange = (e) => {
//     setSelectedapp(e.target.value);
//   }


//   return (
//     <>
//       <h2>Choose a Component </h2>
//       <select onChange={handleChange}>
//         {options.map((opt, index) => (
//           <option key={index} value={opt.value}>
//             {opt.value}
//           </option>
//         ))}
      





//       </select>

//       {selectedApp === "LudoBoard" && <LudoBoard />}
//       {selectedApp === "TodoList" && <TodoList />}
//       {selectedApp === "Lottery" && <Lottery />}
//       {selectedApp === "Counter" && <Counter />}
//       {selectedApp === "Data" && <Data />}
//       {selectedApp === "Comments" && <Comments />}
//       {selectedApp === "Joker" && <Joker />}
//       {selectedApp === "Practice" && <Practice />}
//       {selectedApp === "Item" && <Item />}
//       {selectedApp === "City" && <City />}
//       {selectedApp === "Profile" && <Profile />}
//       {selectedApp === "LiveCharacterCount" && <LiveCharacterCount />}
//       {selectedApp === "Toogle" && <Toogle />}
//       {selectedApp === "Password" && <Password />}
//       {selectedApp === "RandomNumber" && <RandomNumber />}
//       {selectedApp === "Router" && <Router/>}
//       {selectedApp === "LeftMenu" &&<LeftMenu options={options}/>}
//       {/* {selectedApp === "StudyMain" && <StudyMain/>} */}









//     </>
//   )
// }

// export default App

// import './App.css';
// import { Routes, Route } from "react-router-dom";

// import LudoBoard from './Component/LudoBoard'
// import TodoList from './Component/TodoList'
// import Lottery from './Component/Lottery'
// import Data from './Component/Data'
// import Joker from './Component/Joker'
// import Comments from './Component/Comments'
// import Item from './Component/Item'
// import Counter from './Component/Counter'
// import City from './Component/City'
// import Practice from './Component/Practice'
// import Profile from './Component/Profile'
// import LiveCharacterCount from './Component/LiveCharacterCount'
// import Toogle from './Component/Toogle'
// import Password from './Component/Password'
// import RandomNumber from './Component/RandomNumber'
// import RouterComponent from './Component/Router/Router'
// import LeftMenu from './Component/LeftMenu/LeftMenu'
// import RandomGIF from './Component/RandomGIF';

// function App() {
//   const options = [
//     { value: "LudoBoard" },
//     { value: "TodoList" },
//     { value: "Lottery" },
//     { value: "Counter" },
//     { value: "Data" },
//     { value: "Comments" },
//     { value: "Joker" },
//     { value: "Practice" },
//     { value: "Item" },
//     { value: "City" },
//     { value: "Profile" },
//     { value: "LiveCharacterCount" },
//     { value: "Toogle" },
//     { value: "Password" },
//     { value: "RandomNumber" },
//     // { value: "Router" },
//     // { value: "LeftMenu" },
//     { value: "randomgif"}
//   ];

//   return (
//     <div style={{ display: "flex" }}>
//       <div style={{ marginLeft: "220px", padding: "20px", width: "100%" }}>
//       <LeftMenu options={options} />
//       <ComponentDropdown options={options} />
//         <Routes>
//           <Route path="/ludoboard" element={<LudoBoard />} />
//           <Route path="/todolist" element={<TodoList />} />
//           <Route path="/lottery" element={<Lottery />} />
//           <Route path="/counter" element={<Counter />} />
//           <Route path="/data" element={<Data />} />
//           <Route path="/comments" element={<Comments />} />
//           <Route path="/joker" element={<Joker />} />
//           <Route path="/practice" element={<Practice />} />
//           <Route path="/item" element={<Item />} />
//           <Route path="/city" element={<City />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/livecharactercount" element={<LiveCharacterCount />} />
//           <Route path="/toogle" element={<Toogle />} />
//           <Route path="/password" element={<Password />} />
//           <Route path="/randomnumber" element={<RandomNumber />} />
//           {/* <Route path="/router" element={<RouterComponent />} /> */}
//           {/* <Route path="/leftmenu" element={<LeftMenu options={options} />} /> */}
//           <Route path="*" element={<h2>Select a Component from the Menu</h2>} />
//            <Route path="/randomgif" element={<RandomGIF/>} />

          
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;


import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";

import LudoBoard from './Component/LudoBoard';
import TodoList from './Component/TodoList';
import Lottery from './Component/Lottery';
import Data from './Component/Data';
import Joker from './Component/Joker';
import Comments from './Component/Comments';
import Item from './Component/Item';
import Counter from './Component/Counter';
import City from './Component/City';
import Practice from './Component/Practice';
import Profile from './Component/Profile';
import LiveCharacterCount from './Component/LiveCharacterCount';
import Toogle from './Component/Toogle';
import Password from './Component/Password';
import RandomNumber from './Component/RandomNumber';
import RouterComponent from './Component/Router/Router';
import LeftMenu from './Component/LeftMenu/LeftMenu';
import RandomGIF from './Component/RandomGIF';
import ComponentDropdown from './Component/ComponentDropdown'; 
import Router from './Component/Router/Router';
import TodoList2 from './Component/TodoList2';


function App() {
  const location = useLocation();
  const options = [
    { value: "LudoBoard" },
    { value: "TodoList" },
    { value: "Lottery" },
    { value: "Counter" },
    { value: "Data" },
    { value: "Comments" },
    { value: "Joker" },
    { value: "Practice" },
    { value: "Item" },
    { value: "City" },
    { value: "Profile" },
    { value: "LiveCharacterCount" },
    { value: "Toogle" },
    { value: "Password" },
    { value: "RandomNumber" },
    { value: "randomgif" },
    { value : "route"},
    { value : "todolist2"},
  
  
  ];

  const pathToComponentName ={
    "/ludoboard" : "LudoBoard",
    "/todolist" : "Todo List",
    "/lottery" : "Lottery",
    "/counter" : "Counter",
    "/data" : "Data",
    "/comments" : "Comments",
    "/joker" : "Joker",
    "/practice" : "Practice",
    "/item" : "Item Manager",
    "/city" : "City Info",
    "/profile" : "Profile",
    "/livecharactercount" : "Live character count",
    "/toogle" : "Toogle Switch",
    "/password" : "Password Strength Checker",
    "/randomnumber" : "Random mber Genarator",
    "/randomgif" : "Random gif",
    "/route" : "Router",
    "/todolist2" : "Todo List2"
    
     }

  const heading = pathToComponentName[location.pathname];

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginLeft: "220px", width: "100%" }}>
        <LeftMenu options={options} />
        

        {heading && <h1 style={{
      textAlign: "center",
      fontSize: "1.5rem",
      marginBottom: "30px",
      marginTop: "0px",
      padding: "10px 20px",
      backgroundColor: "#2c3e50",
      color: "#ffffff",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      textTransform: "uppercase",
      letterSpacing: "1px",}}>{heading}</h1>}
      <ComponentDropdown options={options} />
        <Routes>
          <Route path="/ludoboard" element={<LudoBoard />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/lottery" element={<Lottery />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/data" element={<Data />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/joker" element={<Joker />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/item" element={<Item />} />
          <Route path="/city" element={<City />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/livecharactercount" element={<LiveCharacterCount />} />
          <Route path="/toogle" element={<Toogle />} />
          <Route path="/password" element={<Password />} />
          <Route path="/randomnumber" element={<RandomNumber />} />
          <Route path="/randomgif" element={<RandomGIF />} />
           <Route path="/route" element={<Router />} />
           <Route path="todolist2" element={<TodoList2/>} />
          <Route path="*" element={<h2>Select a Component from the Menu</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

