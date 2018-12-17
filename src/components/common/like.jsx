import React, { Component } from "react";

const Like = prop => {
  let classess = "fa fa-heart";
  classess += !prop.liked ? "-o" : "";
  return (
    <i
      style={{ cursor: "pointer" }}
      className={classess}
      onClick={prop.onClick}
    />
  );
};

export default Like;
