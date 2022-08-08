export default function Color({setColor}) {
    const colors = 
    [
        'White',
        'Black',
        'Blue'
    ];

    const colorChangeHandler = (chosenColor) => setColor(productVariant => ({...productVariant, color: chosenColor}));

    return (
        <div className="p-color">
            <h4>Color:</h4>
            <div className="btn-group btn-group-sm">
                {colors.map(chosenColor =>
                    <button key={chosenColor} type="button" onClick={() => colorChangeHandler(chosenColor)} className="btn">{chosenColor}</button>
                )}
            </div> 
        </div>
    );
}