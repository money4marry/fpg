import { Menu } from "antd";
import "./header.scss";
import { useLocation, Link } from "react-router-dom";

const items = [
  { label: <Link to="/">fp1</Link>, key: "fp" },
  { label: <Link to="/articles">fp2</Link>, key: "fp2" },
];

function Header() {
  const location = useLocation();
  console.log(location);
  return <Menu mode="horizontal" items={items} defaultSelectedKeys={["fp"]} />;
}

export default Header;
