export default function BreadcrumbItem({link}) {
    return (
        <>
            <li className="breadcrumb-item"><a href={link.to}>{link.name}</a></li>
        </>
    );
}