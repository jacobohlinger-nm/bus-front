/**
 * Created by Jacob Ohlinger on 5/29/17.
 */
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate'


const DirectionPage = ({handleSubmit, previousPage})=> {

    return (
        <div>
            <h1>Do you travel East in the morning?</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>
                            <Field name="direction" component="input" type="radio" value="east" />
                            {' '}
                            yes
                        </label>
                        <label>
                            <Field name="direction" component="input" type="radio" value="west" />
                            {' '}
                            no I go West
                        </label>
                    </div>
                </div>
                <div>
                    <button type="button" className="previous" onClick={previousPage}>Previous</button>
                    <button type="submit" className="next" >Next</button>
                </div>
            </form>
        </div>);
}

export default reduxForm({
    form: 'setupWizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(DirectionPage)
