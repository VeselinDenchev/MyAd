import MainSlider from './main-slider/MainSlider';
import Brand from '../../brand/Brand';
import Feature from './feature/Feature';
import Category from './category/Category';
import CallToAction from './call-to-action/CallToAction';
import FeaturedProduct from './featured-product/FeaturedProduct';
import RecentProduct from './recent-product/RecentProduct';

export default function Home() {
    return (
        <main>
            <MainSlider />
            <Brand />
            <Feature />
            <Category />
            <CallToAction />
            <FeaturedProduct />
            <RecentProduct />
        </main>
    );
}