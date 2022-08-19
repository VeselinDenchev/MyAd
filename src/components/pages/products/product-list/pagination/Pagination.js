import { useEffect } from "react";
import { useState } from "react";
import PageItem from "./page-item/PageItem";

export default function Pagination({currentPage, setCurrentPage, pagesCount, offset}) {
    const [pageNavigation, setPageNavigation] = useState([]);

    useEffect(() => {
        const pages = [{isActive: false, content: 'Previous'}];

            if (pagesCount < 5) {
                for (let index = 1; index < pagesCount + 2; index++) {
                    pages[index] = {isActive: index === currentPage, content: `${index}`}
                }
            }
            else {
                if (currentPage <= 2) {
                    for (let index = 1; index < 7; index++) {
                        pages[index] = {isActive: index === currentPage, content: `${index}`}
                    }
                }
                else if (currentPage + 2 > pagesCount) {
                    for (let index = 1; index < 7; index++) {
                        pages[index] = {isActive: (pagesCount - (5 - index)) === currentPage, content: `${pagesCount - (5 - index)}`};
                    }
                }
                else {
                    for (let index = 1; index < 3; index++) {
                        pages[index] = {isActive: false, content: `${currentPage - (3 - index)}`};
                    }
    
                    pages[3] = {isActive: true, content: `${currentPage}`}
    
                    for (let index = 1; index < 4; index++) {
                        pages[index + 3] = {isActive: false, content: `${currentPage + index}`};
                    }
                }
            }

            pages[pages.length - 1] = {isActive: false, content: `Next`}

            setPageNavigation(pages);
    }, [currentPage, pagesCount]);

    function pageChangeClickHandler(event) {
        event.preventDefault();

        if (event.target.innerText === 'Previous') {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
            }
        }
        else if (event.target.innerText === 'Next') {
            if (currentPage < pagesCount) {
                setCurrentPage(currentPage + 1);
            }
        }
        else {
            setCurrentPage(parseInt(event.target.innerText));
        }
    }

    
    return (
        <div className="col-md-12">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    {pageNavigation.map(page =>
                        <PageItem key={page.content} {...page} clickHandler={pageChangeClickHandler} />
                    )}
                </ul>
            </nav>
        </div>
    );
}