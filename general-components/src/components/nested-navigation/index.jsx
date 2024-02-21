import "./styles.css";
import MenuList from "./menu-list.jsx";

export default function NestedNavigation({ menus = [] }) {
  return (
    <div className="nested-nav-container">
      <MenuList list={menus} />
    </div>
  );
}
