import React from "react";

const Loader = () => {
  return (
    <div className="columns is-centered main-center">
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;