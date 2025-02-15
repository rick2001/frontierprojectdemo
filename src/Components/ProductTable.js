  import { format } from 'date-fns'
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
    const [editData, setEditdata] = useState({ productId: "", productName: "", contractPeriodStart: "", contractPeriodEnd:"", cropYear: "", price: "" });

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
        contractPeriodStart: user.contractPeriodStart,
        contractPeriodEnd: user.contractPeriodEnd,
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


    // handeling the update button after performing edit operation in modal
    const handleUpdate = () => {
      // console.log("This is my edited data-> ",editData);
      dispatch(updateProduct(editData));
      refClose.current.click(); // modal will close
      toast.success("Updated successfully", {
        autoClose: 2000
      })

    }


    const years = [2024, 2025, 2026, 2027, 2028, 2029, 2030];


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

                  <div className="form-group fw-bold">
                    <label htmlFor="productName">Product Name:</label>
                    <input type="text" className="form-control" value={editData.productName} id="productName" onChange={handleOnChange} />
                  </div>

                  {/* <div className="form-group fw-bold">
                    <label htmlFor="contractPeriod">Contract Period:</label>
                    <input type="text" className="form-control" value={editData.contractPeriod} id="contractPeriod" onChange={handleOnChange} />
                  </div> */}

                  <div className="form-group fw-bold">
                    <label htmlFor="contractPeriodStart">Contract Period Start:</label>
                    <input type="date" className="form-control" value={editData.contractPeriodStart} id="contractPeriodStart" onChange={handleOnChange} />
                  </div>

                  <div className="form-group fw-bold">
                    <label htmlFor="contractPeriodEnd">Contract Period End:</label>
                    <input type="date" className="form-control" value={editData.contractPeriodEnd} id="contractPeriodEnd" min={editData.contractPeriodStart} onChange={handleOnChange} />
                  </div>

                  {/* <div className="form-group">
                    <label htmlFor="cropYear">Crop Year</label>
                    <input type="text" className="form-control" value={editData.cropYear} id="cropYear" onChange={handleOnChange} />
                  </div> */}

                  <div className="form-group fw-bold">
                    <label htmlFor="cropYear">Crop Year:</label>
                    <select className="form-control" value={editData.cropYear} id="cropYear" onChange={handleOnChange}>
                      <option value="">Select Crop Year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group fw-bold">
                    <label htmlFor="price">Price(&#8377;):</label>
                    <input type="number" className="form-control" value={editData.price} id="price" onChange={handleOnChange} />
                  </div>

                </form>


              </div>
              <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: "30px" }}>
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
                  <td>{`${format(new Date(item.contractPeriodStart), 'dd MMM yyyy')} - ${format(new Date(item.contractPeriodEnd), 'dd MMM yyyy')}`}</td>
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
