import uuid from 'uuid';

export const addImage = (
    {
        image_url = '',
        image_description = ''

} = {}
) => ({
    type: 'ADD_IMAGE',
    image: {
        image_id: uuid(),
        image_url,
        image_description
    }

});

export const removeImage = ({ image_id } = {}) => ({
    type: 'REMOVE_IMAGE',
    image_id
});

export const editImage = (image_id, updates) => ({
    type: 'EDIT_IMAGE',
    image_id,
    updates
});