import React, { useRef,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS } from "../redux-saga/admin/action/action";

const Data = () => {
  const name = useRef()
  const price = useRef()
  const product = useSelector((state) => state.productReducer);

  const [view, setview] = useState({})

  const dispatch = useDispatch()


  const handleSubmit =()=>{
    const data = {
      productName:name.current.value,
      price:price.current.value
    }
    dispatch({type:POST_PRODUCT_PROGRESS,payload:data})

  }


  const handleDelete =(val)=>{

    console.log(val);

    dispatch({type:DELETE_PRODUCT_PROGRESS,payload:val})

  }
  const handle =(e)=>{
    setview({...view,[e.target.name]:e.target.value})
      }
    

   return (
    <div>

    <input type="text" ref={name}/>
    <input type="number" ref={price} />
    <button onClick={handleSubmit}>Add</button><br />


    <input type="text"  name="productName" value={view?.productName} onChange={handle}/>
    <input type="number"  name="price" value={view?.price}  onChange={handle}/>
    <button>Update</button>

      {product.product?.map((val, ind) => {
        return (
          <React.Fragment key={ind}>
          <h1>{val?.id}</h1>
            <h1>{val?.productName}</h1>
            <h2>{val?.price}</h2>
            <button onClick={()=>handleDelete(val)}>Delete</button>
            <button>update</button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Data;
