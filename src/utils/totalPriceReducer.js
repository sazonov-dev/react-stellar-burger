export const initialState = {totalPrice: 0};

export const reducer = (state, action) => {
    switch (action.type) {
        case "set":
            return {totalPrice: action.payload}
        case "reset":
            return initialState;
        default:
            throw new Error(`Ошибка action.type - totalPriceReducer`)
    }
}
