/**
 * Created by Jacob Ohlinger on 5/29/17.
 */
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate';


const BusRoutePage = ({handleSubmit, previousPage}) => {

    return (
        <div>
            <h1>Enter your bus route</h1>
          <form onSubmit={handleSubmit}>
              <Field name="route" type="text" component="input" label="Bus Route" />
              <div>
                  <button type="button" className="previous" onClick={previousPage}>Previous</button>
                  <button type="submit" className="next">Next</button>
              </div>
          </form>
        </div>
    );
}

export default reduxForm({
    form: 'setupWizard',  //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(BusRoutePage)