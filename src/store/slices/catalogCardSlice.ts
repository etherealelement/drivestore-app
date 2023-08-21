import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "../types/catalogCardType.ts";


const catalogCardSlice = createSlice({
    name: "catalog",
    initialState,
    reducers: {
        reset: () => initialState,
      sortByPopular(state,action):void {
            switch (action.payload) {
                case "Популярности" : {
                    state.catalog = state.catalog.sort((a,b) => b.popular - a.popular);
                 break;
                }
                case "Цене" : {
                    state.catalog = state.catalog.sort((a,b) => +b.price - +a.price);
                    break;
                }
                case "Качеству": {
                    state.catalog =state.catalog.sort((a,b) => b.rating - a.rating);
                    break;
                }
                default: {
                    throw  new Error()
                }
            }
      },
        sortByAvailability(state,action): void {
          switch (action.payload) {
              case "В наличии": {
                  state.catalog = state.catalog.filter(item => item.availability === "В наличии")
                  break;
              }
              case "Под заказ": {
                  state.catalog = state.catalog.filter(item => item.availability === "Под заказ")
                  break;
              }
              default: {
                  throw new Error()
              }
          }
        },
        sortByNew(state, action ) {
          switch (action.payload)  {
              case "Новинки" : {
                  state.catalog = state.catalog.filter(item => item.new)
                  break
              }
              case "Акции" : {
                  state.catalog = state.catalog.filter(item => item.stocks)
              }
          }
        },
        sortByPrice(state, action ) {
           state.catalog = state.catalog.filter(item =>  item.price <= action.payload[1] && item.price >= action.payload[0])
        },
    },
})

export const {sortByPopular, sortByAvailability, reset, sortByNew, sortByPrice} = catalogCardSlice.actions;
export default catalogCardSlice.reducer