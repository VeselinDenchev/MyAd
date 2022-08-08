import PageItem from "./page-item/PageItem";

export default function Pagination() {
    const pages = 
    [
        {isActive: true, content: '1'},
        {isActive: false, content: '2'},
        {isActive: false, content: '3'},
        {isActive: false, content: 'Next'},
    ];
    
    return (
        <div className="col-md-12">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex="-1">Previous</a>
                    </li>
                    {pages.map(page =>
                        <PageItem key={page.content} {...page} />
                    )}
                </ul>
            </nav>
        </div>
    );
}