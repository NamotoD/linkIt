const skillsReducerDefaultState = [];

export default (state = skillsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_SKILL':
            return [
                ...state,
                action.skill
            ];
        case 'REMOVE_SKILL':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_SKILL':
            return state.map((skill) => {
                if (skill.id === action.id) {
                    return {
                        ...skill,
                        ...action.updates
                    };
                } else {
                    return skill;
                };
            });
        case 'SET_SKILLS':
            return action.skills;
        default:
            return state;
    };
};