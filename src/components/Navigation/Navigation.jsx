import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <nav>
      <NavLink to="/" style={{ marginRight: "10px" }}>
        Home
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
