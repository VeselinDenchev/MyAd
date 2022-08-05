import CategoryItem400pxWide from "./category-item/CategoryItem400pxWide";
import CategoryItem250pxWide from "./category-item/CategoryItem250pxWide";
import CategoryItem150pxWide from "./category-item/CategoryItem150pxWide";

export default function Category() {
    const categoryItems400pxWide =
    [
        'img/category-3.jpg',
        'img/category-8.jpg'
    ];

    const categoryItems250pxWide =
    [
        'img/category-4.jpg',
        'img/category-7.jpg'
    ];

    const categoryItems150pxWide =
    [
        'img/category-5.jpg',
        'img/category-6.jpg'
    ];

    return (
        <div className="category">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <CategoryItem400pxWide imageSource={categoryItems400pxWide[0]} />
                    </div>
                    <div className="col-md-3">
                        <CategoryItem250pxWide imageSource={categoryItems250pxWide[0]} />
                        <CategoryItem150pxWide imageSource={categoryItems150pxWide[0]} />
                    </div>
                    <div className="col-md-3">
                        <CategoryItem150pxWide imageSource={categoryItems150pxWide[1]} />
                        <CategoryItem250pxWide imageSource={categoryItems250pxWide[1]} />
                    </div>
                    <div className="col-md-3">
                        <CategoryItem400pxWide imageSource={categoryItems400pxWide[1]} />
                    </div>
                </div>
            </div>
        </div>
    );
}