import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "../types/catalogCardType.ts";

const catalogCardSlice = createSlice({
    name: "catalog",
    initialState,
    reducers: {
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

              case "Все товары" : {
                  state.catalog = state.catalog.filter(item => item)
                  break;
              }

              default: {
                  throw new Error()
              }
          }
        },
    },
})

export const {sortByPopular, sortByAvailability} = catalogCardSlice.actions;
export default catalogCardSlice.reducer