
export  const carts = ([]);

localStorage.setItem("cart", JSON.stringify(carts));
export const cartReducer = (state: any, action: any) => {
    console.log(state)
    switch (action.type) {
        case "addItem": {
            return [
                ...state,
                {
                    ...action.payload
                }
            ]
        }

    }
}

// Добавление в локалстор
// Извлечение из стора
export const cartItems = JSON.parse(window.localStorage.getItem("cart"))


