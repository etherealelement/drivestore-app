import {Context, createContext} from "react";
export const CountContext:React.Context<any> = createContext<any>([]);
export const CountContextDispatch:React.Context<any> = createContext<any>(null)
export const CartContext:Context<any> = createContext<any>(null);
export const CartContextHandler:Context<any> = createContext<any>(null);
export const FavoritesContext:Context<any> = createContext<any>([]);
