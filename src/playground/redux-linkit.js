import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addProject = (
    {
        category = '',
        url = '',
        createdAt = 0,
        description = '',
        images = []

} = {}
) => ({
    type: 'ADD_PROJECT',
    project: {
        id: uuid(),
        category,
        url,
        createdAt,
        description,
        images
    }

});

const removeProject = ({ id } = {}) => ({
    type: 'REMOVE_PROJECT',
    id
});

const editProject = (id, updates) => ({
    type: 'EDIT_PROJECT',
    id,
    updates
});

// projects: {
//     byId: {
//         "project1": {
//             id: "project1",
//             category: '',
//             url: 'projectUrl.com',
//             createdAt: 0,
//             description: 'some project description',
//             images: ["image1", "image2"]
//         },
//         "project2": {
//             // another project
//         }
//     },
//     allIds: ["project1", "project2"]
// },
// const projectsReducerDefaultState = {
//     byId: {},
//     allIds: []
// };

const projectsReducerDefaultState = [];

const projectsReducer = (state = projectsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            return [
                ...state,
                action.project
            ];
        case 'REMOVE_PROJECT':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_PROJECT':
            return state.map((project) => {
                if (project.id === action.id) {
                    return {
                        ...project,
                        ...action.updates
                    };
                } else {
                    return project;
                };
            });
        default:
            return state;
    }
};

const addImage = (
    {
        url = '',
        description = ''

} = {}
) => ({
    type: 'ADD_IMAGE',
    image: {
        id: uuid(),
        url,
        description
    }

});

const removeImage = ({ id } = {}) => ({
    type: 'REMOVE_IMAGE',
    id
});

const editImage = (id, updates) => ({
    type: 'EDIT_IMAGE',
    id,
    updates
});

const imagesReducerDefaultState = [];

