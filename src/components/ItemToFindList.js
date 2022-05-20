import React from "react";

export default function ItemToFindList({ itemList }) {
  const items = itemList.map((item) => (
    <ItemToFind key={item.id} item={item} />
  ));

  return <div>{items}</div>;
}
function ItemToFind({ item }) {}
