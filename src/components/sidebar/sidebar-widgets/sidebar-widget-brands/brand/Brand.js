export default function Brand({name, quantity}) {
    return (
        <>
            <li><a href="#">{name}</a><span>({quantity})</span></li>
        </>
    );
}