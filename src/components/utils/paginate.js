import _ from "lodash";

const paginate = (items, pageSize, currentPage) => {
  const startIndex = (currentPage - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
};

export default paginate;
