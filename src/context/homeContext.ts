import {createContext} from "react";
export const CountContext:React.Context<number> = createContext<number>(0)
export const CountContextDispatch = createContext<any>(null)