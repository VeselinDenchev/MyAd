export default function DropdownMenu({items}) {
    return (
        <div className="dropdown-menu">
            {items.map(item => 
                        <a key={item.name} href={item.link} className="dropdown-item">{item.name}</a>
                    )}
        </div>
    );
}