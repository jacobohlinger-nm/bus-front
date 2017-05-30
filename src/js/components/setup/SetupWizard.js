/**
 * Created by Jacob Ohlinger on 5/29/17.
 */
import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import EmailPage from './EmailPage';
import BusRoutePage from './BusRoutePage';
import DirectionPage from './DirectionPage';
import BusStopPage from './BusStopPage';
import CompletePage from './CompletePage';

const SetupWizard = ({page, onSubmit, nextPage, previousPage, profile}) => {
        return (
            <div>
                {page === 0 && <EmailPage onSubmit={nextPage}/>}
                {page === 1 && <BusRoutePage previousPage={previousPage} onSubmit={nextPage}/>}
                {page === 2 && <DirectionPage previousPage={previousPage} onSubmit={nextPage}/>}
                {page === 3 && <BusStopPage previousPage={previousPage} onSubmit={onSubmit}/>}
                {page === 4 && <CompletePage previousPage={previousPage} profile={profile}/>}

            </div>
        );
}

SetupWizard.propTypes = {
    page: PropTypes.number.isRequired,
    nextPage: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,

}

const mapStateToProps = (state) => ({
    page: state.wizardPages.setupWizardPage,
    profile: state.profile
});

const mapDispatchToProps = dispatch => ({
    nextPage: ()=> {dispatch({type: 'NEXT_PAGE_SETUP'})},
    previousPage: ()=> {dispatch({type: 'PREVIOUS_PAGE_SETUP'})},
    onSubmit: (profile)=>{
        console.log('in submit');
        dispatch({type: 'CREATE_PROFILE', profile: profile});
        dispatch({type: 'NEXT_PAGE_SETUP'});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupWizard);
export { SetupWizard as SetupWizardUnmapped };
