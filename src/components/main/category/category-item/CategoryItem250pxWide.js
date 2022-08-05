export default function CategoryItem250pxWide({imageSource}) {
    return (
        <div className="category-item ch-250">
            <img src={imageSource} />
            <a className="category-name" href="">
                <p>Some text goes here that describes the image</p>
            </a>
        </div>
    );
}