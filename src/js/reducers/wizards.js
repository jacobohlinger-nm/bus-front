/**
 * Created by Jacob Ohlinger on 5/29/17.
 */
import {combineReducers} from 'redux';

const createWizardPageWithNamedType = (wizardName = '') => {
    return function counter(state = 0, action) {
        switch (action.type) {
            case `NEXT_PAGE_${wizardName}`:
                return state + 1;
            case `PREVIOUS_PAGE_${wizardName}`:
                if (state > 0) {
                    return state - 1;
                } else return 0;
            default:
                return state;
        }
    }
}




const wizardPages = combineReducers({
    setupWizardPage : createWizardPageWithNamedType('SETUP'),
    testWizardPage : createWizardPageWithNamedType('TEST')
});

export default wizardPages;