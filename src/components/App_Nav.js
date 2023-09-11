import { useNavigate } from "react-router-dom";
import App_Routes from "../App_Routes";
import vibrateDevice from "../utils/VibrateDevices";
import "./../css/App_Nav.css";
const App_Nav = ({ menuItems, handleMenuChange, isMobile, activeRoute }) => {
  if (activeRoute === App_Routes.ROOT+'/' && !isMobile) activeRoute = App_Routes.default;
  if (activeRoute === App_Routes.ROOT+'/' && isMobile) activeRoute = undefined;
  let activeItem = menuItems.filter((element) =>
    activeRoute?.includes(element.route)
  )[0];
  let navigate = useNavigate();
  const handleNavClick = (route) => {
    vibrateDevice();
    document.getElementsByClassName("page-item")[0]?.classList.add("slide-out");
    handleMenuChange(route);
    setTimeout(() => {
      navigate(route);
    }, 300);
  };
  menuItems = menuItems.map((item, index) => (
    <div
      to={item.route}
      className={
        " d-flex flex-column menu-item text-center " +
        (activeItem === item ? "active" : "")
      }
      onClick={() => handleNavClick(item.route)}
      key={index}
    >
      <i className={"fa-solid " + item.iconClass}></i>

      <div>{item.itemName}</div>
      <div className="nav-decor align-self-end"></div>
      <div className="d-none d-md-block line"></div>
    </div>
  ));
  return (
    <>
      <div className="menu d-flex flex-lg-column justify-content-around bg-light col-12 col-lg-10 pt-3 gap-3 rounded">
        {menuItems}
      </div>
    </>
  );
};

export default App_Nav;
