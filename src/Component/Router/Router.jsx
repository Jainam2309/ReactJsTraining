// import { Routes,Route } from "react-router-dom"
// import Home from "../Home"
// import Support from "../Support"
// import About from "../About"
// import Help from "../Help"
// import { Link,NavLink } from "react-router-dom"

// export default function Router() {
//     return(
//         <div>
//             <h2>Router</h2>

//             <nav>
//                 <li><NavLink to="/home">Home</NavLink></li>
//                 <li><NavLink to="/support">Support</NavLink></li>
//                 <li><NavLink to="/about">About</NavLink></li>
//                 <li><NavLink to="/help">Help</NavLink></li>
//             </nav>
//             <Routes>
//                 <Route path="/home" element={<Home/>}/>
//                   <Route path="/support" element={<Support/>}/>
//                     <Route path="/about" element={<About/>}/>
//                       <Route path="/help" element={<Help/>}/>
//                   </Routes>
//         </div>
//     )
// }


// import { Routes, Route, NavLink } from "react-router-dom";
// import Home from "../Router/Home";
// import Support from "./Support";
// import About from "./About";
// import Help from "./Help";

// export default function Router() {
//     const wrapperStyle = {
//         display: "flex",
//         width: "100%",
//         height: "100vh",
//         margin: 0,
//         padding: 0,
//     };

//     const sidebarStyle = {
//         width: "200px",
//         background: "#2c3e50",
//         padding: "20px",
//         color: "#ecf0f1",
//         boxSizing: "border-box"
//     };

//     const linkStyle = {
//         display: "block",
//         color: "#ecf0f1",
//         textDecoration: "none",
//         marginBottom: "15px",
//         padding: "10px",
//         borderRadius: "5px"
//     };

//     const activeLinkStyle = {
//         backgroundColor: "#34495e"
//     };

//     const contentStyle = {
//         flex: 1,
//         backgroundColor: "#f4f4f4",
//         padding: "30px",
//         overflowY: "auto",
//         boxSizing: "border-box"
//     };

//     return (
//         <div style={wrapperStyle}>
            
//             <nav style={sidebarStyle}>
//                 <h2>Menu</h2>
//                 <NavLink
//                     to="/route/home"
//                     style={({ isActive }) =>
//                         isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
//                     }
//                 >
//                     Home
//                 </NavLink>
//                 <NavLink
//                     to="/support"
//                     style={({ isActive }) =>
//                         isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
//                     }
//                 >
//                     Support
//                 </NavLink>
//                 <NavLink
//                     to="/route/about"
//                     style={({ isActive }) =>
//                         isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
//                     }
//                 >
//                     About
//                 </NavLink>
//                 <NavLink
//                     to="/help"
//                     style={({ isActive }) =>
//                         isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle
//                     }
//                 >
//                     Help
//                 </NavLink>
//             </nav>

          
//             <div style={contentStyle}>
//                 <Routes>
//                     <Route path="/route/home" element={<Home />} />
//                     <Route path="/support" element={<Support />} />
//                     <Route path="/route/about" element={<About />} />
//                     <Route path="/help" element={<Help />} />
//                 </Routes>
//             </div>
//         </div>
//     );
// }

import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../Router/Home";
import Support from "./Support";
import About from "./About";
import Help from "./Help";

export default function Router() {
  const wrapperStyle = {
    display: "flex",
    width: "100%",
    height: "100vh",
    margin: 0,
    padding: 0,
  };

  const sidebarStyle = {
    width: "200px",
    background: "#2c3e50",
    padding: "20px",
    color: "#ecf0f1",
    boxSizing: "border-box"
  };

  const linkStyle = {
    display: "block",
    color: "#ecf0f1",
    textDecoration: "none",
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "5px"
  };

  const activeLinkStyle = {
    backgroundColor: "#34495e"
  };

  const contentStyle = {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: "30px",
    overflowY: "auto",
    boxSizing: "border-box"
  };

  return (
    <div style={wrapperStyle}>
      <nav style={sidebarStyle}>
        <h2>Menu</h2>
        <NavLink to="home" style={({ isActive }) => isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>
          Home
        </NavLink>
        <NavLink to="support" style={({ isActive }) => isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>
          Support
        </NavLink>
        <NavLink to="about" style={({ isActive }) => isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>
          About
        </NavLink>
        <NavLink to="help" style={({ isActive }) => isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle}>
          Help
        </NavLink>
      </nav>

      <div style={contentStyle}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="support" element={<Support />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<Help />} />
        </Routes>
      </div>
    </div>
  );
}
