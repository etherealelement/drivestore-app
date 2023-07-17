export const countReducer = (state:any, action:any):void => {
    console.log(state)
    console.log(action)
    switch (action.type) {
        case "incr": {
            return {
                ...state,
                count: state.count + 1,
            }
        }

    }
}

export const initialCount:{
    count: number,
} = {
    count: 0,
}
