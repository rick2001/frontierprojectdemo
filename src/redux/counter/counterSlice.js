import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [
        { productId: 1, productName: 'Wheat', contractPeriod: '6 months', cropYear: '2023', price: '1000' },
        { productId: 2, productName: 'Corn', contractPeriod: '1 year', cropYear: '2022', price: '800' },
        { productId: 3, productName: 'Rice', contractPeriod: '1 year', cropYear: '2021', price: '1200' },
        { productId: 4, productName: 'Daal', contractPeriod: '7 year', cropYear: '2020', price: '700' }
    ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addProduct: (state, action)=>{
        console.log(action);
        state.products.push(action.payload)
    },
    updateProduct: (state, action)=>{

    },
    deleteProduct: (state, action)=>{

    }
    
  }
})

// Action creators are generated for each case reducer function
export const { addProduct, updateProduct, deleteProduct } = counterSlice.actions

export default counterSlice.reducer