import React,{useState} from 'react'
import {addProduct} from "../redux/counter/counterSlice"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export const ProductForm = () => {

  const product = useSelector((state)=>state.counter.products);


  // in counterSlice all functions can be used
  const dispatch = useDispatch();

  // for navigation to another component
  const navigate = useNavigate();

  // state variable to store the data
  const [newData, setNewData] = useState({ productId: "", productName: "", contractPeriod: "", cropYear: "", price: "" })

  // set the data of the form in the state variable
  const handleOnChange = (e) => {
    setNewData({ ...newData, [e.target.id]: e.target.value })
  }

  // function to add the data
  const handleOnClick = () => {
    setNewData({ productId: "", productName: "", contractPeriod: "", cropYear: "", price: "" })
    console.log(newData);
    dispatch(addProduct(newData));
    navigate("/")
  }

  const handleOnReset=()=>{
    setNewData({ productId: product.length+1, productName: "", contractPeriod: "", cropYear: "", price: "" })
  }
  return (
    <div className='container my-5'>
      <h1 className='text-center'>Add New Product</h1>
      <form>
        {/* <div className="mb-3">
          <label class="form-label fw-bold" htmlFor="productId">Product Id:</label>
          <input type="number" className="form-control" value={newData.productId} id="productId" onChange={handleOnChange} />
        </div> */}


        <div className="mb-3">
          <label class="form-label fw-bold" htmlFor="productId">Product Id:</label>
          <input type="number" className="form-control" value={product.length+1} id="productId" readOnly/>
        </div>


        <div className="form-group fw-bold">
          <label class="form-label" htmlFor="productName">Product Name:</label>
          <input type="text" className="form-control" value={newData.productName} id="productName" onChange={handleOnChange} />
        </div>
        <div className="form-group fw-bold">
          <label class="form-label" htmlFor="contractPeriod">Contract Period:</label>
          <input type="text" className="form-control" value={newData.contractPeriod} id="contractPeriod" onChange={handleOnChange} />
        </div>
        <div className="form-group fw-bold">
          <label class="form-label" htmlFor="cropYear">Crop Year:</label>
          <input type="text" className="form-control" value={newData.cropYear} id="cropYear" onChange={handleOnChange} />
        </div>
        <div className="form-group fw-bold">
          <label class="form-label" htmlFor="price">Price:</label>
          <input type="text" className="form-control" value={newData.price} id="price" onChange={handleOnChange} />
        </div>
      </form>
      <button disabled={newData.productName.length===0 || newData.contractPeriod.length===0 || newData.cropYear.length===0 || newData.price.length===0} className="btn btn-primary mt-3 mx-2" onClick={handleOnClick}>Save</button>
      <button className="btn btn-warning mt-3 mx-2" onClick={handleOnReset}>Reset</button>



    </div>
  )
}
