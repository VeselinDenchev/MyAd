export default function Image({image}) {
    return (
        <div className="img">
            <a href="#"><img src={image} alt="Image" /></a>
            <p>Product Name</p>
        </div>
    );
}