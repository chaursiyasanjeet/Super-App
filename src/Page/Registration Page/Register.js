import "./Register.css"
import SignupForm from "../../Components/form"

export default function Registrationpage() {
    return (
        <div className="container">
            <div className="image-container">
                <h1 className="slag">Discover new things on Superapp</h1>
            </div>
            <div className="form-container">
                <SignupForm />
            </div>
        </div>
    )
}