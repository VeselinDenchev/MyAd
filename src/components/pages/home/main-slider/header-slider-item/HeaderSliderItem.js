import HeaderSliderCaption from "./header-slider-caption/HeaderSliderCaption";

export default function HeaderSliderItem(props)
{
    return (
        <div className="header-slider-item">
            <img src={props.image} style={{margin: "0 auto"}} alt="Slider Image" />
            {/* <HeaderSliderCaption /> */}
        </div>
    );
}