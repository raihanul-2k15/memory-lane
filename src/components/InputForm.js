import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import SingleEventInput from './SingleEventInput';

const InputForm = (props) => (
    <div className={props.className}>
        <Formik initialValues={{ events: props.initialEvents }} onSubmit={props.onSubmit}>
            {({ values }) => (
                <Form className="h-100 d-flex flex-column">
                    <div className="flex-flex-grow-1 w-100 px-2" style={{ overflowY: 'scroll' }}>
                        <FieldArray name="events">
                            {({ insert, remove, push }) => (
                                <div>
                                    {values.events.length > 0 &&
                                        values.events.map((ev, index) => (
                                            <SingleEventInput index={index} remove={remove} />
                                        ))}
                                    <button
                                        type="button"
                                        className="btn btn-secondary w-100 mb-2"
                                        onClick={() =>
                                            push({ date: '', title: '', description: '', endDate: '', endText: '' })
                                        }
                                    >
                                        Add Event
                                    </button>
                                </div>
                            )}
                        </FieldArray>
                    </div>
                    <div className="mt-1">
                        <button className="btn btn-primary w-100" type="submit">
                            Draw Timeline
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);

export default InputForm;
