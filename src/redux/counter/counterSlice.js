import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  // products: [
  //   { productId: 1, productName: 'Wheat', contractPeriod: 'Jul 24', cropYear: '2023', price: '1000' },
  //   { productId: 2, productName: 'Corn', contractPeriod: 'Aug 24', cropYear: '2024', price: '800' },
  //   { productId: 3, productName: 'Rice', contractPeriod: 'Sep 24', cropYear: '2024', price: '1200' },
  //   { productId: 4, productName: 'Daal', contractPeriod: 'Jan 24', cropYear: '2023', price: '700' }
  // ]
  products: [
    { productId: 1, productName: 'Wheat', contractPeriod: '2024-08-24', cropYear: '2023', price: '1000' },
    { productId: 2, productName: 'Corn', contractPeriod: '2024-08-24', cropYear: '2024', price: '800' },
    { productId: 3, productName: 'Rice', contractPeriod: '2024-09-24', cropYear: '2024', price: '1200' },
    { productId: 4, productName: 'Daal', contractPeriod: '2024-01-24', cropYear: '2023', price: '700' }
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