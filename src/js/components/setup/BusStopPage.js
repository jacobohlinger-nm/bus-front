/**
 * Created by Jacob Ohlinger on 5/29/17.
 */
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate'

const BusStopPage = ({previousPage, handleSubmit})=> {
    return(
        <div>
            <h1>Where do you catch the bus?</h1>
            <form onSubmit={handleSubmit}>
                <label>in the morning?</label>
                <Field name="busStopOutbound" type="text" component="input"></Field>
                <label>in the afternoon?</label>
                <Field name="busStopInbound" type="text" component="input"></Field>
                <div>
                    <button type="button" className="previous" onClick={previousPage}>Previous</button>
                    <button type="submit" >Submit</button>
                </div>
            </form>
        </div>
    );
}

export default reduxForm({
    form: 'setupWizard',
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(BusStopPage);