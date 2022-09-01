import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState:[
      {}
    ],
    reducers:{
        addUser(state, action){
          state.push(action.payload)
        },
        addCart(state, action){
          // return console.log(state)
          state.push(action.payload)
      }
    }
  })

//   export let { countUp } = cart.actions
  export let {addUser, addCart} = user.actions
  export default user