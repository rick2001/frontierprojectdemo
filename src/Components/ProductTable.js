import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct, updateProduct } from '../redux/counter/counterSlice'
import { toast } from 'react-toastify'

export const ProductTable = () => {

  // useRef Hook variable.
  const ref = useRef(null);  // for opening the modal 
  const refClose = useRef(null); // for closing the modal

  // getting data from counterSilce
  const data = useSelector((state) => state.counter.products)
  console.log(data);  // logging the data in console

  // variable of useDisPatch Hook
  const dispatch = useDispatch();

  // new state to store the edited data
  const [editData, setEditdata] = useState({ productId: "", productName: "", contractPeriod: "", cropYear: "", price: "" })

  // handeling the deleting functionality
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    toast.error("Deleted Successfully", {
      autoClose: 2000
    })
  }

  // handeling the edited data functionality
  const handleEdit = (user) => {
    setEditdata({
      productId: user.productId,
      productName: user.productName,
      contractPeriod: user.contractPeriod,
      cropYear: user.cropYear,
      price: user.price
    })
    // console.log(user)
    ref.current.click();  //modal will open
  }

  // handeling the form data
  const handleOnChange = (e) => {
    setEditdata({ ...editData, [e.target.id]: e.target.value })
  }


  // handeling the save button after performing edit operation in modal
  const handleSave = () => {
    // console.log("This is my edited data-> ",editData);
    dispatch(updateProduct(editData));
    refClose.current.click(); // modal will close
    toast.success("Updated successfully",{
      autoClose: 2000
    })

  }



  return (
    <>
      <button style={{ display: "none" }} ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form>
                <div className="form-group">
                  <label htmlFor="productName">Product Name</label>
                  <input type="text" className="form-control" value={editData.productName} id="productName" onChange={handleOnChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="contractPeriod">Contract Period</label>
                  <input type="text" className="form-control" value={editData.contractPeriod} id="contractPeriod" onChange={handleOnChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="cropYear">Crop Year</label>
                  <input type="text" className="form-control" value={editData.cropYear} id="cropYear" onChange={handleOnChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price (&#8377;)</label>
                  <input type="text" className="form-control" value={editData.price} id="price" onChange={handleOnChange} />
                </div>
              </form>


            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom:"20px" }}>
          <h1>Product Details</h1>
          <Link to="/create" className='btn btn-success'>Add New +</Link>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Contract Period</th>
              <th>Crop Year</th>
              <th>Price (&#8377;)</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? data.map((item, index) => {
              return <tr key={index}>
                <td>{item.productName}</td>
                <td>{item.contractPeriod}</td>
                <td>{item.cropYear}</td>
                <td>{item.price}</td>
                <td>
                  <button className='btn btn-warning' onClick={() => handleEdit(item)} title="Edit the product">Edit</button>
                </td>
                <td>
                  <button className='btn btn-danger' onClick={() => handleDelete(item.productId)} title="Delete the product">Delete</button>
                </td>
              </tr>
            }) : <h3 className='text-center mt-3'>No Product Details Found</h3>}
          </tbody>
        </table>
      </div>

    </>
  )
}
