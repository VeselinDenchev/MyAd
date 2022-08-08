import BreadcrumbItem from "./breadcrumb-item/BreadcrumbItem";

export default function Breadcrumb({links}) {
    console.log(links);

    const customLinks = [
        {to: '/', name: 'Home'},
        {to: '/product-detail', name: 'Product Detail'}
    ];

    return (
        <div className="breadcrumb-wrap">
            <div className="container-fluid">
                <ul className="breadcrumb">
                    {links.map(link => 
                        <BreadcrumbItem key={link.name} link={link} />
                    )}
                </ul>
            </div>
        </div>
    );
}