import Navbar from "../../../product/navbar/Navbar";

export default function SidebarWidgetCategory({searchParams, setSearchParams}) {
    return (
        <div className="sidebar-widget category">
        <h2 className="title">Category</h2>
        <Navbar searchParams={searchParams} setSearchParams={setSearchParams} />
    </div>
    );
}