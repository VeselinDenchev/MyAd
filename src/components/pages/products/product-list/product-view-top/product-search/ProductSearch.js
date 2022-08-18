export default function ProductSearch({searchedText, onSearchChange}) {
    return (
        <div className="col-md-4">
            <div className="product-search">
                <input type="text" value={searchedText} onChange={onSearchChange} placeholder="Search" />
                <button><i className="fa fa-search"></i></button>
            </div>
        </div>
    );
}