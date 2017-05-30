/**
 * Created by Jacob Ohlinger on 5/29/17.
 */
const profile = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_PROFILE':
            return action.profile;
        default:
            return state;
    }
}


export default profile
