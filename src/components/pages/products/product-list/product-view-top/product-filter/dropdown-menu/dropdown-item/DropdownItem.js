import { type } from "@testing-library/user-event/dist/type";

export default function DropdownItem({item, clickHandler}) {
    return (
        <a href="#" name={item.name} onClick={clickHandler} className="dropdown-item" onMouseDown={(event) => (event.preventDefault())}>{item.label}</a>
    );
}