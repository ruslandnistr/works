import { createStore } from "redux";
import {reRender} from './../index'

let initialState = {
  Product: [
    {
      id: 1,
      imageUrl:
        "https://www.learn-bulgarian.net/wp-content/uploads/2013/05/7-banana-bulgarian-vocabulary-banan.jpg",
      name: "Banan",
      count: 53,
      price: 150,
    },
    {
      id: 2,
      imageUrl:
        "https://produits.bienmanger.com/38192-0w470h470_Organic_Passion_Fruit.jpg",
      name: "Kiwi",
      count: 5,
      price: 15,
    },
    {
      id: 3,
      imageUrl:
        "https://www.learn-bulgarian.net/wp-content/uploads/2013/05/7-banana-bulgarian-vocabulary-banan.jpg",
      name: "Banan",
      count: 51,
      price: 15022,
    },
    {
      id: 4,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/1200px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg",
      name: "Kiwi",
      count: 15,
      price: 1111,
    },
    {
      id: 5,
      imageUrl:
        "https://www.learn-bulgarian.net/wp-content/uploads/2013/05/7-banana-bulgarian-vocabulary-banan.jpg",
      name: "Banan",
      count: 51,
      price: 123,
    },
    {
      id: 6,
      imageUrl:
        "https://springfieldnutra.com/app/uploads/2017/12/Citrusvrucht-vrijstaand.jpg",
      name: "Kiwi",
      count: 15,
      price: 234,
    },
    {
      id: 7,
      imageUrl:
        "https://www.learn-bulgarian.net/wp-content/uploads/2013/05/7-banana-bulgarian-vocabulary-banan.jpg",
      name: "Banan",
      count: 53,
      price: 150,
    },
    {
      id: 8,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/1200px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg",
      name: "Kiwi",
      count: 5,
      price: 15,
    },
    {
      id: 9,
      imageUrl:
        "https://www.learn-bulgarian.net/wp-content/uploads/2013/05/7-banana-bulgarian-vocabulary-banan.jpg",
      name: "Banan",
      count: 51,
      price: 15022,
    },
    {
      id: 10,
      imageUrl:
        "https://produits.bienmanger.com/38192-0w470h470_Organic_Passion_Fruit.jpg",
      name: "Kiwi",
      count: 15,
      price: 1111,
    },
    {
      id: 11,
      imageUrl:
        "https://www.learn-bulgarian.net/wp-content/uploads/2013/05/7-banana-bulgarian-vocabulary-banan.jpg",
      name: "Banan",
      count: 51,
      price: 123,
    },
    {
      id: 12,
      imageUrl:
        "https://www.boeschbodenspies.com/wp-content/uploads/2017/08/orange.png",
      name: "Kiwi",
      count: 15,
      price: 234,
    },
    {
      id: 13,
      imageUrl:
        "https://www.learn-bulgarian.net/wp-content/uploads/2013/05/7-banana-bulgarian-vocabulary-banan.jpg",
      name: "Banan",
      count: 53,
      price: 150,
    },
    {
      id: 14,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/1200px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg",
      name: "Kiwi",
      count: 5,
      price: 15,
    },
    {
      id: 15,
      imageUrl:
        "https://www.learn-bulgarian.net/wp-content/uploads/2013/05/7-banana-bulgarian-vocabulary-banan.jpg",
      name: "Banan",
      count: 51,
      price: 15022,
    },
    {
      id: 16,
      imageUrl:
        "https://www.boeschbodenspies.com/wp-content/uploads/2017/08/orange.png",
      name: "Kiwi",
      count: 15,
      price: 1111,
    },
    {
      id: 17,
      imageUrl:
        "https://www.learn-bulgarian.net/wp-content/uploads/2013/05/7-banana-bulgarian-vocabulary-banan.jpg",
      name: "Banan",
      count: 51,
      price: 123,
    },
    {
      id: 18,
      imageUrl:
        "https://springfieldnutra.com/app/uploads/2017/12/Citrusvrucht-vrijstaand.jpg",
      name: "Kiwi",
      count: 15,
      price: 234,
    },
  ],
};

const sortByPriceLess = (arr) => {
  const temp = JSON.parse(JSON.stringify(arr))  //Coppy Arr
 temp.Product.sort((a, b) => a.price > b.price ? 1 : -1);
 return initialState = temp

}
const sortByPriceMore = (arr) => {
  const temp = JSON.parse(JSON.stringify(arr))  //Coppy Arr
 temp.Product.sort((a, b) => b.price > a.price ? 1 : -1);
 return initialState = temp
}


const reduser = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-PRODUCT":
      return {
        ...state,
        Product: [
          ...state.Product,
          { name: action.productName, count: action.productCount, imageUrl:action.productImg, price: action.productPrice  }, //productName, productCount, productImg, productPrice
        ],
        
      } ;
    case "PRICE-LESS":
      return (
        sortByPriceLess(state)
        
      )
      case "PRICE-MORE":
        return (
          sortByPriceMore(state)
          
        )

    default:
      return state;
  }
};




export const store = createStore(reduser);
