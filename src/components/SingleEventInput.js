import React from 'react';
import { Field } from 'formik';

const SingleEventInput = ({ index, remove }) => (
    <div className="d-flex justify-content-center my-2 p-1 border-bottom-100 border-primary" key={index}>
        <div>
            <h3>{index + 1}</h3>
            <button type="button" className="btn btn-secondary" onClick={() => remove(index)} title="Remove">
                X
            </button>
        </div>
        <div className="flex-grow-1">
            <Field name={`events.${index}.date`} placeholder="2022-06-28" type="text" className="form-control" />
            <Field name={`events.${index}.title`} placeholder="Title here" type="text" className="form-control" />
            <Field
                name={`events.${index}.description`}
                placeholder="Long or short description goes here"
                type="text"
                className="form-control"
            />
            <Field name={`events.${index}.endDate`} placeholder="2022-12-20" type="text" className="form-control" />
            <Field name={`events.${index}.endText`} placeholder="End Text here" type="text" className="form-control" />
        </div>
    </div>
);

export default SingleEventInput;
