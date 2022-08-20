export default function AddToCart({addToCartClickHandler}) {
    return (
        <div className="action">
            <button type="button" className="btn" onClick={addToCartClickHandler} onMouseDown={(event) => (event.preventDefault())}>
                <i className="fa fa-shopping-cart" />
                <span style={{marginLeft: '1em'}}>Add to cart</span>
            </button>
        </div>
    );
}