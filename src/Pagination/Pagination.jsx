import React from 'react'
import ReactPaginate from 'react-paginate';


export default function Pagination({getPage}) {

    const handlePageClick = (data) => {
        console.log(data.selected);
        getPage(data.selected+1);}
    const pageCount=3;
    

    return (
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="previous"

        containerClassName='pagination justify-content-center p-3'
        pageClassName={'page-item'}
        pageLinkClassName='page-link'
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName='page-link'
        nextLinkClassName='page-link'
        activeClassName={'active'}
        >   
        </ReactPaginate>)
}
