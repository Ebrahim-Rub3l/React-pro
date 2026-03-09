import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart: (state, action) => {
     
      const item = action.payload
      const existing = state.items.find(i => i.id === item.id)

      if(existing){
        existing.quantity += item.quantity
      }
      else{
        state.items.push(item)
      }
       localStorage.setItem('cart',JSON.stringify(state.items))
    },
    updateQuantity : (state , action) => {
      const {id , quantity} = action.payload
      const product = state.items.find(i => i.id == id)
      if(product){
        product.quantity = quantity
      }
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    removeCart : (state, action) => {
      state.items = state.items.filter(i => i.id != action.payload)
      localStorage.setItem('cart' , JSON.stringify(state.items))
    }
  },
})

// Action creators are generated for each case reducer function
export const { addtocart , updateQuantity , removeCart } = cartSlice.actions

export default cartSlice.reducer