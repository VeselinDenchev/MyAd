import BreadcrumbItem from "./breadcrumb-item/BreadcrumbItem";

export default function BreadCrumb() {
    const links = 
    [
        {to: '/', name: 'Home'},
        {to: '/products', name: 'Products'}
    ];

    return (
        <div className="breadcrumb-wrap">
            <div className="container-fluid">
                <ul className="breadcrumb">
                    {links.map(link =>
                        <BreadcrumbItem key={link.name} link={link} />
                    )}
                    <li className="breadcrumb-item active">Product List</li>
                </ul>
            </div>
        </div>
    );
}