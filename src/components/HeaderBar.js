import React from "react";

const HeaderBar = props => {
  return (
    <div className="ui red inverted center aligned segment">
      <h2 className="ui icon header">
        <i className="us flag"></i>
        {props.text}
      </h2>
    </div>
  );
};

export default HeaderBar;
