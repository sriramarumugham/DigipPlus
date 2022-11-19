import React from "react";

//a box shadow components used in many pages
function BoxShadow({ heading, content }) {
  return (
    <div className="boxShadowContainer">
      {heading && <h3 className="heading"> {heading}</h3>}
      <p>{content}</p>
    </div>
  );
}

export default BoxShadow;
