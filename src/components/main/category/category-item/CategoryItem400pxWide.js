export default function CategoryItem400pxWide({imageSource}) {
    return (
        <div className="category-item ch-400">
            <img src={imageSource} />
            <a className="category-name" href="">
                <p>Some text goes here that describes the image</p>
            </a>
        </div>
    );
}