/**
 * Created by Jacob Ohlinger on 5/29/17.
 */
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import busRoutes from './busRoutes';
import wizardPages from './wizards';
import profile from './profile';

const rootReducer = combineReducers({
    busRoutes,
    form,
    wizardPages,
    profile
});

export default rootReducer;