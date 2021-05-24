import React, { Component } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import DataService from './../api/DataService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class User extends Component {
    initialValues = {
        id: this.props.match.params.id,
        name: '',
        email: '',
        phone: '',
    }

    validationSchema = Yup.object({
        id: Yup.string().required('Required!'),
        name: Yup.string().required('Required!'),
        email: Yup.string().email('Invalid email format!').required('Required!'),
        phone: Yup.string().required('Required!'),
    })

    onSubmit = (values) => {

        if (this.props.match.params.id === '-1') {
            DataService.createUser({
                id: this.props.match.params.id,
                name: values.name,
                email: values.email,
                phone: values.phone,
            }).then(response => {
                this.props.history.push("/users")
            })
        } else {
            DataService.updateUser(this.props.match.params.id, {
                id: this.props.match.params.id,
                name: values.name,
                email: values.email,
                phone: values.phone,
            }).then(response => {
                this.props.history.push("/users")
            })
        }

    }
    render() {
        return (
            <div className="container">
                <Formik
                    initialValues={this.initialValues}
                    validationSchema={this.validationSchema}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                >
                    <Form>

                        <div className="mb-2" >
                            <label htmlFor="name">Student Name</label>
                            <Field className="form-control" type="text" id="name" name="name" />
                            <ErrorMessage name="name" >{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email">E-mail</label>
                            <Field className="form-control" type="email" id="email" name="email" />
                            <ErrorMessage name="email" >{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="phone">Phone Number</label>
                            <Field className="form-control" type="text" id="phone" name="phone" />
                            <ErrorMessage name="phone" >{(msg) => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>
                        </div>

                        <div className="text-center mt-3">
                            <button className="btn btn-info mx-auto" type="submit" >Submit</button>
                        </div>
                    </Form>

                </Formik>
            </div>
        );
    }
}

export default User;