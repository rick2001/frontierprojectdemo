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
    addProduct: (state, action) => {
      console.log(action);
      state.products.push(action.payload)
    },
    updateProduct: (state, action) => {
      // console.log("This is counterSlice-> ", action.payload)
      const id = action.payload.productId;
      const index = state.products.findIndex((product) => product.productId === id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }

    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      // finding the index of the data to be deleted
      const index = state.products.findIndex((product) => product.productId === id);
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    }

  }
})

// Action creators are generated for each case reducer function
export const { addProduct, updateProduct, deleteProduct } = counterSlice.actions

export default counterSlice.reducer