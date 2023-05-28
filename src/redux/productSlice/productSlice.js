import { createSlice, current } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    cartItems: [],
    userInfo: null,

}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let tempArray  = [...state.cartItems]

            const itemIndex = tempArray.findIndex((product) => product?._id === action?.payload?._id )
                    
            if(itemIndex >= 0) {
                tempArray[itemIndex].quantity = Number(action?.payload?.quantity);
                state.cartItems = tempArray;

            } else {
                
                const cart = { ...action?.payload, quantity: 1 }
                tempArray.push(cart)
                state.cartItems = tempArray;
            }

        },

        deleteFromCart: (state, action) => {
      
           let tempArray = [...state.cartItems];

           const itemIndex = tempArray.findIndex((item) => item?._id === action?.payload?._id);

           if(itemIndex >= 0) {
            tempArray.splice(itemIndex, 1);
            // state.cartItems = tempArray;
           }

           state.cartItems = tempArray;
        },

        resetCart: (state) =>  {
           state.cartItems = []
        },

        incrementCartQuantity: (state, action) =>  {

            let tempArray = [...(state.cartItems || [])];

            const itemIndex = tempArray.findIndex((item) => item?._id === action.payload?._id )
            
            if(itemIndex >= 0 && tempArray[itemIndex].quantity >= 1) {
                tempArray[itemIndex].quantity += 1;
            }

            state.cartItems = tempArray;
        },

        decrementCartQuantity: (state, action) =>  {

            let tempArray = [...(state.cartItems || [])];
            const itemIndex = tempArray.findIndex((item) => item?._id === action?.payload?._id )
            
            if(itemIndex >= 0 && tempArray[itemIndex].quantity > 1) {                
                tempArray[itemIndex].quantity -= 1;
            } 

            state.cartItems = tempArray;
        },

        addUser: (state, action) => {
            state.userInfo = action.payload

        },
        removeUser: (state) => {
            state.userInfo = null
            
        }

    },
    extraReducers: (builder) => {}
})

export const { addToCart, incrementCartQuantity, decrementCartQuantity, resetCart, deleteFromCart, addUser, removeUser } = productSlice.actions;

export const allProducts = (state) => state.product.products 
export const carts = (state) => state.product.cartItems
export const userInfo = (state) => state.product.userInfo


export default productSlice.reducer