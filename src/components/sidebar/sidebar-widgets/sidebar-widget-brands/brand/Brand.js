export default function Brand({brand}) {
    return (
        <>
            <li><a href="#">{brand.name}</a><span>({brand.brandProductsCount})</span></li>
        </>
    );
}