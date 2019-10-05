import React from "react";

const HeaderBar = props => {
  return (
    <div className="ui red inverted center aligned segment">
      <h1>
        <i className="us flag"></i>
        {props.text}
        <i className="camera retro icon" style={{float:'right'}}></i>
      </h1>
    </div>
  );
};

export default HeaderBar;
