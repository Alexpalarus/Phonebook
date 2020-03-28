import React, { useState, useContext, useEffect } from 'react';
import { ContactContext } from '../../context/contactContext';
import { useHistory } from 'react-router-dom';
import InputMask from "react-input-mask";
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function ModifyContact({match}) {

    const { dispatch } = useContext(ContactContext);
    const { register, handleSubmit, errors, reset } = useForm();
    const history = useHistory();
    const [id, setId] = useState('');

    useEffect(() => {
        axios.get('/api/phonebooks/'+match.params.id)
            .then(response => {
                const {id, firstName, lastName, number} = response.data;
                    setId(id);
                    reset(
                        {
                            'firstName': firstName,
                            'lastName': lastName,
                            'number': number,
                        }
                    )
            })
            .catch(e => {
                console.log(e.message);
                history.push("/");
            })
        ;
    }, [reset])

    const onSubmit = data => {
        axios.put('/api/phonebooks/'+id, data)
            .then(response => {
                    reset();
                    dispatch({type: 'MODIFY_CONTACT', payload: data});
                    history.push('/');
            })
            .catch(e => {
                console.log(e)
            })
        ;
    }

    return (
        <div className="card border-info mb-3">
            <div className="card-header font-weight-bold text-muted text-center">EDIT CONTACT</div>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group font-weight-bold text-muted">
                        <label htmlFor="firstName">Firstname</label>
                        <input 
                            type="texte"
                            className={`form-control form-control-lg border-info ${errors.firstName ? 'is-invalid' : null}`}
                            placeholder="Enter the first name..."
                            name="firstName"
                            ref={register({ required: "Firstname is required" })}
                        />
                        {errors.firstName ?
                            <div className="invalid-feedback">
                                {errors.firstName.message}
                            </div>
                        : null }
                    </div>
                    <div className="form-group font-weight-bold text-muted">
                        <label htmlFor="lastName">Lastname</label>
                        <input 
                            type="texte"
                            className={`form-control form-control-lg border-info ${errors.lastName ? 'is-invalid' : null}`}
                            placeholder="Enter the last name..."
                            name="lastName"
                            ref={register({ required: "Lastname is required" })}
                        />
                        {errors.lastName ?
                            <div className="invalid-feedback">
                                {errors.lastName.message}
                            </div>
                        : null }
                    </div>
                    <div className="form-group font-weight-bold text-muted">
                        <label htmlFor="number">Phone Number</label>
                        <InputMask
                            type="texte"
                            className={`form-control form-control-lg border-info ${errors.number ? 'is-invalid' : null}`}
                            placeholder="Enter a phone number..."
                            mask="+99 99 9999999"
                            alwaysShowMask={true}
                            name="number"
                            ref={register({
                                required: "Number is required",
                                maxLength: {
                                    value: 15,
                                    message: "Number max 25"
                                },
                                pattern: {
                                    value: /\+[0-9]+ [0-9]+ [0-9]{6,}/g,
                                    message: "The form of the phone number is incorrect"
                                }
                            })}
                        />
                        {errors.number ?
                            <div className="invalid-feedback">
                                {errors.number.message}
                            </div>
                        : null }
                    </div>
                    <input 
                        type="submit"
                        value="Submit"
                        className="btn btn-block btn-success"
                    />
                </form>
            </div>
        </div>
    );
}
