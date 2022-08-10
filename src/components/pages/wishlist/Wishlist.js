import ProductTable from "../../product/product-table/ProductTable";

export default function Wishlist() {
    return (
        <div className="wishlist-page">
            <div className="container-fluid">
                <div className="wishlist-page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <ProductTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}