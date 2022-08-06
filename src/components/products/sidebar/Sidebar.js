import SidebarWidgetBrands from "./sidebar-widgets/sidebar-widget-brands/SidebarWIdgetBrands";
import SidebarWidgetCategory from "./sidebar-widgets/sidebar-widget-category/SidebarWIdgetCategory";
import SidebarWidgetSlider from "./sidebar-widgets/sidebar-widget-slider/SlidebarWidgetSlider";
import SidebarWidgetTag from "./sidebar-widgets/sidebar-widget-tag/SidebarWidgetTag";

export default function Sidebar() {
    return (
        <div className="col-lg-4 sidebar">
            <SidebarWidgetCategory />
            <SidebarWidgetSlider />
            <SidebarWidgetBrands />            
            <SidebarWidgetTag />
        </div>
    );
}