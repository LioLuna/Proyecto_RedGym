import { NavLink } from "react-router-dom";

function NavItem({ item }) {

  const navClass = `
    text-red-500
    font-semibold
    hover:text-red-400
    transition
  `;

  const handleClick = () => {

    if (item.scrollTop) {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    }

  };

  return (
    <NavLink
      to={item.to}
      onClick={handleClick}
      className={navClass}
    >
      {item.label}
    </NavLink>
  );
}

export default NavItem;