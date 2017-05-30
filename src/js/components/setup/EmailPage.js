/**
 * Created by Jacob Ohlinger on 5/29/17.
 */
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate';
import renderField from './renderField';

const EmailPage = (props) => {
    const { handleSubmit } = props;
    return (
        <div>
            <h1>Let's get started</h1>
            <form onSubmit={handleSubmit}>
                <Field name="email" type="email" component={renderField} label="Email"/>
                <div>
                    <button type="submit" className="next">Next</button>
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
})(EmailPage)