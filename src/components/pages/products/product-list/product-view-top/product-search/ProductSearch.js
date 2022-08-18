export default function ProductSearch({searchedText, onSearchChange}) {
    return (
        <div className="col-md-8">
            <div className="product-search">
                <input type="text" value={searchedText} onChange={onSearchChange} placeholder="Search" />
                {/* <button disabled><i className="fa fa-search"></i></button> */}
            </div>
        </div>
    );
}