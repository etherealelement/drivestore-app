import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../types/catalogCardType.ts";

const catalogCardSlice = createSlice({
	name: "catalog",
	initialState,
	reducers: {
		reset: () => initialState,
		sortByPopular(state, action): void {
			switch (action.payload) {
				case "Популярности": {
					state.catalog = state.catalog.sort(
						(a, b) => b.popular - a.popular
					);
					break;
				}
				case "Цене": {
					state.catalog = state.catalog.sort(
						(a, b) => +b.price - +a.price
					);
					break;
				}
				case "Качеству": {
					state.catalog = state.catalog.sort(
						(a, b) => b.rating - a.rating
					);
					break;
				}
				default: {
					throw new Error();
				}
			}
		},
		sortByAvailability(state, action): void {
			switch (action.payload) {
				case "В наличии": {
					state.catalog = state.catalog.filter(
						(item) => item.availability === "В наличии"
					);
					break;
				}
				case "Под заказ": {
					state.catalog = state.catalog.filter(
						(item) => item.availability === "Под заказ"
					);
					break;
				}
				default: {
					throw new Error();
				}
			}
		},
		sortByNew(state, action) {
			switch (action.payload) {
				case "Новинки": {
					state.catalog = state.catalog.filter((item) => item.new);
					break;
				}
				case "Акции": {
					state.catalog = state.catalog.filter((item) => item.stocks);
				}
			}
		},
		sortByPrice(state, action) {
			state.catalog = state.catalog.filter(
				(item) =>
					item.price <= action.payload[1] &&
					item.price >= action.payload[0]
			);
		},
		sortByPower(state, action) {
			console.log(action.payload);
			switch (action.payload.type) {
				case "POWER_LS": {
					state.catalog = state.catalog.filter(
						(item) => item.powerLs === action.payload.powerLs
					);
					break;
				}
				case "POWER_ENGINE": {
					state.catalog = state.catalog.filter(
						(item) =>
							item.powerEngine === action.payload.powerEngine
					);
					break;
				}
				case "MAX_SPEED": {
					state.catalog = state.catalog.filter(
						(item) => item.maksSpeed === action.payload.maxSpeed
					);
					break;
				}
				default: {
					throw new Error();
				}
			}
		},

		sortByBrand(state, action) {
			switch (action.payload.title) {
				case "BRP": {
					state.catalog = state.catalog.filter(
						(item) => item.brand === action.payload.brand
					);
					break;
				}

				case "Spark 2": {
					state.catalog = state.catalog.filter(
						(item) => item.brand === action.payload.brand
					);
					break;
				}
				case "Spark 3": {
					state.catalog = state.catalog.filter(
						(item) => item.brand === action.payload.brand
					);
					break;
				}
				default: {
					throw new Error("Введен неверный параметр сортировки");
				}
			}
		},

		sortByModel(state, action) {
			switch(action.payload.type) {
				
				case "SEARCH_BY_NAME":  {
					state.catalog = state.catalog.filter(item => item.title.toLocaleLowerCase().includes(action.payload.searchText.toLowerCase()));
					break;
				}
				case "SEA_DOO_SPARK_2" : {
					state.catalog =state.catalog.filter(item => item.title  === action.payload.searchText)
					break;
				}
				case "SEA_DOO_GTI_155" : {
					state.catalog =state.catalog.filter(item => item.title  === action.payload.searchText)
					break;
				}
				case "SEA_DOO_SPARK_90" : {
					state.catalog =state.catalog.filter(item => item.title  === action.payload.searchText)
					break;
				}
				case "SEA_DOO_GTR_230" : {
					state.catalog =state.catalog.filter(item => item.title  === action.payload.searchText)
					break;
				}
				default: {
					throw new Error("Не верный параметр/свойство сортировки")
				}
			}
		},
		sortByStocks(state, action) {
			switch(action.payload.type) {
				case "SORT_BY_SALE": {
					state.catalog = state.catalog.filter(item => item.sale)
					break
				}
				case "SORT_BY_NEW": {
					state.catalog = state.catalog.filter(item => item.new)
					break;
				}
				case "SORT_BY_HIT" : {
					state.catalog = state.catalog.filter(item => item.hit)
					break;
				}
				case "SORT_BY_DILLER": {
					state.catalog = state.catalog.filter(item => item.diller);
					break;
				}
				default: {
					throw new Error("Не верный параметр сортировки")
				}	
			} 
		},

		sortByCountries(state, action) {
			switch(action.payload.type) {
				case "SORT_BY_RUSSIA": {
					state.catalog = state.catalog.filter(item => item.country === action.payload.searchText)
					break;
				}
				case "SORT_BY_USA": {
					state.catalog = state.catalog.filter(item => item.country === action.payload.searchText)
					break;
				}
				case "SORT_BY_GERMANY": {
					state.catalog = state.catalog.filter(item => item.country === action.payload.searchText)
					break;
				}
				case "SORT_BY_CHINA": {
					state.catalog = state.catalog.filter(item => item.country === action.payload.searchText)
					break;
				}
			}
		}

	},
});

export const {
	sortByPopular,
	sortByAvailability,
	reset,
	sortByNew,
	sortByPrice,
	sortByPower,
    sortByBrand,
	sortByModel,
	sortByStocks,
	sortByCountries
} = catalogCardSlice.actions;
export default catalogCardSlice.reducer;
