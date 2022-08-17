export default function ProductSearch({searchedText, onSearchChange, onSearchSubmit}) {
    return (
        <div className="col-md-4">
            <div className="product-search">
                <form onSubmit={onSearchSubmit}>
                    <input type="text" value={searchedText} onChange={onSearchChange} placeholder="Search" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>

            </div>
        </div>
    );
}