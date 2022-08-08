import DropdownItem from "./dropdown-item/DropdownItem";

export default function DropdownMenu({filterName, filterTypes}) {
    return (
        <div className="dropdown">
            <div className="dropdown-toggle" data-toggle="dropdown">{filterName}</div>
            <div className="dropdown-menu dropdown-menu-right">
                {filterTypes.map(type =>
                    <DropdownItem key={type} item={type} />
                )}
            </div>
        </div>
    );
}