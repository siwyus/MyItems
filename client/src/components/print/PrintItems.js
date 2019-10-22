import React, { useContext, useEffect } from "react";
import ItemContext from "../../context/items/itemContext";
// import { Col, Row, Container } from "react-bootstrap";
import ItemToPrint from "./ItemToPrint";

const PrintItems = () => {
  const itemContext = useContext(ItemContext);
  const { items, getItems, loading } = itemContext;

  useEffect(() => {
    getItems();
    // eslint-disable-next-line
  }, []);

  let date = new Date();
  date =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

  try {
    let id = 0;

    return (
      <div className="print-header">
        {date}
        <div className="print">
          {items !== null &&
            !loading &&
            items.map(item => (
              <div className="print-item" key={item._id}>
                <div style={{ float: "left" }}>{(id = id + 1)}.&nbsp;</div>

                <div>
                  <ItemToPrint key={item._id} item={item} />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  } catch (error) {
    window.location.reload();
  }
};

export default PrintItems;
