import ItemPreview from "./ItemPreview";
import ListPagination from "./ListPagination";
import React from "react";

const ItemList = (props) => {
  if (!props.items) {
    return <div className="py-4">Loading...</div>;
  }

  if (props.items.length === 0) {
    return (<div id="empty" className="d-flex justify-content-center mt-3">
    <div className="text-center bg-light w-50">
      <div>
        <i className="bi bi-emoji-frown" />
      </div>
      <p>
        No items found for{" "}
        {props.search ? `"${props.search}"` : "your search"}.
      </p>
    </div>
  </div>)
  }

  return (
    <div className="container py-2">
      <div className="row">
        {props.items.map((item) => {
          return (
            <div className="col-sm-4 pb-2" key={item.slug}>
              <ItemPreview item={item} />
            </div>
          );
        })}
      </div>

      <ListPagination
        pager={props.pager}
        itemsCount={props.itemsCount}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default ItemList;
