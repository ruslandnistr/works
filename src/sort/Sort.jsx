import React from "react";
import { useDispatch } from "react-redux";

const Sort = () => {
  const dispatch = useDispatch();

  const sortByLess = () => {
    dispatch({ type: "PRICE-LESS" });
  };
  const sortByLessMore = () => {
    dispatch({ type: "PRICE-MORE" });
  };
  return (
    <div>
      <button onClick={sortByLess}>SORT LESS</button>
      <button onClick={sortByLessMore}>SORT More</button>
    </div>
  );
};

export default Sort;
