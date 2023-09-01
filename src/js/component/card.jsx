import React from "react";

const Card = (props) => {
    return (
    <div className="card m-2">
        <img src={props.imgUrl} className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title d-flex justify-content-center">{props.title}</h5>
            <p className="card-text d-flex justify-content-center">{props.description}</p>
            <a href={props.buttonUrl} className="btn btn-primary d-flex justify-content-center">{props.buttonLabel}</a>
        </div>
  </div>)
};


export default Card;