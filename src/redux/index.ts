import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import CartReducer from "./reducers/cart/CartReducer";

export const rootReducer = combineReducers({
    cart: CartReducer
})

export const store = createStore(rootReducer)


export type RootState = ReturnType<typeof rootReducer>
export const  useTypedSelector : TypedUseSelectorHook<RootState>= useSelector