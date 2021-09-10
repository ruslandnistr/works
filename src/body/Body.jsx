import React from "react";
import { useSelector } from "react-redux";
import Add from "./Add";
import Product from "./Product";
import { useState } from "react";
import Modal from "../Modal";
// import Pagination from "../Pagination";
import PaginationNumber from "./../PaginationNumber";

const Body = (props) => {
  const [modalActive, setModalActive] = useState(false);

  // const Production = useSelector((state) => state.Product);



  // const Products = Production.map((p) => (
  //   <Product
  //     count={p.count}
  //     id={p.id}
  //     name={p.name}
  //     price={p.price}
  //     imageUrl={p.imageUrl}
  //   />
  // ));
  return (
    <div>
      <button onClick={() => setModalActive(true)}>ADD Product</button>
      <Modal active={modalActive} setActive={setModalActive}>
        <Add />
      </Modal>

      <PaginationNumber
        nextPage={props.nextPage}
        prevPage={props.prevPage}
        perPage={props.perPage}
        totalProduct={props.totalProduct}
        pagenet={props.pagenet}
      />
      {props.product.map((p) => (
        <Product
          count={p.count}
          id={p.id}
          name={p.name}
          price={p.price}
          imageUrl={p.imageUrl}
        />
      ))}
      {/* <Pagination loading={props.loading} product={props.product}/> */}
    </div>
  );
};

export default Body;
