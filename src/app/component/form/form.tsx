import React, { ReactNode } from 'react';
import './styles.scss'
import {Field, reduxForm} from 'redux-form';
import { IUserInfo, IValue, IValueType } from '../../page/home/types';

const validate = (values:IValue): IValue => {
    const errors = {} as any;
    if (!values.firstName) {
        errors.firstName = 'First name must be required!!!'
    } else if (!values.lastName) {
        errors.lastName = 'Last name must be required!!!'
    } else if (!values.address) {
        errors.address = 'Address must be required!!!'
    } else if (!values.phone) {
        errors.phone = 'Phone must be required!!!'
    }
    return errors
};

const renderField = (values: IValueType): ReactNode => {
    const {
        input,
        label,
        type,
        meta: {touched, error, warning}
    } = values;
    return (<div className='form__item'>
            <div className='form__item_container'>
                <input {...input} placeholder={label} type={type} className='form__item_input'/>
                {touched &&
                ((error && <span className='form__item_error'>{error}</span>) ||
                    (warning && <span className='form__item_error'>{warning}</span>))}
            </div>
        </div>
    )
};

const UserInfoForm = ({handleSubmit, submitting, valid }: IUserInfo) => {
    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <Field
                name="firstName"
                component={renderField}
                type="text"
                label='First Name'
            />
            <Field
                name="lastName"
                component={renderField}
                type="text"
                label='Last Name'

                placeholder="Last Name"
            />
            <Field
                name="address"
                component={renderField}
                type="address"
                label='Address'

                placeholder="Address"
            />
            <Field
                name="phone"
                component={renderField}
                type="phone"
                label='Phone'

                placeholder="Phone"
            />
            <div>
                <button type="submit" disabled={!valid} className='form_button' >
                    Submit
                </button>
            </div>
        </form>
    )
};


export default reduxForm<any,any>({
    form: 'infoUserForm',
    validate,
}as any)(UserInfoForm)
