import database from '../firebase/firebase';

export const addPortfolio = (portfolio) => ({
    type: 'ADD_PORTFOLIO',
    portfolio
});

export const startAddPortfolio = (portfolioInfo = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            portfolioDescription = ''
        } = portfolioInfo;
        const portfolio = {portfolioDescription};

        database.ref(`users/${uid}`).update(portfolio).then(() => {
            dispatch(addPortfolio({...portfolio}));
        });
    };
};

export const setPortfolio = (portfolio) => ({
    type: 'SET_PORTFOLIO',
    portfolio
});

export const startSetPortfolio = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}`).once('value').then((snapshot) => {
            const portfolio = snapshot.val();
            dispatch(setPortfolio(portfolio));
        });
    };
};

export const startSetSharedPortfolio = (uid) => {
    return (dispatch, getState) => {
        return database.ref(`users/${uid}`).once('value').then((snapshot) => {
            const portfolio = snapshot.val();
            dispatch(setPortfolio(portfolio));
        });
    };
};

// export const removeUser = ({ user_id } = {}) => ({
//     type: 'REMOVE_USER',
//     user_id
// });

// export const editUser = (user_id, updates) => ({
//     type: 'EDIT_USER',
//     user_id,
//     updates
// });