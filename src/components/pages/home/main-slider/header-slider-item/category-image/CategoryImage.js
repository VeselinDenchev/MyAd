import CategoryImageCaption from "./category-image-caption/CategoryImageCaption";

export default function CategoryImage({image})
{
    return (
        <div className="img-item">
            <img src={image} alt="category" />
            <CategoryImageCaption />
        </div>
);
}