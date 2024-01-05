import styles from './styles/layout_styles.css';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className={"menu_container"}>
    <div className={"buttons_container"}>
            <Link to="/">Home</Link>
            <Link to="/landing">landing</Link>
            <Link to="/list_contacts">List Contacts</Link>
    </div>
      <Outlet />
    </div>
  )
};

export default Layout;

