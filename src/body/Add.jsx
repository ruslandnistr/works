import React from "react";
import { useDispatch} from "react-redux";

const Add = () => {
    
    const dispatch = useDispatch();

        let CreateName = React.createRef(); 
        let CreateCount = React.createRef(); 
        let CreateImg = React.createRef();  
        let CreatePrice = React.createRef();  
        
        let AddProducts = ()=>{
            let productName = CreateName.current.value;
            let productCount = CreateCount.current.value;
            let productImg = CreateImg.current.value;
            let productPrice = CreatePrice.current.value;

           { productImg=''  ?  productImg = 'https://www.learn-bulgarian.net/wp-content/uploads/2013/05/7-banana-bulgarian-vocabulary-banan.jpg'  : productImg}
            

            dispatch({type: 'ADD-PRODUCT', productName, productCount, productImg, productPrice  })
            CreateName.current.value='';
            CreateCount.current.value='';
            CreateImg.current.value='';
            CreatePrice.current.value='';
        }

    
    return(
        <div className='Add'>
        <p>Product Name</p>
        <input ref={CreateName} type="text"  />
        <p>Count</p>
        <input ref={CreateCount} type="text" />
        <p>IMG URL</p>
        <input ref={CreateImg} type="text" />
        <p>Price</p>
        <input ref={CreatePrice} type="text" />
       {  <button onClick={AddProducts} > ADD </button>}
        </div>
    )
}

export default Add;