const imagesReducer = (state = imagesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_IMAGE':
            return [
                ...state,
                action.image
            ];
        case 'REMOVE_IMAGE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_IMAGE':
            return state.map((image) => {
                if (image.id === action.id) {
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

const setProjectsTextFilter = (text = '') => ({
    type: 'SET_PROJECTS_TEXT_FILTER',
    text
});

const sortProjectsByCategory = () => ({
    type: 'SORT_PROJECTS_BY_CATEGORY'
});

const sortProjectsByUser = () => ({
    type: 'SORT_PROJECTS_BY_USER'
});

const sortProjectsByDate = () => ({
    type: 'SORT_PROJECTS_BY_DATE'
});

const SetProjectsStartDate = (startDate) => ({
    type: 'SET_PROJECTS_START_DATE',
    startDate
});

const SetProjectsEndDate = (endDate) => ({
    type: 'SET_PROJECTS_END_DATE',
    endDate
});

const projectsFiltersReducerDefaultState = {
    text: '',
    sortBy: 'user', // category, user, date
    startDate: undefined,
    endDate: undefined
};

const projectsFiltersReducer = (state = projectsFiltersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_PROJECTS_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_PROJECTS_BY_CATEGORY':
            return {
                ...state,
                sortBy: 'category'
            };
        case 'SORT_PROJECTS_BY_USER':
            return {
                ...state,
                sortBy: 'user'
            };
        case 'SORT_PROJECTS_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_PROJECTS_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_PROJECTS_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

// const setNewAvatar = (
//     {
//         name = '',
//         url = ''

// } = {}
// ) => ({
//     type: 'SET_NEW_AVATAR',
//     updates: {
//         name,
//         url
//     }

// });

const setNewAvatar = (updates) => ({
    type: 'SET_NEW_AVATAR',
    updates
});

const avatarReducerDefaultState = {
    name: 'jsa-128.jpg',
    url: '../../public/images/jsa-128.jpg'
};

const avatarReducer = (state = avatarReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_NEW_AVATAR':
            return {
                ...state,
                ...action.updates
            };
        default:
            return state;
    }
};


const getVisibleProjects = (projects, { text, sortBy, startDate, endDate }) => {
    return projects.filter((project) => {
        const startDateMatch = typeof startDate !== 'number' || project.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || project.createdAt <= endDate;
        const textMatch = project.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1; //most recent first
        } else if (sortBy === 'category') {
            return a.category > b.category ? 1 : -1 // alphabetically
        }
    });
}

const store = createStore(
    combineReducers({
        //portfolios: portfoliosReducer,
        //users: usersReducer,
        avatar: avatarReducer,
        projects: projectsReducer,
        images: imagesReducer,
        //portfoliosFilters: portfoliosFiltersReducer,
        projectsFilters: projectsFiltersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    console.log(state);
    const visibleProjects = getVisibleProjects(state.projects, state.projectsFilters)
    console.log(visibleProjects);
});


const projectOne = store.dispatch(addProject({ category: 'Computing', url: 'someUrl.com', description: 'some description', createdAt: -21000 }));
const projectTwo = store.dispatch(addProject({ category: 'Art', url: 'anotherUrl.com', description: 'another description', createdAt: -1000 }));

store.dispatch(setNewAvatar({ name: 'NewAvatar.jpg', url: 'newAvatarUrl.com'}));

// store.dispatch(removeProject({ id: projectOne.project.id }));

// store.dispatch(editProject(projectTwo.project.id, { url: 'editedUrl.com' }));

// store.dispatch(setProjectsTextFilter('e'));
// store.dispatch(setProjectsTextFilter());

// store.dispatch(sortProjectsByUser());
// store.dispatch(sortProjectsByDate());
// store.dispatch(sortProjectsByCategory());

// store.dispatch(SetProjectsStartDate(125));
// store.dispatch(SetProjectsStartDate());
// store.dispatch(SetProjectsEndDate(999));

const demoState = {
    projects: {
        byId: {
            "project1": {
                id: "project1",
                category: '',
                url: 'projectUrl.com',
                createdAt: 0,
                description: 'some project description',
                images: ["image1", "image2"]
            },
            "project2": {
                // another project
            }
        },
        allIds: ["project1", "project2"]
    },
    images: {
        byId: {
            "image1": {
                id: "image1",
                url: 'imageUrl.com',
                description: 'some image description'
            },
            "image2": {
                // another image
            }
        },
        allIds: ["image1", "image2"]
    },
    projects_filters: {
        text: 'some text',
        sortBy: 'user', // category, user, date
        startDate: undefined,
        endDate: undefined
    }
}


// const addPortfolio = (
//     {
//         category = '',
//         createdAt = 0,
//         owner = 110,
//         portfolio_description = '',
//         projects = []

// } = {}
// ) => ({
//     type: 'ADD_PORTFOLIO',
//     portfolio: {
//         portfolio_id: uuid(),
//         category,
//         createdAt,
//         owner,
//         portfolio_description,
//         projects
//     }

// });

// const removePortfolio = ({ portfolio_id } = {}) => ({
//     type: 'REMOVE_PORTFOLIO',
//     portfolio_id
// });

// const editPortfolio = (portfolio_id, updates) => ({
//     type: 'EDIT_PORTFOLIO',
//     portfolio_id,
//     updates
// });

// const portfoliosReducerDefaultState = [];

// const portfoliosReducer = (state = portfoliosReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'ADD_PORTFOLIO':
//             return [
//                 ...state,
//                 action.portfolio
//             ];
//         case 'REMOVE_PORTFOLIO':
//             return state.filter(({ portfolio_id }) => portfolio_id !== action.portfolio_id);
//         case 'EDIT_PORTFOLIO':
//             return state.map((portfolio) => {
//                 if (portfolio.portfolio_id === action.portfolio_id) {
//                     return {
//                         ...portfolio,
//                         ...action.updates
//                     };
//                 } else {
//                     return portfolio;
//                 };
//             });
//         default:
//             return state;
//     }
// };

// const addUser = (
//     {
//         user_name = '',
//         user_about = '',
//         user_avatar_url = '',
//         contact_details = ''

// } = {}
// ) => ({
//     type: 'ADD_USER',
//     user: {
//         user_id: uuid(),
//         user_name,
//         user_about,
//         user_avatar_url,
//         contact_details
//     }

// });

// const removeUser = ({ user_id } = {}) => ({
//     type: 'REMOVE_USER',
//     user_id
// });

// const editUser = (user_id, updates) => ({
//     type: 'EDIT_USER',
//     user_id,
//     updates
// });

// const usersReducerDefaultState = [];

// const usersReducer = (state = usersReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'ADD_USER':
//             return [
//                 ...state,
//                 action.user
//             ];
//         case 'REMOVE_USER':
//             return state.filter(({ user_id }) => user_id !== action.user_id);
//         case 'EDIT_USER':
//             return state.map((user) => {
//                 if (user.user_id === action.user_id) {
//                     return {
//                         ...user,
//                         ...action.updates
//                     };
//                 } else {
//                     return user;
//                 };
//             });
//         default:
//             return state;
//     }
// };

// const setPortfoliosTextFilter = (text = '') => ({
//     type: 'SET_PORTFOLIOS_TEXT_FILTER',
//     text
// });

// const sortPortfoliosByCategory = () => ({
//     type: 'SORT_PORTFOLIOS_BY_CATEGORY'
// });

// const sortPortfoliosByUser = () => ({
//     type: 'SORT_PORTFOLIOS_BY_USER'
// });

// const sortPortfoliosByDate = () => ({
//     type: 'SORT_PORTFOLIOS_BY_DATE'
// });

// const SetPortfoliosStartDate = (startDate) => ({
//     type: 'SET_PORTFOLIOS_START_DATE',
//     startDate
// });

// const SetPortfoliosEndDate = (endDate) => ({
//     type: 'SET_PORTFOLIOS_END_DATE',
//     endDate
// });

// const portfoliosFiltersReducerDefaultState = {
//     text: '',
//     sortBy: 'user', // category, user, date
//     startDate: undefined,
//     endDate: undefined
// };

// const portfoliosFiltersReducer = (state = portfoliosFiltersReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'SET_PORTFOLIOS_TEXT_FILTER':
//             return {
//                 ...state,
//                 text: action.text
//             };
//         case 'SORT_PORTFOLIOS_BY_CATEGORY':
//             return {
//                 ...state,
//                 sortBy: 'category'
//             };
//         case 'SORT_PORTFOLIOS_BY_USER':
//             return {
//                 ...state,
//                 sortBy: 'user'
//             };
//         case 'SORT_PORTFOLIOS_BY_DATE':
//             return {
//                 ...state,
//                 sortBy: 'date'
//             };
//         case 'SET_PORTFOLIOS_START_DATE':
//             return {
//                 ...state,
//                 startDate: action.startDate
//             };
//         case 'SET_PORTFOLIOS_END_DATE':
//             return {
//                 ...state,
//                 endDate: action.endDate
//             };
//         default:
//             return state;
//     }
// };

// const getVisiblePortfolios = (portfolios, { text, sortBy, startDate, endDate }) => {
//     return portfolios.filter((portfolio) => {
//         const startDateMatch = typeof startDate !== 'number' || portfolio.createdAt >= startDate;
//         const endDateMatch = typeof endDate !== 'number' || portfolio.createdAt <= endDate;
//         const textMatch = portfolio.portfolio_description.toLowerCase().includes(text.toLowerCase());

//         return startDateMatch && endDateMatch && textMatch;
//     }).sort((a, b) => {
//         if (sortBy === 'date') {
//             return a.createdAt < b.createdAt ? 1 : -1; //most recent first
//         } else if (sortBy === 'category') {
//             return a.category > b.category ? 1 : -1 // alphabetically
//         }
//     });
// };

// const portfolioOne = store.dispatch(addPortfolio({ portfolio_description: 'first description', category: 'Art', owner: 123, createdAt: 1000 }));
// const portfolioTwo = store.dispatch(addPortfolio({ portfolio_description: 'second description', category: 'Computing', owner: 444, createdAt: -1000 }));
// const portfolioThree = store.dispatch(addPortfolio({ portfolio_description: 'thirD description', category: 'Art', owner: 333, createdAt: 123 }));

// // store.dispatch(removePortfolio({ portfolio_id: portfolioOne.portfolio.portfolio_id }));

// // store.dispatch(editPortfolio(portfolioTwo.portfolio.portfolio_id, { category: 'Gardening' }));

// store.dispatch(setPortfoliosTextFilter('o'));
// store.dispatch(setPortfoliosTextFilter());

// store.dispatch(sortPortfoliosByCategory());
// store.dispatch(sortPortfoliosByUser());
// store.dispatch(sortPortfoliosByDate());

// store.dispatch(SetPortfoliosStartDate(0));
// // store.dispatch(SetPortfoliosStartDate());
// store.dispatch(SetPortfoliosEndDate(999));


// const userOne = store.dispatch(addUser({ user_name: 'Oto Drahonovsky', user_about: 'some programmer' }));
// const userTwo = store.dispatch(addUser({ user_name: 'Nuala Casey', user_about: 'the supporter'}));

// store.dispatch(removeUser({ user_id: userOne.user.user_id }));

// store.dispatch(editUser(userTwo.user.user_id, { user_about: 'the best supporter' }));


// const imageOne = store.dispatch(addImage({ url: 'someImageUrl.com', description: 'some image description' }));
// const imageTwo = store.dispatch(addImage({ url: 'anotherImageUrl.com', description: 'another image description'}));

// store.dispatch(removeImage({ id: imageOne.image.id }));

// // store.dispatch(editImage(imageTwo.image.id, { url: 'changeAnotherImageUrl' }));

// const demoState = {
//     // users: {
//     //     byId: {
//     //         "user1": {
//     //             user_id: "user1",
//     //             user_name: 'Some User Name',
//     //             user_about: 'about user',
//     //             user_avatar_url: 'avatarUrl.com',
//     //             contact_details: 'some contact details',
//     //             portfolios: ["portfolio1", "portfolio2"]
//     //         },
//     //         "user2": {
//     //             // another user
//     //         }
//     //     },
//     //     allIds: ["user1", "user2"]
//     // },
//     portfolios: {
//         byId: {
//             "portfolio1": {
//                 portfolio_id: "portfolio1",
//                 category: 'some category',
//                 createdAt: 0,
//                 owner: 110,
//                 portfolio_description: 'some portfolio description',
//                 projects: ["project1", "project2"]
//             },
//             "portfolio2": {
//                 // another portfolio
//             }
//         },
//         allIds: ["portfolio1", "portfolio2"]
//     },
//     projects: {
//         byId: {
//             "project1": {
//                 id: "project1",
//                 url: 'projectUrl.com',
//                 createdAt: 0,
//                 description: 'some project description',
//                 images: ["image1", "image2"]
//             },
//             "project2": {
//                 // another project
//             }
//         },
//         allIds: ["project1", "project2"]
//     },
//     images: {
//         byId: {
//             "image1": {
//                 id: "image1",
//                 url: 'imageUrl.com',
//                 description: 'some image description'
//             },
//             "image2": {
//                 // another image
//             }
//         },
//         allIds: ["image1", "image2"]
//     },
//     profiles_filters: {
//         text: 'some text',
//         sortBy: 'user', // category, user, date
//         startDate: undefined,
//         endDate: undefined
//     },
//     projects_filters: {
//         text: 'some text',
//         sortBy: 'user', // category, user, date
//         startDate: undefined,
//         endDate: undefined
//     }
// }

// //complete example
// const demoState = {
//     portfolios: [{  
//         user_id: 1,
//         profile: {
//             user_name: 'Some Name',
//             user_about: 'about user',
//             user_avatar: 'avatarUrl.com',
//             contact_details: 'some contact details'
//         },
//         work:[{
//             work_id: 1,
//             startDate: 'some start date',
//             endDate: 'some end date',
//             work_description: 'some work description',
//             current_work: 'yes or no'
//         }],
//         education:[{
//             education_id: 1,
//             university: 'some university name',
//             course_name: 'some course name',
//             startDate: 'some start date',
//             endDate: 'some end date',
//             education_id_description: 'some education description',
//             current_education: 'yes or no',
//             completed: 'yes or no'
//         }],
//         other_skills:[{
//             skill_id: 1,
//             skill_name: 'some skill name',
//             certificate_url: 'certificateUrl.com' 
//         }],
//         projects: [{
//             id: 1,
//             category: 'some category',
//             url: 'projectUrl.com',
//             project_decsription: 'some project description',
//             images: [{
//                 id: 'asdfgh',
//                 url: 'imageUrl.com',
//                 description: 'some image description'
//             }]
//         }],
//         references:[{
//             reference_id: 1,
//             reference_text: 'some reference text',
//             referee_name: 'some referee name' 
//         }]
//     }]
// }