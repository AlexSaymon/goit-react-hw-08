import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <Navigate to="/contacts" /> : <Component {...rest} />;
};

export default RestrictedRoute;
