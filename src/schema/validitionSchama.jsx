import * as Yup from "yup"

export const  singUpSchema = Yup.object({
    name: Yup.string().min(2).max(50).required("Please eneter your name"),
    email:Yup.string().email().required("Please eneter your email"),
    mobileNo:Yup.number().min(10).required("Please eneter your mobile no !!!"),
    PanNo:Yup.string().matches("[A-Z]{5}[0-9]{4}[A-Z]{1}").required("Please eneter your panNo rightly !!!"),
    city:Yup.string().min(2).max(20).required("Please eneter your city name properly !!!")
})

export const otpSchema = Yup.object({
    emailOtp:Yup.string().min(6).required("please enter your otp!!!!"),
    mobileNoOtp:Yup.string().min(6).required("please enter your otp!!!!")
})