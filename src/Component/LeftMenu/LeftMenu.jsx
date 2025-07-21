// import { NavLink } from "react-router-dom";
// import "./LeftMenu.css";

// export default function LeftMenu({ options = [] }) {
//     console.log(options);
//   return (
//    <div className="left-menu">
//   <h2 className="menu-title">Menu</h2>
//   {options.map((item, index) => (
//     <p key={index}>{item.value}</p>
//   ))}
// </div>

//   );
// }


import { NavLink } from "react-router-dom";
import "./LeftMenu.css";

export default function LeftMenu({ options = [] }) {
  return (
    <div className="left-menu">
      <h2 className="menu-title">Menu</h2>
      <ul className="menu-list">
        {options.map((item, index) => (
          <li key={index} className="menu-item">
            <NavLink
              to={`/${item.value.toLowerCase()}`}
              className={({ isActive }) =>
                isActive ? "menu-link active" : "menu-link"
              }
            >
              {item.value}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
