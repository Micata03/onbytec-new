import React from "react";

const Message = ({ msg }) => {


  return (
    <div  className="mensaje">
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};

export default Message;