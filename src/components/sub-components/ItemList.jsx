import React from "react";

const ItemList = ({ title, price, tags }) => {
  return (
    <div className="item-list">
      <div className="head">
        <div className="item-name">
          <p className="cormorant" style={{ color: "#CDDA87" }}>
            {title}
          </p>
        </div>

        <div className="dash"></div>

        <div className="item-price">
          <p className="cormorant">{price}</p>
        </div>
      </div>

      <div className="tags">
        <p className="nunito" style={{ color: "#AAA", fontSize: "12px" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default ItemList;
