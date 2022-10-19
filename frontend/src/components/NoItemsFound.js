import React from "react";

const NoItemsFound = (props) => {
  return (
    <div id="empty" className="d-flex justify-content-center mt-3">
      <div className="text-center bg-light w-50">
        <div>
          <i className="bi bi-emoji-frown" />
        </div>
        <p>
          No items found for{" "}
          {props.search ? `"${props.search}"` : "your search"}.
        </p>
      </div>
    </div>
  );
};

export default NoItemsFound;
