import React from "react";
import "./loader.css";
import gift from './loading_250.gif'

const Loader = () => {
  return (
    <div className="lds-ring">
      <img  src={gift} alt='./' />
    </div>
  );
};

export default Loader;