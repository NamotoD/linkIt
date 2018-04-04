const previouslocationReducerDefaultState = {
    previousLocation: "/public"
};

export default (state = previouslocationReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_PREVIOUS_LOCAITON':
            return {
                ...action.updates
            };
        // case 'SET_AVATAR':
        //     return {
        //         ...action.location
        //     };
        default:
            return state;
    }
};