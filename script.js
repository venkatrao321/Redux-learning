// import {createStore} from 'redux';
// import { myStore } from './mystore';
// import {productList} from './productList'
// const initailState = {
//   post: 0,
//   name: "Venkatesh Rao",
//   age: 29,
// };

// function reducer(state=initailState, action) {
//   if (action.type === "post/increment") {
//     return { ...state, post: state.post + 1 };
//   } else if (action.type === "post/decrement") {
//     return { ...state, post: state.post - 1 };
//   }
//   return state;
// }

// const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.());
// const mystore=myStore()
// console.log(mystore);
// store.subscribe(()=>{
//  console.log(store.getState());
// })
// console.log(store.getState());
// store.dispatch({type:"post/increment"} )

// console.log(store.getState());
// store.dispatch({type:"post/decrement"} )

// What Redux will Do //

// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/decrement" });
// console.log(reduxState);
//////////////////////////////////////////////////////////////////////////
// import {createStore} from 'redux';
// import {productList} from './productList'

// const initailState={
//   products:productList,
//   cartItems:[],
//   wishLists:[]
// }
// const ADDCARTITEM='Cart/addcartItem';
// const REMOVECARTITEM='Cart/removecartItem';
// const INCREASEITEMQUANTITYBYONE='Cart/increaseItemQunatiy'
// function reducer(state=initailState,action) {
//    switch (action.type) {
//      case ADDCARTITEM:
//        return { ...state, cartItems: [...state.cartItems, action.payload] };
//      case REMOVECARTITEM:
//        if (state.cartItems.length == 0) {
//          alert("cart is empty");
//          return;
//        }
//        const filterdCart = state.cartItems.filter(
//          (item) => action.payload.productId !== item.productId,
//        );
//        return { ...state, cartItems: filterdCart };
//      case INCREASEITEMQUANTITYBYONE:
//        const finalCartItem = state.cartItems.map((item) => {
//          if (item.productId == action.payload.productId) {
//            return{...item,quantity:item.quantity++};
//          }
//          return item;
//        });
//        return { ...state, cartItems: finalCartItem };
//      default:
//        return state;
//    }
// }
// const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())

// store.dispatch({type:ADDCARTITEM,payload:{productId:1,quantity:1}})
// store.dispatch({type:ADDCARTITEM,payload:{productId:2,quantity:4}})
// // store.dispatch({type:REMOVECARTITEM,payload:{productId:1,quantity:1}});
// store.dispatch({type:INCREASEITEMQUANTITYBYONE,payload:{productId:2}})
// store.dispatch({type:INCREASEITEMQUANTITYBYONE,payload:{productId:2}})
// // store.subscribe(()=>{
//   console.log(store.getState())
// // })

//////////////////////////////////////////////////////////////////////////////////////////////
import {combineReducers, createStore} from 'redux';
import productsReducers from './productsReducer';
import cartReducer, { ADDCARTITEM, INCREASEITEMQUANTITYBYONE, REMOVECARTITEM } from './cartReducer';

const reducers=combineReducers({
  products:productsReducers,
  cartItems:cartReducer
})
const store=createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__?.())

store.dispatch({type:ADDCARTITEM,payload:{productId:1,quantity:1}})
store.dispatch({type:ADDCARTITEM,payload:{productId:2,quantity:4}})
store.dispatch({type:INCREASEITEMQUANTITYBYONE,payload:{productId:2}})
store.dispatch({type:INCREASEITEMQUANTITYBYONE,payload:{productId:2}})
store.dispatch({type:REMOVECARTITEM,payload:{productId:1,quantity:1}});
// store.subscribe(()=>{
  console.log(store.getState())
// })
