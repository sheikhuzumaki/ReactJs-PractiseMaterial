import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Page = (props) => {
    const {PageSize , CurrentPage , Count , onPageChange} = props;
    const PageCount = Math.ceil(Count / PageSize);
    if(PageCount === 1) return null ;
    const pages = _.range(1 , PageCount + 1);
    return ( 
        <nav>
                <ul className="pagination">
                    {pages.map(page => (
                    <li key={page} className={page === CurrentPage ? "page-item active" : "page-item"}><a className="page-link" onMouseOver={() => onPageChange(page)}>{page}</a></li>
                    ))}
                </ul>
            </nav>
     );
}

Page.propTypes = {
    PageSize: PropTypes.number.isRequired , 
    CurrentPage: PropTypes.number.isRequired , 
    Count: PropTypes.number.isRequired ,
    onPageChange : PropTypes.func.isRequired
}
 
export default Page;