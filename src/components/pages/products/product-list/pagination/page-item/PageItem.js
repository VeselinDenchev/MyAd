export default function PageItem({isActive, content}) {
    const activeSuffix = isActive ? ' active' : '';

    return (
        <>
            <li className={`page-item${activeSuffix}`}><a className="page-link" href="#">{content}</a></li>
        </>
    );
}