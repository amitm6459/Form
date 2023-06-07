import React, { useEffect, useState } from 'react';
import "./Otp.css"
import { useFormik } from 'formik';
import { otpSchema } from '../schema/validitionSchama';
const initialValues = {

    emailOtp: "",
    mobileNoOtp: "",


}
function Otp(props) {
    const [otp, setotp] = useState("")
    useEffect(() => {
        setotp(() => {

            var num = Math.random() * 1000000
            var otp = Math.round(num)

            console.log(otp);
        })
    }, [otp])
    
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: otpSchema,
        onSubmit: (values, action) => {
            action.resetForm();
            console.log(values);
           alert('your form has been sucssesfully submited')
        }

    })
    
    return (
        <div id='otpbox'>
            <div id='innerbox'>
                <form onSubmit={handleSubmit}>
                    <div id='otpbox'>
                        <input
                            name='emailOtp' type='text' autoComplete='off' placeholder='Enter Your email...!!' id='email' className='input1'
                            value={values.emailOtp} onChange={handleChange} onBlur={handleBlur}
                        />
                        <a href='#' onClick={setotp}>ressend otp</a>
                        {errors.emailOtp && touched.emailOtp ? (<p className='errors' >{errors.emailOtp}</p>) : null}
                        <input
                            name='mobileNoOtp' type='text' autoComplete='off' placeholder='Enter Your number...!!' id='number' className='input1'
                            value={values.mobileNoOtp} onChange={handleChange} onBlur={handleBlur}
                        />
                        <a href='#' onClick={setotp}>ressend otp</a>
                        {errors.mobileNoOtp && touched.mobileNoOtp ? (<p className='errors'  >{errors.mobileNoOtp}</p>) : null}
                    </div>
                    <div id='otpbut'>
                        <button type='submit'>OTP</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Otp;