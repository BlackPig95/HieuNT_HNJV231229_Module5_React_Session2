import { useState } from "react";
/**
 * Change carousel images based on user input
 * @param {*} {images} = An array of objects that contains an index and the URL of the image that need to be display on the carousel 
 * @returns Image of the currently chosen image to display
 */
function Carousel({ images })
{
    //currentImage = The index of the image being chosen in the {images} array
    const [ currentImage, setCurrentImage ] = useState(0);
    /**
     * Increase or decrease the index of the image being chosen to display
     * @param {*} index = Index of the image currently being displayed
     * @returns None. Set the currentImage to the next image or previous image in the array
     */
    const handleBack = (index) =>
    {   //Avoid index run of out array length
        if (index <= 0)
            return;
        setCurrentImage(currentImage - 1);
    };
    const handleNext = (index) =>
    {   //Avoid index run of out array length
        if (index >= images.length - 1)
            return;
        setCurrentImage(currentImage + 1);
    };
    return (
        <>
            <img src={ images[ currentImage ].url } style={ { width: 100, height: 100 } }></img>
            {/* Pass in the { currentImage } = index of the image object currently being chosen */ }
            <button onClick={ () => handleBack(currentImage) }>Back</button>
            <button onClick={ () => handleNext(currentImage) }>Next</button>
        </>
    );
}

export default Carousel;