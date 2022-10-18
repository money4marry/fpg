import { Menu } from "antd";
import "./header.scss";
import { useLocation, Link } from "react-router-dom";

function Header() {
  let defaultSelected = "";
  const location = useLocation();
  switch (location.pathname) {
    case "/": {
      defaultSelected = "fp";
      break;
    }
    case "/articles": {
      defaultSelected = "fp2";
      break;
    }
    default:
      break;
  }
  const items = [
    {
      label: <Link to="/">fp1</Link>,
      key: "fp",
    },
    {
      label: <Link to="/articles">fp2</Link>,
      key: "fp2",
    },
    {
      label: <Link to="/grid">GRID Trade</Link>,
      key: "grid",
    },
  ];
  return (
    <Menu
      mode="horizontal"
      items={items}
      defaultSelectedKeys={[defaultSelected]}
    />
  );
}

export default Header;
