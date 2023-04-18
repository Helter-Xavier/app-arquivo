//Context
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/auth";

//Hook router
import { NavLink } from "react-router-dom";

//Import img
import brasao from "../../assets/brasao.png";
import { GoGear } from "react-icons/go";

//CSS
import styles from "./Navbar.module.css";
import "./Navbar.css";

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  // console.log(isActive);

  return (
    <div>
      <div className={styles.menuContainer}>
        <div className={styles.menuLogo}>
          <NavLink to="">
            <img src={brasao} alt="imagem-pasta" />
          </NavLink>
        </div>

        <div className={styles.name}>
          <NavLink to="/"></NavLink>
        </div>

        <div className={styles.dropwdown}>
          <button onClick={onClick} className={styles.menuDropdown}>
            <GoGear />
          </button>
          <div className="container">
            <nav
              ref={dropDownRef}
              className={`menu ${isActive ? "active" : "inactive"}`}
            >
              <ul>
                <li className={styles.listLi}>
                  <NavLink to="/newAccount">Adicionar nova conta</NavLink>
                </li>
                <li className={styles.listLi}>
                  <NavLink href="#" onClick={handleLogout}>
                    Sair
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
