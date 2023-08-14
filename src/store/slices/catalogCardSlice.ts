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
                    state.catalog = state.catalog.sort((a,b) => b.price - a.price);
                    break;
                }
                case "Качеству": {
                    state.catalog =state.catalog.sort((a,b) => b.rating - a.rating);
                }
            }
      },
    },
})

export const {sortByPopular} = catalogCardSlice.actions;
export default catalogCardSlice.reducer