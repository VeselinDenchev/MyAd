export default function Action() {
    const actions = 
    [
        {name: 'Add to cart', iconClassName: 'fa fa-shopping-cart'},
        {name: 'Buy Now', iconClassName: 'fa fa-shopping-bag'}
    ];

    return (
        <div className="action">
            {actions.map(action =>
                <a key={action.name} className="btn" href="#"><i className={action.iconClassName}></i>{action.name}</a>
            )}
        </div>
    );
}