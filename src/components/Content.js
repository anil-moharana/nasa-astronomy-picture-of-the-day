import React from "react";
import HeaderBar from "./HeaderBar";

const Content = props => {
  if (!props.data) {
    return <div>LOADING</div>;
  }
  return (
    <div className="ui-content">
      <HeaderBar text="NASA - Astronomy Picture of the Day" />

      <div className="ui grid" style={{ backgroundColor: "black" }}>
        <div className="row" style={{ marginLeft: "100px" }}>
          <i className="camera retro icon "></i>
          <div className="ten wide column">
            <img alt="aaa" className="ui huge image" src={props.data.hdurl} />
          </div>
          <div className="five wide column">
            <a className="ui red label">{props.data.title}</a>
            <div className="ui raised segment">
              <a className="ui red ribbon label">{props.data.date}</a>
              <p>{props.data.explanation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
