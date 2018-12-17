import React, { Component } from "react";
import _ from "lodash";

//input:pageSize,currentPage,pageCount

const pagination = props => {
  const { pageSize, itemsCount, currentPage } = props;
  const pageCount = itemsCount / pageSize;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
            onClick={() => props.onPageChange(page)}
          >
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default pagination;
