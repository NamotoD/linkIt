
const imagesReducerDefaultState = [];

export default (state = imagesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_IMAGE':
            return [
                ...state,
                action.image
            ];
        case 'REMOVE_IMAGE':
            return state.filter(({ image_id }) => image_id !== action.image_id);
        case 'EDIT_IMAGE':
            return state.map((image) => {
                if (image.image_id === action.image_id) {
                    return {
                        ...image,
                        ...action.updates
                    };
                } else {
                    return image;
                };
            });
        default:
            return state;
    }
};