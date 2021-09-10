import "./App.css";
import Header from "./header/Header";
import Body from "./body/Body";
import Sort from "./sort/Sort";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



 
 

function App() {
  // const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [curentPage, setCurentPage] = useState(1);
  const [perPage] = useState(5);

  const axios = require('axios');

  axios.get('https://product-f26ac-default-rtdb.firebaseio.com/')
  .then((data) => {
    console.log(data)})
    .catch((error) => {console.log(error)})

  const Product = useSelector((state) => state.Product);

  // useEffect(() => {
  //   const fethPost = async () => {
  //     setLoading(true);
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
  //     setProduct(res.data);
  //     setLoading(false);
  //   };
  //   fethPost();
  // }, []);
  // useEffect(() => {
  //   setProduct(Product);
  // }, []);

  const lastCountryIndex = curentPage * perPage;
  const firstCountryIndex = lastCountryIndex - perPage;
  const curentCountry = Product.slice(firstCountryIndex, lastCountryIndex);

  const pagenet = (pageNumbers) => setCurentPage(pageNumbers);

  const nextPage = () => setCurentPage((prev) => prev + 1);
  const prevPage = () => setCurentPage((prev) => prev - 1);

  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Sort">
        <Sort />
      </div>
      <div className="Body">
        <Body
          nextPage={nextPage}
          prevPage={prevPage}
          pagenet={pagenet}
          totalProduct={Product.length}
          perPage={perPage}
          product={curentCountry}
          loading={loading}
          Product={Product}
        />
      </div>
    </div>
  );
}

export default App;
