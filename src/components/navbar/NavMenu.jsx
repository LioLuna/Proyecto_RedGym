import NavItem from "./NavItem";

function NavMenu({items}) {
    return (
        <div className="flex gap-6">
            {items.map((item) => (
                <NavItem
                key={item.label}
                item={item}
                />
            ))}
        </div>
    );
}
export default NavMenu;