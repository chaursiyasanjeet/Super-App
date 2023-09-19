import { useState } from "react";


export default function SignupFrom() {

    //Setting Form data
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [isChecked, setIsChecked] = useState(false);


    const [error, setError] = useState({ name: false, userName: false, email: false, mobile: false, checkbox: false })


    const validateForm = (name, userName, email, mobile, isChecked) => {
        if ((name.length === 0) || !/^[a-zA-Z\s]+$/.test(name)) {
            setError(error.name = true)
        }
        else {
            setError(error.name = false)
        }
        if ((userName.length === 0) || !/^[a-zA-Z0-9]+$/.test(userName)) {
            setError(error.userName = true)
        }
        else {
            setError(error.userName = false)
        }
        if ((email.length === 0) || !/^\S+@\S+\.\S+$/.test(email)) {
            setError(error.email = true)
        }
        else {
            setError(error.email = false)
        }
        if ((mobile.length === 0) || !/^[1-9]\d{9}$/.test(mobile)) {
            setError(error.mobile = true)
        }
        else {
            setError(error.mobile = false)
        }
        if (!isChecked) {
            setError({ ...error, checkbox: true })
        }
        else {
            setError({ ...error, checkbox: false })
        }


        if (Object.values(error).every((v) => v === false)) {
            const userData = { name, userName, email, mobile, isChecked }
            localStorage.setItem("userData", JSON.stringify(userData))
            window.location.href = "http://stackoverflow.com"
        }


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm(name, userName, email, mobile, isChecked)

    }
    return (
        <form className="signup-form" onSubmit={handleSubmit} >
            <h1 className="form-title">Super app</h1>
            <h6 className="new-account">Create your new account</h6>
            <div className="input-box">
                <input type="text" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)} />
                {error.name && <span className="error-text">Field is required</span>}
                <input type="text" placeholder="UserName" name="userName" onChange={(e) => setUserName(e.target.value)} />
                {error.userName && <span className="error-text">Field is required</span>}
                <input type="text" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
                {error.email && <span className="error-text">Field is required</span>}
                <input type="text" maxlength="10" placeholder="Mobile" name="mobile" onChange={(e) => setMobile(e.target.value)} />
                {error.mobile && <span className="error-text">Field is required</span>}
            </div>
            <div className="checkbox-container"><input type="checkbox" className="checkbox-button" onChange={(e) => setIsChecked(e.target.checked)} name="checked" /><span className="checkbox-text">Share my registration data with Superapp</span></div>
            {error.checkbox && <span className="error-text checkbox-error">Check this box if you want to proceed</span>}
            <button className="signup-button" >SIGN UP</button>
            <p className="term-text">By clicking on Sign up. you agree to Superapp <span className="higlight-text">Terms and <br />Conditions of Use</span></p>
            <p className="term-text">To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className="higlight-text">Privacy <br />Policy</span></p>
        </form >
    )
}