export const ADDCARTITEM='Cart/addcartItem';
export const REMOVECARTITEM='Cart/removecartItem';
export const INCREASEITEMQUANTITYBYONE='Cart/increaseItemQunatiy'


export default function cartReducer(state=[],action){
  switch (action.type) {
     case ADDCARTITEM:
       return [...state, action.payload] ;
     case REMOVECARTITEM:
       if (state.length == 0) {
         alert("cart is empty");
         return;
       }
       const filterdCart = state.filter(
         (item) => action.payload.productId !== item.productId,
       );
       return filterdCart ;
     case INCREASEITEMQUANTITYBYONE:
       const finalCartItem = state.map((item) => {
         if (item.productId == action.payload.productId) {
           return{...item,quantity:item.quantity++};
         }
         return item;
       });
       return  finalCartItem ;
     default:
       return state;
   }
}