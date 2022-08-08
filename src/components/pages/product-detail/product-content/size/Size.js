import { useEffect, useState, useRef } from "react";

export default function Size({setSize}) {
    const sizes = ['S', 'M', 'L', 'XL'];

    const [chosenSize, setChosenSize] = useState(null);
    const chosenSizeButton = useRef(null);

    const sizeChangeHandler = (chosenSize) => {
        console.log(chosenSize);
        setChosenSize(chosenSize);
        console.log(chosenSizeButton);
        //chosenSizeButton.inputElement.click();
        setSize(productVariant => ({...productVariant, size: chosenSize}))
    };

    return (
        <div className="p-size">
            <h4>Size:</h4>
            <div className="btn-group btn-group-sm">
                    {sizes.map(size => 
                        <button 
                            key={size} 
                            ref={size === chosenSize ? chosenSizeButton : null} 
                            type="button" 
                            onClick={() => sizeChangeHandler(size)} 
                            className="btn"
                        >
                            {size}
                        </button>
                )}
            </div> 
        </div>
    );
}