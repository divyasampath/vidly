import React, { Component } from "react";

const ListGroup = ({ items, selectedItem }) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li key={item.id} className="list-group-item">
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
