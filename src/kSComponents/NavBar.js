// Still to complete for NavBar:
// - Responsive Page design:
// - - Menu items in drop down
// -- Hamburger icon to be made bigger
//-- Logo to stay on page
//-- signup/login/lang to move to drop down

import {
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  Bars,
  NavLogin,
} from "../kSComponents/NavBarElements";
// import "./styling/navBar.css";
import Logo from "../kSComponents/src-assets/NavBar/LevelUpWorks-white.png";
import Avatar from "../kSComponents/src-assets/NavBar/Avatar-white.png";
import NZFlag from "../kSComponents/src-assets/NavBar/NZFlag.png";
import MāoriFlag from "../kSComponents/src-assets/NavBar/MaoriFlag.png";
import navBar from "../kSComponents/navBar.css"


const NavBar = () => {
  return (
    <div>
      <Nav>
        <img src={Logo} alt="LevelUpLogo" className="logoMain" />
        <Bars />
        <div className="navMenu">
          <NavLink to="/" activestyle="true">
            HOME
          </NavLink>
          <NavLink to="/Features" activestyle="true">
            FEATURES
          </NavLink>
          <NavLink to="/Teachers" activestyle="true">
            TEACHERS
          </NavLink>
        </div>
        <div className="navRight">
          <div className="navLang">
            LANG
            <img src={NZFlag} alt="NZFlag" />
            <img src={MāoriFlag} alt="MāoriFlag" />
          </div>
          <NavLogin>
            <NavBtn>
              <img src={Avatar} alt="LoginAvatar" className="navAvatar" />
              <NavBtnLink to="/Login">REGISTER | LOGIN</NavBtnLink>
            </NavBtn>
          </NavLogin>
        </div>
      </Nav>
    </div>
  );
};

export default NavBar;
