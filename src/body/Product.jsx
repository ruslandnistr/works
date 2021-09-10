import { useState } from "react";

const Product = (props) => {
  const [aditMod, setaditMod] = useState(false);

  let more = () => {
    setaditMod(true);
  };
  let less = () => {
    setaditMod(false);
  };

 
  return (
    <div className="product">
      <img src={props.imageUrl} alt="name" />
      <p>{props.name}</p>
      <p>{props.price}</p>

      <br />
      {!aditMod && <button onClick={more}>Read More</button>}
      {aditMod && <button onClick={less}>Less</button>}
      {aditMod && (
        <div>
          <span>Count:{props.count}</span>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quos
            mollitia quis laudantium, dolores ut dolorum temporibus qui expedita
            odit culpa? Exercitationem aut dolorem laboriosam! Blanditiis
            dignissimos harum iste molestiae.
          </div>
        </div>
      )}
      {!aditMod && <div></div>}
    </div>
  );
};

export default Product;
