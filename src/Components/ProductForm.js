import React, { useState } from 'react'
import { addProduct } from "../redux/counter/counterSlice"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export const ProductForm = () => {

  const product = useSelector((state) => state.counter.products);


  // in counterSlice all functions can be used
  const dispatch = useDispatch();

  // for navigation to another component
  const navigate = useNavigate();

  // state variable to store the data
  const [newData, setNewData] = useState({ productId: product.length + 1, productName: "", contractPeriodStart: "", contractPeriodEnd: "", cropYear: "", price: "" })

  // set the data of the form in the state variable
  const handleOnChange = (e) => {
    setNewData({ ...newData, [e.target.id]: e.target.value })
  }

  // function to add the data
  const handleOnClick = () => {
    console.log("New Data-> ", newData);
    dispatch(addProduct(newData));
    setNewData({ productId: "", productName: "", contractPeriodStart: "", contractPeriodEnd: "", cropYear: "", price: "" })  // making the fields empty after saving
    navigate("/")
  }

  // resetting the form
  const handleOnReset = () => {
    setNewData({ productId: product.length + 1, productName: "", contractPeriodStart: "", contractPeriodEnd: "", cropYear: "", price: "" })
  }

  const years = [2024, 2025, 2026, 2027, 2028, 2029, 2030];
  return (
    <div className='container my-5' style={{ width: "45%" }}>
      <h1 className='text-center'>Add New Product</h1>
      <form>
        {/* <div className="mb-3">
          <label className="form-label fw-bold" htmlFor="productId">Product Id:</label>
          <input type="number" className="form-control" value={newData.productId} id="productId" onChange={handleOnChange} />
        </div> */}


        <div className="mb-3">
          <label className="form-label fw-bold" htmlFor="productId">Product Id:</label>
          <input type="number" className="form-control" value={product.length + 1} id="productId" readOnly />
        </div>


        <div className="form-group fw-bold">
          <label className="form-label" htmlFor="productName">Product Name:</label>
          <input type="text" className="form-control" value={newData.productName} id="productName" placeholder='Enter Product Name' onChange={handleOnChange} />
        </div>

        {/* <div className="form-group fw-bold">
          <label className="form-label" htmlFor="contractPeriod">Contract Period:</label>
          <input type="text" className="form-control" value={newData.contractPeriod} id="contractPeriod" onChange={handleOnChange} />
        </div> */}

        <div className="form-group fw-bold">
          <label className="form-label" htmlFor="contractPeriodStart">Contract Period Start:</label>
          <input type="date" className="form-control" value={newData.contractPeriodStart} id="contractPeriodStart" onChange={handleOnChange} />
        </div>

        <div className="form-group fw-bold">
          <label className="form-label" htmlFor="contractPeriodEnd">Contract Period End:</label>
          <input type="date" className="form-control" value={newData.contractPeriodEnd} id="contractPeriodEnd" min={newData.contractPeriodStart} onChange={handleOnChange} />
        </div>


        {/* <div className="form-group fw-bold">
          <label className="form-label" htmlFor="cropYear">Crop Year:</label>
          <input type="text" className="form-control" value={newData.cropYear} id="cropYear" onChange={handleOnChange} />
        </div> */}


        <div className="form-group fw-bold">
          <label htmlFor="cropYear">Crop Year:</label>
          <select className="form-control" value={newData.cropYear} id="cropYear" onChange={handleOnChange}>
            <option value="">Select Crop Year</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>


        <div className="form-group fw-bold">
          <label className="form-label" htmlFor="price">Price(&#8377;):</label>
          <input type="number" className="form-control" value={newData.price} id="price" placeholder='Enter Product price' onChange={handleOnChange} />
        </div>

      </form>


      <div className='text-center'>
        <button disabled={newData.productName.length === 0 || newData.contractPeriodStart.length === 0 || newData.contractPeriodEnd.length === 0 || newData.cropYear.length === 0 || newData.price.length === 0} className="btn btn-primary mt-3 mx-2" onClick={handleOnClick}>Save</button>
        <button className="btn btn-warning mt-3 mx-2" onClick={handleOnReset}>Reset</button>
      </div>



    </div>
  )
}
