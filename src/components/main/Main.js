import MainSlider from './main-slider/MainSlider';
import Brand from './brand/Brand';
import Feature from './feature/Feature';
import Category from './category/Category';
import CallToAction from './call-to-action/CallToAction';
import FeaturedProduct from '../product/featured-product/FeaturedProduct';
import RecentProduct from '../product/recent-product/RecentProduct';
import Review from './review/Review';

export default function Main() {
    return (
        <main>
            <MainSlider />
            <Brand />
            <Feature />
            <Category />
            <CallToAction />
            <FeaturedProduct />
            <RecentProduct />
            <Review />
        </main>
    );
}