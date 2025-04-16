import React from "react";

const Tost = ({status}) => {
  return (
    <>
      <div className="toast toast-top toast-center">
        <div className={`alert ${ status ? `alert-success` : `alert-error`}`}>
          <span>{status ? "Success Completed" : "Failed Completed"}</span>
        </div>
      </div>
    </>
  );
};

export default Tost;
