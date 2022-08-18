export default function PageItem({isActive, content, clickHandler}) {
    const activeSuffix = isActive ? ' active' : '';

    return (
        <>
            <li className={`page-item${activeSuffix}`}><a className="page-link" onClick={clickHandler} href="#">{content}</a></li>
        </>
    );
}