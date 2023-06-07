import React, { useEffect, useState } from 'react';
import "./FormValidation.css"
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { singUpSchema } from '../schema/validitionSchama';
const initialValues = {
    name: "",
    email: "",
    mobileNo: "",
    PanNo: "",
    city: ""

}

function FormValidation(props) {
    const navigate = useNavigate()
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: singUpSchema,
        onSubmit: (values,action) => { 
                  action.resetForm();
            console.log(values);
            navigate("/otp")
        }
    })


    return (
        <div id='mainbox'>

            <div id='box'>
                <form onSubmit={handleSubmit}>
                    <div id='fild1'>
                        <input
                            name='name' type='text' autoComplete='off' placeholder='Enter Your Name...!!' id='name' className='userinput'
                            value={values.name} onChange={handleChange} onBlur={handleBlur}
                        />
                        {errors.name && touched.name ? (<p className='errors' style={{color:"red"}} >{errors.name}</p>) : null}
                        <input
                            name='email' type='email' autoComplete='off' placeholder='Enter Your Email...!!' id='email' className='userinput'
                            value={values.email} onChange={handleChange} onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? (<p className='errors' style={{color:"red"}} >{errors.email}</p>) : null}
                        <input
                            name='mobileNo' type='text' autoComplete='off' placeholder='Enter Your Number..!!' id='number' className='userinput'
                            value={values.mobileNo} onChange={handleChange} onBlur={handleBlur}
                        />
                        {errors.mobileNo && touched.mobileNo ? (<p className='errors' style={{color:"red"}} >{errors.mobileNo}</p>) : null}
                        <input
                            name='PanNo' type='text' autoComplete='off' placeholder='Enter Your Pan NO...!!' id='panNO' className='userinput'
                            value={values.PanNo} onChange={handleChange} onBlur={handleBlur}
                        />
                        {errors.PanNo && touched.PanNo ? (<p className='errors' style={{color:"red"}} >{errors.PanNo}</p>) : null}
                        <input
                            name='city' type='text' autoComplete='off' placeholder='Enter Your City..!! ' className='userinput'
                            value={values.city} onChange={handleChange} onBlur={handleBlur}
                        />
                        {errors.city && touched.city ? (<p className='errors' style={{color:"red"}} >{errors.city}</p>) : null}

                    </div>
                    <div id='but1'>
                        <button type='submit' id='submit' >send otp</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default FormValidation;