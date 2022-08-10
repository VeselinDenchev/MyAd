import { Link } from "react-router-dom";

export default function UserButton({destination, iconClassName}) {
    return (
        <Link to={`/${destination}`} className={`btn ${destination}`} onMouseDown={(event) => (event.preventDefault())}>
            <i className={iconClassName} />
            <span>(0)</span>
        </Link>
    );
}