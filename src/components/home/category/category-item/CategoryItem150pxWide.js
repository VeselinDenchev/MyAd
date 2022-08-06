export default function CategoryItem150pxWide({imageSource}) {
    return (
        <div className="category-item ch-150">
            <img src={imageSource} />
            <a className="category-name" href="">
                <p>Some text goes here that describes the image</p>
            </a>
        </div>
    );
}